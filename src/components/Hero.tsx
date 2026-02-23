import heroMainImg from "@/assets/project12-28.jpg"
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-auto w-full overflow-hidden">

            {/* Background Image Container */}
            <div className="relative w-full">
                <Image
                    src={heroMainImg}
                    alt="Hero Main"
                    layout="responsive"
                    width={5000} // Apni image ki actual width yahan likhein
                    height={3000} // Apni image ki actual height yahan likhein taake aspect ratio sahi rahe
                    priority
                    className="w-full h-auto object-contain"
                />

                {/* Overlay: Isko image ke upar rakha hai */}
                <div className="absolute inset-0 pointer-events-none" />
            </div>

            {/* Bottom Content: Discover & Line */}
            {/* <div className="absolute -bottom-6 left-0 w-full flex flex-col items-center pb-10 z-10 text-white">
                <span className="uppercase tracking-[0.15em] text-base md:text-lg font-medium mb-6">
                    Crafting Iconic Luxury Spaces for Visionary Investors | Developers | Private Clients
                </span>
            </div> */}
        </div>
    );
};

export default Hero;