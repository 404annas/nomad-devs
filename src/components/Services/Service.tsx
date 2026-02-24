import React from 'react'

const servicesData = [
    {
        id: "01",
        title: "ARCHITECTURAL DRAWINGS",
        desc: "Bespoke plans designed around your property and project goals"
    },
    {
        id: "02",
        title: "STRUCTURAL DRAWINGS",
        desc: "Engineering solutions that guarantee strength, safety, and compliance"
    },
    {
        id: "03",
        title: "CONSTRUCTION & RENOVATIONS",
        desc: "Complete project management for loft conversions, extensions, refurbishments, and full home transformations"
    },
    {
        id: "04",
        title: "INTERIOR DESIGN & JOINERY",
        desc: "A seamless blend of interiors and craftsmanship, including mood boards, layouts, 2D/3D visuals, custom kitchens, wardrobes, furniture, and specialist finishes"
    },
    {
        id: "05",
        title: "COMMERCIAL PROJECTS",
        desc: "Elegant, functional environments for offices, retail, and hospitality"
    }
];

const Service = () => {
    return (
        <>
            <h1 className='text-4xl px-10 text-center pt-40 sm:pt-50 font-serif'>Our Services</h1>
            <div className="w-full min-h-screen bg-white py-10 px-4 flex justify-center items-center">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">


                    {servicesData.map((service) => (
                        <div key={service.id} className="group h-[300px] w-[300px] [perspective:1000px]">
                            {/* Inner Container: Handles the Rotation */}
                            <div className="relative h-full w-full rounded-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                {/* --- FRONT SIDE --- */}
                                <div className="absolute inset-0 h-full w-full rounded-full bg-[#f4f4f2] border border-gray-400 [backface-visibility:hidden] flex items-center justify-center overflow-hidden shadow-sm cursor-pointer">

                                    {/* Outer Ring Decoration (Double Border Effect) */}
                                    <div className="absolute inset-2 rounded-full border border-white pointer-events-none"></div>

                                    <div className="relative flex flex-col items-center justify-center text-center p-6 z-10">
                                        {/* Big Background Number */}
                                        <span
                                            className="absolute text-[140px] sm:text-[160px] font-bold leading-none text-transparent select-none"
                                            style={{
                                                WebkitTextStroke: '2px #dddddd',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                opacity: 0.8
                                            }}
                                        >
                                            {service.id}
                                        </span>

                                        {/* Title */}
                                        <h3 className="relative text-xl font-bold uppercase tracking-tight text-black z-20 max-w-[200px] leading-none">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* --- BACK SIDE (Content) --- */}
                                <div className="absolute inset-0 h-full w-full rounded-full bg-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center px-8 text-center shadow-xl">
                                    {/* Back Side content */}
                                    <div className="flex flex-col items-center gap-4">
                                        <span className="text-5xl font-bold">{service.id}</span>
                                        <p className="text-sm font-medium leading-4">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Service