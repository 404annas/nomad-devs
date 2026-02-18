"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3 } from "lucide-react"; // Using a grid icon to mimic the logo in your image

import logo from "@/assets/logo.webp"

import homeProject1 from "@/assets/homeProject1.webp"
import homeProject2 from "@/assets/homeProject2.webp"
import homeProject3 from "@/assets/homeProject3.webp"
import homeProject4 from "@/assets/homeProject4.webp"
import homeProject5 from "@/assets/homeProject5.webp"
import homeProject6 from "@/assets/homeProject6.webp"
import homeProject7 from "@/assets/homeProject7.webp"
import homeProject8 from "@/assets/homeProject8.webp"
import homeProject9 from "@/assets/homeProject9.webp"
import homeProject10 from "@/assets/homeProject10.webp"
import homeProject11 from "@/assets/homeProject11.webp"

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Garden Design – Kingston",
    location: "Residential",
    image: homeProject1.src, // Sketch style house
  },
  {
    id: 2,
    title: "Bathroom Design",
    location: "Bathroom",
    image: homeProject2.src, // Sketch style house
  },
  {
    id: 3,
    title: "Kitchen Design",
    location: "Kitchen",
    image: homeProject3.src, // Brick building
  },
  {
    id: 4,
    title: "Renovation of a 3-Bedroom Holiday Home",
    location: "Design and Build",
    image: homeProject4.src, // Brick building
  },
  {
    id: 5,
    title: "Bespoke Joinery Projects",
    location: "Joinery",
    image: homeProject5.src, // Brick building
  },
  {
    id: 6,
    title: "Reception Central London, Chelsea",
    location: "Residential",
    image: homeProject6.src, // Brick building
  },
  {
    id: 7,
    title: "Surbiton Project Living and Hallway",
    location: "Design and Build",
    image: homeProject7.src, // Brick building
  },
  {
    id: 8,
    title: "Seven bed high-end project, Sutton",
    location: "Residential",
    image: homeProject8.src, // Brick building
  },
  {
    id: 9,
    title: "Twickenham",
    location: "Residential",
    image: homeProject9.src, // Brick building
  },
  {
    id: 10,
    title: "Sutton, London- Contemporary Style Extension & Renovation",
    location: "Design and Build",
    image: homeProject10.src, // Brick building
  },
  {
    id: 11,
    title: "Kingston Upon Thames",
    location: "Design and Build",
    image: homeProject11.src, // Brick building
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

// --- Curated "Random" Colors ---
// These are architectural/earthy tones similar to your reference (Teal, Sage, Slate, Terracotta)
const HOVER_COLORS = [
  "#5F8D8B", // The Teal from your image
  "#7C8C74", // Sage Green
  "#8C6F5F", // Muted Terra
  "#5A6B7C", // Slate Blue
  "#8C7A5F", // Beige/Gold
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [hoverColor, setHoverColor] = useState<string>("#5F8D8B");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const random = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
    setHoverColor(random);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
      className="relative w-full aspect-square cursor-pointer overflow-hidden group bg-[#f7f7f7]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Main Background Project Image */}
      <div className="relative w-full h-full p-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
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
            <div className="flex flex-col items-center">
              {/* Logo Section - Fixed dimension container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative w-24 h-24 mb-4" 
              >
                <Image 
                  src={logo} 
                  alt="Logo" 
                  fill 
                  className="object-contain" // Logo ko white/visible karne ke liye
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-xl md:text-xl text-black tracking-tight uppercase mb-1 font-serif">
                  {project.title}
                </h3>
                <p className="text-[10px] text-black/80 tracking-[0.3em] uppercase">
                  {project.location}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Progress = () => {
  return (
    <section className="w-full py-10 px-4 md:px-12 bg-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-lg md:text-xl tracking-tight text-black uppercase mb-2">
          Our Projects
        </h2>
        <div className="w-full h-[1px] bg-gray-500"></div>
      </motion.div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Progress;