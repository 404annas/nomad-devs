"use client";
import React, { useEffect, useRef } from 'react'
import { ShieldCheck, Gem, ListChecks, Coins, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        id: 1,
        title: "Premium Client Experience",
        description: "Seamless communication, detailed reporting, and total transparency.",
        icon: ShieldCheck,
    },
    {
        id: 2,
        title: "Material & Detail Mastery",
        description: "An obsession with finishes, lighting, and craftsmanship executed perfectly.",
        icon: Gem,
    },
    {
        id: 3,
        title: "End-to-End Accountability",
        description: "We take full ownership from the first sketch to the final handover.",
        icon: ListChecks,
    },
    {
        id: 4,
        title: "ROI-Aware Planning",
        description: "Value engineering without compromising luxury or design integrity.",
        icon: Coins,
    },
    {
        id: 5,
        title: "International Luxury Standard",
        description: "Refined design language with globally aligned execution standards.",
        icon: Globe,
    }
]

const WhyChooseUs = () => {
    // Video element ko target karne ke liye ref
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            // Video ki speed yahan se set hogi (2.0 ka matlab double speed)
            videoRef.current.playbackRate = 4.0;
        }
    }, []);

    return (
        <section className="w-full bg-white py-10 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* --- Left Side: Header & Points --- */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-tight">
                                Why Clients <span className="text-gray-400">Choose Us?</span>
                            </h2>
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="w-47 h-[2px] bg-black mt-2 mx-auto lg:mx-0 origin-left"
                            ></motion.div>
                        </motion.div>

                        {/* Points List */}
                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                                    className="group flex items-start gap-5 bg-gray-100 p-3 rounded-xl"
                                >
                                    {/* Icon Container */}
                                    <div className="mt-1 w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-black border-black transition-all duration-500 shadow-sm">
                                        <feature.icon
                                            strokeWidth={1.5}
                                            size={24}
                                            className="text-white"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col">
                                        <h3 className="text-base lg:text-lg font-semibold uppercase tracking-tight text-black mb-1 group-hover:text-gray-700 transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm lg:text-base text-gray-500 font-light leading-tight">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- Right Side: Video Section --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[750px]"
                    >
                        <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-50">
                            <video
                                // ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/videos/choose.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs