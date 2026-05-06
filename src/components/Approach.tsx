"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    count: number;
}

interface FeatureCardProps extends Feature {
    index: number;
}

// --- Floating Animation (Continuous Loop) ---
const floatingVariants: Variants = {
    animate: (i: number) => ({
        y: [0, -10, 0],
        rotate: [0, i % 2 === 0 ? 3 : -3, 0],
        transition: {
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
        }
    })
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, count, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className="relative flex flex-col items-start p-6 md:p-7 bg-[#F2F2F2] border-r border-b border-gray-300 min-h-[200px] overflow-hidden first:border-l"
        >

            {/* Corner Accent Line */}

            {/* --- Squares Container --- */}
            <div className="relative h-20 w-full mb-8">
                {[...Array(count)].map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute bg-black w-8 h-8"
                        style={{
                            top: `${i * 14}px`,
                            left: `${i * 12}px`,
                            zIndex: 10 - i,
                            opacity: 1 - i * 0.1,
                            transform: `rotate(${i * 10}deg)`
                        }}
                    />
                ))}
            </div>

            {/* --- Text Section --- */}
            <div className="mt-auto">
                <h2 className="text-base md:text-lg lg:text-xl font-medium tracking-tight mb-4 uppercase text-black leading-tight">
                    {title}
                </h2>
                <p className="text-gray-500 text-xs md:text-sm lg:text-base leading-normal">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default function ServicesGrid() {
    const services: Feature[] = [
        {
            title: "Value-Optimised Procurement",
            description: "Value-optimised procurement without compromising material quality or design intent.",
            count: 1
        },
        {
            title: "Client-Centric Approach",
            description: "Experience design with a personal touch! Your dreams, our blueprint—unleashing home décor excellence just for you!",
            count: 2
        },
        {
            title: "Environmental Responsibility",
            description: "Eco-chic transformations await! Dive into sustainable style with our budget-friendly, energy-smart designs!",
            count: 3
        },
        {
            title: "Attention to Detail",
            description: "Crafting perfection in every detail! From space wizardry to color mastery and texture symphonies—immerse yourself!",
            count: 4
        }
    ];

    return (
        <section className="bg-white py-10 px-4">
            <div className="max-w-[1100px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-3xl font-bold text-black text-center">Our Approach</h2>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-300">
                    {services.map((service, index) => (
                        <FeatureCard
                            key={index}
                            index={index}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
