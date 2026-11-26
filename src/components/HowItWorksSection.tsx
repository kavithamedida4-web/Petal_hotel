"use client";

import React from "react";
import Image from "next/image";
import {
  BedDouble,
  Sparkles,
  KeyRound,
  Crown,
  Globe,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "CHOOSE YOUR ROOM",
    desc: "Select the room that fits your trip, from standard twin beds to spacious executive suites.",
    icon: BedDouble,
  },
  {
    number: "02",
    title: "SHARE YOUR TIMINGS",
    desc: "Let our team know your expected arrival time and if you need an airport pick-up.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "FAST CHECK-IN",
    desc: "Show your government ID at the front desk and receive your room key in under two minutes.",
    icon: KeyRound,
  },
  {
    number: "04",
    title: "RELAX & ENJOY",
    desc: "Unwind in your quiet room, order hot food from room service, and call reception whenever you need anything.",
    icon: Crown,
  },
];

export default function HowItWorksSection() {
  const Icon1 = steps[0].icon;
  const Icon2 = steps[1].icon;
  const Icon3 = steps[2].icon;
  const Icon4 = steps[3].icon;

  return (
    <section className="w-full bg-[#17181c] text-white py-12 lg:py-16 relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-10 lg:mb-12">
        <h2 className="section-title text-white">
          How It Works
        </h2>
      </div>

      {/* Main Interactive Grid - Compact Scale */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-6">
          
          {/* Left Column: Steps 01 & 02 */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center gap-6 sm:gap-8 lg:gap-14 z-10">
            {/* Step 01 */}
            <div className="flex flex-row lg:flex-row items-center justify-start lg:justify-end gap-3.5 sm:gap-4 text-left lg:text-right group">
              <div className="order-2 lg:order-1 max-w-[240px] lg:max-w-[190px]">
                <span className="text-[10px] font-mono text-[#c2b294] font-semibold tracking-widest block mb-0.5">
                  {steps[0].number}
                </span>
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wide uppercase text-white mb-1">
                  {steps[0].title}
                </h3>
                <p className="text-[11px] text-[#8e939e] leading-snug">
                  {steps[0].desc}
                </p>
              </div>
              <div className="order-1 lg:order-2 w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-[#c2b294] rounded-xl flex items-center justify-center text-[#17181c] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Icon1 size={22} strokeWidth={1.8} />
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-row lg:flex-row items-center justify-start lg:justify-end gap-3.5 sm:gap-4 text-left lg:text-right group">
              <div className="order-2 lg:order-1 max-w-[240px] lg:max-w-[190px]">
                <span className="text-[10px] font-mono text-[#c2b294] font-semibold tracking-widest block mb-0.5">
                  {steps[1].number}
                </span>
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wide uppercase text-white mb-1">
                  {steps[1].title}
                </h3>
                <p className="text-[11px] text-[#8e939e] leading-snug">
                  {steps[1].desc}
                </p>
              </div>
              <div className="order-1 lg:order-2 w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-[#c2b294] rounded-xl flex items-center justify-center text-[#17181c] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Icon2 size={22} strokeWidth={1.8} />
              </div>
            </div>
          </div>

          {/* Center Image with Organic Asymmetric Leaf Curve & Center Badge */}
          <div className="relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[320px] aspect-[4/5] mx-auto z-0 shrink-0">
            {/* The Asymmetric Curved Image Shape */}
            <div 
              className="relative w-full h-full overflow-hidden shadow-2xl border border-white/10"
              style={{
                borderRadius: "110px 14px 110px 14px",
              }}
            >
              <Image
                src="/images/petal_luxury_suite.jpg"
                alt="Luxury Hotel Architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 290px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
            </div>

            {/* Center Floating Icon Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#c2b294] text-[#17181c] border-[3px] border-[#17181c] shadow-2xl flex items-center justify-center z-20">
              <Globe size={26} strokeWidth={1.8} />
            </div>
          </div>

          {/* Right Column: Steps 03 & 04 */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center gap-8 lg:gap-14 z-10">
            {/* Step 03 */}
            <div className="flex items-center justify-start gap-3.5 text-left group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-[#c2b294] rounded-xl flex items-center justify-center text-[#17181c] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Icon3 size={22} strokeWidth={1.8} />
              </div>
              <div className="max-w-[190px]">
                <span className="text-[10px] font-mono text-[#c2b294] font-semibold tracking-widest block mb-0.5">
                  {steps[2].number}
                </span>
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wide uppercase text-white mb-1">
                  {steps[2].title}
                </h3>
                <p className="text-[11px] text-[#8e939e] leading-snug">
                  {steps[2].desc}
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex items-center justify-start gap-3.5 text-left group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-[#c2b294] rounded-xl flex items-center justify-center text-[#17181c] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Icon4 size={22} strokeWidth={1.8} />
              </div>
              <div className="max-w-[190px]">
                <span className="text-[10px] font-mono text-[#c2b294] font-semibold tracking-widest block mb-0.5">
                  {steps[3].number}
                </span>
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-wide uppercase text-white mb-1">
                  {steps[3].title}
                </h3>
                <p className="text-[11px] text-[#8e939e] leading-snug">
                  {steps[3].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
