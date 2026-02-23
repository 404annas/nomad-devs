declare module '*.mp4' {
    const src: string;
    export default src;
}

// src/declarations.d.ts
declare module "*.jfif" {
    const content: any;
    export default content;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.webp";