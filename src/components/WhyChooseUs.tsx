import React from 'react'
import { ShieldCheck, Gem, ListChecks, Coins, Globe, Star } from 'lucide-react'

const features = [
    {
        id: 1,
        title: "Premium Client Experience",
        description: "Seamless communication, detailed reporting, and total transparency throughout the lifecycle of your project.",
        icon: Star,
    },
    {
        id: 2,
        title: "Material & Detail Mastery",
        description: "An obsession with finishes, lighting, and craftsmanship. We ensure every detail is executed the right way.",
        icon: Gem,
    },
    {
        id: 3,
        title: "End-to-End Accountability",
        description: "Fewer handovers, stronger results. We take full ownership from the first sketch to the final handover.",
        icon: ListChecks,
    },
    {
        id: 4,
        title: "ROI-Aware Planning",
        description: "Value engineering without compromising luxury. We design with your investment and return in mind.",
        icon: Coins,
    },
    {
        id: 5,
        title: "International Luxury Standard",
        description: "Refined design language with globally aligned execution standards for a world-class result.",
        icon: Globe,
    }
]

const WhyChooseUs = () => {
    return (
        <section className="w-full bg-[#FAFAFA] py-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-10 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-black tracking-wide">
                        Why Clients <span className="text-gray-500">Choose Us</span>
                    </h2>
                    <div className="h-[1px] w-24 bg-black mx-auto mt-6"></div>
                </div>

                {/* Cards Layout */}
                <div className="flex flex-wrap justify-center gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white border border-gray-300 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:border-black transition-all duration-300 ease-in-out flex flex-col items-start"
                        >
                            {/* Icon */}
                            <div className="mb-6 p-3 bg-gray-100 rounded-none group-hover:bg-black transition-colors duration-300">
                                <feature.icon
                                    size={28}
                                    strokeWidth={1.2}
                                    className="text-black group-hover:text-white transition-colors duration-300"
                                />
                            </div>

                            {/* Text */}
                            <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-black mb-3 group-hover:translate-x-1 transition-transform duration-300 leading-none">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Decorative Corner (Optional for sleek look) */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-transparent border-r-transparent group-hover:border-r-black transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs