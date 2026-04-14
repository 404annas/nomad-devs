"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import logo from "@/assets/logo.webp";
import Link from "next/link";
import Navbar from "../Navbar";

const ProjectPageContent = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const router = useRouter();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      if (!slug) return null;
      const { data } = await api.get(`/projects/${slug}`);
      return data.data;
    },
    enabled: !!slug,
  });

  const { data: allProjects } = useQuery({
    queryKey: ["allProjects"],
    queryFn: async () => {
      const { data } = await api.get("/projects?limit=100");
      return data.data;
    },
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-gray-400" />
      </div>
    );
  }

  if (!project) return <div className="min-h-screen flex items-center justify-center">Project not found</div>;

  const currentIndex = allProjects?.findIndex((p: any) => p.slug === slug) ?? -1;
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < (allProjects?.length - 1) ? allProjects[currentIndex + 1] : null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    const images = project.gallery.map((g: any) => g.url);
    if (!images) return;
    if (direction === "next") {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  const allImages = project.gallery.map((g: any) => g.url);
  const sideImages = allImages.slice(0, 1);
  const remainingImages = allImages.slice(1);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      {/* 1. HERO SECTION */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[550px] px-4 py-4">
        <div className="relative w-full h-[650px]">
          <Image
            src={project.mainPic.url}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-[#aabebc] flex flex-col items-center justify-center p-4 md:p-0 text-center h-full">
          <div className="mb-8 w-25 md:w-30 h-25 md:h-30 relative">
            <Image src={logo} alt="Logo" fill className="object-contain" />
          </div>
          <h1 className="text-2xl md:text-3xl text-[#1a1a1a] font-light mb-6 uppercase tracking-tight leading-tight">
            {project.title}
          </h1>
          <div className="text-base leading-6 sm:leading-7 text-[#1a1a1a] max-w-xl text-left mx-auto px-4">
            {project.content.slice(0, 1).map((para: any, i: number) => (
                <p key={i}>{typeof para === 'string' ? para : para.text}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 2. CONTENT SECTION */}
      <div className="max-w-[1300px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
        <div className="text-sm md:text-base leading-7 sm:leading-8 text-black">
            {project.content.slice(1).map((item: any, index: number) => (
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
                    <p className="leading-relaxed text-gray-700 font-light">{item.text}</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-6 sticky top-24">
          {sideImages.map((img: string, idx: number) => (
            <div key={idx} className="relative w-full h-[400px] md:h-[600px] cursor-pointer hover:opacity-95 transition-opacity duration-300" onClick={() => openLightbox(idx)}>
              <Image src={img} alt="Detail" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. GALLERY GRID */}
      {remainingImages.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {remainingImages.map((img: string, idx: number) => (
            <div
              key={idx}
              className="relative w-full h-[400px] md:h-[650px] cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => openLightbox(idx + 1)}
            >
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* 4. VIDEO SECTION */}
      {project.videos?.length > 0 && (
        <div className="w-full bg-[#f9f9f9] py-10 flex justify-center">
          <video controls className="w-full max-w-5xl h-auto" poster={project.mainPic.url}>
            <source src={project.videos[0].url} type="video/mp4" />
          </video>
        </div>
      )}

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button onClick={() => setLightboxOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white p-2"><X size={32} /></button>
            <div className="relative w-full max-w-6xl h-[80vh]">
              <Image src={allImages[currentImageIndex]} alt="Preview" fill className="object-contain" />
            </div>
            <button onClick={() => navigateLightbox("prev")} className="absolute left-4 md:left-10 text-white p-2 bg-black/20 rounded-full"><ChevronLeft size={40} /></button>
            <button onClick={() => navigateLightbox("next")} className="absolute right-4 md:right-10 text-white p-2 bg-black/20 rounded-full"><ChevronRight size={40} /></button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVIGATION SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200">
        {prevProject ? (
          <Link href={`/projects/details/?slug=${prevProject.slug}`} className="group flex items-center gap-4 text-left">
            <div className="p-3 border border-gray-400 rounded-full group-hover:border-black transition-colorall duration-300s">
              <ChevronLeft size={20} className="text-gray-600 group-hover:text-black group-hover:-translate-x-1 transition-all duration-300" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Previous Project</p>
              <h4 className="text-sm font-bold uppercase text-black">{prevProject.title}</h4>
            </div>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link href={`/projects/details/?slug=${nextProject.slug}`} className="group flex items-center gap-4 text-right justify-end">
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Next Project</p>
              <h4 className="text-sm font-bold uppercase text-black">{nextProject.title}</h4>
            </div>
            <div className="p-3 border border-gray-400 rounded-full group-hover:border-black transition-all duration-300">
              <ChevronRight size={20} className="text-gray-600 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
};

export default function ProjectDetails() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-10 h-10 animate-spin text-gray-400" /></div>}>
      <ProjectPageContent />
    </Suspense>
  );
}
