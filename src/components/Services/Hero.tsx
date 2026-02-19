import heroMainImg from "@/assets/aboutMain.webp"

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroMainImg.src})`,
                }}
            />

            {/* Overlay Gradient (Optional: ensures white text is readable at top/bottom) */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Bottom Content: Discover & Line */}
            <div className="absolute -bottom-10 left-0 w-full flex flex-col items-center pb-10 z-10 text-white">
                <span className="uppercase tracking-[0.15em] text-base md:text-lg font-medium mb-6">
                    Discover
                </span>

                {/* The Vertical Line */}
                <div className="h-16 w-[1px] bg-white/60"></div>
            </div>
        </div>
    );
};

export default Hero;