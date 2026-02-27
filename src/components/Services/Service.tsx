import React from 'react'

import service1 from '@/assets/service1.jpg'
import service2 from '@/assets/service2.jpg'
import service3 from '@/assets/service3.jpg'
import service4 from '@/assets/service4.jpg'
import service5 from '@/assets/service5.jpg'

const servicesData = [
    {
        id: "01",
        title: "ARCHITECTURAL DRAWINGS",
        photo: service1,
    },
    {
        id: "02",
        title: "STRUCTURAL DRAWINGS",
        photo: service2,
    },
    {
        id: "03",
        title: "CONSTRUCTION & RENOVATIONS",
        photo: service3,
    },
    {
        id: "04",
        title: "INTERIOR DESIGN & JOINERY",
        photo: service4,
    },
    {
        id: "05",
        title: "COMMERCIAL PROJECTS",
        photo: service5,
    }
]

const Service = () => {
    return (
        <>
            <h1 className='text-4xl px-10 text-center pt-40 sm:pt-50 font-serif'>Our Services</h1>
            <div className="w-full min-h-screen bg-white py-10 px-4 flex justify-center items-center">
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">
                    {servicesData.map((service) => (
                        <div key={service.id} className="relative h-[300px] w-[300px] rounded-full border border-gray-400 overflow-hidden shadow-sm">
                            <img
                                src={service.photo}
                                alt={service.title}
                                className="absolute inset-0 h-full w-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />

                            <div className="absolute inset-0 bg-black/45" />
                            <div className="absolute inset-2 rounded-full border border-white pointer-events-none" />

                            <div className="relative h-full w-full flex flex-col items-center justify-center text-center p-6 z-10">
                                <span
                                    className="absolute text-[140px] sm:text-[160px] font-bold leading-none text-transparent select-none"
                                    style={{
                                        WebkitTextStroke: '2px rgba(255, 255, 255, 0.65)',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        opacity: 0.85,
                                    }}
                                >
                                    {service.id}
                                </span>

                                <h3 className="relative text-xl font-bold uppercase tracking-tight text-white z-20 max-w-[200px] leading-none">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service
