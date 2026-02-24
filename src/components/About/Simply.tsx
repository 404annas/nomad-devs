"use client";

import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

import homeProject6 from "@/assets/homeProject6.webp"

const data = [
    {
        id: 1,
        title: "Trade Discounts",
        desc: "Revolutionize your savings! Trade discounts that redefine convenience—more time, more money, all for you!"
    },
    {
        id: 2,
        title: "Client-Centric Approach",
        desc: "Experience design with a personal touch! Your dreams, our blueprint—unleashing home décor excellence just for you!"
    },
    {
        id: 3,
        title: "Environmental Responsibility",
        desc: "Eco-chic transformations await! Dive into sustainable style with our budget-friendly, energy-smart designs!"
    },
    {
        id: 4,
        title: "Attention to detail",
        desc: "Crafting perfection in every detail! From space wizardry to color mastery and texture symphonies—immerse yourself in spaces where harmony meets sophistication!"
    },
]

const Simply = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    return (
        <div className="flex flex-col lg:flex-row-reverse w-full max-w-[1400px] mx-auto gap-4 sm:gap-8 pb-10 bg-white px-4 sm:px-6 md:px-12 items-stretch">

            {/* Left Box: Large Image Slider */}
            <div className="lg:w-3/4 relative md:min-h-[550px]">
                <Image
                    src={homeProject6.src}
                    alt="Luxury Interior"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Right Box: Content Box */}
            <div className="w-full lg:w-[35%] bg-[#F7F6F2] p-8 sm:p-10 md:p-12 flex flex-col justify-center relative min-h-[400px]">
                <div className="max-w-lg transition-opacity duration-300 ease-in-out">
                    <h1 className="text-2xl md:text-3xl font-serif mb-8">Our Procedure</h1>
                    {/* Dynamic Title */}
                    <h3 className="text-lg md:text-xl font-medium text-black mb-3">
                        {data[currentIndex].title}
                    </h3>

                    {/* Dynamic Description */}
                    <p className="text-sm md:text-base text-black leading-tight mb-8">
                        {data[currentIndex].desc}
                    </p>
                </div>  

                {/* Bottom Navigation Arrows */}
                <div className="absolute bottom-10 left-10 md:left-16 flex gap-6 text-[#1a1a1a]/30">
                    <ArrowLeft
                        onClick={handlePrev}
                        size={20}
                        className="cursor-pointer hover:text-black transition-all duration-300"
                        strokeWidth={1.5}
                    />
                    <ArrowRight
                        onClick={handleNext}
                        size={20}
                        className="cursor-pointer hover:text-black transition-all duration-300"
                        strokeWidth={1.5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Simply