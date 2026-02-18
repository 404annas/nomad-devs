import React from "react";

import homeClientImg from "@/assets/homeClient.webp"

const Client = () => {
    return (
        <section className="bg-white">

            {/* TOP LINE + TITLE */}
            <div className="max-w-[1600px] mx-auto px-10 pt-none">
                <div className="border-b border-[#c9b88a] pt-6 pb-3">
                    <span className="text-lg tracking-tight uppercase text-black">
                        Why Clients Choose Us
                    </span>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-[1600px] mx-auto px-10 py-10">
                <div className="grid grid-cols-[1fr_1.6fr] gap-8">

                    {/* LEFT PANEL */}
                    <div className="bg-[#f5f4ef] flex items-center">
                        <div className="px-12 py-16">
                            <p className="text-[18px] leading-5 text-black max-w-xs pb-4">
                                We always aim for the values ​​of beauty in design along with sustainability over time. So, our practice aims to facilitate an existence of harmony between our architecture, natural and the people.
                            </p>
                            <p className="text-[18px] leading-5 text-black max-w-xs">From luxury home renovations to specialist commercial builds, we bring vision, detail, and craftsmanship together to create spaces that last. </p>

                            <div className="mt-10">
                                <span className="text-xs tracking-widest uppercase border-b border-black pb-1">
                                    Based in South London & Surrey
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            loading="lazy"
                            src={homeClientImg.src}
                            alt="Private Client Interior"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Client;
