import React from 'react'
import { ShieldCheck, Gem, ListChecks, Coins, Globe, Star } from 'lucide-react'

// Make sure your video path is correct
// import chooseVideo from "@/assets/chooseVideo.webm"

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
        <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-20 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* --- LEFT SIDE: COMPACT LIST --- */}
                    <div className="w-full lg:w-1/2">

                        {/* Compact Header */}
                        <div className="mb-8">
                            <h2 className="text-4xl font-serif text-black leading-tight">
                                Why Clients <span className="text-gray-400">Choose Us ?</span>
                            </h2>
                        </div>

                        {/* List Layout (No Boxes) */}
                        <div className="flex flex-col gap-6">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="group flex items-start gap-4 p-3 -ml-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                                >
                                    {/* Minimalist Icon */}
                                    <div className="shrink-0 mt-1">
                                        <div className="w-10 h-10 border border-gray-200 flex items-center justify-center rounded-full group-hover:border-black group-hover:bg-black transition-all duration-300">
                                            <feature.icon
                                                size={18}
                                                className="text-gray-600 group-hover:text-white transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-sm font-bold uppercase text-black group-hover:text-black transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 font-light mt-1 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: COMPACT VIDEO --- */}
                    <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
                        <div className="relative w-full h-full overflow-hidden rounded-sm shadow-sm bg-gray-100">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-95 hover:scale-105 transition-transform duration-700 ease-out"
                            >
                                <source src="/videos/chooseVideo.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs