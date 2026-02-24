import React from 'react'
import { Wallet, UserCircle, Leaf, Search } from 'lucide-react'

const features = [
    {
        id: 1,
        title: "VALUE-OPTIMISED PROCUREMENT",
        description: "Value-optimised procurement without compromising material quality or design intent.",
        icon: Wallet,
    },
    {
        id: 2,
        title: "CLIENT-CENTRIC APPROACH",
        description: "Experience design with a personal touch! Your dreams, our blueprint—unleashing home décor excellence just for you!",
        icon: UserCircle,
    },
    {
        id: 3,
        title: "ENVIRONMENTAL RESPONSIBILITY",
        description: "Eco-chic transformations await! Dive into sustainable style with our budget-friendly, energy-smart designs!",
        icon: Leaf,
    },
    {
        id: 4,
        title: "ATTENTION TO DETAIL",
        description: "Crafting perfection in every detail! From space wizardry to color mastery and texture symphonies—immerse yourself in spaces where harmony meets sophistication.",
        icon: Search,
    }
]

const Approach = () => {
    return (
        <section className="w-full bg-[#FAFAFA] py-10 px-4 sm:px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-10 space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-black tracking-wide">
                        Our <span className="text-gray-500">Approach</span>
                    </h2>
                    <div className="h-[1px] w-24 bg-black mx-auto mt-4"></div>
                </div>

                {/* Cards Layout - Adjusted for 4 in a row on large screens */}
                <div className="flex flex-wrap justify-center gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white border border-gray-300 p-6 sm:p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] hover:border-black transition-all duration-300 ease-in-out flex flex-col items-start"
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

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-transparent border-r-transparent group-hover:border-r-black transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Approach