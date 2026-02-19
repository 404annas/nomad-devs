"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, X, ChevronLeft, ChevronRight, Twitter } from "lucide-react";

// Assuming your data import path remains the same
import { data } from "@/components/Projects/projectsData";

// Define the type to fix the TypeScript error
type ProjectContent = string | { heading?: string; text: string | string[] };

interface Project {
  id: string;
  title?: string;
  mainPic: string;
  content: ProjectContent[];
  images?: string[];
  video?: string;
}

const ProjectPage = () => {
  const params = useParams();
  const projectId = params.id as string;

  // Cast the found data to the Project interface to fix the 'title' error
  const project = data.find((p) => p.id === projectId) as Project | undefined;

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // If project not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-white/70 hover:text-white underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Helper to open lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Helper to navigate lightbox
  const navigateLightbox = (direction: "next" | "prev") => {
    if (!project.images) return;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images!.length - 1 : prev - 1));
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0]">

      {/* 1. Header Section (Title Row) */}
      <div className="max-w-[1400px] mx-auto px-6 pt-8 pb-2 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight capitalize">
          {project.title || project.id.replace(/-/g, " ")}
        </h1>
        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-tight font-medium mb-1">
          [PROJECT DETAILS]
        </span>
      </div>

      {/* 2. Hero Image Section */}
      <div className="w-full h-[50vh] md:h-[80vh] relative mt-8 mb-10">
        <Image
          src={project.mainPic}
          alt={project.id}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 3. Main Content Grid (Split Layout) */}
      <div className="max-w-[1400px] mx-auto px-6 pb-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

          {/* Left Column: Share / Info - MADE STICKY */}
          {/* Added: lg:sticky, lg:top-24, lg:self-start */}
          <div className="w-full lg:w-1/4 lg:sticky lg:top-24 lg:self-start h-fit flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start gap-4 border-b lg:border-b-0 border-white/10 pb-4 lg:pb-0 z-10">
            <span className="text-base text-gray-400 font-medium">Share to:</span>

            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white cursor-pointer transition-all duration-300 group"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Project Content text */}
          <div className="w-full lg:w-3/4 space-y-8">
            {Array.isArray(project.content) &&
              project.content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-white leading-relaxed text-base md:text-lg font-light"
                >
                  {typeof item === "string" ? (
                    <p>{item}</p>
                  ) : (
                    <div className="mb-6">
                      {item.heading && (
                        <h3 className="text-xl font-medium text-white mb-4 mt-8">
                          {item.heading}
                        </h3>
                      )}
                      {Array.isArray(item.text) ? (
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          {item.text.map((paragraph, idx) => (
                            <li key={idx}>{paragraph}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{item.text}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
          </div>
        </div>

        {/* 4. Image Gallery (Grid Layout) */}
        {project.images && project.images.length > 0 && (
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] cursor-pointer group overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img}
                  alt={`${project.id} gallery ${index}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm uppercase tracking-widest border border-white px-4 py-2">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Video Section */}
        {project.video && (
          <div className="mt-24 flex justify-center">
            <video
              controls
              autoPlay
              muted
              className="w-full max-w-3xl h-[400px] shadow-md"
              poster={project.mainPic}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        )}
      </div>

      {/* ======================= */}
      {/*    LIGHTBOX MODAL       */}
      {/* ======================= */}
      <AnimatePresence>
        {lightboxOpen && project.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >

            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white duration-300 cursor-pointer transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-6xl h-[80vh]">
              <Image
                src={project.images[currentImageIndex]}
                alt="Project Preview"
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/50 cursor-pointer duration-300"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full hover:bg-black/50 cursor-pointer duration-300"
            >
              <ChevronRight size={40} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
              {currentImageIndex + 1} / {project.images.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectPage;