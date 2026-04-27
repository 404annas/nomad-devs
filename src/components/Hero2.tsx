"use client";

const Hero2 = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src="/videos/heroVid.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </section>
    );
};

export default Hero2;
