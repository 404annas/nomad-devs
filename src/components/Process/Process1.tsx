import archDesign from "@/assets/home10.jpg";

const Process1 = () => {
  return (
    <section className="flex flex-col md:flex-row gap-0 md:gap-8 w-full min-h-[500px] bg-white mt-10">
      {/* Left Content Side */}
      <div className="relative w-full md:w-[65%] bg-[#F3F4F6] p-6 md:p-10 flex flex-col justify-center">

        {/* Top Decorative Line */}
        <div className="absolute top-12 md:block hidden right-0 w-1/3 h-[1px] bg-gray-400"></div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#333] mb-6 md:mb-10 tracking-tight leading-tight uppercase font-light">
          Architectural Design
        </h2>

        {/* Body Text */}
        <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-xs md:text-sm">
          <p>
            Our architectural design services cover every stage of your project,
            including concept development, detailed drawings, planning applications,
            and building regulations compliance.
          </p>
          <p>
            Our experienced architects work closely with clients to deliver innovative
            and practical design solutions, ensuring every project meets structural,
            functional, and regulatory requirements.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 md:block hidden left-0 w-1/4 h-[1px] bg-gray-400"></div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-[35%] lg:min-h-[500px] md:min-h-0">
        <img
          src={archDesign.src}
          alt="Architectural Design"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Process1;