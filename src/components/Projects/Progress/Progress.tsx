"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import logo from "@/assets/logo.webp"

// import homeProject1 from "@/assets/homeProject1.webp"
// import homeProject2 from "@/assets/homeProject2.webp"
// import homeProject3 from "@/assets/homeProject3.webp"
// import homeProject4 from "@/assets/homeProject4.webp"
// import homeProject5 from "@/assets/homeProject5.webp"
// import homeProject6 from "@/assets/homeProject6.webp"
// import homeProject7 from "@/assets/homeProject7.webp"
// import homeProject8 from "@/assets/homeProject8.webp"
// import homeProject9 from "@/assets/homeProject9.webp"
// import homeProject10 from "@/assets/homeProject10.webp"
// import homeProject11 from "@/assets/homeProject11.webp"

import skel1 from "@/assets/skel1.jpeg"
import skel2 from "@/assets/skel2.jpeg"
import skel3 from "@/assets/skel3.jpeg"
import skel4 from "@/assets/skel4.jpeg"
import skel5 from "@/assets/skel5.png"
import skel6 from "@/assets/skel6.png"
import skel7 from "@/assets/skel7.png"
import skel8 from "@/assets/skel8.png"
import skel9 from "@/assets/skel9.png"
import skel10 from "@/assets/skel10.png"
import skel11 from "@/assets/skel11.png"
import skel12 from "@/assets/skel12.png"
import skel13 from "@/assets/skel13.png"
import skel14 from "@/assets/skel14.png"
import skel15 from "@/assets/skel15.png"
import skel16 from "@/assets/skel16.png"
import skel17 from "@/assets/skel17.png"
import skel18 from "@/assets/skel18.png"
import skel19 from "@/assets/skel19.png"
import skel20 from "@/assets/skel20.png"
import skel21 from "@/assets/skel21.png"
import skel22 from "@/assets/skel22.png"
import skel23 from "@/assets/skel23.png"

import { data } from "@/components/Projects/projectsData";

interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 2,
    title: "Bathroom Design",
    location: "Bathroom",
    image: skel2.src,
    slug: data[1]?.id || "bathroom-design",
  },
  {
    id: 3,
    title: "Kitchen Design",
    location: "Kitchen",
    image: skel3.src,
    slug: data[2]?.id || "kitchen-design",
  },
  // {
  //   id: 4,
  //   title: "Renovation of a 3-Bedroom Holiday Home",
  //   location: "Design and Build",
  //   image: skel4.src,
  //   slug: data[3]?.id || "renovation-of-a-3-bedroom-holiday-home",
  // },
  {
    id: 5,
    title: "Bespoke Joinery Projects",
    location: "Joinery",
    image: skel5.src,
    slug: data[5]?.id || "bespoke-joinery-projects",
  },
  // {
  //   id: 6,
  //   title: "Reception Central London, Chelsea",
  //   location: "Residential",
  //   image: skel6.src,
  //   slug: data[8]?.id || "reception-central-london-chelsea",
  // },
  {
    id: 7,
    title: "Surbiton Project Living and Hallway",
    location: "Design and Build",
    image: skel7.src,
    slug: data[4]?.id || "surbiton-project-living-and-hallway",
  },
  // {
  //   id: 8,
  //   title: "Seven bed high-end project, Sutton",
  //   location: "Residential",
  //   image: skel8.src,
  //   slug: data[6]?.id || "seven-bed-high-end-project-sutton",
  // },
  {
    id: 9,
    title: "Twickenham",
    location: "Residential",
    image: skel9.src,
    slug: data[7]?.id || "twickenham",
  },
  // {
  //   id: 10,
  //   title: "Sutton, London- Contemporary Style Extension & Renovation",
  //   location: "Design and Build",
  //   image: skel10.src,
  //   slug: data[9]?.id || "sutton-london",
  // },
  {
    id: 11,
    title: "Kingston Upon Thames",
    location: "Design and Build",
    image: skel11.src,
    slug: data[10]?.id || "kingston-upon-thames",
  },
  {
    id: 12,
    title: "Cheam Surrey",
    location: "Design and Build",
    image: skel12.src,
    slug: data[11]?.id || "cheam-surrey",
  },
  {
    id: 13,
    title: "Chelsea Flat",
    location: "Design and Build",
    image: skel13.src,
    slug: data[12]?.id || "chelsea-flat",
  },
  {
    id: 14,
    title: "Gillian Road Sutton",
    location: "Design and Build",
    image: skel14.src,
    slug: data[13]?.id || "gillian-road-sutton",
  },
  {
    id: 15,
    title: "Chiltren Drive Sutton",
    location: "Design and Build",
    image: skel15.src,
    slug: data[14]?.id || "chiltren-drive-sutton",
  },
  {
    id: 16,
    title: "Holiday Home ( Air B&B ) Mitcham",
    location: "Design and Build",
    image: skel16.src,
    slug: data[15]?.id || "holiday-home-mitcham",
  },
  {
    id: 17,
    title: "Harrow",
    location: "Design and Build",
    image: skel17.src,
    slug: data[16]?.id || "harrow",
  },
  {
    id: 18,
    title: "Bromley",
    location: "Design and Build",
    image: skel18.src,
    slug: data[17]?.id || "bromley",
  },
  {
    id: 19,
    title: "Biophilic Oasis Conservatory",
    location: "Design and Build",
    image: skel19.src,
    slug: data[18]?.id || "biophilic-oasis-conservatory",
  },
  {
    id: 20,
    title: "Wine cellar in Leatherhead",
    location: "Design and Build",
    image: skel20.src,
    slug: data[19]?.id || "wine-cellar-in-leatherhead",
  },
  {
    id: 21,
    title: "Collaborative Hub",
    location: "Design and Build",
    image: skel21.src,
    slug: data[20]?.id || "collaborative-hub",
  },
  {
    id: 22,
    title: "Gilded Elegance Passage",
    location: "Design and Build",
    image: skel22.src,
    slug: data[21]?.id || "gilded-elegance-passage",
  },
  {
    id: 23,
    title: "Living Room Boho Eclectic Style",
    location: "Design and Build",
    image: skel23.src,
    slug: data[22]?.id || "living-room-boho-eclectic-style",
  },
  {
    id: 1,
    title: "Garden Design – Kingston",
    location: "Residential",
    image: skel1.src,
    slug: data[0]?.id || "garden-design-kingston",
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
  "#4A5D4E",
  "#9A7B8B",
  "#9A7B8B",
  "#7D8491",
  "#B48A78"
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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
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
                <h3 className="text-xl md:text-xl text-black tracking-tight leading-none uppercase mb-1 font-serif">
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
    <section className="w-full py-10 px-4 md:px-12 pt-40 bg-white">
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
          <Link key={project.id} href={`/projects/${project.slug}`}>
            <ProjectCard project={project} index={index} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Progress;