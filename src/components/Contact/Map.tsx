"use client";

import React from 'react';

const Map = () => {
    // Google Maps Embed URLs for both locations
    // Note: Standard iframe ek waqt mein ek hi location properly highlight karti hai
    // isliye humne multiple coordinates ko view mein rakha hai.
    const mapCenter = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39766.16853765181!2d-0.26462612760829445!3d51.4694432174384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760517590209f3%3A0xc3482708304918e7!2s45%20Albemarle%20St%2C%20London%20W1S%204JL%2C%20UK!5e0!3m2!1sen!2s!4v1715600000000!5m2!1sen!2s";

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