import React from "react";

const About = () => {
  return (
    <>
      {/* TOP INTRO / HERO - Clean and Compact */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-[38px] md:text-[42px] leading-[1.1] font-serif text-black">
            Design-Led Homes for Extraordinary Living
          </h1>

          <p className="mt-5 text-[15px] leading-6 text-gray-700 max-w-xl mx-auto">
            Nomad is a London-based real estate developer, interior design
            studio, and project manager. We create exceptional homes, both
            for the market and for discerning private clients.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Layout matching your image */}
      <section className="bg-white pb-10">
        <div className="max-w-[1500px] mx-auto px-8 md:px-10">
          {/* Grid with a clear gap (gap-10) between card and image */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-stretch">
            
            {/* LEFT TEXT CARD - Specific beige background */}
            <div className="bg-[#f3f2ee] p-8 md:p-10 flex flex-col justify-center">
              <p className="text-[17px] leading-5 text-black">
                Whether we’re building for our own portfolio or delivering a
                one-of-a-kind home for a private client, every space we create
                is defined by design integrity, quality, and attention to
                detail.
                From concept to completion, our in-house team blends
                development expertise with refined interiors, ensuring each
                home tells a story and stands the test of time.
              </p>

              <div className="mt-6">
                <a href="#" className="text-[12px] tracking-[0.2em] border-b border-black pb-1 uppercase font-semibold inline-block">
                  ABOUT US
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE - Larger width as per image */}
            <div className="w-full h-[500px] md:h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" // Replace with your actual image path
                alt="Modern Outdoor Area"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;