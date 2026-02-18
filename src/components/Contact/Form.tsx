import ContactForm from "./ContactForm";

const Form = () => {
    return (
        // Main container ka background aur padding exact match karne ke liye
        <div className="bg-white flex items-center justify-center py-10">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 px-40 py-20 bg-[#efeee9]">

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
                <ContactForm />
            </div>
        </div>
    );
};

export default Form;