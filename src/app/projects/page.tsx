import type { Metadata } from "next";
import Hero from '@/components/Projects/Hero'
import Latest from '@/components/Projects/Latest/Latest'
import Portfolio from '@/components/Projects/Portfolio/Portfolio'
import Progress from '@/components/Projects/Progress/Progress'
import ContactForm from '@/components/Private/ContactForm' // Naya component import kiya
import { getPageKeywords } from '@/lib/seoKeywords';

export const metadata: Metadata = {
  title: "Residential Design and Build Projects | Dwell Rich Designz",
  description:
    "Explore completed design and build, refurbishment, and interior projects across South London, Central London, North Surrey, and Surrey.",
  keywords: getPageKeywords("projects"),
};

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Progress />
      {/* <Latest /> */}
      {/* <Portfolio /> */}
      {/* <ContactForm /> Yahan add kar diya */}
    </div>
  )
}

export default page
