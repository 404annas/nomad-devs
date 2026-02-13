'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1763411341520-CRWGOQDJP8CPF5UBRWM1/image-asset.jpeg',
  },
  {
    id: 2,
    image: 'https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1762608068388-OX4BI5M5I511E0E1CHY0/image-asset.jpeg',
  },
  {
    id: 3,
    image: 'https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1762276554536-J3G2QGD9CE300WTZSE88/image-asset.jpeg',
  },
  {
    id: 4,
    image: 'https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1761321698144-Y4NYB5KSYUPRNB7FLODG/image-asset.jpeg',
  },
  {
    id: 5,
    image: 'https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1760890046355-R7WWEX866L2MMSOLMUS4/image-asset.jpeg',
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
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-sm font-sans uppercase tracking-widest">Follow Us</span>
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