"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Facebook, Instagram, Linkedin, ArrowRight, ChevronDown, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}


type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactSection = () => {
    // --- State Management ---
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("What do you want to do?");

    // Status handles: idle, loading (spinner), success (msg), error (msg)
    const [status, setStatus] = useState<FormStatus>('idle');

    // Form State
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const dropdownOptions = [
        "Interior Design",
        "Architecture",
        "Renovation",
        "Consultation",
    ];

    // --- Handlers ---
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleOptionSelect = (opt: string) => {
        setSelectedOption(opt);
        setIsDropdownOpen(false);
    };

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        // Basic Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        setStatus('loading');

        // Prepare Template Parameters
        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: selectedOption,
            message: formData.message,
            to_email: "info@dwellrich.co.uk"
        };

        // --- EMAILJS CONFIGURATION ---
        // Replace with your actual credentials
        emailjs.send(
            "service_pqo6jbn",
            "template_0vz25h4",
            templateParams,
            "w9I9cKsoU2sL3dS3k"
        )
            .then(() => {
                // SUCCESS
                setStatus('success');
                // Clear Form
                setFormData({ name: "", phone: "", email: "", message: "" });
                setSelectedOption("What do you want to do?");

                // Remove success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((error) => {
                // ERROR
                console.error("EmailJS Error:", error);
                setStatus('error');
            });
    };

    return (
        <section className="bg-[#F1F1EE] py-10 px-6 md:px-12 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* --- LEFT SIDE: Contact Info --- */}
                <div className="flex flex-col space-y-6">

                    {/* Support */}
                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4">Contact Us</h3>
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
                            <a href="https://www.facebook.com/share/1BLQoRWi6P/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="p-2.5 bg-[#1877F2] text-white rounded-full hover:scale-110 transition-transform duration-300">
                                <Facebook size={20} fill="currentColor" />
                            </a>
                            <a href="https://www.instagram.com/p/DOzRdycjPme/?igsh=MXd4bzA5ODd5MGR2bw==" target="_blank" rel="noreferrer" className="p-2.5 bg-[#E4405F] text-white rounded-full hover:scale-110 transition-transform duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="https://uk.linkedin.com/in/saleha-ali-khan" target="_blank" rel="noreferrer" className="p-2.5 bg-[#0A66C2] text-white rounded-full hover:scale-110 transition-transform duration-300">
                                <Linkedin size={20} fill="currentColor" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: Form --- */}
                <div className="relative">
                    {/* Top Divider */}
                    <div className="border-t border-[#8F6573] w-full mb-10" />

                    <h2 className="text-[#8B747D] text-4xl font-semibold uppercase tracking-tight mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-gray-700 text-lg mb-10 leading-normal max-w-xl">
                        Are you planning to design your project but don’t know how to shape it?
                        Leave your information for immediate consultation.
                    </p>

                    <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Input fields */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name*"
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500 disabled:opacity-50"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number*"
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500 disabled:opacity-50"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address*"
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500 disabled:opacity-50"
                        />

                        {/* Dropdown Field */}
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => status !== 'loading' && setIsDropdownOpen(!isDropdownOpen)}
                                className={`w-full border border-[#d8d8d8] p-4 text-sm text-gray-500 flex justify-between items-center bg-white ${status === 'loading' ? 'opacity-50' : ''}`}
                            >
                                {selectedOption}
                                <ChevronDown size={18} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border border-gray-100 shadow-xl z-50">
                                    {dropdownOptions.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => handleOptionSelect(opt)}
                                            className="p-3 text-sm hover:bg-gray-50 cursor-pointer text-gray-700"
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message..."
                            rows={6}
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:outline-none placeholder-gray-500 md:col-span-2 resize-none disabled:opacity-50"
                        />

                        {/* Submit Button Area */}
                        <div className="md:col-span-2 mt-2">
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`bg-[#111111] text-white py-4 px-10 flex items-center justify-between gap-6 group hover:bg-black transition-all cursor-pointer w-full md:w-auto ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}`}
                            >
                                <span className="text-xs font-bold uppercase flex items-center gap-2">
                                    {status === 'loading' ? (
                                        <>Sending... <Loader2 size={16} className="animate-spin" /></>
                                    ) : (
                                        "Send Enquiry"
                                    )}
                                </span>
                                {status !== 'loading' && (
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2 rounded-md">
                                    <CheckCircle size={16} />
                                    <span>Thank you! Your message has been sent successfully.</span>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2 rounded-md">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Please try again later.</span>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;