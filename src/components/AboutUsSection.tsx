"use client";

import React from "react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about" className="w-full bg-[#f9f6f0] py-16 sm:py-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Overlapping Dual Images Layout matching reference */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[420px] sm:h-[480px]">
            {/* Main large back image with rounded soft corner */}
            <div className="relative w-[78%] h-[340px] sm:h-[390px] rounded-2xl overflow-hidden shadow-xl border border-white/40">
              <Image
                src="/images/petal_hotel_about_1.jpg"
                alt="Petal Hotel Executive Suite"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>

            {/* Overlapping front smaller image shifted down-right with white frame */}
            <div className="absolute right-0 bottom-4 sm:bottom-6 w-[55%] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/petal_hotel_about_2.jpg"
                alt="Petal Hotel Deluxe Bedroom"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col items-start">
            {/* Welcome label */}
            <span className="text-xs sm:text-sm font-semibold text-[#b59a6a] tracking-widest uppercase mb-2">
              Welcome to
            </span>

            {/* Hotel name heading - font-serif font-semibold (weight 600) */}
            <h2 className="font-serif font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#183b32] tracking-tight mb-5">
              Petal Hotel
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-[#525d58] leading-relaxed mb-4">
              Located in <strong className="text-[#b59a6a] font-semibold">Shamshabad</strong>, just a 10-minute drive from Rajiv Gandhi International Airport, <strong className="text-[#183b32] font-semibold">Petal Hotel</strong> was created to give travelers a quiet, dependable, and comfortable place to rest. We understand how tiring flights and road travel can be, which is why we focus on what truly matters: quiet air-conditioned rooms, clean beds with fresh linens, spotless bathrooms, and attentive staff.
            </p>
            <p className="text-sm sm:text-[15px] text-[#525d58] leading-relaxed mb-8">
              Whether you have an early morning flight, a long transit layover, or business meetings around the airport and Hyderabad, our team is at your service 24 hours a day with hot meals, easy check-in, and reliable airport pick-up and drop-off.
            </p>

            {/* Read More Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#b59a6a] hover:bg-[#9e8456] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all tracking-wide shadow-md hover:shadow-lg cursor-pointer"
            >
              Reserve a Room &rarr;
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}