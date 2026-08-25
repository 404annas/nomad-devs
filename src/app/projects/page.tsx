"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import logo from "@/assets/logo.webp";

const FILTERS = ["All", "Residential", "Commercial", "Garden", "Kitchens", "Bathroom", "Joinery"];

// --- Hover Colors (Architecture/Earthy Tones) ---
const HOVER_COLORS = [
  "#5F8D8B", "#7C8C74", "#8C6F5F", "#5A6B7C", "#8C7A5F", "#4A5D4E", "#9A7B8B", "#7D8491", "#B48A78"
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [hoverColor, setHoverColor] = useState<string>("#5F8D8B");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Set random color once on mount
  React.useEffect(() => {
    setHoverColor(HOVER_COLORS[Math.floor(Math.random() * HOVER_COLORS.length)]);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative w-full aspect-square cursor-pointer overflow-hidden group bg-[#f7f7f7]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full p-8">
        {project.videoThumbnail?.url ? (
          <video
            src={project.videoThumbnail.url}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        ) : project.mainPic?.url ? (
          <Image
            src={project.mainPic.url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        ) : null}
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
            <Link href={`/projects/details/?slug=${project.slug}`} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="relative w-24 h-24 mb-4"
              >
                <Image src={logo} alt="Logo" fill className="object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-lg lg:text-xl text-black tracking-tight leading-none uppercase mb-1 font-bold">
                  {project.title}
                </h3>
                <p className="text-[10px] text-black/80 tracking-[0.3em] uppercase">
                  {project.category}
                </p>
              </motion.div>
            </Link>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: allProjects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get("/projects?limit=200");
      return data.data;
    },
  });

  const filteredProjects = React.useMemo(() => {
    if (!allProjects) return [];
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p: any) => p.category === activeFilter);
  }, [allProjects, activeFilter]);

  return (
    <section className="w-full py-10 px-4 md:px-12 pt-40 bg-white min-h-screen">
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
                      ${activeFilter === filter ? "bg-black text-white" : "text-gray-700"}
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
      {isLoading ? (
        <div className="h-[40vh] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredProjects.map((project: any, index: number) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center text-gray-400">
          <p className="text-lg font-light">No projects found in this category.</p>
        </motion.div>
      )}
    </section>
  );
}
