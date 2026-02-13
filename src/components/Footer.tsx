'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react' // Icons ke liye

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-12 px-6 md:px-10 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0 items-start">
          
          {/* Column 1: Custom Logo (Exact as image) */}
          <div className="col-span-1">
            <div className="relative w-12 h-12">
                {/* Stylized N/Logo using SVG for precision */}
                <svg viewBox="0 0 40 40" className="w-full h-full">
                    {/* Vertical line */}
                    <line x1="10" y1="10" x2="10" y2="35" stroke="black" strokeWidth="1.5" />
                    {/* Diagonal line */}
                    <line x1="10" y1="10" x2="30" y2="35" stroke="black" strokeWidth="1.5" />
                    {/* Circle */}
                    <circle cx="32" cy="8" r="3" stroke="black" strokeWidth="1" fill="none" />
                </svg>
            </div>
          </div>

          {/* Column 2: Nav 1 */}
          <div className="flex flex-col space-y-1 text-[11px] tracking-[0.15em] uppercase font-medium">
            <Link href="/" className="hover:opacity-50 transition-opacity">Home</Link>
            <Link href="/projects" className="hover:opacity-50 transition-opacity">Projects</Link>
            <Link href="/about" className="hover:opacity-50 transition-opacity">About</Link>
          </div>

          {/* Column 3: Nav 2 */}
          <div className="flex flex-col space-y-1 text-[11px] tracking-[0.15em] uppercase font-medium">
            <Link href="/private-clients" className="hover:opacity-50 transition-opacity">Private Clients</Link>
            <Link href="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
            <Link href="/privacy-policy" className="hover:opacity-50 transition-opacity">Privacy Policy</Link>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col space-y-1 text-[10px] tracking-[0.15em] uppercase font-medium">
            <p>T: 020 3488 7202</p>
            <p>E: INFO@NOMADDEVELOPMENTS.COM</p>
            <div className="pt-3">
              <p>126 NEW KING&apos;S ROAD</p>
              <p>LONDON, SW6 4LZ</p>
            </div>
          </div>

          {/* Column 5: Socials & Copyright (Far Right) */}
          <div className="flex flex-col items-start md:items-end space-y-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity">
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>

            {/* Copyright Text (Aligned to the right) */}
            <div className="text-[10px] tracking-[0.12em] leading-[1.8] uppercase text-left md:text-left font-medium ">
              <p>©2025</p>
              <p>NOMAD PROPERTY LIMITED</p>
              <p>ALL RIGHTS RESERVED</p>
              <p>WEBSITE BY DESK.™</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}