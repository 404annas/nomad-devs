"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";
import portfolioImg1 from "@/assets/heroMain3.png";
import portfolioImg2 from "@/assets/homeProject34.jpg";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Imported ArrowRight

// --- Curated Colors (Same as Progress component) ---
const HOVER_COLORS = [
  "#5F8D8B", "#7C8C74", "#8C6F5F", "#5A6B7C", "#8C7A5F",
  "#4A5D4E", "#9A7B8B", "#7D8491", "#B48A78"
];

// Reusable Hover Wrapper
const PortfolioHoverCard = ({ imgSrc, title, location, link, index }: { imgSrc: string, title: string, location: string, link: string, index: number }) => {
  const [hoverColor, setHoverColor] = useState<string>("#5F8D8B");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const random = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
    setHoverColor(random);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      className="relative w-full h-[400px] cursor-pointer overflow-hidden group bg-[#f7f7f7]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Main Background Image */}
      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* 2. Color Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ backgroundColor: hoverColor }}
        className="absolute inset-0 z-10"
      />

      {/* 3. Hover Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Centered Content Link */}
              <Link href={link} className="z-10">
                <div className="flex flex-col items-center">
                  {/* Logo Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="relative w-24 h-24 mb-4"
                  >
                    <Image src={logo} alt="Logo" fill className="object-contain" />
                  </motion.div>

                  {/* Text Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <h3 className="text-lg sm:text-xl text-black tracking-tight uppercase mb-1 font-serif">
                      {title}
                    </h3>
                    <p className="text-[10px] text-black/80 tracking-[0.3em] uppercase">
                      {location}
                    </p>
                  </motion.div>
                </div>
              </Link>

              {/* Bottom Right 'Click To All Projects' Link */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute bottom-6 right-6 z-30"
              >
                <Link href="/projects" className="flex items-center gap-2 group/btn">
                  <span className="text-xs sm:text-sm font-medium uppercase text-black">
                    Click To All Projects
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-black transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section className="bg-white">
      {/* TOP LINE + TITLE */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-b border-black pt-10 pb-3"
        >
          <span className="text-lg tracking-tight text-black font-semibold uppercase">
            PORTFOLIO
          </span>
        </motion.div>
      </div>

      {/* IMAGES GRID */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* LEFT IMAGE WITH HOVER */}
          <PortfolioHoverCard
            imgSrc={portfolioImg1.src}
            title="All Projects"
            location="Design And Build"
            link="/projects"
            index={0}
          />

          {/* RIGHT IMAGE WITH HOVER */}
          <PortfolioHoverCard
            imgSrc={portfolioImg2.src}
            title="All Projects"
            location="Design & Build"
            link="/projects"
            index={1}
          />

        </div>
      </div>
    </section>
  );
};

export default Portfolio;