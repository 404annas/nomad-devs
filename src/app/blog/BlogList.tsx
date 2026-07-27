"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { blogs } from "@/data/blogs";

const BlogCard = ({ blog, index }: { blog: (typeof blogs)[number]; index: number }) => {
  return (
    <motion.a
      href={`/blog/${blog.slug}/`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-[#f7f7f7] rounded-xl overflow-hidden"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-base md:text-lg font-medium tracking-tight leading-snug">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed flex-1">
          {blog.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-400 pt-2 border-t border-gray-200">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {blog.publishedAt}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {blog.readTime}
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default function BlogList() {
  return (
    <section className="w-full py-10 px-4 md:px-12 pt-40 bg-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-lg md:text-3xl tracking-tight text-black uppercase mb-2">
          Blogs
        </h2>
        <div className="w-full h-[1px] bg-gray-500 mb-6"></div>
        {/* <p className="text-sm text-gray-500 max-w-xl">
          Insights, guides, and updates from Dwell Rich Designz on residential design, construction, and interior trends.
        </p> */}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
}
