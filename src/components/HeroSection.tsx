import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-4 pb-12 lg:pt-8 lg:pb-16">
      {/* Decorative swirling line in background */}
      <svg
        className="absolute top-24 left-0 w-[480px] h-[480px] pointer-events-none opacity-40 -z-10 hidden sm:block"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 180 C 10 260, 40 380, 140 400 C 240 420, 290 320, 220 260 C 150 200, 60 270, 70 340 C 80 410, 180 440, 260 420"
          stroke="#93c5fd"
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />
        <circle cx="140" cy="400" r="2.5" fill="#38bdf8" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy, CTA, Stats */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tagline / Kicker */}
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#029bae] uppercase mb-4">
              CONSTRUCTION
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-5">
              <span className="text-[#029bae]">Masters</span> of<br />
              Consistency and<br />
              Quality.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md mb-8">
              Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <Link
                href="#services"
                className="px-8 py-2.5 rounded-full bg-[#029bae] hover:bg-[#028495] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#029bae]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore
              </Link>
              <Link
                href="#contact"
                className="px-7 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 text-xs font-semibold tracking-wide transition-all shadow-xs"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats Row */}
            <div className="relative pt-2 w-full max-w-lg">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {/* Stat 1 */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a3d] shrink-0"></span>
                    <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      25,356
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Projects Done
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#029bae] shrink-0"></span>
                    <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      15,200
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Buildings Done
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] shrink-0"></span>
                    <span className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      350+
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Total Employees
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Architecture Image with signature curve */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Light blue soft background card behind image */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Soft sky-blue backdrop container */}
              <div className="absolute -top-6 -right-6 w-full h-[105%] bg-[#edf6fa] rounded-3xl -z-10 hidden sm:block"></div>
              
              {/* The Hero Building with signature bottom-left curved arch */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-3xl rounded-br-3xl hero-building-arch shadow-xl bg-slate-100">
                <Image
                  src="/images/building_clean.jpg"
                  alt="Classical architectural building with Haussmann facade"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Decorative small soft accent curve */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#029bae]/5 rounded-full blur-xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
