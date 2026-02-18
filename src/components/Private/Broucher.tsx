import React from "react";

const Broucher = () => {
  return (
    <section className="bg-[#f6f4ef] py-28">
      <div className="max-w-7xl mx-auto px-10">

        {/* GAP ADDED HERE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* LEFT IMAGE BLOCK */}
          <div className="lg:col-span-8">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/faa879bc-265e-4ce9-b221-2fe00ba04f8b/PC+Brochure.jpg?format=1500w"
              alt="Private Client Brochure"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT TEXT CARD */}
          <div className="lg:col-span-4 bg-[#f3f1ec] px-14 py-20 flex flex-col justify-center">
            <h4 className="uppercase text-sm tracking-widest mb-6">
              Private Client Brochure
            </h4>

            <p className="text-[15px] leading-7 text-gray-800 mb-10">
              Our Private Client brochure provides an in-depth look into our
              world of luxury real estate development and interior design, where
              visionary homes are meticulously crafted to perfection.
            </p>

            <a
              href="#"
              className="uppercase text-sm tracking-widest underline w-fit"
            >
              View
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Broucher;
