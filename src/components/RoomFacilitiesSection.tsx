"use client";

import React from "react";
import Image from "next/image";

export default function RoomFacilitiesSection() {
  const amenities = [
    {
      id: "ac",
      title: "AC Rooms",
      pos: "left-[3%] sm:left-[6%] lg:left-[8%] top-[54%] sm:top-[52%] -translate-y-1/2",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a1a1a]"
        >
          <rect x="6" y="10" width="36" height="18" rx="3" stroke="currentColor" strokeWidth="2.2" fill="none" />
          <line x1="10" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="1.8" />
          <line x1="32" y1="14" x2="38" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="33" x2="12" y2="39" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="18" y1="33" x2="18" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="24" y1="33" x2="24" y2="40" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="30" y1="33" x2="30" y2="42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="36" y1="33" x2="36" y2="39" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "tv",
      title: "TV",
      pos: "left-[14%] sm:left-[19%] lg:left-[22%] top-[24%] sm:top-[22%] lg:top-[20%]",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a1a1a]"
        >
          <path d="M16 8L24 16L32 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6" y="16" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="2.4" fill="none" />
          <path d="M12 21H36" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "restaurant",
      title: "Restaurant",
      pos: "left-1/2 -translate-x-1/2 top-[12%] sm:top-[13%] lg:top-[12%]",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a1a1a]"
        >
          <path d="M7 16V36M7 26H15V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41 16V36M41 26H33V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 26H33M24 26V36M18 36H30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M21 16H27M24 16V26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="21" cy="13" r="1.5" fill="currentColor" />
          <circle cx="24" cy="11" r="1.5" fill="currentColor" />
          <circle cx="27" cy="13" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "parking",
      title: "Parking Area",
      pos: "right-[14%] sm:right-[19%] lg:right-[22%] top-[24%] sm:top-[22%] lg:top-[20%]",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a1a1a]"
        >
          <circle cx="24" cy="18" r="12" stroke="currentColor" strokeWidth="2.4" />
          <path
            d="M21 24V12H25.5C27.5 12 29 13.5 29 15.5C29 17.5 27.5 19 25.5 19H21"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="24" y1="30" x2="24" y2="40" stroke="currentColor" strokeWidth="2.2" />
          <line x1="17" y1="40" x2="31" y2="40" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "wifi",
      title: "Free Wifi",
      pos: "right-[3%] sm:right-[6%] lg:right-[8%] top-[54%] sm:top-[52%] -translate-y-1/2",
      icon: (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-8 sm:h-8 text-[#1a1a1a]"
        >
          <path d="M8 15C18 6 30 6 40 15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M13 22C20 15 28 15 35 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M18 29C22 24 26 24 30 29" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="24" cy="37" r="2.5" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="facilities" className="w-full bg-[#f9f6f0] py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 overflow-x-hidden">
      
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto px-4 mb-8 sm:mb-12 text-center">
        <h2 className="font-serif font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#183b32] tracking-tight">
          Facilities at <span className="text-[#b59a6a]">Petal Hotel</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#5a6560] mt-2 max-w-lg mx-auto leading-relaxed">
          Everything you need for a restful stay: powerful air conditioning, high-speed Wi-Fi, fresh hot meals, and 24-hour front desk assistance.
        </p>
      </div>

      {/* Centered Luxury Card Container with Rounded Corners and Generous Gap */}
      <div className="max-w-6xl mx-auto relative min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl border border-[#ede5d8]">

        {/* Full Background Bedroom Photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/petal_hotel_facilities_banner.jpg"
            alt="Petal Hotel Executive Suite"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          {/* Subtle Warm Elegant Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/30" />
        </div>

        {/* 5 Floating Amenity Badges with Generous Headroom */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {amenities.map((item) => (
            <div
              key={item.id}
              className={`absolute ${item.pos} pointer-events-auto`}
            >
              <div className="w-[70px] h-[70px] sm:w-[88px] sm:h-[88px] lg:w-[104px] lg:h-[104px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col items-center justify-center p-2 text-center transition-all duration-300 hover:scale-108 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer border border-white/90 group">
                <div className="group-hover:scale-110 transition-transform duration-300 text-[#1a1a1a]">
                  {item.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-[#1a1a1a] mt-1 sm:mt-1.5 tracking-tight leading-none text-center">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
