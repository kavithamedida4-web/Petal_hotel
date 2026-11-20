import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section id="services" className="w-full py-12 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Intro copy, Explore button, and Sunset Cranes Arched Photo */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-5">
              Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
            </p>

            <Link
              href="#about"
              className="px-7 py-2.5 rounded-full bg-[#029bae] hover:bg-[#028495] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#029bae]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 mb-8"
            >
              Explore
            </Link>

            {/* Arched Construction Image with top-right arch */}
            <div className="relative w-full max-w-[320px] aspect-[3.5/4.5] overflow-hidden rounded-bl-3xl rounded-br-3xl rounded-tl-3xl feature-building-arch shadow-lg bg-slate-100">
              <Image
                src="/images/construction_cranes.jpg"
                alt="High-rise skyscrapers under construction with tower cranes at sunset"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </div>

          {/* Right Column: Section Heading and 01, 02, 03 Numbered Feature Blocks */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 leading-[1.18] tracking-tight mb-10 max-w-lg">
              Why Choose us for<br />
              best construction<br />
              experience
            </h2>

            {/* Feature Items List */}
            <div className="flex flex-col gap-8">
              
              {/* Feature 01 */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 shrink-0 bg-[#029bae] text-white flex items-center justify-center font-bold text-lg badge-tab shadow-sm shadow-[#029bae]/20 group-hover:scale-105 transition-transform">
                  01
                </div>
                <div className="flex flex-col pt-0.5">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#029bae] transition-colors">
                    And residence for met the estimate to
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed max-w-md">
                    dispensing. Mean if he they been no hold mr. Is at much do made took sold help.
                  </p>
                </div>
              </div>

              {/* Feature 02 */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 shrink-0 bg-[#ff7a3d] text-white flex items-center justify-center font-bold text-lg badge-tab shadow-sm shadow-[#ff7a3d]/20 group-hover:scale-105 transition-transform">
                  02
                </div>
                <div className="flex flex-col pt-0.5">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#ff7a3d] transition-colors">
                    Up maids me on temple stood give.
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed max-w-md">
                    Certainty say suffering his him collected intention promotion.
                  </p>
                </div>
              </div>

              {/* Feature 03 */}
              <div className="flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 shrink-0 bg-[#22c55e] text-white flex items-center justify-center font-bold text-lg badge-tab shadow-sm shadow-[#22c55e]/20 group-hover:scale-105 transition-transform">
                  03
                </div>
                <div className="flex flex-col pt-0.5">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base group-hover:text-[#22c55e] transition-colors">
                    Good draw knew bred ham shed find joy.
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed max-w-md">
                    Extremely eget erat sit amet dictum sit pellentesque habitant morbi tristique senectus.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
