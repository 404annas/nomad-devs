"use client";

import React from 'react'
import Image from "next/image"

import logo2 from "@/assets/logo2.png"
import logo3 from "@/assets/logo3.png"
import logo4 from "@/assets/logo4.png"

const Logos = () => {
    return (
        <section className="w-full bg-[#E6E6E6] overflow-hidden py-6 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto items-center justify-center grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                <div className="relative w-full h-30 md:h-40">
                    <Image
                        src={logo2}
                        alt="British Institute of Interior Design"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative w-full h-24 md:h-40">
                    <Image
                        src={logo3}
                        alt="Kingston Chamber of Commerce"
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative w-full translate-x-25 h-30 md:h-40">
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
