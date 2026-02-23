import { Calendar, Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import ContactForm from "./ContactForm";

const Form = () => {
    return (
        // Main container ka background aur padding exact match karne ke liye
        <div className="bg-white flex items-center justify-center py-10  pt-50">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 px-40 py-20 bg-[#efeee9]">

                {/* Left Column: Contact Details (Left side ki details) */}
                <div className="flex flex-col justify-start space-y-12 text-[#1a1a1a]">
                    <h1 className="text-4xl uppercase font-bold">Get in Touch</h1>
                    <p className="text-lg leading-tight max-w-sm">
                        Are you planning to design your project but don’t know how to shape it? Leave your information for immediate consultation.
                    </p>

                    <div className="space-y-8 text-base font-medium tracking-wide">
                        <div className="leading-tight">
                            <p className="flex items-center gap-2 mb-2">
                                <Phone size={20}/>
                                <a href="tel:078033 26891">078033 26891</a>
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Mail size={20}/>
                                <a href="mailto:hello@designz.dwell-rich.com">hello@designz.dwell-rich.com</a>
                            </p>
                            <p className="flex items-center gap-2 mb-2">
                                <Clock size={20}/>
                                <p>Mon – Sat: 9:30 am – 6:30 pm</p>
                            </p>
                            <p className="flex items-center gap-2">
                                <Calendar size={20}/>
                                <p>Sunday & Holiday: Closed</p>
                            </p>
                        </div>

                        <div className="leading-tight">
                            <p><strong>Office address:</strong></p>
                            <p className="flex items-center gap-2 pb-2 pt-2"><MapPin />Kingston Road, Kingston upon thames, Surrey, London, UK</p>
                            <p className="flex items-center gap-2"><MapPin />Central London : 45 Albemarle Street, Mayfair, London W1S 4JL</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Form (Exact inputs aur lines) */}
                <ContactForm />
            </div>
        </div>
    );
};

export default Form;