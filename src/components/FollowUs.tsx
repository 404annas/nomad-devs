'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ scale: 1.08, y: -5, transition: { duration: 0.3 } }}
                className="relative overflow-hidden group cursor-pointer aspect-square"
              >
                <img
                  loading="lazy"
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/20"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}