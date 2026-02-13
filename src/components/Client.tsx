import React from "react";

const Client = () => {
  return (
    <section className="bg-white">
      
      {/* TOP LINE + TITLE */}
      <div className="max-w-[1600px] mx-auto px-16 pt-16">
        <div className="border-t border-[#c9b88a] pt-6">
          <span className="text-xs tracking-widest text-black">
            PRIVATE CLIENT
          </span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1600px] mx-auto px-16 py-16">
        <div className="grid grid-cols-[1fr_1.6fr] gap-8">

          {/* LEFT PANEL */}
          <div className="bg-[#f5f4ef] flex items-center">
            <div className="px-14 py-16">
              <p className="text-[13px] leading-6 text-black max-w-xs">
                From bespoke renovations to fully considered homes, our
                Private Client service is discreet, end-to-end and highly
                collaborative. We build lasting relationships to create
                spaces that are personal, timeless and crafted with care.
              </p>

              <div className="mt-10">
                <span className="text-xs tracking-widest border-b border-black pb-1">
                  PRIVATE CLIENT
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea"
              alt="Private Client Interior"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Client;
