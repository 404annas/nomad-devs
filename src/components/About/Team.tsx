"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        id: 1,
        name: "Tom Wood",
        title: "Commercial Director",
        image: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/a97b8931-9530-432b-905e-3e7fc99f36a6/Nomad_Tom_0116.jpg?format=500w",
        description: "Tom is the Commercial Director at Nomad Developments. A Chartered Quantity Surveyor with 15 years of experience in prime and super-prime construction. He brings extensive expertise in managing high-value projects, ensuring seamless cost control, and driving efficiency across the company's developments. Tom's strategic approach and leadership help Nomad deliver exceptional results for clients."
    },
    {
        id: 2,
        name: "Arabella Kaye",
        title: "Senior Interior Designer",
        image: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/370ca202-96ee-4115-b6d7-e606f0b7e543/KRL452-Nomad-Oakley-Gardens-41-1469.jpg?format=500w",
        description: "Arabella has worked as an Interior Designer for the last decade. Arabella has a passion for innovation and timeless design. Her love to combine texture, colour and tone enables each project to enrich lifestyle with personality and longevity. Arabella has a diverse portfolio within the ultra prime luxury residential sector for high net-worth clients, controlling budgets of £5M+. Her extensive experience designing prestigious projects world-wide enables her to understand each space and design beautiful timeless homes."
    },
    {
        id: 3,
        name: "James Taylor",
        title: "Senior Interior Architect",
        image: "https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/dea05f47-77ac-467b-ae79-2e5fabc26536/James+Headshot.jpg?format=500w",
        description: "James draws subtle inspiration from his diverse upbringing, refined over a decade of international experience. Specialising in high-end multi-unit developments and private residences, he has cultivated a deep understanding of luxury design, craftsmanship, and innovation. His expertise lies in creating meticulously detailed spaces that seamlessly blend elegance with functionality. James believes in handcrafting authentic designs with precision and care, always striving to enhance the way individuals experience their environments. Through a highly personalised and attentive approach, he translates his clients' aspirations into timeless, meaningful spaces that foster a lasting connection."
    }
];

const Team = () => {
    return (
        <section className="w-full py-10 bg-white px-6 md:px-12">
            {/* Section Heading */}
            <div className="w-full text-center mb-10">
                <h2 className="text-3xl md:text-4xl text-[#1a1a1a]">
                    Senior Team
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
                        <div className="relative aspect-[4/5] w-full mb-8 overflow-hidden bg-gray-100">
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Member Info */}
                        <div className="space-y-1">
                            <h3 className="text-lg text-[#1a1a1a]">
                                {member.name}
                            </h3>
                            <p className="text-[10px] -mt-1 font-semibold tracking-tight text-[#1a1a1a] uppercase">
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