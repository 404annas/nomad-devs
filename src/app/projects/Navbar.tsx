"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.webp";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Prevent scrolling when sidebar is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isSidebarOpen]);

    return (
        <>
            <nav className="w-full h-[80px] bg-[#0A0A0A] flex items-center justify-between px-6 md:px-10 border-b border-white/5 sticky top-0 z-50">

                {/* --- LEFT: LOGO SECTION --- */}
                <div className="flex items-center gap-5 z-50">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0">
                        <Link href={"/"} onClick={() => setIsSidebarOpen(false)}>
                            <Image
                                src={logo}
                                alt='Dwell Rich Designz logo'
                                fill
                                className="object-contain p-1 invert brightness-0"
                            />
                        </Link>
                    </div>
                </div>

                {/* --- CENTER: DESKTOP NAVIGATION (Hidden below lg) --- */}
                <div className="hidden lg:flex items-center bg-[#282828] rounded-full px-8 py-3 gap-5 -translate-x-8 xl:-translate-x-11">
                    <div className="flex items-center gap-5">
                        <NavLink text="HOME" link="/" />
                        <Separator />
                        <NavLink text="ABOUT US" link='/about' />
                        <Separator />
                        <NavLink text="PORTFOLIO" link='/projects' />
                        <Separator />
                        <NavLink text="OUR PROCESS" link='/process' />
                        <Separator />
                        <NavLink text="CONTACT US" link='/contact' />
                    </div>
                </div>

                {/* --- RIGHT: DESKTOP BUTTON (Hidden below lg) --- */}
                <div className="hidden lg:block">
                    <Link href={"/contact"} className="group flex items-center gap-3 border border-white px-6 py-3 text-white text-xs xl:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ease-in-out hover:bg-white hover:text-black">
                        078033 2689 | hello@designz.dwell-rich.com
                        <ArrowRight
                            size={18}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* --- MOBILE MENU TRIGGER (Visible below lg) --- */}
                <button 
                    onClick={() => setIsSidebarOpen(true)}
                    className="lg:hidden text-white p-2 focus:outline-none cursor-pointer hover:text-gray-300 transition-colors"
                >
                    <Menu size={22} />
                </button>
            </nav>

            {/* --- MOBILE SIDEBAR OVERLAY --- */}
            {/* Backdrop */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ease-in-out lg:hidden ${
                    isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Drawer */}
            <div 
                className={`fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-[#0A0A0A] border-l border-white/10 z-[70] transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden flex flex-col ${
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    {/* <Link href="/"><span className="text-white text-base font-serif tracking-wider">MENU</span></Link> */}
                    <Link href="/"><Image src={logo} alt='Dwell Rich Designz logo' className='w-15 invert brightness-0'/></Link>
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="text-white hover:text-gray-300 cursor-pointer transition-colors p-1"
                    >
                        <X size={22} strokeWidth={1.5} />
                    </button>
                </div>


                {/* Sidebar Links */}
                <div className="flex flex-col flex-1 p-6 gap-4 overflow-y-auto">
                    <MobileNavLink text="HOME" link="/" onClick={() => setIsSidebarOpen(false)} />
                    <MobileNavLink text="ABOUT US" link="/about" onClick={() => setIsSidebarOpen(false)} />
                    <MobileNavLink text="PORTFOLIO" link="/projects" onClick={() => setIsSidebarOpen(false)} />
                    <MobileNavLink text="OUR PROCESS" link="/process" onClick={() => setIsSidebarOpen(false)} />
                    <MobileNavLink text="CONTACT US" link="/contact" onClick={() => setIsSidebarOpen(false)} />
                </div>

                {/* Sidebar Footer (Contact Info) */}
                <div className="p-6 border-t border-white/10 bg-[#111]">
                    <div className="flex flex-col gap-2">
                        <Link href="tel:0780332689" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                            <Phone size={18} />
                            <span className="text-xs tracking-wide">078033 2689</span>
                        </Link>
                        <Link href="mailto:hello@designz.dwell-rich.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                            <Mail size={18} />
                            <span className="text-xs tracking-wide break-all">hello@designz.dwell-rich.com</span>
                        </Link>
                        
                        <Link href={"/contact"} onClick={() => setIsSidebarOpen(false)} className="mt-4 w-full group flex items-center justify-center gap-3 border border-white px-6 py-4 text-white text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ease-in-out hover:bg-white hover:text-black">
                            GET IN TOUCH
                            <ArrowRight
                                size={18}
                                strokeWidth={1.5}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Website & WhatsApp Buttons */}
            <div className='fixed bottom-5 right-5 z-[70] flex flex-col gap-2 items-center'>
                {/* Website Icon with Popup */}
                <div className='relative group'>
                    {/* Popup Tooltip */}
                    <div className='absolute bottom-full left-1/3 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none'>
                        Visit Website
                        {/* Arrow */}
                        <div className='absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black'></div>
                    </div>
                    {/* Website Icon */}
                    <a
                        href='https://designz-silk.vercel.app/'
                        target='_blank'
                        rel="noopener noreferrer"
                        aria-label="Visit Website"
                        className='flex items-center justify-center h-14 w-14 rounded-full bg-[#1a1a1a] text-white shadow-lg hover:bg-[#333] transition-all duration-300 animate-bounce'
                    >
                        <FaGlobe size={26} />
                    </a>
                </div>

                {/* WhatsApp Icon */}
                <a
                    href='https://wa.me/07803326891'
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className='flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] transition-colors duration-300'
                >
                    <FaWhatsapp size={26} fill="white" className="text-white" />
                </a>
            </div>
        </>
    );
};

// --- Sub-Components ---

interface NavLinkProps {
    text: string;
    link: string;
}

// 1. Desktop Nav Link
const NavLink = ({ text, link }: NavLinkProps) => {
    return (
        <Link href={link} className="relative group text-white text-xs font-medium tracking-wide py-1">
            {text}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
    );
};

// 2. Mobile Nav Link
const MobileNavLink = ({ text, link, onClick }: NavLinkProps & { onClick: () => void }) => {
    return (
        <Link 
            href={link} 
            onClick={onClick}
            className="group flex items-center justify-between text-white text-sm font-light tracking-wide border-b border-white/5 last:border-b-0 pb-2"
        >
            {text}
            <ArrowRight size={18} className="text-white/30 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
        </Link>
    );
};

// 3. The Dash Separator
const Separator = () => (
    <span className="text-gray-400 text-xs select-none">•</span>
);

export default Navbar;
