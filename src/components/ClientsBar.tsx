import React from "react";

export default function ClientsBar() {
  return (
    <section className="w-full py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Rounded pill container with soft shadow and subtle border */}
        <div className="bg-white/90 backdrop-blur-xs rounded-full py-4 px-6 sm:px-10 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex items-center justify-between gap-4 sm:gap-8 flex-wrap">
          
          {/* CHASE */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
            <svg className="w-5 h-5 text-[#117aca]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.8l5.2 2.6v9.2L12 19.2 6.8 16.6V7.4L12 4.8z" />
              <rect x="9.5" y="9.5" width="5" height="5" fill="currentColor" />
            </svg>
            <span className="font-bold tracking-widest text-xs sm:text-sm text-slate-800">
              CHASE
            </span>
          </div>

          {/* asana */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
            <div className="flex flex-col items-center justify-center w-5 h-5">
              <span className="w-2 h-2 rounded-full bg-[#f06a6a]"></span>
              <div className="flex gap-1 -mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[#f06a6a]"></span>
                <span className="w-2 h-2 rounded-full bg-[#f06a6a]"></span>
              </div>
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-800">
              asana
            </span>
          </div>

          {/* BuzzFeed */}
          <div className="flex items-center gap-1.5 text-slate-800 hover:text-slate-900 transition-colors">
            <span className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-tight">
              Buzz<span className="text-[#ee3322]">Feed</span>
            </span>
          </div>

          {/* toggl */}
          <div className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
            <div className="w-4 h-4 rounded-full bg-[#e57cd8] flex items-center justify-center">
              <div className="w-0 h-0 border-t-[3px] border-t-transparent border-l-[5px] border-l-white border-b-[3px] border-b-transparent ml-0.5"></div>
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-800">
              toggl
            </span>
          </div>

          {/* Walmart */}
          <div className="flex items-center gap-1.5 text-slate-800 hover:text-slate-900 transition-colors">
            <span className="font-bold text-xs sm:text-sm text-[#0071ce] tracking-tight">
              Walmart
            </span>
            {/* Walmart 6-petal spark */}
            <svg className="w-3.5 h-3.5 text-[#ffc220]" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="4" r="2" />
              <circle cx="12" cy="20" r="2" />
              <circle cx="5" cy="8" r="2" />
              <circle cx="19" cy="8" r="2" />
              <circle cx="5" cy="16" r="2" />
              <circle cx="19" cy="16" r="2" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
