"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
    {
        id: 1,
        question: "What is your typical design process?",
        answer:
            "Our process begins with an in-depth consultation to understand your vision and requirements. We then move to concept development, presenting mood boards and layouts. Once approved, we proceed to detailed technical drawings, material sourcing, and finally, on-site project management to ensure the design is executed to perfection.",
    },
    {
        id: 2,
        question: "Do you handle project management and construction?",
        answer:
            "Yes, we offer a full turnkey service. From the initial architectural drawings to the final coat of paint, we manage contractors, schedules, and quality control. This ensures a stress-free experience for you and guarantees that the final result matches the integrity of the design.",
    },
    {
        id: 3,
        question: "How are project budgets and timelines managed?",
        answer:
            "Transparency is key. Before starting, we provide a detailed cost breakdown and a realistic timeline. We monitor these closely throughout the project, providing weekly updates to ensure we stay on track financially and logistically, with no hidden surprises.",
    },
    {
        id: 4,
        question: "Can you source bespoke furniture and joinery?",
        answer:
            "Absolutely. We specialize in bespoke joinery and custom furniture design. We work with a trusted network of artisans and craftsmen to create unique pieces—from fitted wardrobes to custom kitchen islands—that perfectly fit your space and style.",
    },
    {
        id: 5,
        question: "Do you work on properties outside of London?",
        answer:
            "While the majority of our projects are within Greater London and the Home Counties, we are available for select projects across the UK and internationally. Please get in touch to discuss the specifics of your location and project scope.",
    },
];

const Testimonials1 = () => {
    // State to track which item is open (0 means the first one is open by default)
    const [activeIndex, setActiveIndex] = useState < number | null > (0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-white py-10 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-black uppercase mb-4">
                        Common Questions
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-light max-w-2xl mx-auto">
                        Everything you need to know about our approach, services, and how we bring your vision to life.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="border-t border-gray-200">
                    {faqData.map((item, index) => (
                        <div key={item.id} className="border-b border-gray-200 last:border-b-0">

                            {/* Question Header */}
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-6 flex items-center justify-between text-left group hover:bg-gray-50/50 transition-colors duration-300 cursor-pointer"
                            >
                                <span className={`text-base md:text-base font-medium tracking-wide transition-colors duration-300 ${activeIndex === index ? "text-black" : "text-gray-600 group-hover:text-black"}`}>
                                    {item.question}
                                </span>
                                <span className="text-black/60 group-hover:text-black transition-colors duration-300 ml-4">
                                    {activeIndex === index ? (
                                        <Minus size={20} strokeWidth={1} />
                                    ) : (
                                        <Plus size={20} strokeWidth={1} />
                                    )}
                                </span>
                            </button>

                            {/* Answer Body (Animated) */}
                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-8 text-sm md:text-base text-gray-500 font-light leading-relaxed pr-8">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials1;