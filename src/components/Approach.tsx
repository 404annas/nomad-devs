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
        y: [0, -10, 0], // Smooth up and down
        rotate: [0, i % 2 === 0 ? 3 : -3, 0], // Halka sa rotation swing
        transition: {
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
        }
    })
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, count, index }) => {
    return (
        <div className={`relative flex flex-col items-start p-8 md:p-10 bg-[#F2F2F2] border-r border-b border-gray-300 min-h-[460px] overflow-hidden first:border-l`}>
            
            {/* Corner Accent Line */}
            {/* <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-black/10" /> */}

            {/* --- Squares Container --- */}
            <div className="relative h-24 w-full mb-10">
                {[...Array(count)].map((_, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={floatingVariants}
                        animate="animate"
                        className="absolute bg-black w-10 h-10"
                        style={{
                            // Har square ki position image jaisi overlap mein
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
                <h2 className="text-lg md:text-xl font-medium tracking-tight mb-5 uppercase text-black leading-tight">
                    {title}
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-normal">
                    {description}
                </p>
            </div>
        </div>
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
            <div className="max-w-[1400px] mx-auto">
                {/* Fixed Grid for exactly 4 cards in a row on Desktop */}
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