"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";

// Import your images here
import img1 from "@/assets/project3-4.webp"; // Replace with your image
import img2 from "@/assets/home9.jpeg"; // Replace with your image
import img3 from "@/assets/project11-11.jpg"; // Replace with your image
import img4 from "@/assets/project11-3.webp"; // Replace with your image

// Load the script font
const scriptFont = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const CTA = () => {
    return (
        <section className="w-full px-4 pb-10 md:px-8 lg:px-10 flex justify-center">
            <div className="w-full flex flex-col lg:flex-row rounded-xl overflow-hidden min-h-[400px]">

                {/* ======================== */}
                {/*       LEFT SECTION       */}
                {/* ======================== */}
                <div className="bg-gray-100 flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start relative">

                    {/* Small Heading */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-0 tracking-tight">
                        Let&apos;s Create
                    </h3>

                    {/* Cursive Heading */}
                    <h2 className={`${scriptFont.className} text-5xl sm:text-6xl md:text-7xl font-black text-black leading-none mb-6 mt-10`}>
                        Something Exceptional
                    </h2>

                    {/* Paragraph */}
                    <p className="text-black/90 text-base md:text-lg leading-normal mb-8 max-w-lg font-medium">
                        Whether you&apos;re planning a luxury residence, a commercial development,
                        or a hospitality investment we deliver design excellence with execution confidence.
                    </p>

                    {/* Button */}
                    <Link href="/contact">
                        <button className="bg-[#111] text-white text-sm md:text-base font-medium px-8 py-4 rounded-lg hover:scale-95 transition-all duration-300 cursor-pointer uppercase tracking-wide">
                            Book a Free Consultation
                        </button>
                    </Link>
                </div>

                {/* ======================== */}
                {/*       RIGHT SECTION      */}
                {/* ======================== */}
                {/* The background color is slightly darker/browner here as per design */}
                <div className="bg-black lg:w-[45%] px-4 py-10 flex items-center justify-center">

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-4 w-full h-full max-w-md lg:max-w-[400px]">

                        {/* Image 1 */}
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                            <Image
                                src={img1}
                                alt="Luxury kitchen and bar interior design project in South London"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                            <Image
                                src={img2}
                                alt="Residential home renovation and interior styling project in Surrey"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Image 3 */}
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                            <Image
                                src={img3}
                                alt="Bespoke bathroom interior design and build project in Central London"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Image 4 */}
                        <div className="relative w-full aspect-square overflow-hidden rounded-sm">
                            <Image
                                src={img4}
                                alt="Modern residential interior refurbishment project in North Surrey"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default CTA;
