"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

import salehaImg from "@/assets/founder.webp"

const Founder = () => {
    return (
        <section className="w-full bg-white px-4 sm:px-6 md:px-12 pb-10 pt-40 sm:pt-50">
            {/* Split Layout: Image on Left, Content on Right */}
            <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-8 items-stretch">

                {/* 1. Left Column: Image Container */}
                <div className="w-full lg:w-[40%] relative min-h-[500px] md:min-h-[500px]">
                    <Image
                        src={salehaImg.src}
                        alt="Saleha Ali Khan - Founder Of Dwell Rich Designz"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* 2. Right Column: Text Content */}
                {/* bg-[#F4F3EF] matches the soft off-white/beige background */}
                <div className="w-full lg:w-[60%] bg-gray-100 flex flex-col justify-center px-4 sm:px-8 md:px-24 py-10">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-lg"
                    >
                        {/* Name and Title */}
                        <h2 className="text-2xl md:text-3xl text-[#1a1a1a] font-medium mb-1">
                            Saleha Ali Khan
                        </h2>
                        <p className="text-xs md:text-sm text-[#1a1a1a] font-medium mb-10">
                            Founder Of Dwell Rich Designz
                        </p>

                        {/* Detailed Description */}
                        <div className="space-y-4 text-black text-sm md:text-base leading-tight">
                            <p>
                                I’m Saleha Ali Khan, and I founded Dwell Rich Designz with one clear vision: to create spaces that are not only beautifully designed but also flawlessly built. My background in interiors has given me a strong eye for detail, and today, with a full team by my side, we deliver projects that balance design, functionality, and long-lasting quality.
                            </p>
                            <p>
                                At Dwell Rich Designz, we are a comprehensive design and build company with a strong foothold in luxury interiors. We specialize in turnkey solutions, managing every aspect of a project — from architectural design and structural engineering to construction, interiors, and bespoke joinery. With a team of architects, surveyors, structural engineers, and contractors, we ensure seamless execution with precision and care.
                            </p>
                            <p>
                                At Dwell Rich Designz, we believe luxury is in the details — from natural light and thoughtful layouts to carefully selected materials and finishes. Every project is more than just a structure; it’s a space that carries your identity and enhances the way you live.
                            </p>
                            <p>We proudly cater to both mid-range and high-end projects, serving home buyers, developers, investors, and HNI clients who value quality construction, design innovation, and attention to detail.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Founder;