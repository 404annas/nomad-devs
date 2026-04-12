You are a senior backend engineer building a production-ready Express.js REST API for **Designz** — a garden/landscape design portfolio and admin dashboard. Your task is to architect and implement the complete backend from scratch, including all folders, files, models, routes, controllers, middleware, utilities, configuration, and a working seed script.

---

## Project Context

- **Frontend (Public Website)**: Static-exported Next.js app (`designz/`) hosted on **Hostinger**, communicating with this backend via `NEXT_PUBLIC_API_BASE_URL`
- **Admin Dashboard**: Pages within the same Next.js app (`designz/`) hosted on **Hostinger**, calling protected admin endpoints on this backend
- **Backend API**: Express.js app deployed on **Vercel** (serverless-compatible with `vercel.json` or Vercel serverless function config)
- **Images/Videos**: Uploaded directly from the browser to Cloudinary using an unsigned upload preset — the backend only stores Cloudinary URLs, never binary files
- **Auth**: Cookie-based sessions using httpOnly cookies + bcrypt password hashing
- **CORS**: Configured for Hostinger frontend domain + localhost for development
- **Multiple Media Support**: Each project supports **multiple images** (gallery) and **multiple videos**, each with order tracking, Cloudinary publicId for deletion, and reorder capability

---

## Deployment Architecture

```
┌─────────────────────┐
│   Hostinger         │
│  (Static Next.js)   │
│  - Public Website   │
│  - Admin Dashboard  │
└─────────┬───────────┘
          │  fetch() with credentials
          ▼
┌─────────────────────┐
│   Vercel            │
│  (Express.js API)   │
│  - /api/projects    │
│  - /api/admin       │
│  - /api/auth        │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│   MongoDB Atlas     │
│  (Cloud Database)   │
└─────────────────────┘

┌─────────────────────┐
│   Cloudinary        │
│  (Media Storage)    │
│  - Images           │
│  - Videos           │
└─────────────────────┘
```

### Vercel-Specific Notes
- Use `src/server.js` as the entry point, exported as a default Express handler for Vercel serverless functions
- Include `vercel.json` or `api/index.js` wrapper for Vercel compatibility
- Cookie security: `Secure` flag must be `true` in production, `false` in localhost dev
- CORS must allow the Hostinger production domain + `http://localhost:3000`

---

## Folder Structure to Generate

```
designz-backend/
├── src/
│   ├── config/
│   │   ├── db.js              # MongoDB connection singleton
│   │   └── cloudinary.js      # Cloudinary SDK config (for delete operations)
│   ├── models/
│   │   ├── Project.model.js
│   │   ├── User.model.js
│   │   └── Session.model.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── project.controller.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── public.routes.js
│   │   └── admin.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── errorHandler.js
│   ├── schemas/
│   │   ├── project.schema.js  # Zod schemas for validation
│   │   └── auth.schema.js
│   ├── utils/
│   │   ├── asyncHandler.js
│   │   └── apiResponse.js
│   └── server.js              # Express app (Vercel serverless export)
├── api/
│   └── index.js               # Vercel serverless function entry
├── vercel.json                # Vercel deployment config
├── seed.js
├── .env.example
├── package.json
└── README.md
```

---

## Tech Stack

Install and configure exactly these packages:

```json
"dependencies": {
  "express": "^4.x",
  "mongoose": "^8.x",
  "bcryptjs": "^2.x",
  "jsonwebtoken": "^9.x",
  "cookie-parser": "^1.x",
  "cors": "^2.x",
  "dotenv": "^16.x",
  "zod": "^3.x",
  "cloudinary": "^2.x",
  "express-rate-limit": "^7.x",
  "helmet": "^7.x",
  "morgan": "^1.x"
},
"devDependencies": {
  "nodemon": "^3.x"
}
```

---

## MongoDB Models

### `Project`
```js
{
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: String,           // short summary for cards
  content: [String],             // array of paragraph strings (rich body)
  mainPic: {
    url: String,
    publicId: String             // Cloudinary public_id for deletion
  },
  gallery: [
    {
      url: String,
      publicId: String,
      order: Number              // controls display order; swappable
    }
  ],
  videos: [
    {
      url: String,
      publicId: String,
      order: Number
    }
  ],
  tags: [String],
  isFeatured: { type: Boolean, default: false },
  status: { type: String, enum: ['published', 'draft'], default: 'published' },
  createdAt, updatedAt           // via timestamps: true
}
```

### `User`
```js
{
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, default: 'admin' }
}
```

### `Session`
```js
{
  userId: ObjectId (ref: 'User'),
  token: String,
  expiresAt: Date                // 30 days from creation
}
```

---

## API Endpoints

### Public (no auth)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/projects` | Paginated list — supports `?page=1&limit=12&tag=&status=published&featured=true` |
| `GET` | `/api/projects/featured` | Projects where `isFeatured=true` and `status=published`, limit 6 |
| `GET` | `/api/projects/:slug` | Single project by slug |

**Pagination response shape:**
```json
{
  "data": [ /* Project objects */ ],
  "pagination": { "page": 1, "limit": 12, "total": 20, "totalPages": 2 }
}
```

### Protected Admin (require valid session cookie)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/admin/projects` | All projects including drafts, paginated |
| `POST` | `/api/admin/projects` | Create project (Zod validated) |
| `PATCH` | `/api/admin/projects/:id` | Update project fields (partial) |
| `DELETE` | `/api/admin/projects/:id` | Delete project + delete all Cloudinary assets |
| `PATCH` | `/api/admin/projects/:id/toggle-featured` | Toggle `isFeatured` |
| `PATCH` | `/api/admin/projects/:id/status` | Toggle `published` / `draft` |
| `DELETE` | `/api/admin/projects/:id/media/:publicId` | Delete a single gallery image or video from Cloudinary and remove from DB array |
| `PATCH` | `/api/admin/projects/:id/media/reorder` | Swap gallery order — accepts `[{ publicId, order }]` array |

### Auth

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/login` | Validate credentials, create Session, set httpOnly cookie |
| `POST` | `/api/auth/logout` | Delete Session, clear cookie |
| `GET` | `/api/auth/me` | Return current user from session |

---

## Authentication Implementation

- On login: `bcrypt.compare` → create `Session` doc with `crypto.randomUUID()` token → set cookie named `emc_session` as `httpOnly`, `Secure`, `SameSite=Strict`, `maxAge: 30 days`
- `auth.middleware.js`: reads `emc_session` cookie → looks up Session in MongoDB → checks `expiresAt` → attaches `req.user` or returns 401
- On logout: delete Session doc from MongoDB, clear cookie with `maxAge=0`
- Zod validates all admin POST/PATCH request bodies before hitting controllers

---

## Cloudinary Integration

- The backend does **not** handle uploads — the frontend uploads directly using an unsigned preset
- The backend **only** deletes Cloudinary assets when a project or individual media item is deleted
- Configure `cloudinary.config()` in `src/config/cloudinary.js` using `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` from `.env`
- When deleting a project, loop through `mainPic.publicId`, all `gallery[].publicId`, and all `videos[].publicId` and call `cloudinary.uploader.destroy(publicId)` before deleting the MongoDB document
- For video deletion use `cloudinary.uploader.destroy(publicId, { resource_type: 'video' })`

---

## Gallery Reorder Logic

`PATCH /api/admin/projects/:id/media/reorder` accepts:
```json
{ "gallery": [{ "publicId": "abc", "order": 0 }, { "publicId": "xyz", "order": 1 }] }
```
Update each gallery item's `order` field in the DB. When returning gallery to the frontend, always sort by `order` ascending.

---

## `.env.example`

```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_jwt_secret_here

# Cookie
COOKIE_SECRET=your_cookie_secret_here

# Cloudinary (server-side — for delete operations only)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# CORS
FRONTEND_URL=http://localhost:3000
```

---

## `server.js` Setup

- `helmet()` for security headers
- `cors({ origin: process.env.FRONTEND_URL, credentials: true })`
- `cookie-parser`
- `express.json()`
- `morgan('dev')` in development
- Global `errorHandler` middleware at the bottom
- Rate limiting on `/api/auth/login` (max 10 requests per 15 minutes)
- Mount routes: `/api/auth`, `/api/projects`, `/api/admin`

---

## Seed Script (`seed.js`)

This is critical. Implement a `seed.js` file in the project root that:

1. Connects to MongoDB
2. Drops the existing `projects` collection
3. Creates a default admin user (`admin@idesignz.com` / `Admin1234!`) with bcrypt hash
4. Seeds **all projects below in exact order**, preserving `content` paragraphs, `slug`, `title`, and `images` array order — using placeholder Cloudinary-style URLs for `mainPic` and `gallery` (e.g., `https://res.cloudinary.com/demo/image/upload/sample.jpg`)
5. Logs success and exits

Seed these projects exactly as structured (preserve all content paragraphs verbatim):

```js
const projects = [
  {
    slug: "garden-design-kingston",
    title: "Garden Design Kingston",
    isFeatured: true,
    status: "published",
    content: [
      "In this beautifully designed garden, we've created a seamless blend of functionality and style that turns the outdoor space into a relaxing retreat while offering ample space for family activities. The focal point is the 6×2 meter patio, elegantly covered in patterned tiles. These tiles, featuring geometric shapes or intricate patterns, bring a stylish, modern touch to the garden. The same patterned tile design flows throughout the entire outdoor space, creating a visual pathway that guides you through the garden and provides a cohesive, polished look.",
      "Adjacent to the patio, lush green turf is laid out, providing an inviting area for lounging or entertaining guests. Flanking the turf are designated planting areas, filled with a mix of vibrant shrubs, ornamental grasses, and flowering plants that add colour and texture, giving the garden a natural, serene atmosphere. The plants are carefully selected to complement the space, ensuring year-round interest and greenery.",
      "The kids' play area is designed with artificial grass, ensuring safety and comfort while being easy to maintain. This section blends effortlessly with the rest of the garden, providing a soft, playful surface for children to enjoy.",
      "Throughout the garden, we've installed LED solar lights that line the perimeter, enhancing the space with subtle illumination in the evening. These lights are thoughtfully placed along walkways, around the patio, and nestled within the planting areas, offering a magical, ambient glow that makes the garden feel warm and welcoming after dark.",
      "For outdoor relaxation, a cosy metallic outdoor sofa is positioned on the patio. This sleek, weather-resistant sofa is adorned with plush cushions in soft, neutral tones, making it the perfect spot for lounging in style. Above the seating area, a large canopy provides shade and protection from the elements, creating a comfortable outdoor living space even on hot or rainy days. To enhance the relaxation area, a comfortable reclining chair is placed nearby, offering the perfect spot for reading, sunbathing, or simply unwinding.",
      "The combination of patterned tiles, lush planting, comfortable seating, and soft lighting transforms the garden into a versatile space. It balances a sophisticated modern aesthetic with practical features for family enjoyment, making it a tranquil yet functional outdoor oasis for both adults and children."
    ],
    mainPic: { url: "https://res.cloudinary.com/demo/image/upload/sample.jpg", publicId: "seed/garden-design-kingston/main" },
    gallery: [
      { url: "https://res.cloudinary.com/demo/image/upload/sample1.jpg", publicId: "seed/garden-design-kingston/gallery_0", order: 0 },
      { url: "https://res.cloudinary.com/demo/image/upload/sample2.jpg", publicId: "seed/garden-design-kingston/gallery_1", order: 1 },
      { url: "https://res.cloudinary.com/demo/image/upload/sample3.jpg", publicId: "seed/garden-design-kingston/gallery_2", order: 2 }
    ],
    videos: [],
    tags: ["garden", "patio", "residential"]
  }
  // Add remaining projects from the live site following the same structure
];
```

Instruct within the seed file comments: "Add all remaining projects from `src/data/projects.ts` here following the same object shape before running."

---

## Code Quality Requirements

- All async route handlers wrapped in `asyncHandler` utility to avoid try/catch repetition
- Consistent API responses via `apiResponse.js` helper: `{ success: true, data: ... }` and `{ success: false, message: ... }`
- Zod schemas defined in a `schemas/` folder for `projectSchema` (create/update) and `loginSchema`
- No hardcoded secrets — everything from `.env`
- `package.json` scripts: `"start": "node src/server.js"`, `"dev": "nodemon src/server.js"`, `"seed": "node seed.js"`
- Include inline comments explaining non-obvious logic (session token generation, Cloudinary delete cascade, reorder patch logic)

Generate every file completely — no placeholders, no `// TODO`, no truncated implementations. Every route must be wired, every controller must be implemented end-to-end.