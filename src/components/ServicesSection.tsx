"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Deluxe Room",
    subtitle: "1 king bed, up to 3 adults. AC, TV, private balcony & attached bath. Starting from ₹2,500/night.",
    img: "/images/pearl_deluxe_room_1.jpg",
  },
  {
    title: "Twin Room",
    subtitle: "2 single beds, up to 2 adults. AC, TV, private balcony & attached bath. Starting from ₹2,500/night.",
    img: "/images/pearl_twin_room.jpg",
  },
  {
    title: "Suite Room",
    subtitle: "1 king bed & living area, up to 3 adults. AC, TV, balcony & attached bath. Starting from ₹3,500/night.",
    img: "/images/pearl_suite_room.jpg",
  },
  {
    title: "In-House Restaurant & Room Service",
    subtitle: "Freshly prepared South & North Indian dishes, daily breakfast buffet, and 24-hr in-room dining.",
    img: "/images/pearl_restaurant.jpg",
  },
  {
    title: "24-Hour Front Desk & Power Backup",
    subtitle: "12:00 noon check-in/out, 100% generator power backup, and round-the-clock reception.",
    img: "/images/pearl_lobby_elevator.jpg",
  },
  {
    title: "Lift & Free On-Site Parking",
    subtitle: "Smooth elevator access across all 47 rooms, plus secure vehicle parking with CCTV monitoring.",
    img: "/images/pearl_exterior_night.jpg",
  },
  {
    title: "Spotless Corridors & CCTV Security",
    subtitle: "Bright marble corridors with 24/7 CCTV surveillance across all floors in Shamshabad.",
    img: "/images/pearl_corridor.jpg",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  };

  return (
    <section id="services" className="w-full bg-[#f9f6f0] py-14 sm:py-18 overflow-x-hidden border-t border-[#ede7de]">
      {/* Header with Title and Scroll Arrows */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="section-title text-[#0f263d]">
            Find Services Based On Your Interests
          </h2>
        </div>

        {/* Circular Prev/Next Arrow Buttons */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-[#d8d2c7] bg-white text-[#0f263d] hover:bg-[#0f263d] hover:text-white hover:border-[#0f263d] shadow-xs flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-[#d8d2c7] bg-white text-[#0f263d] hover:bg-[#0f263d] hover:text-white hover:border-[#0f263d] shadow-xs flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal scroll container with increased card size */}
      <div
        ref={scrollRef}
        className="max-w-7xl mx-auto flex gap-6 sm:gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 sm:px-10 lg:px-16 py-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((svc, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[310px] sm:w-[350px] lg:w-[380px] rounded-2xl overflow-hidden flex flex-col cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-white border border-[#eae4da]"
          >
            {/* Card Photo (Taller & Larger) */}
            <div className="relative h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden bg-[#e8e2d8]">
              <Image
                src={svc.img}
                alt={svc.title}
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-500"
                sizes="(max-width: 768px) 310px, 380px"
              />
            </div>

            {/* Clean Gold/tan info bar with uniform fixed height across all cards */}
            <div className="bg-[#b59a6a] px-6 py-4 sm:py-5 min-h-[110px] sm:min-h-[120px] flex flex-col justify-start">
              <p className="text-white font-serif text-lg sm:text-xl font-medium leading-tight">
                {svc.title}
              </p>
              <p className="text-white/95 text-xs sm:text-[13px] mt-2 font-sans leading-relaxed line-clamp-2">
                {svc.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}