import buildConst from "@/assets/project12-1.jpg";

const Process2 = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse gap-0 md:gap-8 w-full min-h-[500px] bg-white my-10">
      {/* Left Content Side */}
      <div className="relative w-full md:w-[65%] bg-[#F3F4F6] p-6 md:p-10 flex flex-col justify-center">

        {/* Top Decorative Line */}
        <div className="absolute top-12 md:block hidden right-0 w-1/3 h-[1px] bg-gray-400"></div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#333] mb-6 md:mb-10 leading-tight tracking-tight uppercase font-light">
          Build & Construction
        </h2>

        {/* Body Text */}
        <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-xs md:text-sm">
          <p>
            As experienced design and build contractors, our construction team delivers
            high-quality builds with precision and reliability. We execute projects
            in accordance with approved drawings and all mandatory UK building regulations.
          </p>
          <p>
            With extensive experience across residential developments, we ensure
            every project is completed to the highest standards of craftsmanship and safety.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 md:block hidden left-0 w-1/4 h-[1px] bg-gray-400"></div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-[35%] lg:min-h-[500px] md:min-h-0">
        <img
          src={buildConst.src}
          alt="Build & Construction"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Process2;