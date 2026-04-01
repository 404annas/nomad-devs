import { Metadata } from "next";
import ProcessClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Design & Build Process | Architectural & Luxury Interior Design Services",
  description: "Leading design and build company offering comprehensive architectural design, interior design, and construction services. Expert turnkey solutions for residential projects in the UK.",
  keywords: [
    "design and build company", "architectural design services", "interior design services", 
    "luxury interior design UK", "residential design and build", "turnkey interior solutions", 
    "bespoke interior design", "FF&E design services", "custom furniture design", 
    "construction services UK", "planning applications UK", "building regulations compliance", 
    "interior procurement services", "furniture fixtures and equipment design", 
    "high-end residential interiors", "design and build contractors", 
    "home renovation design services", "interior installation services", 
    "project management construction"
  ],
  // Social Media pe share karne ke liye (Optional but recommended)
  openGraph: {
    title: "Design & Build Process | Creating Timeless Interiors",
    description: "Full-service team delivering seamless turnkey architectural and interior solutions.",
    type: "website",
  },
};

export default function Page() {
  return <ProcessClient />;
}