"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ChevronRight, ChevronDown, CircleCheck } from "lucide-react";
import type { Blog, ContentBlock } from "@/data/blogs";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-base leading-[1.85] text-gray-700">
                {block.text}
              </p>
            );

          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={i}
                  className="text-xl md:text-2xl font-medium tracking-tight text-black mt-12 mb-4"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={i}
                className="text-lg font-semibold tracking-tight text-black mt-8 mb-3"
              >
                {block.text}
              </h3>
            );

          case "quick-answer":
            return (
              <div
                key={i}
                className="bg-[#f2f2f2] border-l-4 border-black p-6 my-8 rounded-r-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Quick Answer
                </p>
                <p className="text-base leading-relaxed text-gray-800">
                  {block.text}
                </p>
              </div>
            );

          case "checklist":
            return (
              <ul key={i} className="space-y-3 my-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-gray-700 leading-relaxed">
                    <CircleCheck size={16} className="mt-1.5 text-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );

          case "ordered-list":
            return (
              <ol key={i} className="space-y-4 my-4">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-4 text-base text-gray-700 leading-relaxed">
                    <span className="mt-1 w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );

          case "decision-box":
            return (
              <div
                key={i}
                className="bg-black text-white p-6 my-8 rounded-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Decision Checkpoint
                </p>
                <p className="text-base leading-relaxed">{block.text}</p>
              </div>
            );

          case "important-box":
            return (
              <div
                key={i}
                className="bg-[#f2f2f2] border-l-4 border-black p-6 my-8 rounded-r-lg"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
                  Important Distinction
                </p>
                <p className="text-base leading-relaxed text-gray-800">
                  {block.text}
                </p>
              </div>
            );

          case "table":
            return (
              <div key={i} className="my-8 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-black text-white">
                      {block.headers.map((h, j) => (
                        <th key={j} className="text-left px-4 py-3 font-semibold uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className={j % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"}>
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-3 text-gray-700 border-b border-gray-200">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "faq-question":
            return (
              <FAQItem
                key={i}
                question={block.question}
                answer={block.answer}
              />
            );

          case "cta":
            return (
              <div key={i} className="my-12 text-center">
                <p className="text-lg font-semibold text-black mb-4">
                  {block.text}
                </p>
                <a
                  href={block.href}
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
                >
                  Book a Consultation
                  <ChevronRight size={16} />
                </a>
              </div>
            );

          case "note":
            return (
              <p key={i} className="text-sm text-gray-400 leading-relaxed my-1">
                {block.text}
              </p>
            );

          case "rich-text":
            return (
              <p key={i} className="text-base leading-[1.85] text-gray-700">
                {block.parts.map((part, j) => {
                  let content = <span key={j}>{part.text}</span>;
                  if (part.bold) {
                    content = <strong key={j} className="font-medium text-black">{content}</strong>;
                  }
                  if (part.href) {
                    content = (
                      <a key={j} href={part.href} className="font-medium text-black underline decoration-1 underline-offset-2 hover:text-gray-600 transition-colors">
                        {content}
                      </a>
                    );
                  }
                  return content;
                })}
              </p>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span className="text-base font-semibold text-black">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function BlogDetail({ blog }: { blog: Blog }) {
  return (
    <section className="w-full bg-white min-h-screen">
      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src={blog.image}
          alt={blog.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-[1100px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Blog
                </span>
                <span className="flex items-center gap-1.5 text-white/90 text-xs">
                  <Calendar size={12} />
                  {blog.publishedAt}
                </span>
                <span className="flex items-center gap-1.5 text-white/90 text-xs">
                  <Clock size={12} />
                  {blog.readTime}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                {blog.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Meta */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.div
          {...fadeUp}
          className="flex items-center gap-4 py-6 border-b border-gray-200"
        >
          <div className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center">
            <User size={18} className="text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-black">{blog.author}</p>
            <p className="text-xs text-gray-600">
              Published {blog.publishedAt} · {blog.readTime}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Article Body */}
      <motion.article
        {...fadeUp}
        className="max-w-[1100px] mx-auto px-6 md:px-10 py-10"
      >
        <div className="flex flex-col gap-5">
          <ContentRenderer blocks={blog.content} />
        </div>
      </motion.article>
    </section>
  );
}
