import type { Metadata } from "next";
import Featured from '@/components/About/Featured'
import Founder from '@/components/About/Founder'
import Hero from '@/components/About/Hero'
import Importance from '@/components/About/Importance'
import Industry from '@/components/About/Industry'
import Simply from '@/components/About/Simply'
import Team from '@/components/About/Team'
import { getPageKeywords } from '@/lib/seoKeywords';

export const metadata: Metadata = {
  title: "About Our Design and Build Company | Dwell Rich Designz",
  description:
    "Meet the team behind Dwell Rich Designz, delivering residential design and build services across South London, Central London, North Surrey, and Surrey.",
  keywords: getPageKeywords("about"),
};

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Importance /> */}
      {/* <Simply /> */}
      <Founder />
      <Team />
      {/* <Industry /> */}
      {/* <Featured /> */}
    </div>
  )
}

export default page
