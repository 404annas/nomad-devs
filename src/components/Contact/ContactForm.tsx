"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect, useCallback } from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight, 
  ChevronDown, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  RotateCcw // Added for captcha refresh
} from "lucide-react";
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
    const [status, setStatus] = useState<FormStatus>('idle');

    // --- Captcha State ---
    const [captcha, setCaptcha] = useState({ q: "", a: 0 });
    const [userCaptcha, setUserCaptcha] = useState("");
    const [captchaError, setCaptchaError] = useState(false);

    // Form State
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const dropdownOptions = [
        "Interior Design",
        "Refurbishment",
        "Renovation",
        "Construction",
    ];

    // --- Captcha Logic ---
    const generateCaptcha = useCallback(() => {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        setCaptcha({
            q: `${num1} + ${num2}`,
            a: num1 + num2
        });
        setUserCaptcha("");
        setCaptchaError(false);
    }, []);

    useEffect(() => {
        generateCaptcha();
    }, [generateCaptcha]);

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

        // 1. Basic Field Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill in all required fields.");
            return;
        }

        // 2. Captcha Validation
        if (parseInt(userCaptcha) !== captcha.a) {
            setCaptchaError(true);
            return;
        }

        setStatus('loading');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: selectedOption,
            message: formData.message,
            to_email: "info@dwellrich.co.uk"
        };

        emailjs.send(
            "service_pqo6jbn",
            "template_0vz25h4",
            templateParams,
            "w9I9cKsoU2sL3dS3k"
        )
            .then(() => {
                setStatus('success');
                setFormData({ name: "", phone: "", email: "", message: "" });
                setSelectedOption("What do you want to do?");
                setUserCaptcha("");
                generateCaptcha(); // Refresh for next time

                setTimeout(() => setStatus('idle'), 5000);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                setStatus('error');
                generateCaptcha(); // Refresh on error
            });
    };

    return (
        <section className="bg-[#F1F1EE] py-16 px-6 md:px-12 lg:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* --- LEFT SIDE: Contact Info --- */}
                <div className="flex flex-col space-y-10">
                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4 tracking-tight">Contact Us</h3>
                        <div className="text-gray-800 text-base space-y-2">
                            <p className="flex gap-2">Call Us: <span className="font-semibold text-black">+44 78033 26891</span></p>
                            <p className="flex gap-2">Mail Us: <span className="font-semibold text-black">hello@designz.dwell-rich.com</span></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4 tracking-tight">Our Address</h3>
                        <div className="text-gray-800 text-base space-y-3 leading-relaxed">
                            <p><span className="font-semibold block text-black">Central London:</span> 45 Albemarle Street, Mayfair, London W1S 4JL</p>
                            <p><span className="font-semibold block text-black">South London:</span> 416, Kingston road, KT1 3PB</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#8F6573] text-2xl font-semibold mb-4 tracking-tight">Follow Us</h3>
                        <div className="flex gap-2">
                            {[
                                { Icon: Facebook, color: "#1877F2", link: "https://www.facebook.com/share/1BLQoRWi6P/?mibextid=wwXIfr" },
                                { Icon: Instagram, color: "#E4405F", link: "https://www.instagram.com/p/DOzRdycjPme/?igsh=MXd4bzA5ODd5MGR2bw==" },
                                { Icon: Linkedin, color: "#0A66C2", link: "https://uk.linkedin.com/in/saleha-ali-khan" }
                            ].map((social, i) => (
                                <a key={i} href={social.link} target="_blank" rel="noreferrer" 
                                   className="p-3 bg-white border border-gray-200 text-gray-700 rounded-full hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
                                   style={{ color: social.color }}>
                                    <social.Icon size={20} fill={social.Icon === Instagram ? "none" : "currentColor"} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- RIGHT SIDE: Form --- */}
                <div className="relative">
                    <div className="border-t-2 border-[#8F6573] w-20 mb-10" />
                    <h2 className="text-[#8B747D] text-4xl font-bold uppercase tracking-tighter mb-4">Get In Touch</h2>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        Planning to design your project but don’t know how to shape it? 
                        Leave your information for immediate consultation.
                    </p>

                    <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name*"
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:border-[#8F6573] outline-none transition-colors bg-white disabled:opacity-50"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number*"
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:border-[#8F6573] outline-none transition-colors bg-white disabled:opacity-50"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address*"
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:border-[#8F6573] outline-none transition-colors bg-white md:col-span-2 disabled:opacity-50"
                        />

                        <div className="relative md:col-span-2">
                            <button
                                type="button"
                                onClick={() => status !== 'loading' && setIsDropdownOpen(!isDropdownOpen)}
                                className={`w-full border border-[#d8d8d8] p-4 text-sm text-gray-500 flex justify-between items-center bg-white transition-all ${status === 'loading' ? 'opacity-50' : ''}`}
                            >
                                {selectedOption}
                                <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    {dropdownOptions.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => handleOptionSelect(opt)}
                                            className="p-4 text-sm hover:bg-gray-50 cursor-pointer text-gray-700 border-b border-gray-100 last:border-0"
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
                            rows={5}
                            required
                            disabled={status === 'loading'}
                            className="w-full border border-[#d8d8d8] p-4 text-sm focus:border-[#8F6573] outline-none transition-colors bg-white md:col-span-2 resize-none disabled:opacity-50"
                        />

                        {/* --- CAPTCHA FIELD --- */}
                        <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-4 bg-white border border-[#d8d8d8] p-4">
                            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded">
                                <span className="text-gray-700 font-bold tracking-widest select-none">{captcha.q} = </span>
                                <button type="button" onClick={generateCaptcha} className="text-gray-400 cursor-pointer hover:text-[#8F6573] transition-colors">
                                    <RotateCcw size={16} />
                                </button>
                            </div>
                            <input
                                type="number"
                                placeholder="Answer*"
                                value={userCaptcha}
                                onChange={(e) => setUserCaptcha(e.target.value)}
                                required
                                disabled={status === 'loading'}
                                className={`flex-1 p-2 text-sm border-b-2 outline-none transition-all ${captchaError ? 'border-red-500' : 'border-gray-200 focus:border-[#8F6573]'}`}
                            />
                            {captchaError && <span className="text-red-500 text-xs font-medium">Wrong answer!</span>}
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 pt-4">
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`bg-[#111111] text-white cursor-pointer py-5 px-10 flex items-center justify-center md:justify-between gap-6 group hover:bg-black transition-all w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-3">
                                    {status === 'loading' ? (
                                        <>Sending Enquiry <Loader2 size={18} className="animate-spin text-gray-400" /></>
                                    ) : status === 'success' ? (
                                        <>Sent Successfully <CheckCircle size={18} /></>
                                    ) : (
                                        "Send Enquiry"
                                    )}
                                </span>
                                {status === 'idle' && (
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                )}
                            </button>

                            {/* Success Message */}
                            {status === 'success' && (
                                <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm flex items-start gap-3 rounded-lg animate-in fade-in slide-in-from-bottom-2">
                                    <CheckCircle size={20} className="mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-bold">Inquiry Sent!</p>
                                        <p className="opacity-90">Thank you for reaching out. We will get back to you shortly.</p>
                                    </div>
                                </div>
                            )}

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3 rounded-lg">
                                    <AlertCircle size={20} className="shrink-0" />
                                    <span>Server error. Please try again or call us directly.</span>
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