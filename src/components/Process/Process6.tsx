import deliveryInstall from "@/assets/home15.jpg";

const Process6 = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse gap-0 md:gap-8 w-full min-h-[500px] bg-white">
      {/* Left Content Side */}
      <div className="relative w-full md:w-[65%] bg-[#F3F4F6] p-6 md:p-10 flex flex-col justify-center">

        {/* Top Decorative Line */}
        <div className="absolute top-12 right-0 md:block hidden w-1/3 h-[1px] bg-gray-400"></div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#333] mb-6 md:mb-10 leading-tight tracking-tight uppercase font-light">
          Delivery & Installation
        </h2>


        {/* Body Text */}
        <div className="space-y-8 text-[#4a4a4a] font-light leading-relaxed text-xs md:text-sm">
          <p>
            Our delivery and installation services ensure that every aspect of your project
            is executed with precision and care. From large architectural features to fine
            decorative details, our team coordinates installation efficiently.
          </p>
          <p>
            We ensure a flawless final result, delivering fully completed spaces that
            are ready to live in and enjoy.
          </p>
        </div>

        {/* Bottom Decorative Line */}
        <div className="absolute bottom-12 md:block hidden left-0 w-1/4 h-[1px] bg-gray-400"></div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-[35%] lg:min-h-[500px] md:min-h-0">
        <img
          src={deliveryInstall.src}
          alt="Delivery & Installation"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Process6;