"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import home3 from "@/assets/home3.jpg";
import home4 from "@/assets/home4.jpg";
import home5 from "@/assets/home5.jpg";
import home6 from "@/assets/home6.jpg";
import home7 from "@/assets/home7.jpg";
import home8 from "@/assets/home8.jpg";

const galleryImages = [home3, home4, home5, home6, home7, home8];

type GalleryCardProps = {
  image: StaticImageData;
  index: number;
};

const GalleryCard = ({ image, index }: GalleryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 240, damping: 22, mass: 0.5 });
  const smoothY = useSpring(y, { stiffness: 240, damping: 22, mass: 0.5 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left);
    y.set(event.clientY - bounds.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group relative overflow-hidden"
    >
      <Link
        href="/projects"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative block aspect-[5/5] overflow-hidden"
      >
        <Image
          src={image}
          alt="Dwell Rich Designz project preview"
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{
            left: smoothX,
            top: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="pointer-events-none absolute z-20 hidden h-28 w-28 flex-col items-center justify-center rounded-full bg-white p-3 text-center shadow-[0_18px_45px_rgba(0,0,0,0.18)] md:flex"
        >
          <span className="text-xs font-medium uppercase leading-tight text-black">
            View Projects
          </span>
          <ArrowUpRight className="h-4 w-4 text-black" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 14,
          }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="absolute bottom-4 left-1/2 flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-white p-3 text-center shadow-lg md:hidden"
        >
          <span className="text-xs font-medium uppercase leading-tight text-black">
            View Projects
          </span>
          <ArrowUpRight className="h-4 w-4 text-black" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

const SixPIcs = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-10">
        <div className="mb-8 border-b border-black pb-3">
          <span className="text-lg font-semibold uppercase tracking-tight text-black">
            Featured Spaces
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <GalleryCard key={image.src} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixPIcs;
