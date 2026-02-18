"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const Importance = () => {
    return (
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
                    Importance in every detail
                </h2>
                <p className="text-sm md:text-base text-black leading-tight max-w-lg mx-auto font-medium">
                    Nomad Developments is a London-based Real Estate Developer, full service
                    Interior Design Studio and Project Manager. Creating captivating and
                    meticulously well-considered spaces. For individuals. For families. For life.
                </p>
            </motion.div>

            {/* 2. The Two Boxes (Image Slider & Text Box) */}
            <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-8 items-stretch">

                {/* Left Box: Large Image Slider */}
                <div className="w-3/4 relative md:min-h-[550px]">
                    <Image
                        src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1741003097671-7P66W7W9IEOBPKHL0IE8/NomadPenthouse_0111_R_low.jpg"
                        alt="Luxury Interior"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Box: Content Box */}
                <div className="w-full md:w-[35%] bg-[#F7F6F2] p-10 md:p-12 flex flex-col justify-center relative min-h-[400px]">
                    <div className="max-w-lg">
                        <p className="text-sm md:text-base text-black leading-tight font-medium mb-8">
                            Our expertise covers multi-unit development projects, extensive
                            renovations and bespoke private projects. Working in collaboration
                            with a trusted team of highly skilled architects, designers and
                            craftspeople enables us to deliver our vision without compromise.
                        </p>

                        <a
                            href="/projects"
                            className="text-[11px] tracking-[0.2em] uppercase font-medium border-b border-black pb-1 hover:opacity-60 transition-opacity transition-all duration-300"
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Bottom Navigation Arrows (Exact same as screenshot) */}
                    <div className="absolute bottom-10 left-10 md:left-16 flex gap-6 text-[#1a1a1a]/30">
                        <ArrowLeft size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                        <ArrowRight size={20} className="cursor-pointer hover:text-black transition-all duration-300" strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Importance;