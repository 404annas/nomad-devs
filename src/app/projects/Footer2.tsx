'use client'

import logo from "@/assets/logo.webp"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react' // Icons ke liye
import Image from "next/image"

export default function Footer2() {
    return (
        <footer className="bg-black text-white pt-10 pb-10 px-6 md:px-10">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0 items-start">

                    {/* Column 1: Custom Logo (Exact as image) */}
                    <div className="col-span-1">
                        <div className="relative w-24 h-20">
                            <Link href={"/"}><Image src={logo} alt="Logo" fill className="w-20 h-20 invert brightness-0" /></Link>
                        </div>
                    </div>

                    {/* Column 2: Nav 1 */}
                    <div className="flex flex-col space-y-1 text-xs tracking-tight uppercase font-medium">
                        <Link href="/" className="hover:opacity-50 transition-all duration-300">Home</Link>
                        <Link href="/projects" className="hover:opacity-50 transition-all duration-300">Projects</Link>
                        <Link href="/about" className="hover:opacity-50 transition-all duration-300">About</Link>
                    </div>

                    {/* Column 3: Nav 2 */}
                    <div className="flex flex-col space-y-1 text-xs tracking-tight uppercase font-medium">
                        <Link href="/services" className="hover:opacity-50 transition-all duration-300">Services</Link>
                        <Link href="/contact" className="hover:opacity-50 transition-all duration-300">Contact</Link>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="flex flex-col space-y-1 text-xs tracking-tight uppercase font-medium">
                        <p>T: 078033 26891</p>
                        <p>E: hello@designz.dwell-rich.com</p>
                        <div className="pt-3">
                            <p>Kingston Road, Kingston upon thames, Surrey, London, UK</p>
                        </div>
                    </div>

                    {/* Column 5: Socials & Copyright (Far Right) */}
                    <div className="flex flex-col items-start md:items-end space-y-6">
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="https://myiartech.com/dwellrichwebsite/contact-us/#" target="_blank" className="hover:opacity-50 transition-all duration-300">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://myiartech.com/dwellrichwebsite/contact-us/#" target="_blank" className="hover:opacity-50 transition-all duration-300">
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                            <a href="https://myiartech.com/dwellrichwebsite/contact-us/#" target="_blank" className="hover:opacity-50 transition-all duration-300">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                        </div>

                        {/* Copyright Text (Aligned to the right) */}
                        <div className="text-[10px] tracking-[0.12em] leading-[1.8] uppercase text-left md:text-left font-medium ">
                            <p>©2026</p>
                            <p>Dwell-Rich Designz</p>
                            <p>ALL RIGHTS RESERVED</p>
                            <p>Developed By <a href="http://techxudo.com" target="_blank">Techxudo</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}