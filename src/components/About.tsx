import React from "react";

import aboutImg from "@/assets/aboutMain.webp"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* TOP INTRO / HERO - Clean and Compact */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-[38px] md:text-[42px] leading-[1.1] font-serif text-black">
            Design-Led Homes for Extraordinary Living
          </h1>

          <p className="mt-5 text-[15px] leading-6 text-gray-700 max-w-xl mx-auto">
            Dwell Rich – Established 2005
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Layout matching your image */}
      <section className="bg-white pb-10">
        <div className="max-w-[1500px] mx-auto px-8 md:px-10">
          {/* Grid with a clear gap (gap-10) between card and image */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-stretch">

            {/* LEFT TEXT CARD - Specific beige background */}
            <div className="bg-[#f3f2ee] p-8 md:p-10 flex flex-col justify-center">
              <h1 className="font-bold text-3xl pb-4 leading-none">Saleha Khan</h1>
              <p className="text-[17px] leading-5 text-black pb-4">
                I’m <strong>Saleha Ali Khan</strong>, and I founded Dwell Rich <strong>Designz</strong> with one clear vision: to create spaces that are not only beautifully designed but also flawlessly built. My background in interiors has given me a strong eye for detail, and today, with a full team by my side, we deliver projects that balance design, functionality, and long-lasting quality.
              </p>
              <p className="text-[17px] leading-5 text-black">At Dwell Rich Designz, we are a comprehensive design and build company with a strong foothold in luxury interiors. We specialize in turnkey solutions, managing every aspect of a project — from architectural design and structural engineering to construction, interiors, and bespoke joinery. With a team of architects, surveyors, structural engineers, and contractors, we ensure seamless execution with precision and care. </p>

              <div className="mt-6">
                <Link href="/about" className="text-[12px] tracking-[0.2em] border-b border-black pb-1.5 uppercase font-semibold flex items-center gap-2 w-fit">
                  More ABOUT US <ArrowRight size={18}/>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE - Larger width as per image */}
            <div className="w-full h-[500px] md:h-[650px]">
              <img
                loading="lazy"
                src={aboutImg.src} // Replace with your actual image path
                alt="Modern Outdoor Area"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;