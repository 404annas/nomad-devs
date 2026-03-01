"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import logo from "@/assets/logo.webp";

// --- Skeleton Imports ---
import skel1 from "@/assets/skel1.jpeg";
import skel2 from "@/assets/skel2.jpeg";
import skel3 from "@/assets/skel3.jpeg";
import skel4 from "@/assets/skel4.jpeg";
import skel5 from "@/assets/skel5.png";
import skel6 from "@/assets/skel6.png";
import skel7 from "@/assets/skel7.png";
import skel8 from "@/assets/skel8.png";
import skel9 from "@/assets/skel9.png";
import skel10 from "@/assets/skel10.png";
import skel11 from "@/assets/skel11.png";
import skel12 from "@/assets/skel12.png";
import skel13 from "@/assets/skel13.png";
import skel14 from "@/assets/skel14.png";
import skel15 from "@/assets/skel15.png";
import skel16 from "@/assets/skel16.png";
import skel17 from "@/assets/skel17.png";
import skel18 from "@/assets/skel18.png";
import skel19 from "@/assets/skel19.png";
import skel20 from "@/assets/skel20.png";
import skel21 from "@/assets/skel21.png";
import skel22 from "@/assets/skel22.png";
import skel23 from "@/assets/skel23.png";

import { data } from "@/components/Projects/projectsData";

// --- Updated Interface ---
interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  slug: string;
  category: string;
}

// --- Filter Categories ---
const FILTERS = ["All", "Residential", "Commercial", "International", "Garden", "Kitchens", "Bathroom", "Joinery"];

// --- Projects Data with Categories ---
const projects: Project[] = [
  {
    id: 11,
    title: "Kingston Upon Thames",
    location: "Design and Build",
    image: skel11.src,
    slug: data[10]?.id || "kingston-upon-thames",
    category: "Residential",
  },
  {
    id: 23,
    title: "Living Room Boho Eclectic Style",
    location: "Design and Build",
    image: skel23.src,
    slug: data[22]?.id || "living-room-boho-eclectic-style",
    category: "Residential",
  },
  {
    id: 12,
    title: "Cheam Surrey",
    location: "Design and Build",
    image: skel12.src,
    slug: data[11]?.id || "cheam-surrey",
    category: "Residential",
  },
  {
    id: 13,
    title: "Chelsea Flat",
    location: "Design and Build",
    image: skel13.src,
    slug: data[12]?.id || "chelsea-flat",
    category: "Residential",
  },
  {
    id: 14,
    title: "Gillian Road Sutton",
    location: "Design and Build",
    image: skel14.src,
    slug: data[13]?.id || "gillian-road-sutton",
    category: "Residential",
  },
  {
    id: 15,
    title: "Chiltren Drive Sutton",
    location: "Design and Build",
    image: skel15.src,
    slug: data[14]?.id || "chiltren-drive-sutton",
    category: "Residential",
  },
  {
    id: 16,
    title: "Holiday Home ( Air B&B ) Mitcham",
    location: "Design and Build",
    image: skel16.src,
    slug: data[15]?.id || "holiday-home-mitcham",
    category: "Commercial",
  },
  {
    id: 17,
    title: "Harrow",
    location: "Design and Build",
    image: skel17.src,
    slug: data[16]?.id || "harrow",
    category: "Residential",
  },
  {
    id: 18,
    title: "Bromley",
    location: "Design and Build",
    image: skel18.src,
    slug: data[17]?.id || "bromley",
    category: "Residential",
  },
  {
    id: 2,
    title: "Bathroom Design",
    location: "Bathroom",
    image: skel2.src,
    slug: data[1]?.id || "bathroom-design",
    category: "Bathroom",
  },
  {
    id: 3,
    title: "Kitchen / BAR",
    location: "Kitchen",
    image: skel3.src,
    slug: data[2]?.id || "kitchen-design-bar",
    category: "Kitchens",
  },
  {
    id: 5,
    title: "Bespoke Joinery Projects",
    location: "Joinery",
    image: skel5.src,
    slug: data[5]?.id || "bespoke-joinery-projects",
    category: "Residential",
  },
  {
    id: 7,
    title: "Surbiton Project Living and Hallway",
    location: "Design and Build",
    image: skel7.src,
    slug: data[4]?.id || "surbiton-project-living-and-hallway",
    category: "Residential",
  },
  {
    id: 9,
    title: "Twickenham",
    location: "Residential",
    image: skel9.src,
    slug: data[7]?.id || "twickenham",
    category: "Residential",
  },
  {
    id: 19,
    title: "Biophilic Oasis Conservatory",
    location: "Design and Build",
    image: skel19.src,
    slug: data[18]?.id || "biophilic-oasis-conservatory",
    category: "Garden",
  },
  {
    id: 20,
    title: "Wine cellar in Leatherhead",
    location: "Design and Build",
    image: skel20.src,
    slug: data[19]?.id || "wine-cellar-in-leatherhead",
    category: "Residential",
  },
  {
    id: 21,
    title: "Collaborative Hub",
    location: "Design and Build",
    image: skel21.src,
    slug: data[20]?.id || "collaborative-hub",
    category: "Commercial",
  },
  {
    id: 22,
    title: "Gilded Elegance Passage",
    location: "Design and Build",
    image: skel22.src,
    slug: data[21]?.id || "gilded-elegance-passage",
    category: "Residential",
  },
  {
    id: 24,
    title: "Garage Conversion in Dartford",
    location: "Design and Build",
    image: skel6.src,
    slug: data[23]?.id || "garage-conversion-in-dartford",
    category: "Residential",
  },
  {
    id: 1,
    title: "Garden Design – Kingston",
    location: "Residential",
    image: skel1.src,
    slug: data[0]?.id || "garden-design-kingston",
    category: "Garden",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const HOVER_COLORS = [
  "#5F8D8B", "#7C8C74", "#8C6F5F", "#5A6B7C", "#8C7A5F", "#4A5D4E", "#9A7B8B", "#7D8491", "#B48A78"
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [hoverColor, setHoverColor] = useState<string>("#5F8D8B");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const random = HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)];
    setHoverColor(random);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full aspect-square cursor-pointer overflow-hidden group bg-[#f7f7f7]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full p-8">
        <Image
          src={project.image}
          alt={`${project.title} design and build project portfolio image in ${project.location}`}
          fill
          className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ backgroundColor: hoverColor }}
        className="absolute inset-0 z-10"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
        <AnimatePresence>
          {isHovered && (
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative w-24 h-24 mb-4"
              >
                <Image src={logo} alt="Dwell Rich Designz logo" fill className="object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-lg lg:text-xl text-black tracking-tight leading-none uppercase mb-1 font-serif">
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
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter Logic
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else if (activeFilter === "Joinery") {
      setFilteredProjects(
        projects.filter((project) => project.slug === "bespoke-joinery-projects")
      );
    } else {
      const filtered = projects.filter(
        (project) => project.category === activeFilter
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  return (
    <section className="w-full py-10 px-4 md:px-12 pt-40 bg-white">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-lg md:text-xl tracking-tight text-black uppercase mb-2">
          Our Projects
        </h2>
        <div className="w-full h-[1px] bg-gray-500 mb-6"></div>

        {/* --- FILTER DROPDOWN --- */}
        <div className="relative inline-block">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider cursor-pointer px-6 py-3 border border-gray-300 hover:border-black transition-all duration-300 bg-white"
          >
            <span>{activeFilter}</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-50"
              >
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm cursor-pointer uppercase tracking-wider hover:bg-gray-100 transition-colors
                      ${activeFilter === filter
                        ? "bg-black text-white"
                        : "text-gray-700"
                      }
                    `}
                  >
                    {filter}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Grid Section */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  target={project.slug === "bespoke-joinery-projects" ? "_blank" : undefined}
                  rel={project.slug === "bespoke-joinery-projects" ? "noopener noreferrer" : undefined}
                >
                  <ProjectCard project={project} index={index} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        // --- No Projects Found Message ---
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center text-gray-400"
        >
          <p className="text-lg font-light">No projects found in this category.</p>
        </motion.div>
      )}
    </section>
  );
};

export default Progress;
