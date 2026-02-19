"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";
import portfolioImg1 from "@/assets/heroMain3.png";
import portfolioImg2 from "@/assets/heroMain4.png";
import Link from "next/link";

// --- Curated Colors (Same as Progress component) ---
const HOVER_COLORS = [
  "#5F8D8B", "#7C8C74", "#8C6F5F", "#5A6B7C", "#8C7A5F",
  "#4A5D4E", "#9A7B8B", "#7D8491", "#B48A78"
];

// Reusable Hover Wrapper (Same to Same logic)
const PortfolioHoverCard = ({ imgSrc, title, location, link }: { imgSrc: string, title: string, location: string, link: string }) => {
  const [hoverColor, setHoverColor] = useState<string>("#5F8D8B");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const random = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
    setHoverColor(random);
  }, []);

  return (
    <div
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

      {/* 3. Hover Content (Logo & Text) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
        <AnimatePresence>
          {isHovered && (
            <Link href={link}>
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
                  <h3 className="text-xl text-black tracking-tight uppercase mb-1 font-serif">
                    {title}
                  </h3>
                  <p className="text-[10px] text-black/80 tracking-[0.3em] uppercase">
                    {location}
                  </p>
                </motion.div>
              </div>
            </Link>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="bg-white">
      {/* TOP LINE + TITLE */}
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="border-b border-[#c9b88a] pt-12 pb-3">
          <span className="text-lg tracking-tight text-black uppercase">
            PORTFOLIO
          </span>
        </div>
      </div>

      {/* IMAGES GRID */}
      <div className="max-w-[1600px] mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* LEFT IMAGE WITH HOVER */}
          <PortfolioHoverCard
            imgSrc={portfolioImg1.src}
            title="Kingston Upon Thames"
            location="Design And Build"
            link="/projects/kingston-upon-thames"
          />

          {/* RIGHT IMAGE WITH HOVER */}
          <PortfolioHoverCard
            imgSrc={portfolioImg2.src}
            title="reception central london chelsea"
            location="Design & Build"
            link="/projects/reception-central-london-chelsea"
          />

        </div>
      </div>
    </section>
  );
};

export default Portfolio;