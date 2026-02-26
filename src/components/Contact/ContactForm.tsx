"use client";

import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, ArrowRight, ChevronDown } from "lucide-react";

const ContactSection = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("What do want to do?");

    const dropdownOptions = [
        "Interior Design",
        "Architecture",
        "Renovation",
        "Consultation",
    ];

    return (
        <section className="bg-[#F1F1EE] py-10 px-6 md:px-12 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* --- LEFT SIDE: Contact Info --- */}
                <div className="flex flex-col space-y-6">

                    {/* Support */}
                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4">24/7 Support</h3>
                        <div className="text-gray-800 text-base space-y-1">
                            <p>Call Us: <span className="font-medium">078033 26891</span></p>
                            <p>Mail Us: <span className="font-medium">hello@designz.dwell-rich.com</span></p>
                        </div>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4">Our Address</h3>
                        <div className="text-gray-800 text-base leading-relaxed">
                            <p><span className="font-semibold">Central London :</span> 45 Albemarle Street, Mayfair, London W1S 4JL</p>
                            <p><span className="font-semibold">South London :</span> 416, Kingston road, KT1 3PB</p>
                        </div>
                    </div>

                    {/* Time to Work */}
                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4">Time to Work</h3>
                        <div className="text-gray-800 text-base">
                            <p>Mon – Sat: 9:30 am – 6:30 pm</p>
                            <p>Sunday & Holiday: Closed</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-6">Follow Us on Social Media</h3>
                        <div className="flex gap-2">
                            <a href="https://www.facebook.com/share/1BLQoRWi6P/?mibextid=wwXIfr" target="_blank" className="p-2.5 bg-[#1877F2] text-white rounded-full hover:scale-110 transition-transform duration-300">
                                <Facebook size={20} fill="currentColor" />
                            </a>
                            <a href="https://www.instagram.com/p/DOzRdycjPme/?igsh=MXd4bzA5ODd5MGR2bw==" target="_blank" className="p-2.5 bg-[#E4405F] text-white rounded-full hover:scale-110 transition-transform duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="https://uk.linkedin.com/in/saleha-ali-khan" target="_blank" className="p-2.5 bg-[#0A66C2] text-white rounded-full hover:scale-110 transition-transform duration-300">
                                <Linkedin size={20} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: Form --- */}
                <div className="relative">
                    {/* Top Divider from screenshot */}
                    <div className="border-t border-[#8F6573] w-full mb-10" />

                    <h2 className="text-[#8B747D] text-4xl font-smibold uppercase tracking-tight mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-700 text-lg mb-10 leading-normal max-w-xl">
                        Are you planning to design your project but don’t know how to shape it?
                        Leave your information for immediate consultation.
                    </p>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Input fields with the same grey background as image */}
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Your Phone Number*"
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email Address*"
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500"
                        />

                        {/* Dropdown Field */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full border border-[#d8d8d8] p-4 text-sm text-gray-500 flex justify-between items-center"
                            >
                                {selectedOption}
                                <ChevronDown size={18} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border border-gray-100 shadow-xl z-50">
                                    {dropdownOptions.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => {
                                                setSelectedOption(opt);
                                                setIsDropdownOpen(false);
                                            }}
                                            className="p-3 text-sm hover:bg-gray-50 cursor-pointer text-gray-700"
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <textarea
                            placeholder="Your Message..."
                            rows={6}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500 md:col-span-2 resize-none"
                        />

                        {/* Black Button with Arrow */}
                        <div className="md:col-span-2 mt-2">
                            <button
                                type="submit"
                                className="bg-[#111111] text-white py-4 px-10 flex items-center justify-between gap-6 group hover:bg-black transition-all cursor-pointer"
                            >
                                <span className="text-xs font-bold uppercase">Send Enquiry</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;