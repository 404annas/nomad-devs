'use client'

import logo from "@/assets/logo.webp"
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from "next/image"

export default function Footer2() {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-4 pb-4 px-8 md:px-16 border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">

                {/* --- MAIN GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-10">

                    {/* Column 1: Brand (Span 4) */}
                    <div className="md:col-span-4 flex flex-col gap-2">
                        <div className="relative w-30 h-30 p-2">
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Logo"
                                    fill
                                    className="object-contain invert brightness-0 p-2"
                                />
                            </Link>
                        </div>
                        <p className="text-gray-300 text-sm max-w-xs leading-normal">
                            Crafting sophisticated spaces with a blend of modern aesthetics and functional design.
                        </p>
                        <p className="text-sm">Company Registeration: (12592480)</p>
                    </div>

                    {/* Column 2: Quick Links (Span 2) */}
                    <div className="md:col-span-2 flex flex-col gap-4 pt-4">
                        <h4 className="text-xs tracking-wider uppercase text-gray-400 font-bold mb-2">Navigation</h4>
                        <nav className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-medium">
                            <FooterLink href="/" text="Home" />
                            <FooterLink href="/projects" text="Projects" />
                            <FooterLink href="/about" text="About Us" />
                            <FooterLink href="/services" text="Services" />
                        </nav>
                    </div>

                    {/* Column 3: Contact (Span 3) */}
                    <div className="md:col-span-3 flex flex-col gap-4 pt-4">
                        <h4 className="text-xs uppercase text-gray-400 font-bold mb-2">Get in Touch</h4>
                        <div className="text-xs space-y-3 tracking-widest leading-relaxed uppercase">
                            <p className="hover:text-gray-400 cursor-pointer transition-colors duration-300 flex items-center gap-2"><Phone size={15} /> 078033 26891</p>
                            <p className="hover:text-gray-400 cursor-pointer transition-colors duration-300 flex items-center gap-2"><Mail size={15} /> hello@designz.dwell-rich.com</p>
                            <p className="hover:text-gray-400 cursor-pointer transition-colors duration-300 tracking-normal flex items-center gap-2">
                                <MapPin size={15} />
                                Kingston Road, Kingston upon Thames,<br /> Surrey, London, UK
                            </p>
                        </div>
                    </div>

                    {/* Column 4: Socials (Span 3) */}
                    <div className="md:col-span-3 flex flex-col items-start gap-6 pt-4">
                        <h4 className="text-xs uppercase text-gray-400 font-bold mb-2">Follow Us</h4>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                            <SocialIcon icon={<Facebook size={18} />} href="#" />
                            <SocialIcon icon={<Linkedin size={18} />} href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Sub-component for clean code (Navigation links)
const FooterLink = ({ href, text }: { href: string; text: string }) => (
    <Link href={href} className="group relative w-fit">
        <span className="group-hover:text-gray-400 transition-colors duration-300">{text}</span>
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
)

// Sub-component for Social Icons
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <a
        href={href}
        target="_blank"
        className="text-white hover:text-gray-400 transition-all duration-300 transform hover:-translate-y-1"
    >
        {icon}
    </a>
)