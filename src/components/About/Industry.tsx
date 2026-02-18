"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const Industry = () => {
    return (
        <section className="w-full py-10 bg-white px-6 md:px-12">
            {/* 1. Top Heading */}
            <div className="w-full text-center mb-10">
                <h2 className="text-3xl md:text-5xl text-[#1a1a1a] mb-4">
                    Industry recognition
                </h2>
                <p className="text-sm md:text-base text-black font-medium">
                    We are a multiple award-winning studio
                </p>
            </div>

            {/* 2. Split Content: Project Image & Awards Card */}
            <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto items-stretch gap-8">

                {/* Left Side: Large Project Image */}
                <div className="w-full md:w-[65%] relative min-h-[400px] md:min-h-[500px]">
                    <Image
                        src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1740780302934-YRVPR1GLQOV8Z92XHBMI/NomadPenthouse_0238_low.jpg"
                        alt="Award Winning Project"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Awards Information Card */}
                {/* Background color #A69677 matches the gold/tan award card */}
                <div className="w-full md:w-[35%] bg-[#A69677] text-black p-10 md:px-16 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10 w-full"
                    >
                        {/* Award 1 */}
                        <div className="space-y-2">
                            <div className="relative w-32 h-20 mx-auto mb-4">
                                <Image
                                    src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/d57b801e-85ca-4a11-96f0-cd6cdd7d6fc9/rosefinch-logo.png?format=300w"
                                    alt='Rosefinch Logo'
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className="pt-4">
                                <p className="text-base tracking-tight uppercase font-semibold">Evening Standard</p>
                                <p className="text-lg tracking-tight mt-1">New Homes Awards 2022 Winner</p>
                                <p className="text-lg tracking-tight uppercase -mt-2">Best London Home</p>
                            </div>
                        </div>

                        {/* Award Logos/Icons (Placeholder for the SVGs/Images in your pic) */}
                        <div className="relative w-24 h-24 mx-auto">
                            <Image
                                src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/9d2ea123-b2fc-4e89-9d05-350dd448f4c5/_ES+NH_Awards+2022+Logo+winner+BLACK+ON+WHITE-01.png?format=300w"
                                alt='Winner Badge'
                                fill
                                className='object-contain'
                            />
                        </div>

                        {/* Award 2 */}
                        <div className="space-y-2">
                            <p className="text-sm tracking-tight uppercase font-semibold">What House Awards 2022</p>
                            <p className="text-base tracking-tight mt-1 font-medium uppercase">Silver Award</p>
                            <p className="text-base tracking-tight uppercase -mt-2 font-medium">Best UK Luxury Home</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse w-full max-w-[1400px] mx-auto items-stretch pt-10 gap-8">

                {/* Left Side: Large Project Image */}
                <div className="w-full md:w-[65%] relative min-h-[400px] md:min-h-[500px]">
                    <Image
                        src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/1740780302934-YRVPR1GLQOV8Z92XHBMI/NomadPenthouse_0238_low.jpg"
                        alt="Award Winning Project"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side: Awards Information Card */}
                {/* Background color #A69677 matches the gold/tan award card */}
                <div className="w-full md:w-[35%] bg-[#C4AB9A] text-black p-10 md:px-16 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-10 w-full"
                    >
                        {/* Award 1 */}
                        <div className="space-y-2">
                            <div className="relative w-32 h-20 mx-auto mb-4">
                                <Image
                                    src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/d57b801e-85ca-4a11-96f0-cd6cdd7d6fc9/rosefinch-logo.png?format=300w"
                                    alt='Rosefinch Logo'
                                    fill
                                    className='object-contain'
                                />
                            </div>
                            <div className="pt-4">
                                <p className="text-base tracking-tight uppercase font-semibold">Evening Standard</p>
                                <p className="text-lg tracking-tight mt-1">New Homes Awards 2022 Winner</p>
                                <p className="text-lg tracking-tight uppercase -mt-2">Best London Home</p>
                            </div>
                        </div>

                        {/* Award Logos/Icons (Placeholder for the SVGs/Images in your pic) */}
                        <div className="relative w-24 h-24 mx-auto">
                            <Image
                                src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/9d2ea123-b2fc-4e89-9d05-350dd448f4c5/_ES+NH_Awards+2022+Logo+winner+BLACK+ON+WHITE-01.png?format=300w"
                                alt='Winner Badge'
                                fill
                                className='object-contain'
                            />
                        </div>

                        {/* Award 2 */}
                        <div className="space-y-2">
                            <p className="text-sm tracking-tight uppercase font-semibold">What House Awards 2022</p>
                            <p className="text-base tracking-tight mt-1 font-medium uppercase">Silver Award</p>
                            <p className="text-base tracking-tight uppercase -mt-2 font-medium">Best UK Luxury Home</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Industry;