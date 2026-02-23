import aboutImg from "@/assets/heroMain6.png"
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* TOP INTRO / HERO - Clean and Compact */}
      <section className="bg-white pt-20 pb-12">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-[38px] md:text-[42px] leading-[1.1] font-serif text-black">
            Crafting Iconic Luxury Spaces for Visionary Investors | Developers | Private Clients
          </h1>

          <p className="mt-5 text-[15px] leading-5 text-gray-700 max-w-xl mx-auto">
            Bespoke architecture and interiors for luxury residences and premium commercial spaces — tailored for international investors, developers, and discerning private clients.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Layout matching your image */}
      <section className="bg-white pb-10">
        <div className="max-w-[1500px] mx-auto px-8 md:px-10">
          {/* Grid with a clear gap (gap-10) between card and image */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-stretch">

            {/* LEFT TEXT CARD - Specific beige background */}
            <div className="bg-[#f3f2ee] p-8 md:p-10 flex flex-col justify-center">
              <p className="text-[17px] leading-5 text-black pb-4">
                Dwell Rich Designz  based in South London provides integrated architecture, interior design, and construction services for luxury and commercial developments. We partner with investors, developers, and private clients to translate vision into carefully executed, market-ready projects.
              </p>
              <p className="text-[17px] leading-5 text-black">Our portfolio spans bespoke residences and large-scale developments, each delivered with disciplined planning, refined detailing, and consistent quality.</p>

              <div className="mt-6">
                <Link href="/about" className="text-[12px] tracking-[0.2em] border-b border-black pb-1.5 uppercase font-semibold flex items-center gap-2 w-fit">
                  More ABOUT US <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE - Larger width as per image */}
            <div className="w-full h-[500px] md:h-[650px]">
              <img
                loading="lazy"
                src={aboutImg.src} // Replace with your actual image path
                alt="Modern Outdoor Area"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;