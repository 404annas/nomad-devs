"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
    { id: 1, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1741081276053-8TIQKO3UUX3URQGW339O/Vogue.jpg?format=300w", alt: "Vogue" },
    { id: 2, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1741081275255-RJUTLVRF89MGXN9Y4Q79/GQ.jpg?format=300w", alt: "GQ" },
    { id: 3, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1741081276110-MX95R05NVTVV4FZ0PLCL/Tatler.jpg?format=300w", alt: "Tatler" },
    { id: 4, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1741081275261-P5SDYVKS3BRZR72OQAZW/House+and+Garden.jpg?format=300w", alt: "House & Garden" },
    { id: 5, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1721815980251-BFPUQ4SCQYR09S2KNBWM/Nomad+Developments+Press+The+List+Logo.jpg?format=300w", alt: "The List" },
    { id: 6, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1679312788209-VBYHUWB5SHI0CUBCH8TH/NOMAD-PRESS-9.jpg?format=300w", alt: "Wallpaper" },
    { id: 7, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1679312787726-S8N9Q03AZYAH62C58LY3/NOMAD-PRESS-5.jpg?format=300w", alt: "Country & Town House" },
    { id: 8, src: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1679312785609-6H5BQ29OEY1O0DO5JSDW/NOMAD-PRESS-11.jpg?format=300w", alt: "Conde Nast" }
];

const Featured = () => {
    return (
        <section className="w-full pb-10 bg-white px-6 md:px-12">
            {/* 1. Header Section */}
            <div className="w-full text-center mb-10 space-y-2">
                <span className="text-xs md:text-sm tracking-tight uppercase text-black font-medium">
                    PRESS
                </span>
                <h2 className="text-3xl md:text-5xl text-[#1a1a1a]">
                    We have been featured in
                </h2>
            </div>

            {/* 2. Logos Grid */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 items-center justify-items-center opacity-90">
                {logos.map((logo) => (
                    <motion.div
                        key={logo.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-8 md:h-50 flex items-center justify-center"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Featured;