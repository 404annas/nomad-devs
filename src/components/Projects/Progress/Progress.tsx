"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3 } from "lucide-react"; // Using a grid icon to mimic the logo in your image

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "NOTTING HILL DUPLEX'S",
    location: "NOTTING HILL",
    image: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/df888868-5eab-49a9-84f8-b94666b175fe/STANLEY_CRESCENT-thumb.jpg?format=1500w", // Sketch style house
  },
  {
    id: 2,
    title: "KENSINGTON MANOR",
    location: "SOUTH KENSINGTON",
    image: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/9c182dce-7d8d-4336-92cd-663e26662a10/LANCASTER_ROAD-thumb.jpg?format=1500w", // Sketch style house
  },
  {
    id: 3,
    title: "CHELSEA TOWNHOUSE",
    location: "CHELSEA",
    image: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/d0cb0ac6-3265-4a36-ac16-1e4b8bbcb6cf/Cheyne.jpg?format=1500w", // Brick building
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

  // Set a random color on mount (so it doesn't change on every re-render/hover)
  useEffect(() => {
    const random = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
    setHoverColor(random);
  }, []);

  return (
    <motion.div
      // --- Entrance Animation: Slide up from bottom ---
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }} // Stagger effect

      className="relative w-full aspect-square cursor-pointer overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. The Image (Background) */}
      <div className="w-full h-full flex items-end justify-center">
        {/* Using a mix-blend mode or grayscale to make it look like a sketch if needed */}
        <div className="relative w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      {/* 2. The Color Overlay (Fills on Hover) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth fill
        style={{ backgroundColor: hoverColor }}
        className="absolute inset-0 z-10"
      />

      {/* 3. The Content (Logo & Text) - Appears AFTER color fill */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
        <AnimatePresence>
          {isHovered && (
            <>
              {/* Logo Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 }} // Delay ensures color fills first
                className="mb-4"
              >
                {/* Custom SVG Icon representing the window logo in your reference */}
                <Grid3X3 strokeWidth={1} size={48} className="text-black/80" />
              </motion.div>

              {/* Text Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.4 }} // Slightly later than logo
              >
                <h3 className="text-2xl text-black/80 tracking-tight uppercase mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-black/60 tracking-[0.2em] uppercase">
                  {project.location}
                </p>
              </motion.div>
            </>
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
          Projects in Progress
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