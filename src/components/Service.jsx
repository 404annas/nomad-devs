"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Ruler, Sofa, Layers, Hammer, PenTool } from 'lucide-react'
import Image from "next/image"

import service1 from '@/assets/service1.jpg'
import service2 from '@/assets/service2.jpg'
import service3 from '@/assets/service3.jpg'
import service4 from '@/assets/service4.jpg'
import service5 from '@/assets/service5.jpg'

const servicesData = [
    {
        id: "01",
        title: "ARCHITECTURAL DRAWINGS [ARCHITECTURAL SKETCH /MODEL]",
        desc: "Bespoke plans designed around your property and project goals",
        photo: service1.src,
        icon: <Ruler size={30} strokeWidth={1.3} />
    },
    {
        id: "02",
        title: "INTERIOR DESIGN [LUXURY INTERIOR STYLING]",
        desc: "Engineering solutions that guarantee strength, safety, and compliance",
        photo: service2.src,
        icon: <Sofa size={30} strokeWidth={1.3} />
    },
    {
        id: "03",
        title: "DEVELOPMENT & MASTER PLANNING [FEASIBILITY]",
        desc: "Complete project management for loft conversions, extensions, etc",
        photo: service3.src,
        icon: <Layers size={30} strokeWidth={1.3} />
    },
    {
        id: "04",
        title: "CONSTRUCTION & TURNKEY EXECUTION [SITE]",
        desc: "A seamless blend of interiors and craftsmanship, including mood boards, layouts, 2D/3D visuals, etc",
        photo: service4.src,
        icon: <Hammer size={30} strokeWidth={1.3} />
    },
    {
        id: "05",
        title: "JOINERY & CUSTOM CARFTMANSHIP",
        desc: "Elegant, functional environments for offices, retail, and hospitality",
        photo: service5.src,
        icon: <PenTool size={30} strokeWidth={1.3} />
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
                className='text-3xl md:text-4xl px-10 text-center font-bold mb-8'
            >
                Our Services
            </motion.h1>
            <div className="w-full bg-white px-4 pb-10">
                <div className="w-full max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-items-center">

                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                                whileHover={{ scale: 1.02 }}
                                className="group h-[190px] w-[190px] [perspective:1200px]"
                            >
                                {/* Inner Container: will-change-transform fix added */}
                                <div className="relative h-full w-full rounded-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform transform-gpu">

                                    {/* --- FRONT SIDE --- */}
                                    <div className="absolute inset-0 h-full w-full rounded-full border border-gray-400 [backface-visibility:hidden] flex items-center justify-center overflow-hidden shadow-sm cursor-pointer [transform:translateZ(0)]">
                                        <div className="absolute inset-0">
                                            <Image
                                                src={service.photo}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                                sizes="190px"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black/45"></div>
                                        <div className="absolute inset-1 rounded-full border border-white pointer-events-none"></div>

                                        <div className="relative flex flex-col items-center justify-center text-center p-4 z-10 [transform:translateZ(0)]">
                                            <span
                                                className="absolute text-[78px] sm:text-[88px] font-bold leading-none text-transparent select-none opacity-40"
                                                style={{
                                                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.65)',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                }}
                                            >
                                                {service.id}
                                            </span>

                                            <h3 className="relative text-sm font-medium uppercase tracking-tight text-white z-20 max-w-[135px] leading-4 drop-shadow-sm">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* --- BACK SIDE --- */}
                                    <div className="absolute inset-0 h-full w-full rounded-full bg-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] flex items-center justify-center px-4 text-center overflow-hidden [text-rendering:geometricPrecision]">
                                        <div className="relative z-10 flex flex-col items-center gap-2 [transform:translateZ(0)]">
                                            <span className="text-xl font-bold tracking-tighter leading-none">{service.id}</span>
                                            <p className="text-[10px] font-medium leading-tight max-w-[140px]">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
