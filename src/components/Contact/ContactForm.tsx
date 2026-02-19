"use client";
import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const ContactForm = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Defaulted to true to match screenshot
    const [selectedOption, setSelectedOption] = useState("What do want to do?");

    const dropdownOptions = [
        "Brick (Database)",
        "Steel (Modern building material)",
        "Beam (Load-bearing member in construction)",
        "Floor (Horizontal surface of a building)",
        "Concrete (Foundation)",
        "Wood (Framing)",
    ];

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="flex justify-center items-start">
            <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Name Field */}
                <div className="group">
                    <input
                        type="text"
                        placeholder="Your Name*"
                        className="w-full bg-[#f8f8f8] border border-gray-300 text-gray-600 p-4 focus:outline-none focus:border-gray-400 placeholder-gray-400"
                    />
                </div>

                {/* Phone Field */}
                <div className="group">
                    <input
                        type="text"
                        placeholder="Your Phone Number*"
                        className="w-full bg-[#f8f8f8] border border-gray-300 text-gray-600 p-4 focus:outline-none focus:border-gray-400 placeholder-gray-400"
                    />
                </div>

                {/* Email Field */}
                <div className="group">
                    <input
                        type="email"
                        placeholder="Your Email Address*"
                        className="w-full bg-[#f8f8f8] border border-gray-300 text-gray-600 p-4 focus:outline-none focus:border-gray-400 placeholder-gray-400"
                    />
                </div>

                {/* Custom Dropdown Field */}
                <div className="relative group">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full text-left p-4 flex justify-between cursor-pointer items-center border border-gray-300 border-b-0 focus:outline-none ${isDropdownOpen ? "bg-[#eeeeee]" : "bg-[#f8f8f8]"
                            }`}
                    >
                        <span className="text-black font-normal">{selectedOption}</span>
                        {isDropdownOpen ? (
                            <ChevronUp size={20} className="text-gray-500" />
                        ) : (
                            <ChevronDown size={20} className="text-gray-500" />
                        )}
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute left-0 right-0 bg-white border border-gray-200 border-t-0 shadow-sm z-10 max-h-64 overflow-y-auto">
                            <ul className="py-2">
                                {dropdownOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Message Field - Positioned to match visual (Left side) */}
                {/* Note: In standard forms this is usually full width, but strictly following the image grid */}
                <div className="group md:col-span-2">
                    <textarea
                        rows={5}
                        placeholder="Your Message..."
                        className="w-full bg-[#f8f8f8] border border-gray-300 text-gray-600 p-4 focus:outline-none focus:border-gray-400 placeholder-gray-400 resize-none"
                    />
                    {/* Submit Button */}
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="bg-[#111111] text-white text-sm font-bold uppercase py-4 px-8 tracking-wider hover:bg-gray-950 transition-colors duration-300 cursor-pointer w-full md:w-auto"
                        >
                            SEND REQUEST
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;