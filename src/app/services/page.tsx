import type { Metadata } from "next";
import Approach from '@/components/Services/Approach'
import Hero from '@/components/Services/Hero'
import Service from '@/components/Services/Service'
import { getPageKeywords } from '@/lib/seoKeywords';

export const metadata: Metadata = {
  title: "Design, Construction, Interior & Planning Services | Dwell Rich Designz",
  description:
    "Design and build, construction, interior design, and planning services across South London, Central London, North Surrey, and Surrey.",
  keywords: getPageKeywords("services"),
};

const page = () => {
  return (
    <div>
        {/* <Hero /> */}
        <Service />
        <Approach />
    </div>
  )
}

export default page
