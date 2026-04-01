"use client";

import { motion } from "framer-motion";
import { Ruler, HardHat, Paintbrush, Package, Truck, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Architectural Design",
    icon: <Ruler className="w-5 h-5" />,
    desc: "Our architectural design services cover every stage of your project, including concept development, detailed drawings, planning applications, and building regulations compliance. Our experienced architects work closely with clients to deliver innovative and practical design solutions, ensuring every project meets structural, functional, and regulatory requirements.",
  },
  {
    title: "Build & Construction",
    icon: <HardHat className="w-5 h-5" />,
    desc: "As experienced design and build contractors, our construction team delivers high-quality builds with precision and reliability. We execute projects in accordance with approved drawings and all mandatory UK building regulations. With extensive experience across residential developments, we ensure every project is completed to the highest standards of craftsmanship and safety.",
  },
  {
    title: "Interior Design",
    icon: <Paintbrush className="w-5 h-5" />,
    desc: "Our luxury interior design services focus on creating bespoke interiors that reflect each client’s individual style and aspirations. We collaborate closely with you throughout the design process, carefully considering every detail to achieve a balance of comfort, elegance, and functionality. From concept to completion, our interiors are thoughtfully curated to deliver timeless and refined living spaces.",
  },
  {
    title: "FF&E Design",
    icon: <Package className="w-5 h-5" />,
    desc: "Our FF&E design services (Furniture, Fixtures, and Equipment) bring together custom furniture design, premium materials, and carefully selected finishes to create cohesive and sophisticated interiors. Every element is tailored to complement the overall design vision, resulting in beautifully crafted spaces that feel both luxurious and inviting.",
  },
  {
    title: "Procurement",
    icon: <ShoppingCart className="w-5 h-5" />,
    desc: "Our procurement services ensure a seamless sourcing process for all materials, furnishings, and interior elements. Working with a trusted global network of suppliers, we manage orders, logistics, and quality control to ensure every item aligns with the design vision and meets the highest standards.",
  },
  {
    title: "Delivery & Installation",
    icon: <Truck className="w-5 h-5" />,
    desc: "Our delivery and installation services ensure that every aspect of your project is executed with precision and care. From large architectural features to fine decorative details, our team coordinates installation efficiently, ensuring a flawless final result. We deliver fully completed spaces that are ready to live in and enjoy.",
  },
];

const steps = [
  { num: "01", title: "CONSULTATION", desc: "Value-optimised procurement without compromising material quality or design intent." },
  { num: "02", title: "DESIGN & DETAIL", desc: "Client-centric approach ensuring your vision becomes a functional blueprint for excellence." },
  { num: "03", title: "EXECUTION", desc: "Environmental responsibility meets precision engineering to bring the design to life." },
  { num: "04", title: "FINAL STYLING", desc: "Attention to detail in every mastery of color, master mastery, and texture symphonies." },
];

const ProcessClient = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="bg-white text-black selection:bg-gray-100 overflow-x-hidden">
      <Navbar />



      <section className="pt-40 md:pt-50 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp}>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Design & Build Process
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter mt-4 mb-6">
              Creating Beautiful, Comfortable, <br className="hidden md:block" /> 
              and <span className="text-gray-500">Timeless Interiors</span>
            </h1>
            <p className="max-w-4xl text-sm sm:text-base md:text-lg text-gray-600 leading-normal font-light text-justify">
              We are a leading design and build company offering comprehensive architectural design, 
              interior design, and construction services across residential projects. Our full-service 
              team delivers seamless turnkey solutions, guiding each project from initial concept 
              through to final completion. With a focus on quality, functionality, and timeless 
              aesthetics, we create bespoke spaces tailored to each client’s lifestyle and vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest">Our Approach</h2>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <span className="text-3xl font-bold text-gray-400 mb-4 block">{step.num}</span>
                <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <motion.div key={index} {...fadeInUp} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white shadow-lg shadow-black/10">
                    {service.icon}
                  </div>
                  <div className="h-px flex-1 bg-gray-300" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProcessClient;