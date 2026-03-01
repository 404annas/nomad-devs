"use client";

import React from "react";
import Image from "next/image";
import { SquareCheck } from "lucide-react";
// Import your image here
import investorImg from "@/assets/project14-1.jpg"; // Replace with your actual image path

const InvestorApproach = () => {
    const services = [
        "Concept & feasibility direction",
        "Master planning support",
        "Value engineering & specifications",
        "Timeline and delivery strategy",
    ];

    return (
        <section className="w-full bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 px-4 sm:px-6 md:px-10 min-h-[500px]">

                {/* ======================== */}
                {/*       LEFT CONTENT       */}
                {/* ======================== */}
                <div className="flex flex-col justify-center bg-gray-100 px-6 py-10 px-4 lg:px-12">

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-black leading-none mb-1">
                            Investor
                        </h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-700 leading-none">
                            Approach
                        </h2>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-base md:text-lg text-black/80 leading-relaxed mb-10">
                        We support investors and developers with{" "}
                        <span className="font-semibold text-black">decision-ready designs</span>,{" "}
                        <span className="font-semibold text-black">clear documentation</span>, and{" "}
                        <span className="font-semibold text-black">execution confidence</span> suitable for
                        cross-border partnerships and high-value development planning.
                    </p>

                    {/* Checklist Section */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-bold text-black mb-6">
                            Investor services can include:
                        </h3>
                        <ul className="space-y-4">
                            {services.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    {/* Custom Checkbox Icon */}
                                    <div className="mt-1 shrink-0">
                                        <SquareCheck className="text-black" size={20} strokeWidth={2} />
                                    </div>
                                    <span className="text-base text-black/80 font-normal">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ======================== */}
                {/*       RIGHT IMAGE        */}
                {/* ======================== */}
                <div className="relative w-full h-[400px] md:h-auto">
                    <Image
                        src={investorImg} // <--- Replace this with your actual image variable
                        alt="Investor-focused residential development planning and design build strategy image"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

            </div>
        </section>
    );
};

export default InvestorApproach;
