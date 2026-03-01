"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Service = () => {
    return (
        <>
            <section className="w-full py-10 bg-white px-6 md:px-12">
                {/* 1. Top Heading & Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl text-[#1a1a1a] mb-6 tracking-tight">
                        Bespoke Homes Without Compromise
                    </h2>
                    <p className="text-sm md:text-base text-black leading-tight max-w-lg mx-auto font-medium">
                        Our Private Client service combines award winning interior design with the rigour of real world project delivery. Drawing on years of experience crafting our own projects, we offer a level of project management few design studios can match. Every home is overseen by our dedicated in-house team. From early design detailing to full site coordination and final dressing. The result is a beautifully executed, highly personalised home, and a process that feels seamless from start to finish.
                    </p>
                </motion.div>

                {/* 2. The Two Boxes (Image Slider & Text Box) */}
                <div className="flex flex-col md:flex-row-reverse w-full max-w-[1400px] mx-auto gap-8 items-stretch">

                    {/* Left Box: Large Image Slider */}
                    <div className="w-3/4 relative md:min-h-[550px]">
                        <Image
                            src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1750861545502-26KAV2K6COF1OOAK1QSH/NomadPenthouse_0214_R_low.jpg"
                            alt="Luxury private client residential interior design and build project"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Box: Content Box */}
                    <div className="w-full md:w-[35%] bg-[#F7F6F2] p-10 md:p-12 flex flex-col justify-center relative min-h-[400px]">
                        <div className="max-w-lg">
                            <h1 className='font-semibold mb-4 text-2xl tracking-tight leading-none'>One Team. One Vision. Your Dream Home.</h1>
                            <p className="text-sm md:text-base text-black leading-tight font-medium mb-8">
                                We partner with a select number of clients each year, individuals and families who share our passion for quality, beauty, and intelligent design. Our collaborative process puts you at the heart of every decision, while our in-house team ensures continuity from concept to completion.
                            </p>
                        </div>

                        {/* Bottom Navigation Arrows (Exact same as screenshot) */}
                        <div className="absolute bottom-10 left-10 md:left-16 flex gap-6 text-[#1a1a1a]/30">
                            <ArrowLeft size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                            <ArrowRight size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full pb-10 bg-white px-6 md:px-12">
                {/* 2. The Two Boxes (Image Slider & Text Box) */}
                <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-8 items-stretch">

                    {/* Left Box: Large Image Slider */}
                    <div className="w-3/4 relative md:min-h-[550px]">
                        <Image
                            src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1750861545502-26KAV2K6COF1OOAK1QSH/NomadPenthouse_0214_R_low.jpg"
                            alt="Bespoke private client home renovation and interior construction project"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Box: Content Box */}
                    <div className="w-full md:w-[35%] bg-[#F7F6F2] p-10 md:p-12 flex flex-col justify-center relative min-h-[400px]">
                        <div className="max-w-lg">
                            <h1 className='font-semibold mb-4 text-2xl tracking-tight leading-none'>Built for you dreams.</h1>
                            <p className="text-sm md:text-base text-black leading-tight font-medium mb-8">
                                Our private client service takes the stress out of creating a bespoke, high-specification home. Our award winning in house design team combine our principles and expertise with your vision to deliver results you will love.
                            </p>
                        </div>

                        {/* Bottom Navigation Arrows (Exact same as screenshot) */}
                        <div className="absolute bottom-10 left-10 md:left-16 flex gap-6 text-[#1a1a1a]/30">
                            <ArrowLeft size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                            <ArrowRight size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
