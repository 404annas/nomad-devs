import React from "react";

const Speak = () => {
  return (
    <section className="bg-[#f6f4ef]">

      {/* ===== TOP SECTION ===== */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-10">

          {/* SAME HEIGHT WRAPPER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* LEFT TEXT CARD */}
            <div className="lg:col-span-8 bg-white px-16 py-24 flex flex-col justify-between">
              <div>
                <h4 className="uppercase tracking-widest text-sm mb-12 font-medium max-w-sm">
                  Speak to our private client senior project manager today.
                </h4>

                <h2 className="text-2xl font-semibold mb-6">
                  Ted Keeling
                </h2>

                <p className="text-[19px] leading-5 text-gray-800 max-w-sm">
                  A Chartered Construction Manager with a Master’s degree in Real
                  Estate and over a decade of experience in the prime and
                  super-prime residential sectors. Ted specialises in managing
                  all construction projects, from super-prime interior fit-outs
                  to basement excavations.
                </p>
              </div>

              <div className="mt-14 text-sm">
                <p className="mb-2">
                  <span className="font-semibold">T:</span> +44 (0) 2034 887 832
                </p>
                <p>
                  <span className="font-semibold">E:</span>{" "}
                  <a
                    href="mailto:privateclient@nomaddevelopments.com"
                    className="underline"
                  >
                    privateclient@nomaddevelopments.com
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE — SAME HEIGHT + SLIGHT RIGHT SHIFT */}
            <div className="lg:col-span-4 flex justify-between ">
              <img
                src="https://images.squarespace-cdn.com/content/v1/63f8a91775cbc4414ec45764/e921b42c-14e2-46cc-93a0-5aafd6166f65/Ted+Headshot.JPG?format=1500w"
                alt="Senior Project Manager"
                className="h-full w-[100%] object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ===== BOTTOM SERVICES SECTION ===== */}
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            <div>
              <h2 className="text-4xl leading-tighter max-w-lg leading-none px-14 py-none">
                One home, unlimited possibilities
              </h2>
            </div>

            <div className="space-y-4 text-[22px] leading-4">
              <p>Interior Concept Design</p>
              <p>Interior Architecture Design</p>
              <p>Architecture</p>
              <p>FF&amp;E Design</p>
              <p>Space planning</p>
              <p>Furniture design &amp; supply</p>
              <p>Procurement</p>
              <p>Accessories &amp; artwork sourcing</p>
              <p>Home Dressing</p>
              <p>In-House Construction team &amp; management</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Speak;
