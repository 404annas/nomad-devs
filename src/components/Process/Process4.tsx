import ffeDesign from "@/assets/project5-1.webp";

const Process4 = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse gap-0 md:gap-8 w-full min-h-[500px] bg-white mb-10">
      {/* Left Content Side */}
      <div className="relative w-full md:w-[65%] bg-[#F3F4F6] p-6 md:p-10 flex flex-col justify-center">

        {/* Top Decorative Line */}
        <div className="absolute top-12 right-0 md:block hidden w-1/3 h-[1px] bg-gray-400"></div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#333] mb-6 md:mb-10 leading-tight tracking-tight uppercase font-light">
          FF&E Design
        </h2>

        {/* Body Text */}
        <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-xs md:text-sm">
          <p>
            Our FF&E design services (Furniture, Fixtures, and Equipment) bring together
            custom furniture design, premium materials, and carefully selected finishes
            to create cohesive and sophisticated interiors.
          </p>
          <p>
            Every element is tailored to complement the overall design vision,
            resulting in beautifully crafted spaces that feel both luxurious and inviting.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 md:block hidden left-0 w-1/4 h-[1px] bg-gray-400"></div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-[35%] h-[250px] lg:min-h-[500px] md:min-h-0">
        <img
          src={ffeDesign.src}
          alt="FF&E Design"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Process4;