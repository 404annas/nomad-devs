'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import homeProject1 from "@/assets/homeProject1.webp"
import homeProject2 from "@/assets/homeProject2.webp"
import homeProject3 from "@/assets/homeProject3.webp"
import homeProject4 from "@/assets/homeProject4.webp"
import homeProject5 from "@/assets/homeProject5.webp"

const instagramPosts = [
  {
    id: 1,
    image: homeProject1.src,
    link: "/projects/garden-design-kingston",
  },
  {
    id: 2,
    image: homeProject2.src,
    link: "/projects/bathroom-design",
  },
  {
    id: 3,
    image: homeProject3.src,
    link: "/projects/kitchen-design",
  },
  {
    id: 4,
    image: homeProject4.src,
    link: "/projects/holiday-home-mitcham",
  },
  {
    id: 5,
    image: homeProject5.src,
    link: "/projects/bespoke-joinery-projects",
  },
]

export default function InstagramFollow() {
  return (
    // Outer white container with padding on all sides
    <section className="bg-white pb-8 px-4 md:px-8 lg:px-10">
      {/* Inner gray/beige container */}
      <div className="bg-[#f3f3f3] py-10 px-4 sm:px-8 md:px-16 lg:px-7">
        <div className="max-w-7xl mx-auto">
          {/* Follow Us Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mb-10"
          >
            <span className="text-lg uppercase tracking-tight">Projects</span>
          </motion.div>

          {/* Image Grid - 5 columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
            {instagramPosts.map((post, index) => {
              const openInNewTab = post.link.includes('bespoke-joinery')
              return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ scale: 1.08, y: -5, transition: { duration: 0.3 } }}
                className="relative overflow-hidden group cursor-pointer aspect-square"
              >
                <a
                  href={post.link}
                  className="absolute inset-0 z-10"
                  aria-label={`Open project ${post.id}`}
                  target={openInNewTab ? "_blank" : undefined}
                  rel={openInNewTab ? "noopener noreferrer" : undefined}
                />
                <img
                  loading="lazy"
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="h-16 w-16 rounded-full bg-white/90 border border-white shadow-md backdrop-blur-sm flex items-center justify-center">
                    <ArrowUpRight className="h-7 w-7 text-black" strokeWidth={2} />
                  </span>
                </div>
                <a
                  href="/projects"
                  className="absolute bottom-2 right-4 z-20 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                >
                  <span>All Projects</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
