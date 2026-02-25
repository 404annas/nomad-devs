import React from 'react'
import { ShieldCheck, Gem, ListChecks, Coins, Globe, Star } from 'lucide-react'

const features = [
    {
        id: 1,
        title: "Premium Client Experience",
        description: "Seamless communication, detailed reporting, and total transparency.",
        icon: Star,
    },
    {
        id: 2,
        title: "Material & Detail Mastery",
        description: "An obsession with finishes, lighting, and craftsmanship executed perfectly.",
        icon: Gem,
    },
    {
        id: 3,
        title: "End-to-End Accountability",
        description: "We take full ownership from the first sketch to the final handover.",
        icon: ListChecks,
    },
    {
        id: 4,
        title: "ROI-Aware Planning",
        description: "Value engineering without compromising luxury or design integrity.",
        icon: Coins,
    },
    {
        id: 5,
        title: "International Luxury Standard",
        description: "Refined design language with globally aligned execution standards.",
        icon: Globe,
    }
]

const WhyChooseUs = () => {
    return (
        <section className="w-full bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-10">

                    {/* Header Section */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl font-serif text-black leading-tight">
                            Why Clients <span className="text-gray-400">Choose Us?</span>
                        </h2>
                        <div className="w-48 h-[1px] bg-black mt-2 mx-auto lg:mx-0"></div>
                    </div>

                    {/* --- Cards Container (Flexbox for centering while keeping width equal) --- */}
                    <div className="w-full">
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group flex flex-col p-8 rounded-xl border border-[#cacaca] bg-[#F3F2EE] transition-all duration-300 hover:border-black/10 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                                >
                                    {/* Icon */}
                                    <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 group-hover:bg-black group-hover:border-black transition-all duration-300">
                                        <feature.icon
                                            size={20}
                                            className="text-gray-600 group-hover:text-white transition-colors"
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-base font-bold uppercase tracking-tight text-black mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-light leading-normal">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full h-[400px] lg:h-[500px]">
                        <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-50">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src="/videos/chooseVideo.webm"  type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs