import type { Metadata } from "next";
import Home from '@/app/Home/Home'
import { getPageKeywords } from '@/lib/seoKeywords';

export const metadata: Metadata = {
  title: "Design and Build Company | Dwell Rich Designz",
  description:
    "Residential design and build company serving South London, Central London, North Surrey, and Surrey.",
  keywords: getPageKeywords("home"),
};

const page = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default page
