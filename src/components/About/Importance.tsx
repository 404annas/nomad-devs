"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CircleCheck } from 'lucide-react';

import importanceImg from "@/assets/heroMain3.png"

export const Importance = () => {
    return (
        <section className="w-full py-10 bg-white px-4 sm:px-6 md:px-12 pt-40 sm:pt-50">
            {/* 1. Top Heading & Description */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center mb-10"
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] mb-6 tracking-tight">
                    Our Design Process
                </h2>
                <p className="text-sm md:text-base text-black leading-tight max-w-3xl mx-auto">
                    Every project is unique. We take time to understand your vision and create a strategy that reflects your individuality while drawing on our technical knowledge and craftsmanship. With our network of architects, structural engineers, contractors, and skilled tradespeople, we ensure a smooth process and an exceptional result. 
                </p>
            </motion.div>

            {/* 2. The Two Boxes (Image Slider & Text Box) */}
            <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto gap-4 sm:gap-8 items-stretch">

                {/* Left Box: Large Image Slider */}
                <div className="lg:w-3/4 relative md:min-h-[550px]">
                    <Image
                        src={importanceImg.src}
                        alt="Luxury Interior"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Box: Content Box */}
                <div className="w-full lg:w-[35%] bg-[#F7F6F2] p-6 sm:p-10 md:p-12 flex flex-col justify-center relative min-h-[400px]">
                    <div className="max-w-lg">
                        <p className="text-sm md:text-base text-black leading-tight mb-4">
                            Whether it’s a high-end residential renovation, a mid-size residential, a bespoke joinery commission, or a commercial project, we deliver spaces that balance style, function, and durability. 
                        </p>
                        <div className='flex flex-col gap-2 mb-8'>
                            <div className='flex items-center gap-2'>
                                <CircleCheck size={18}/>
                                <p className="text-sm md:text-base text-black leading-tight font-medium">Work with Professional Process</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CircleCheck size={18}/>
                                <p className="text-sm md:text-base text-black leading-tight font-medium">Close Multi-Sectoral Cooperation</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CircleCheck size={18}/>
                                <p className="text-sm md:text-base text-black leading-tight font-medium">Bespoke - Customer Centric</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CircleCheck size={18}/>
                                <p className="text-sm md:text-base text-black leading-tight font-medium">Apply & Always Innovate Technology</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CircleCheck size={18}/>
                                <p className="text-sm md:text-base text-black leading-tight font-medium">Combining Creativity with Practice</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <CircleCheck size={18}/>
                                <p className="text-sm md:text-base text-black leading-tight font-medium">Ensuring Sustainability & Friendliness</p>
                            </div>
                        </div>

                        <a
                            href="/projects"
                            className="text-xs uppercase font-medium border-b border-black pb-1 hover:opacity-60 transition-all duration-300"
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Bottom Navigation Arrows (Exact same as screenshot) */}
                    <div className="absolute lg:block hidden bottom-10 left-10 md:left-16 flex gap-6 text-[#1a1a1a]/30">
                        <ArrowLeft size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                        <ArrowRight size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Importance;