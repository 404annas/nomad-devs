"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

import team1 from "@/assets/team1.jpg"
import team2 from "@/assets/team2.png"
import team3 from "@/assets/team3.png"
import team4 from "@/assets/team4.png"
import team5 from "@/assets/team5.jpg"

const teamMembers = [
    {
        id: 1,
        name: "Ashley Newman",
        title: "Architectural Services",
        image: team1.src,
        description: "He has been a key member of our team since the company’s inception. He oversees the planning and structural aspects of our projects, ensuring all work follows the approved architectural and structural drawings. He also provides valuable support and guidance whenever challenges arise."
    },
    {
        id: 2,
        name: "Zaeem Khan",
        title: "Legal Advisor",
        image: team2.src,
        description: "He is our trusted legal advisor and has been closely involved with the company since its early days. He supports our real estate projects and developments by overseeing all legal aspects and ensuring compliance at every stage. His guidance plays a key role in helping projects move forward smoothly and securely."
    },
    {
        id: 3,
        name: "Muhammad Sufyan Moavia",
        title: "Chartered Accountant – FCCA, CTA, ACA",
        image: team3.src,
        description: "He is our chartered accountant and has been an essential part of the company from the outset. He manages all financial and accounting matters while also supporting our clients with sound financial guidance. His strategic advice helps ensure projects are structured efficiently and delivered in a profitable and sustainable way."
    },
    {
        id: 4,
        name: "Khalil Ur Rahman",
        title: "RICS Registered Valuer",
        image: team4.src,
        description: "He is our chartered surveyor and a valued member of our professional team. He supports us in property selection and contributes to project management when required. With strong expertise in cost analysis, he helps ensure our projects are commercially sound and well-informed."
    },
    {
        id: 5,
        name: "Syed",
        title: "Digital & Technical Operations",
        image: team5.src,
        description: "He supports our development team by managing all back-end development and technical aspects of the business. He is responsible for our website, graphics, and overall digital infrastructure. His expertise ensures our systems run smoothly and our online presence remains strong and up to date."
    }
];

const Team = () => {
    return (
        <section className="w-full py-10 bg-white px-6 md:px-12">
            {/* Section Heading */}
            <div className="w-full text-center mb-10">
                <h2 className="text-3xl md:text-4xl text-[#1a1a1a]">
                    Our Team
                </h2>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-[1400px] mx-auto">
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        {/* Member Image */}
                        <div className="relative aspect-[5/5] w-full mb-8 overflow-hidden bg-gray-100">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Member Info */}
                        <div className="space-y-1">
                            <h3 className="text-lg lg:text-2xl text-[#1a1a1a]">
                                {member.name}
                            </h3>
                            <p className="text-[10px] lg:text-xs -mt-1 font-semibold tracking-tight text-[#1a1a1a] uppercase">
                                {member.title}
                            </p>
                            <p className="text-sm leading-tight text-black font-medium pt-4">
                                {member.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Team;