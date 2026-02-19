import React from 'react'
import { PenTool, Users, HardHat, ShieldCheck } from 'lucide-react'

const approachData = [
    {
        id: "01",
        title: "Design & Planning",
        text: "An in-depth design brief followed by two tailored proposals with layouts, mood boards, samples, and 2D/3D representations.",
        icon: PenTool
    },
    {
        id: "02",
        title: "Collaborative Review",
        text: "Weekly client progress meetings to review designs, material choices, and site updates, ensuring your vision remains central.",
        icon: Users
    },
    {
        id: "03",
        title: "Site Management",
        text: "Regular site visits and hands-on coordination to maintain quality at every stage, bridging the gap between design and build.",
        icon: HardHat
    },
    {
        id: "04",
        title: "Quality Assurance",
        text: "Proactive problem-solving to ensure projects are delivered on time and to the highest standards, with no detail overlooked.",
        icon: ShieldCheck
    }
]

const Approach = () => {
    return (
        <section className="w-full bg-white py-10 px-6 md:px-12 lg:px-20">

            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-10 border-b border-gray-200 pb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-black uppercase tracking-tight text-center">
                    We don’t just design — we deliver. Our Approach.
                </h2>
                <p className="mt-4 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-none font-light text-center">
                    A structured, transparent, and detail-oriented process designed to bring your vision to life with precision and care.
                </p>
            </div>

            {/* Grid Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {approachData.map((item) => (
                    <div
                        key={item.id}
                        className="group flex flex-col justify-start p-6 bg-[#FAFAFA] border border-gray-200 hover:border-black/20 transition-all duration-500 ease-in-out hover:shadow-sm"
                    >
                        {/* Icon & Number Row */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white border border-gray-200 rounded-none group-hover:bg-black group-hover:border-black transition-colors duration-300">
                                <item.icon
                                    size={24}
                                    strokeWidth={1.5}
                                    className="text-black group-hover:text-white transition-colors duration-300"
                                />
                            </div>
                            <span className="text-4xl font-serif text-gray-200 group-hover:text-gray-300 transition-colors duration-300 select-none">
                                {item.id}
                            </span>
                        </div>

                        {/* Content */}
                        <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-3">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Approach