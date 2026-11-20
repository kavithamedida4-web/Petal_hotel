import React from "react";

export default function CeoMessageSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#0a1826] via-[#0d2235] to-[#0a1826] text-white">
      {/* Crisp Atmospheric Construction Skyline & Cranes Silhouette in background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 overflow-hidden flex items-end justify-center">
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-w-[1024px] object-cover"
        >
          {/* Distant building silhouettes */}
          <rect x="120" y="140" width="90" height="240" fill="#38bdf8" fillOpacity="0.15" />
          <rect x="230" y="90" width="110" height="290" fill="#38bdf8" fillOpacity="0.25" />
          <rect x="360" y="170" width="80" height="210" fill="#38bdf8" fillOpacity="0.1" />
          <rect x="880" y="120" width="100" height="260" fill="#38bdf8" fillOpacity="0.2" />
          <rect x="1000" y="80" width="120" height="300" fill="#38bdf8" fillOpacity="0.25" />
          <rect x="1140" y="150" width="85" height="230" fill="#38bdf8" fillOpacity="0.15" />

          {/* Construction Tower Crane 1 (Left) */}
          <line x1="285" y1="20" x2="285" y2="380" stroke="#7dd3fc" strokeWidth="2.5" />
          <line x1="180" y1="50" x2="380" y2="50" stroke="#7dd3fc" strokeWidth="2" />
          <line x1="285" y1="20" x2="180" y2="50" stroke="#7dd3fc" strokeWidth="1.2" />
          <line x1="285" y1="20" x2="350" y2="50" stroke="#7dd3fc" strokeWidth="1.2" />
          <line x1="340" y1="50" x2="340" y2="90" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />

          {/* Construction Tower Crane 2 (Right) */}
          <line x1="1060" y1="15" x2="1060" y2="380" stroke="#7dd3fc" strokeWidth="2.5" />
          <line x1="960" y1="42" x2="1160" y2="42" stroke="#7dd3fc" strokeWidth="2" />
          <line x1="1060" y1="15" x2="960" y2="42" stroke="#7dd3fc" strokeWidth="1.2" />
          <line x1="1060" y1="15" x2="1130" y2="42" stroke="#7dd3fc" strokeWidth="1.2" />
          <line x1="1120" y1="42" x2="1120" y2="85" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Left Giant Quotation Mark */}
        <div className="absolute -left-2 sm:-left-4 top-2 text-white font-serif text-5xl sm:text-7xl select-none leading-none opacity-90">
          “
        </div>

        {/* Right Giant Quotation Mark */}
        <div className="absolute -right-2 sm:-right-4 bottom-2 text-white font-serif text-5xl sm:text-7xl select-none leading-none opacity-90">
          ”
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center text-center px-4 sm:px-12">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">
            Message from CEO
          </h2>

          {/* Quote Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-2xl">
            <p>
              Standing out and popularize construction standard to become the world wide leader well. Our own command strength give best feedback construction company. Continuous investment in latest state-of-the-art equipments and materials allow us to provide superior results for every client.
            </p>
            <p>
              In addition, skilled and talent workforce with maximum experience guarantee complete satisfaction to clients whatever the size, direction and type of construction. We believe that open communication and transparency throughout the project are key to delivering exceptional service and long-term customer satisfaction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
