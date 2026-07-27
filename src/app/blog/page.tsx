import type { Metadata } from "next";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog | Dwell Rich Designz",
  description:
    "Read the latest insights, guides, and updates from Dwell Rich Designz on residential design, construction, and interior trends across London and Surrey.",
  keywords: [
    "interior design blog",
    "home renovation tips",
    "design and build guides",
    "London interior design",
    "home extension advice",
    "loft conversion guide",
    "kitchen renovation tips",
    "residential construction blog",
  ],
};

export default function BlogsPage() {
  return <BlogList />;
}
