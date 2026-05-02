import React, { useState, useEffect } from "react";

import heroImg1 from "@/assets/home9.jpg";

import Link from "next/link";

const Hero = () => {
  // Use the imported images here. I'm using high-quality placeholders for the demo.
  const images = [
    heroImg1.src,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Title: Using a serif font to match the image style */}
        <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-serif mb-10 select-none">
          OUR PROCESS
        </h1>

        {/* Button Container */}
        <Link href={"/contact"}>
          <button className="flex items-center gap-6 bg-[#7b6f63]/80 hover:bg-[#7b6f63] transition-colors duration-300 cursor-pointer px-6 md:px-12 py-5 text-white tracking-widest text-[10px] sm:text-xs font-light">
            <span className="w-8 h-[1px] bg-white opacity-60"></span>
            CONTACT OUR TEAM
            <span className="w-8 h-[1px] bg-white opacity-60"></span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
