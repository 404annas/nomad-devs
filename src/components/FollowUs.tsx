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
  },
  {
    id: 2,
    image: homeProject2.src,
  },
  {
    id: 3,
    image: homeProject3.src,
  },
  {
    id: 4,
    image: homeProject4.src,
  },
  {
    id: 5,
    image: homeProject5.src,
  },
]

export default function InstagramFollow() {
  return (
    // Outer white container with padding on all sides
    <section className="bg-white pb-8 px-4 md:px-12 lg:px-10">
      {/* Inner gray/beige container */}
      <div className="bg-[#e9e7e3] py-10 px-8 md:px-16 lg:px-7">
        <div className="max-w-7xl mx-auto">
          {/* Follow Us Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-10"
          >
            <span className="text-sm font-sans uppercase tracking-widest">Projects</span>
          </motion.div>

          {/* Image Grid - 5 columns on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href="https://www.instagram.com/nomaddevelopments/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden group cursor-pointer aspect-square"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}