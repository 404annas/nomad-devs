import interiorDesign from "@/assets/home12.jpg";

const Process3 = () => {
  return (
    <section className="flex flex-col md:flex-row gap-0 md:gap-8 w-full min-h-[500px] bg-white mb-10">
      {/* Left Content Side */}
      <div className="relative w-full md:w-[65%] bg-[#F3F4F6] p-6 md:p-10 flex flex-col justify-center">

        {/* Top Decorative Line */}
        <div className="absolute top-12 md:block hidden right-0 w-1/3 h-[1px] bg-gray-400"></div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#333] mb-6 md:mb-10 leading-tight tracking-tight uppercase">
          Interior Design
        </h2>

        {/* Body Text */}
        <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-xs md:text-sm">
          <p>
            Our luxury interior design services focus on creating bespoke interiors
            that reflect each client's individual style and aspirations. We collaborate
            closely with you throughout the design process, carefully considering
            every detail to achieve a balance of comfort, elegance, and functionality.
          </p>
          <p>
            From concept to completion, our interiors are thoughtfully curated to
            deliver timeless and refined living spaces.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 md:block hidden left-0 w-1/4 h-[1px] bg-gray-400"></div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-[35%] lg:min-h-[500px] md:min-h-0">
        <img
          src={interiorDesign.src}
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Process3;