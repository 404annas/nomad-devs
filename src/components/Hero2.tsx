"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Import your images
import heroImg3 from "@/assets/homeProject37.png";
import heroImg4 from "@/assets/homeProject38.png";
import heroImg1 from "@/assets/project12-28.jpg";
import heroImg2 from "@/assets/homeProject36.png";

const slides = [
    { id: 4, src: heroImg4, alt: "Luxury Interior 4" },
    { id: 1, src: heroImg1, alt: "Luxury Interior 1" },
    { id: 2, src: heroImg2, alt: "Luxury Interior 2" },
    { id: 3, src: heroImg3, alt: "Luxury Interior 3" },
];

const Hero2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatic Slide Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[200vh] overflow-hidden bg-black">
            
            {/* --- 1. THE "GHOST" SPACER IMAGE --- */}
            {/* This image is invisible (opacity-0) but it exists in the DOM 
                solely to push the parent div to the correct 'h-auto' height 
                based on the image's natural aspect ratio. */}
            <div className="relative w-full">
                <Image
                    src={slides[0].src}
                    alt="Spacer"
                    priority
                    // These dimensions ensure the aspect ratio is calculated correctly
                    // Since you are importing the image, Next.js knows the width/height automatically
                    className="w-full h-auto opacity-0" 
                />
            </div>

            {/* --- 2. THE SLIDESHOW LAYERS --- */}
            {/* These sit absolutely on top of the ghost image */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="100vw"
                        quality={90}
                    />
                    
                    {/* Optional Overlay */}
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                            index === currentSlide 
                            ? "bg-white scale-125" 
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero2;