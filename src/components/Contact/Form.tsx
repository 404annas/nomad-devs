const Form = () => {
    return (
        // Main container ka background aur padding exact match karne ke liye
        <div className="bg-white flex items-center justify-center py-10">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 p-40 bg-[#efeee9]">

                {/* Left Column: Contact Details (Left side ki details) */}
                <div className="flex flex-col justify-start space-y-12 text-[#1a1a1a]">
                    <h1 className="text-4xl uppercase font-bold">Get in Touch</h1>
                    <p className="text-xl leading-tight max-w-sm">
                        Are you planning to design your project but don’t know how to shape it? Leave your information for immediate consultation.
                    </p>

                    <div className="space-y-8 text-base font-medium tracking-wide">
                        <div className="leading-tight">
                            <p>Call Us: 078033 26891</p>
                            <p>
                                Email: <a href="mailto:hello@designz.dwell-rich.com" className="underline underline-offset-4 decoration-1">hello@designz.dwell-rich.com</a>
                            </p>
                        </div>

                        <div className="leading-tight">
                            <p>Office address:</p>
                            <p>Kingston Road, Kingston upon thames, Surrey, London, UK</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Form (Exact inputs aur lines) */}
                <form className="flex flex-col">

                    {/* Name Fields: First aur Last name ek hi line mein */}
                    <div className="flex gap-4">
                        <div className="w-1/2 group">
                            <label className="block text-xs uppercase mb-1">First Name (Required) *</label>
                            <input type="text" className="w-full bg-transparent border-t border-black py-1 focus:outline-none" />
                        </div>
                        <div className="w-1/2 group">
                            <label className="block text-xs uppercase mb-1">Last Name (Required) *</label>
                            <input type="text" className="w-full bg-transparent border-t border-black py-1 focus:outline-none" />
                        </div>
                    </div>

                    {/* Email field */}
                    <div className="group">
                        <label className="block text-xs uppercase mb-1">Email *</label>
                        <input type="email" className="w-full bg-transparent border-t border-black py-1 focus:outline-none" />
                    </div>

                    {/* Phone field */}
                    <div className="group">
                        <label className="block text-xs uppercase mb-1">Phone *</label>
                        <input type="tel" className="w-full bg-transparent border-t border-black py-1 focus:outline-none" />
                    </div>

                    {/* Enquiry Field (Textarea) */}
                    <div className="group">
                        <label className="block text-xs uppercase mb-1">Enquiry *</label>
                        <textarea rows={1} className="w-full bg-transparent border-t border-black py-1 focus:outline-none resize-none" />
                    </div>

                    {/* Select Option (Custom Arrow ke saath) */}
                    <div className="relative group pt-4">
                        <select className="w-full bg-transparent border-t border-black py-1 appearance-none text-[11px] uppercase tracking-[0.2em] focus:outline-none cursor-pointer">
                            <option>Select an Option</option>
                            <option>General Inquiry</option>
                            <option>Investment</option>
                        </select>
                        <div className="absolute right-0 bottom-3 pointer-events-none">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </div>
                    </div>

                    {/* Submit Button (Plain text with border) */}
                    <div className="pt-4">
                        <button type="submit" className="text-[11px] uppercase tracking-[0.3em] border-b border-black pb-0.5 hover:opacity-70 transition-all duration-300 cursor-pointer font-medium">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;