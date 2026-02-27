"use client";

import React from 'react'
import Image from "next/image"

import logo2 from "@/assets/logo2.png"
import logo3 from "@/assets/logo3.png"
import logo4 from "@/assets/logo4.png"

const Logos = () => {
    return (
        <section className="w-full bg-[#E6E6E6] py-10 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8">

                {/* Logo 1: British Institute (Square/Tall) */}
                <div className="relative w-40 h-40 md:w-80 md:h-40">
                    <Image
                        src={logo2}
                        alt="British Institute of Interior Design"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Logo 2: Kingston Chamber (Widest) */}
                <div className="relative w-64 h-24 md:w-96 md:h-36">
                    <Image
                        src={logo3}
                        alt="Kingston Chamber of Commerce"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Logo 3: Kingston Green Business (Wide) */}
                <div className="relative w-52 h-24 md:w-96 md:h-40">
                    <Image
                        src={logo4}
                        alt="Kingston Green Business Community"
                        fill
                        className="object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default Logos