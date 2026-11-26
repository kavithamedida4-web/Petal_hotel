"use client";

import React, { useRef } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote:
      "Had a wonderful stay! The room was clean, comfortable, and well-maintained. The hospitality was great, and the overall experience was pleasant. Would definitely recommend this place for couples and family.",
    author: "Tanuja M.",
    location: "Family & Couple Stay",
  },
  {
    rating: 5,
    quote:
      "I had a wonderful experience at The Pearl Hotel Hyderabad. The rooms were clean, spacious, and comfortable. The staff was very polite, friendly, and helpful. The hospitality and service were excellent, and the overall atmosphere was pleasant. The hotel is a great choice for both business and family travellers. Highly recommended for anyone looking for a comfortable and enjoyable stay in Hyderabad!",
    author: "Mahesh babu",
    location: "Business & Family Traveler",
  },
  {
    rating: 5,
    quote:
      "We had an early morning flight from RGIA Shamshabad. The 12:00 noon check-in was smooth, the room had strong AC, hot water, and a nice balcony. The staff helped arrange an airport cab at 4:00 AM without any delay. Excellent budget property near the airport.",
    author: "Rajeshwar Rao",
    location: "Transit Guest",
  },
  {
    rating: 5,
    quote:
      "Very neat and well-maintained 47-room hotel. The lift, power backup, and fast Wi-Fi made our work trip comfortable. Room service food was fresh and served hot. Great value for money in Shamshabad.",
    author: "Dr. Sandhya Reddy",
    location: "Business Guest",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="w-full bg-[#f9f6f0] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-[#ede7de]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          {/* Main Title with Dual Tone - font-serif font-semibold (weight 600) */}
          <h2 className="font-serif font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#183b32] tracking-tight mb-3.5">
            What Our Customers <span className="text-[#b59a6a]">Say</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-[#525d58] leading-relaxed max-w-xl mx-auto">
            Genuine reviews from travelers, families, and business guests who stayed at The Pearl Hotel Hyderabad.
          </p>
        </div>

        {/* Testimonials Carousel Container with Navigation Arrows */}
        <div className="relative">
          
          {/* Floating Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#183b32] border border-[#eae5dd] shadow-lg hover:bg-[#183b32] hover:text-white transition-all z-20 items-center justify-center active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Floating Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#183b32] border border-[#eae5dd] shadow-lg hover:bg-[#183b32] hover:text-white transition-all z-20 items-center justify-center active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>

          {/* Horizontal Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[290px] sm:w-[340px] lg:w-[370px] bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-[#ede7df] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: 5 Stars + Verified Badge */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" strokeWidth={0} />
                      ))}
                    </div>

                    {/* Verified Pill Badge */}
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e8f7ee] border border-[#bce8cb] text-[#1e7e48]">
                      <CheckCircle size={11} strokeWidth={2.5} />
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        VERIFIED
                      </span>
                    </div>
                  </div>

                  {/* Customer Quote */}
                  <p className="text-xs sm:text-[13px] text-[#424d47] leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#f0ece4]">
                  <p className="font-sans font-semibold text-sm text-[#183b32]">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Swipe Notice */}
        <div className="sm:hidden text-center mt-6">
          <span className="text-[11px] text-[#8c7b6c] font-medium tracking-wide">
            ← Swipe to read more reviews →
          </span>
        </div>

      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
