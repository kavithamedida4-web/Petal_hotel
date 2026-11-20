"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Standard Room (Twin Bed)",
    subtitle: "Two single beds with fresh linens, attached clean bathroom, air conditioning, and fast Wi-Fi",
    img: "/images/petal_room_twin.jpg",
  },
  {
    title: "Deluxe Room",
    subtitle: "Spacious king-size bed, private balcony, warm lighting, flat-screen TV, and tea/coffee maker",
    img: "/images/petal_card_deluxe.jpg",
  },
  {
    title: "Executive Deluxe Room",
    subtitle: "Generous suite layout with dedicated work desk, comfortable sofa seating, and extra luggage space",
    img: "/images/petal_room_executive.jpg",
  },
  {
    title: "Fine Dining Restaurant",
    subtitle: "Freshly prepared South & North Indian dishes, daily morning breakfast buffet, and late-night room service",
    img: "/images/petal_card_dining.jpg",
  },
  {
    title: "Infinity Swimming Pool",
    subtitle: "Open rooftop pool with fresh towels and comfortable loungers to unwind after a long journey",
    img: "/images/petal_service_pool.jpg",
  },
  {
    title: "Spa & Wellness Centre",
    subtitle: "Therapeutic body massages, Ayurvedic treatments, and herbal steam room for total relaxation",
    img: "/images/petal_service_spa.jpg",
  },
  {
    title: "Airport Transfer",
    subtitle: "Reliable 24/7 private car pick-up and drop-off directly to Rajiv Gandhi International Airport terminals",
    img: "/images/petal_airport_transfer_chauffeur.jpg",
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
          <h2 className="font-serif font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#183b32] tracking-tight">
            Find Services Based On Your Interests
          </h2>
        </div>

        {/* Circular Prev/Next Arrow Buttons */}
        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-[#d8d2c7] bg-white text-[#183b32] hover:bg-[#183b32] hover:text-white hover:border-[#183b32] shadow-xs flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-[#d8d2c7] bg-white text-[#183b32] hover:bg-[#183b32] hover:text-white hover:border-[#183b32] shadow-xs flex items-center justify-center transition-all cursor-pointer"
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
            <div className="bg-[#b59a6a] px-6 py-4 sm:py-5 h-[105px] sm:h-[115px] flex flex-col justify-center">
              <p className="text-white font-serif text-lg sm:text-xl font-medium leading-snug line-clamp-1">
                {svc.title}
              </p>
              <p className="text-white/95 text-xs sm:text-[13px] mt-1.5 font-sans leading-tight line-clamp-2">
                {svc.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}