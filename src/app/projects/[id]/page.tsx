"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { data } from "@/components/Projects/projectsData";

import logo from "@/assets/logo.webp"

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
  const project = data.find((p) => p.id === projectId) as Project | undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    if (!project.images) return;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? project.images!.length - 1 : prev - 1));
    }
  };

  // --- LOGIC: Handle Content Splitting ---
  const firstItem = project.content[0];
  let introText = "";
  let hasRemainingText = false;

  // Calculate Intro Text (First 2 sentences)
  if (typeof firstItem === 'string') {
    const sentences = firstItem.split('. ');
    introText = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
    // Check if there are sentences left for the body
    if (sentences.length > 2) hasRemainingText = true;
  } else {
    const text = Array.isArray(firstItem.text) ? firstItem.text.join(" ") : firstItem.text;
    const sentences = text.split('. ');
    introText = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '.' : '');
    if (sentences.length > 2) hasRemainingText = true;
  }

  // Check if there are more paragraphs beyond the first index
  if (project.content.length > 1) hasRemainingText = true;


  // Helper to render the remaining content
  const renderRemainingContent = () => {
    let remainingIntro = null;

    // If first item was string, render the rest of it here
    if (typeof firstItem === 'string') {
      const sentences = firstItem.split('. ');
      if (sentences.length > 2) {
        remainingIntro = <p className="mb-6">{sentences.slice(2).join('. ')}</p>;
      }
    }

    return (
      <>
        {remainingIntro}
        {project.content.slice(1).map((item, index) => (
          <div key={index} className="mb-8 last:mb-0">
            {typeof item === 'string' ? (
              <p className="leading-8 text-black">{item}</p>
            ) : (
              <div>
                {item.heading && (
                  <h3 className="text-[#1a1a1a] font-semibold uppercase tracking-wide mb-3 text-sm flex items-center gap-2">
                    <span className="w-1 h-4 bg-black/80 block"></span> {item.heading}
                  </h3>
                )}
                {Array.isArray(item.text) ? (
                  <ul className="space-y-3 mt-2">
                    {item.text.map((t, i) => (
                      <li key={i} className="flex items-start gap-3 leading-relaxed text-gray-700 font-light">
                        <CheckCircle2 size={16} className="mt-1 text-black/60 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-gray-700 font-light">{item.text}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </>
    );
  };

  // --- UPDATED IMAGE LOGIC: 0,1 on Side, Rest Below ---
  const allImages = project.images || [];
  const sideImages = allImages.slice(0, 1); // Side images (0 and 1)
  const remainingImages = allImages.slice(1); // All others starting from index 2

  return (
    <div className="min-h-screen bg-white text-black">

      {/* 1. HERO SECTION */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[550px] px-4 py-4">
        {/* Left: Main Hero Image */}
        <div className="relative w-full h-[500px] md:h-full">
          <Image src={project.mainPic} alt="Hero" fill className="object-cover" priority />
        </div>

        {/* Right: Gray Info Box */}
        <div className="bg-[#aabebc] flex flex-col items-center justify-center p-4 text-center h-full">
          <div className="mb-8 w-25 md:w-30 h-25 md:h-30 relative">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
          <h1 className="text-2xl md:text-3xl text-[#1a1a1a] font-bold mb-6 uppercase tracking-tight leading-tight">
            {project.title || project.id.replace(/-/g, " ")}
          </h1>
          <div className="text-base leading-7 text-[#1a1a1a] max-w-xl text-left mx-auto">
            <p>{introText}</p>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC CONTENT SECTION */}
      {hasRemainingText ? (
        <div className="max-w-[1300px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-sm md:text-base leading-8 text-black">
            {renderRemainingContent()}
          </div>
          <div className="flex flex-col gap-6 sticky top-24">
            {sideImages.map((img, idx) => (
              <div key={idx} className="relative w-full h-[400px] md:h-[500px] cursor-pointer hover:opacity-95 transition-opacity duration-300 shadow-sm" onClick={() => openLightbox(idx)}>
                <Image src={img} alt="Detail" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto px-4 py-10">
          {sideImages.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {sideImages.map((img, idx) => (
                <div key={idx} className="relative w-full h-[500px] cursor-pointer hover:opacity-95 transition-opacity" onClick={() => openLightbox(idx)}>
                  <Image src={img} alt="Detail" fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. REMAINING GALLERY GRID (All remaining images in grid-cols-2) */}
      {remainingImages.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {remainingImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-[400px] md:h-[500px] cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => openLightbox(idx + 2)}
            >
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 4. VIDEO SECTION */}
      {project.video && (
        <div className="w-full bg-[#f9f9f9] py-10 flex justify-center">
          <video
            controls
            className="w-full max-w-5xl h-auto shadow-xl"
            poster={project.mainPic}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && project.images && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors duration-300 cursor-pointer"><X size={32} /></button>

            <div className="relative w-full max-w-6xl h-[80vh]">
              <Image src={project.images[currentImageIndex]} alt="Preview" fill className="object-contain" />
            </div>

            <button onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }} className="absolute left-4 md:left-10 text-white/50 hover:text-white p-2 bg-black/20 rounded-full hover:bg-black/50 transition-all duration-300 cursor-pointer"><ChevronLeft size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }} className="absolute right-4 md:right-10 text-white/50 hover:text-white p-2 bg-black/20 rounded-full hover:bg-black/50 transition-all duration-300 cursor-pointer"><ChevronRight size={40} /></button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest font-mono">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectPage;