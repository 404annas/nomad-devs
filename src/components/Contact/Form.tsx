import { Calendar, Clock, Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import ContactForm from "./ContactForm";
import Map from "./Map";

const Form = () => {
    return (
        // Main container ka background aur padding exact match karne ke liye
        <div className="bg-white flex flex-col gap-10 items-center justify-center py-10 pt-40 sm:pt-50">

                {/* <div className="flex flex-col justify-start space-y-10 sm:space-y-12 text-[#1a1a1a]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold">Get in Touch</h1>
                    <p className="text-base sm:text-lg leading-tight lg:max-w-sm">
                        Are you planning to design your project but don’t know how to shape it? Leave your information for immediate consultation.
                    </p>

                    <div className="space-y-8 text-sm sm:text-base font-medium tracking-wide">
                        <div className="leading-tight">
                            <p className="flex items-center gap-2 mb-2">
                                <Phone size={20}/>
                                <a href="tel:+447803326891">+44 78033 26891</a>
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
                </div> */}

                {/* Right Column: The Form (Exact inputs aur lines) */}
                <ContactForm />
                <Map />
        </div>
    );
};

export default Form;