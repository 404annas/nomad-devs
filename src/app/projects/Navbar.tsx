import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/logo.webp";

const Navbar = () => {
    return (
        <nav className="w-full h-[80px] bg-[#0A0A0A] flex items-center justify-between px-8 md:px-10 border-b border-white/5 sticky top-0 z-50">

            {/* --- LEFT: LOGO SECTION --- */}
            <div className="flex items-center gap-5">

                {/* Logo Image Container - Fixed 48x48 box with border */}
                <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                    <Link href={"/"}>
                        <Image
                            src={logo}
                            alt='Dwell Rich Designz'
                            fill
                            className="object-contain p-1 invert brightness-0"
                        />
                    </Link>
                </div>
            </div>

            {/* --- CENTER: NAVIGATION PILL --- */}
            <div className="hidden md:flex items-center bg-[#282828] rounded-full px-8 py-3 gap-5 -translate-x-11">
                <div className="flex items-center gap-5">
                    <NavLink text="HOME" link="/"/>
                    <Separator />
                    <NavLink text="ABOUT US" link='/about'/>
                    <Separator />
                    <NavLink text="PORTFOLIO" link='/projects'/>
                    <Separator />
                    <NavLink text="CONTACT US" link='/contact'/>
                </div>
            </div>

            {/* --- RIGHT: BUTTON --- */}
            <div>
                <Link href={"/contact"} className="group flex items-center gap-3 border border-white px-6 py-3 text-white text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer ease-in-out hover:bg-white hover:text-black">
                    078033 2689 | hello@designz.dwell-rich.com
                    <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </nav>
    );
};

// --- Sub-Components ---

interface NavLinkProps {
    text: string;
    link: string;
}

// 1. Navigation Link with Left-to-Right Hover Line
const NavLink = ({ text, link }: NavLinkProps) => {
    return (
        <Link href={link} className="relative group text-white text-xs font-medium tracking-wide py-1">
            {text}
            {/* The Line Animation: Width grows from 0 to 100% */}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
    );
};

// 2. The Dash Separator
const Separator = () => (
    <span className="text-gray-400 text-xs select-none">•</span>
);

export default Navbar;