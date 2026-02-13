import React from "react";

const Portfolio = () => {
  return (
    <section className="bg-white">
      
      {/* TOP LINE + TITLE */}
      <div className="max-w-[1600px] mx-auto px-10 pt-none">
        <div className="border-b border-[#c9b88a] pt-6 pb-3">
          <span className="text-lg tracking-tight text-black">
            PORTFOLIO
          </span>
        </div>
      </div>

      {/* IMAGES GRID */}
      <div className="max-w-[1600px] mx-auto px-10 py-10">
        <div className="grid grid-cols-2 gap-7">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Interior Kitchen"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Portfolio;
