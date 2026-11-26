"use client";

import React, { useRef } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    score: "5.0 / 5.0",
    quote:
      "Had a wonderful stay! The room was clean, comfortable, and well-maintained. The hospitality was great, and the overall experience was pleasant. Would definitely recommend this place for couples and family.",
    author: "Tanuja M",
    stayType: "Couples & Family Stay",
    avatarBg: "bg-[#b59a6a]",
    avatarInitial: "T",
  },
  {
    rating: 5,
    score: "5.0 / 5.0",
    quote:
      "I had a wonderful experience at The Pearl Hotel Hyderabad. The rooms were clean, spacious, and comfortable. The staff was very polite, friendly, and helpful. The hospitality and service were excellent, and the overall atmosphere was pleasant. The hotel is a great choice for both business and family travellers. Highly recommended for anyone looking for a comfortable and enjoyable stay in Hyderabad!",
    author: "Mahesh babu",
    stayType: "Business & Family Traveler",
    avatarBg: "bg-[#183b32]",
    avatarInitial: "M",
  },
  {
    rating: 5,
    score: "5.0 / 5.0",
    quote:
      "We had an early morning flight from RGIA Shamshabad. The 12:00 noon check-in was smooth, the room had strong AC, hot water, and a nice balcony. The staff helped arrange an airport cab at 4:00 AM without any delay. Excellent budget property near the airport.",
    author: "Rajeshwar Rao",
    stayType: "Transit & Airport Guest",
    avatarBg: "bg-[#2563eb]",
    avatarInitial: "R",
  },
  {
    rating: 5,
    score: "5.0 / 5.0",
    quote:
      "Very neat and well-maintained 47-room hotel. The lift, power backup, and fast Wi-Fi made our work trip comfortable. Room service food was fresh and served hot. Great value for money in Shamshabad.",
    author: "Dr. Sandhya Reddy",
    stayType: "Corporate & Business Guest",
    avatarBg: "bg-[#7c3aed]",
    avatarInitial: "S",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 380 : -380, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="w-full bg-[#f9f6f0] py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-[#ede7de]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          {/* Trust rating badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecdf] border border-[#d8cca8] text-[#183b32] text-xs font-semibold mb-3.5 shadow-xs">
            <div className="flex items-center gap-0.5 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#f59e0b" strokeWidth={0} />
              ))}
            </div>
            <span>5.0 / 5.0 Rated by Guests &middot; 100% Verified Reviews</span>
          </div>

          {/* Main Title with Dual Tone */}
          <h2 className="section-title text-[#183b32] mb-3.5">
            What Our Customers <span className="text-[#b59a6a]">Say</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-[#525d58] leading-relaxed max-w-xl mx-auto">
            Real guest experiences from Tanuja M, Mahesh babu, and travellers who enjoyed a comfortable, elegant stay at The Pearl Hotel Hyderabad in Shamshabad.
          </p>
        </div>

        {/* Testimonials Carousel Container with Navigation Arrows */}
        <div className="relative">

          {/* Floating Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#183b32] border border-[#eae5dd] shadow-lg hover:bg-[#183b32] hover:text-white transition-all z-20 items-center justify-center active:scale-95 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Floating Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-[#183b32] border border-[#eae5dd] shadow-lg hover:bg-[#183b32] hover:text-white transition-all z-20 items-center justify-center active:scale-95 cursor-pointer"
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
                className="snap-start shrink-0 w-[300px] sm:w-[360px] lg:w-[400px] bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-[#ede7df] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: 5 Stars + Rating Score + Verified Badge */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Stars and score */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5 text-[#f59e0b]">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} size={15} fill="#f59e0b" strokeWidth={0} />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#183b32] tracking-tight">
                        {item.score}
                      </span>
                    </div>

                    {/* Verified Pill Badge */}
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#e8f7ee] border border-[#bce8cb] text-[#1e7e48]">
                      <CheckCircle size={11} strokeWidth={2.5} />
                      <span className="text-[10px] font-bold tracking-wider uppercase">
                        VERIFIED 5/5
                      </span>
                    </div>
                  </div>

                  {/* Customer Quote */}
                  <p className="text-xs sm:text-[13.5px] text-[#374151] leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info with Initial Avatar */}
                <div className="pt-4 border-t border-[#f0ece4] flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
                  >
                    {item.avatarInitial}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm text-[#183b32] leading-tight">
                      {item.author}
                    </p>
                    <p className="text-[11.5px] text-[#6b7280] font-medium leading-tight mt-0.5">
                      {item.stayType} &middot; <span className="text-[#1e7e48] font-semibold">Verified Stay</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Swipe Notice */}
        <div className="sm:hidden text-center mt-6">
          <span className="text-[11px] text-[#8c7b6c] font-medium tracking-wide">
            &larr; Swipe to read all 5/5 reviews &rarr;
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
