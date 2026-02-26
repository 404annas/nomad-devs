"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Ruler, Sofa, Layers, Hammer, PenTool } from 'lucide-react'

const servicesData = [
    {
        id: "01",
        title: "ARCHITECTURAL DRAWINGS [ARCHITECTURAL SKETCH /MODEL]",
        desc: "Bespoke plans designed around your property and project goals",
        icon: <Ruler size={40} strokeWidth={1.2} />
    },
    {
        id: "02",
        title: "INTERIOR DESIGN [LUXURY INTERIOR STYLING]",
        desc: "Engineering solutions that guarantee strength, safety, and compliance",
        icon: <Sofa size={40} strokeWidth={1.2} />
    },
    {
        id: "03",
        title: "DEVELOPMENT & MASTER PLANNING [FEASIBILITY]",
        desc: "Complete project management for loft conversions, extensions, refurbishments, and full home transformations",
        icon: <Layers size={40} strokeWidth={1.2} />
    },
    {
        id: "04",
        title: "CONSTRUCTION & TURNKEY EXECUTION [SITE]",
        desc: "A seamless blend of interiors and craftsmanship, including mood boards, layouts, 2D/3D visuals, custom kitchens, wardrobes, furniture, and specialist finishes",
        icon: <Hammer size={40} strokeWidth={1.2} />
    },
    {
        id: "05",
        title: "JOINERY & CUSTOM CARFTMANSHIP",
        desc: "Elegant, functional environments for offices, retail, and hospitality",
        icon: <PenTool size={40} strokeWidth={1.2} />
    }
];

const Service = () => {
    return (
        <>
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className='text-4xl px-10 text-center font-serif mb-8 mt-10'
            >
                Our Services
            </motion.h1>
            <div className="w-full min-h-screen bg-white py-10 px-4 flex justify-center items-center">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">

                    {servicesData.map((service, index) => (
                        <motion.div 
                            key={service.id} 
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                            className="group h-[300px] w-[300px] [perspective:1200px]"
                        >
                            {/* Inner Container: will-change-transform fix added */}
                            <div className="relative h-full w-full rounded-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform">

                                {/* --- FRONT SIDE --- */}
                                <div className="absolute inset-0 h-full w-full rounded-full bg-[#f4f4f2] border border-gray-400 [backface-visibility:hidden] flex items-center justify-center overflow-hidden shadow-sm cursor-pointer antialiased">
                                    <div className="absolute inset-2 rounded-full border border-white pointer-events-none"></div>

                                    <div className="relative flex flex-col items-center justify-center text-center p-6 z-10 [transform:translateZ(0)]">
                                        <span
                                            className="absolute text-[140px] sm:text-[160px] font-bold leading-none text-transparent select-none opacity-40"
                                            style={{
                                                WebkitTextStroke: '1px #cccccc', // Thinner stroke to prevent blurring
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            {service.id}
                                        </span>

                                        <h3 className="relative text-xl font-medium uppercase tracking-tight text-black z-20 max-w-[200px] leading-6 drop-shadow-sm">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* --- BACK SIDE --- */}
                                <div className="absolute inset-0 h-full w-full rounded-full bg-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center px-8 text-center antialiased">
                                    {/* translateZ(1px) aur backface-visibility fix */}
                                    <div className="flex flex-col items-center gap-3 -mt-6 [transform:translateZ(60px)] scale-90">
                                        <div className="mb-1 text-gray-300">
                                            {service.icon}
                                        </div>
                                        <span className="text-4xl font-bold tracking-tighter">{service.id}</span>
                                        <p className="text-sm font-medium leading-normal">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Service