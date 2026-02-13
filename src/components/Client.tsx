import React from "react";

const Client = () => {
    return (
        <section className="bg-white">

            {/* TOP LINE + TITLE */}
            <div className="max-w-[1600px] mx-auto px-10 pt-none">
                <div className="border-b border-[#c9b88a] pt-6 pb-3">
                    <span className="text-lg tracking-tight text-black">
                        PRIVATE CLIENT
                    </span>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-[1600px] mx-auto px-10 py-10">
                <div className="grid grid-cols-[1fr_1.6fr] gap-8">

                    {/* LEFT PANEL */}
                    <div className="bg-[#f5f4ef] flex items-center">
                        <div className="px-12 py-16">
                            <p className="text-[18px] leading-5 text-black max-w-xs">

                                For those seeking a truly personalised design and build experience, our Private Client service offers a discreet, end-to-end solution. From sourcing sites to managing contractors, and from interior architecture to furniture curation — we handle every detail so you can enjoy the process.
                            </p>

                            <div className="mt-10">
                                <span className="text-xs tracking-widest border-b border-black pb-1">
                                    PRIVATE CLIENT
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
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
