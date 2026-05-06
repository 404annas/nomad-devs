import React from 'react';

const About = () => {
  return (
    <section className="bg-[#fdfbf9] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Left Column: Heading */}
        <div className="flex flex-col">
          <h2 className="text-[#6d665b] font-regular text-2xl sm:text-3xl md:text-4xl leading-tight uppercase">
            Creating beautiful,<br />
             comfortable <span className="italic lowercase font-light tracking-normal">and</span> timeless <br />
            interiors is <span className="italic lowercase font-light tracking-normal">our</span> passion.
          </h2>
        </div>

        {/* Right Column: Description */}
        <div className="flex flex-col justify-center h-full">
          <p className="text-gray-600 font-light leading-7 text-xs md:text-sm 2xl:text-base">
            We are a leading design and build company offering comprehensive architectural design, 
            interior design, and construction services across residential projects. Our full-service 
            team delivers seamless turnkey solutions, guiding each project from initial concept 
            through to final completion. With a focus on quality, functionality, and timeless 
            aesthetics, we create bespoke spaces tailored to each client's lifestyle and vision.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;