"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const Founder = () => {
    return (
        <section className="w-full bg-white px-6 md:px-12">
            {/* Split Layout: Image on Left, Content on Right */}
            <div className="flex flex-col md:flex-row w-full gap-8 items-stretch">

                {/* 1. Left Column: Image Container */}
                <div className="w-full md:w-[40%] relative min-h-[500px] md:min-h-[500px]">
                    <Image
                        src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/b9023445-4802-43dd-8363-e55f3dc31579/KRL452-Nomad-Oakley-Gardens-40-1404.jpg?format=1500w"
                        alt="Jack Simpson - Founder & Creative Director"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* 2. Right Column: Text Content */}
                {/* bg-[#F4F3EF] matches the soft off-white/beige background */}
                <div className="w-full md:w-[60%] bg-[#F4F3EF] flex flex-col justify-center px-8 md:px-24 py-10">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-lg"
                    >
                        {/* Name and Title */}
                        <h2 className="text-2xl md:text-3xl text-[#1a1a1a] mb-1">
                            Jack Simpson
                        </h2>
                        <p className="text-xs md:text-sm text-[#1a1a1a] mb-10">
                            Founder & Creative Director
                        </p>

                        {/* Detailed Description */}
                        <div className="space-y-4 text-black text-sm md:text-base leading-tight font-medium">
                            <p>
                                Jack is the creative mind behind Nomad, blending inspired interior design
                                with practical commercial insight. With over 15 years of experience in
                                development and design, he has successfully managed residential projects
                                totalling more than £250 million, ranging from contemporary multi-unit
                                developments to meticulous heritage restorations and bespoke private homes.
                            </p>
                            <p>
                                Jack&apos;s design philosophy emphasises timeless elegance and architectural
                                honesty, balancing beauty, functionality, and enduring value. His keen eye
                                for proportion, materials, antiques, and artwork ensures that each project is
                                thoughtfully curated, welcoming, and uniquely lasting.
                            </p>
                            <p>
                                Under Jack&apos;s leadership, Nomad has delivered award-winning projects that
                                redefine modern luxury, crafting homes that are as inviting and liveable as
                                they are beautifully designed.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Founder;