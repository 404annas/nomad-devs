import procurement from "@/assets/project3-1.webp";

const Process5 = () => {
  return (
    <section className="flex flex-col md:flex-row gap-0 md:gap-8 w-full min-h-[500px] bg-white mb-10">
      {/* Left Content Side */}
      <div className="relative w-full md:w-[65%] bg-[#F3F4F6] p-6 md:p-10 flex flex-col justify-center">

        {/* Top Decorative Line */}
        <div className="absolute top-12 right-0 md:block hidden w-1/3 h-[1px] bg-gray-400"></div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#333] mb-6 md:mb-10 leading-tight tracking-tight uppercase font-light">
          Procurement
        </h2>

        {/* Body Text */}
        <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-xs md:text-sm">
          <p>
            Our procurement services ensure a seamless sourcing process for all materials,
            furnishings, and interior elements. Working with a trusted global network
            of suppliers, we manage orders, logistics, and quality control.
          </p>
          <p>
            We ensure every item aligns with the design vision and meets the highest standards.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 left-0 w-1/4 h-[1px] bg-gray-400"></div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-[35%] h-[250px] lg:min-h-[500px] md:min-h-0">
        <img
          src={procurement.src}
          alt="Procurement"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Process5;