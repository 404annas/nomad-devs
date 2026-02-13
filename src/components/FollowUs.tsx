import React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=800",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800",
];

const FollowUs = () => {
  return (
    <section className="bg-[#e9e7e3] py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="flex items-center gap-2 mb-8">
          <Instagram size={18} />
          <span className="text-sm tracking-widest uppercase">
            Follow Us
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer h-[220px]"
            >
              <Image
                src={image}
                alt="follow"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 20vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
