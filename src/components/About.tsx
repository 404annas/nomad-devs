"use client";

import aboutImg from "@/assets/heroMain6.png"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* TOP INTRO / HERO - Clean and Compact */}
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-2xl md:text-[42px] leading-[1.1] font-serif text-black"
          >
            Crafting Iconic Luxury Spaces for Visionary Investors | Developers | Private Clients
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-5 text-sm sm:text-[15px] leading-5 text-gray-700 max-w-xl mx-auto"
          >
            Bespoke architecture and interiors for luxury residences and premium commercial spaces — tailored for international investors, developers, and discerning private clients.
          </motion.p>
        </div>
      </section>

      {/* ABOUT SECTION - Layout matching your image */}
      <section className="bg-white pb-10">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-10">
          {/* Grid with a clear gap (gap-10) between card and image */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-stretch">

            {/* LEFT TEXT CARD - Specific beige background */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gray-100 p-6 sm:p-8 md:p-10 flex flex-col justify-center"
            >
              <p className="text-base sm:text-[17px] leading-5 text-black pb-4">
                Dwell Rich Designz  based in South London provides integrated architecture, interior design, and construction services for luxury and commercial developments. We partner with investors, developers, and private clients to translate vision into carefully executed, market-ready projects.
              </p>
              <p className="text-base sm:text-[17px] leading-5 text-black">Our portfolio spans bespoke residences and large-scale developments, each delivered with disciplined planning, refined detailing, and consistent quality.</p>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6"
              >
                <Link href="/about" className="text-[12px] tracking-[0.2em] border-b border-black pb-1.5 uppercase font-semibold flex items-center gap-2 w-fit group">
                  More ABOUT US <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE - Larger width as per image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-[500px] md:h-[650px]"
            >
              <img
                loading="lazy"
                src={aboutImg.src}
                alt="Modern Outdoor Area"
                className="w-full h-full object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;