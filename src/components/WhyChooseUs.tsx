"use client";
import React, { useEffect, useRef } from 'react' // useEffect aur useRef add kiya
import { ShieldCheck, Gem, ListChecks, Coins, Globe, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        id: 1,
        title: "Premium Client Experience",
        description: "Seamless communication, detailed reporting, and total transparency.",
        icon: Star,
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
        <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-10">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl font-serif text-black leading-tight">
                            Why Clients <span className="text-gray-400">Choose Us?</span>
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-48 h-[1px] bg-black mt-2 mx-auto lg:mx-0 origin-left"
                        ></motion.div>
                    </motion.div>

                    {/* --- Cards Container --- */}
                    <div className="w-full">
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    className="group flex flex-col p-8 rounded-xl border border-[#cacaca] bg-[#F3F2EE] transition-all duration-300 hover:border-black/10 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                >
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                        className="mb-6 w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 group-hover:bg-black group-hover:border-black transition-all duration-300"
                                    >
                                        <feature.icon
                                            size={20}
                                            className="text-gray-600 group-hover:text-white transition-colors"
                                        />
                                    </motion.div>

                                    <h3 className="text-base font-bold uppercase tracking-tight text-black mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-light leading-normal">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full h-[400px] lg:h-[500px]"
                    >
                        <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-50">
                            <video
                                ref={videoRef} // Ref yahan attach kar di
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/videos/chooseVideo.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs