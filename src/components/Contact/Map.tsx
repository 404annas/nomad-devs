"use client";

import React from 'react';

const Map = () => {
    // Use directions embed so both endpoints are visible as map markers (A/B).
    const mapCenter =
        "https://maps.google.com/maps?saddr=45+Albemarle+Street,+Mayfair,+London+W1S+4JL&daddr=416+Kingston+Road,+Kingston+upon+Thames,+KT1+3PB&output=embed";

    return (
        <section className="w-full bg-white px-6 md:px-10 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* --- Map Container --- */}
                <div className="relative w-full h-[500px] rounded-sm overflow-hidden border border-gray-200 group">
                    <iframe
                        title="Dwell Rich Office Locations"
                        src={mapCenter}
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                    ></iframe>

                    {/* --- Floating Location Cards (Like a Pro UI) --- */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-3 max-w-[280px] hidden md:flex">
                        <div className="bg-white/95 backdrop-blur-sm p-4 shadow-sm border-l-4 border-black">
                            <h4 className="font-bold text-xs uppercase text-black mb-1">Central London</h4>
                            <p className="text-xs text-gray-600 leading-tight">
                                45 Albemarle Street, Mayfair, London W1S 4JL
                            </p>
                        </div>
                        <div className="bg-white/95 backdrop-blur-sm p-4 shadow-sm border-l-4 border-black">
                            <h4 className="font-bold text-xs uppercase text-black mb-1">South London</h4>
                            <p className="text-xs text-gray-600 leading-tight">
                                416 Kingston road, KT1 3PB
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile View Address Info */}
                <div className="mt-6 grid grid-cols-1 gap-4 md:hidden">
                    <div className="bg-[#F5F5F3] p-4 text-center">
                        <p className="text-xs font-bold uppercase">Central London</p>
                        <p className="text-xs text-gray-500">45 Albemarle Street, Mayfair, London W1S 4JL</p>
                    </div>
                    <div className="bg-[#F5F5F3] p-4 text-center">
                        <p className="text-xs font-bold uppercase">South London</p>
                        <p className="text-xs text-gray-500">416 Kingston road, KT1 3PB</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Map;
