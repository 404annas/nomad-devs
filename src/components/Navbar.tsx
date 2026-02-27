"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.webp";
import { Menu, X, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`
                absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-4 transition-colors duration-300
                ${isHomePage ? "text-black" : "text-black"} 
                project-navbar
            `}>

                {/* ======================= */}
                {/*    DESKTOP VIEW (lg+)   */}
                {/* ======================= */}
                <div className="hidden lg:grid grid-cols-3 items-center w-full">
                    {/* Left Links */}
                    <div className="flex gap-8 xl:gap-10 items-center justify-end whitespace-nowrap">
                        <NavLink href="/" text="Home" />
                        <NavLink href="/about" text="About" />
                        <NavLink href="/projects" text="Projects" />
                        {/* <NavLink href="/services" text="Services" /> */}
                        <NavLink href="/contact" text="Contact" />
                    </div>

                    {/* Center Logo */}
                    <div className="flex justify-center">
                        <Link href={"/"} className="relative w-40 md:w-64 h-24 md:h-32">
                            <Image
                                src={logo}
                                alt='Nomad Logo'
                                fill
                                priority
                                className='object-contain'
                            />
                        </Link>
                    </div>

                    {/* Right Links (Icons + Contact + WhatsApp) */}
                    <div className="flex gap-4 xl:gap-6 items-center justify-end whitespace-nowrap">

                        {/* Phone */}
                        <a href='tel:07803326891' className='flex items-center gap-2 uppercase tracking-tight text-sm xl:text-base font-semibold cursor-pointer hover:opacity-70 transition-opacity'>
                            <Phone size={16} />
                            <span>078033 26891</span>
                        </a>

                        {/* Email */}
                        <a href='mailto:hello@designz.dwell-rich.com' className='flex items-center gap-2 uppercase tracking-tight text-sm xl:text-base font-semibold cursor-pointer hover:opacity-70 transition-opacity'>
                            <Mail size={16} />
                            <span>hello@designz.dwell-rich.com</span>
                        </a>

                        {/* WhatsApp Button */}
                        <a
                            href='https://wa.me/07803326891'
                            target='_blank'
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 bg-[#25D366] text-white px-3 py-3 rounded-full hover:bg-[#20bd5a] transition-colors duration-300 text-sm font-semibold shadow-sm'
                        >
                            <FaWhatsapp size={22} fill="white" className="text-white" />
                        </a>
                    </div>
                </div>

                {/* ======================= */}
                {/*    MOBILE VIEW (< lg)   */}
                {/* ======================= */}
                <div className="lg:hidden flex justify-between items-center">
                    {/* Mobile Logo */}
                    <Link href={"/"} className="relative w-32 h-16 sm:w-40 sm:h-20 z-50">
                        <Image
                            src={logo}
                            alt='Nomad Logo'
                            fill
                            priority
                            className='object-contain'
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-black z-50 focus:outline-none"
                    >
                        <Menu size={22} strokeWidth={1.5} />
                    </button>
                </div>
            </nav>

            {/* ======================= */}
            {/*    MOBILE SLIDE MENU    */}
            {/* ======================= */}
            <div className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Drawer */}
                <div className={`
                    absolute top-0 right-0 h-full w-[90%] md:w-[450px] bg-[#FDFDFD] shadow-2xl 
                    flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>

                    {/* --- Sidebar Header --- */}
                    <div className="flex justify-between items-center p-6 pb-4">
                        {/* Logo inside Sidebar */}
                        <div className="relative w-24 h-16 opacity-80">
                            <Image src={logo} alt="Logo" fill className="object-contain" />
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={22} strokeWidth={1} />
                        </button>
                    </div>

                    {/* --- Sidebar Links (Middle) --- */}
                    <div className="flex flex-col gap-2 px-8 mt-4 overflow-y-auto flex-1">
                        <MobileLink href="/" text="Home" onClick={() => setIsMobileMenuOpen(false)} />
                        <MobileLink href="/about" text="About" onClick={() => setIsMobileMenuOpen(false)} />
                        <MobileLink href="/projects" text="Projects" onClick={() => setIsMobileMenuOpen(false)} />
                        {/* <MobileLink href="/services" text="Services" onClick={() => setIsMobileMenuOpen(false)} /> */}
                        <MobileLink href="/contact" text="Contact" onClick={() => setIsMobileMenuOpen(false)} />
                    </div>

                    {/* --- Sidebar Footer (Dark Contact Block) --- */}
                    <div className="bg-[#111] p-8 mt-auto text-white">
                        <p className="text-xs text-gray-400 font-medium tracking-widest uppercase mb-6">Get in touch</p>

                        <div className="flex flex-col gap-2">
                            <a href='tel:0780332689' className='flex items-center gap-4 group cursor-pointer'>
                                <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="text-lg font-light tracking-wide">078033 2689</span>
                            </a>

                            <a href='mailto:hello@designz.dwell-rich.com' className='flex items-center gap-4 group cursor-pointer'>
                                <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm md:text-base font-light tracking-wide break-all">hello@designz.dwell-rich.com</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

// Helper Component for Desktop Links
const NavLink = ({ href, text }: { href: string; text: string }) => (
    <Link href={href} className="relative group uppercase tracking-tight text-base font-semibold">
        {text}
        <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
    </Link>
);

// Helper Component for Mobile Links (Enhanced)
const MobileLink = ({ href, text, onClick }: { href: string; text: string; onClick: () => void }) => (
    <Link
        href={href}
        onClick={onClick}
        className="group flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0 hover:pl-2 transition-all duration-300"
    >
        <span className="text-base font-serif text-[#1a1a1a] uppercase tracking-wide group-hover:text-black">
            {text}
        </span>
        <ArrowRight size={20} className="text-gray-700 group-hover:text-black transition-colors" />
    </Link>
);

export default Navbar;