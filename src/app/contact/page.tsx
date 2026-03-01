import type { Metadata } from "next";
import Form from '@/components/Contact/Form'
import Hero from '@/components/Contact/Hero'
import React from 'react'
import { getPageKeywords } from '@/lib/seoKeywords';

export const metadata: Metadata = {
  title: "Contact Design and Build Company | Dwell Rich Designz",
  description:
    "Get a quote for design and build, construction, interior design, and planning services in South London, Central London, North Surrey, and Surrey.",
  keywords: getPageKeywords("contact"),
};

const page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Form />
    </div>
  )
}

export default page
