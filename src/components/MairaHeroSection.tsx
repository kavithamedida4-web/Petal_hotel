"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  Clock,
  MapPin,
  Menu,
  X,
  Plane,
  BedDouble,
  Sparkles,
  Utensils,
} from "lucide-react";

export default function MairaHeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-[#f9f6f0] text-[#183b32] relative overflow-x-hidden">

      {/* Top Navigation Bar */}
      <header className="w-full bg-[#f9f6f0] border-b border-[#eae6df] sticky top-0 z-50">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-3 sm:py-3.5 flex items-center justify-between">

          {/* Left Brand Logo: Arched French Window + Petal Hotel */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <svg
              className="w-6 h-7 sm:w-7 sm:h-8 text-[#183b32]"
              viewBox="0 0 24 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 28V12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12V28" strokeLinecap="round" />
              <path d="M7 28V13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13V28" strokeLinecap="round" strokeWidth="1.1" />
              <line x1="2" y1="28" x2="22" y2="28" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[#183b32] leading-none">
                The Pearl
              </span>
              <span className="text-[7px] sm:text-[7.5px] font-bold tracking-[0.2em] text-[#7d756d] uppercase mt-0.5">
                HOTEL &middot; HYDERABAD
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-xs font-medium text-[#3b4742]">
            <Link href="/" className="hover:text-[#183b32] transition-colors py-1">
              Home
            </Link>
            <Link href="#services" className="hover:text-[#183b32] transition-colors py-1">
              Services
            </Link>
            <Link href="#about" className="hover:text-[#183b32] transition-colors py-1">
              About Us
            </Link>
            <Link href="#facilities" className="hover:text-[#183b32] transition-colors py-1">
              Facilities
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Pill CTA Button: Reserve your stay */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.hash = "contact";
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#183b32] hover:bg-[#122e27] border border-[#b59a6a] text-[#faf7f2] hover:text-white text-[11px] sm:text-xs font-medium tracking-wide transition-all shadow-xs cursor-pointer"
            >
              <CalendarCheck size={13} className="text-[#b59a6a] shrink-0" strokeWidth={1.8} />
              <span>Reserve your stay</span>
            </a>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 -mr-1 text-[#183b32] hover:bg-[#f9f6f0] rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#eae6df] px-6 py-5 flex flex-col gap-3.5 text-sm font-medium text-[#3b4742] shadow-lg animate-fadeIn">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#183b32]">Home</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#183b32]">Services</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#183b32]">About Us</Link>
            <Link href="#facilities" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#183b32]">Facilities</Link>
          </div>
        )}
      </header>

      {/* Main Hero Container - Full screen on mobile (100dvh) */}
      <section className="relative w-full min-h-[calc(100dvh-57px)] lg:min-h-[640px] flex flex-col justify-between lg:flex-row lg:items-stretch overflow-hidden">

        {/* Full-bleed Right Bedroom Photo (Desktop Background) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <Image
            src="/images/pearl_exterior_night_wide.jpg"
            alt="The Pearl Hotel Hyderabad Building in Shamshabad"
            fill
            priority
            loading="eager"
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Desktop Organic S-Curve Cream Overlay Mask */}
        <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 800"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M 0,0 L 710,0 C 730,70 750,150 740,240 C 725,340 670,430 645,540 C 625,630 635,730 640,800 L 0,800 Z"
              fill="#f9f6f0"
            />
          </svg>
        </div>

        {/* Hero Content Container - Natural left alignment without giant awkward gap */}
        <div className="relative z-20 w-full lg:w-[50%] xl:w-[48%] px-5 sm:px-8 lg:pl-14 lg:pr-8 xl:pl-20 xl:pr-10 2xl:pl-28 py-3.5 sm:py-12 lg:py-16 flex flex-col justify-center order-1">

          <div className="max-w-[490px] flex flex-col items-start my-auto">

            {/* Eyebrow Label with Shamshabad Highlight */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a0856c] inline-block shrink-0" />
              <span className="text-[9.5px] sm:text-[11px] font-bold tracking-[0.14em] sm:tracking-[0.2em] text-[#a0856c] uppercase">
                <span className="sm:hidden">THE PEARL HOTEL &middot; SHAMSHABAD</span>
                <span className="hidden sm:inline">THE PEARL HOTEL HYDERABAD - 47 ROOMS IN SHAMSHABAD</span>
              </span>
            </div>

            {/* Main Headline - Bold Sans-Serif matching reference screenshot */}
            <h1 className="section-title text-[#183b32] mb-2 sm:mb-3">
              Welcome to<br />
              The Pearl Hotel in<br />
              <span className="text-[#b59a6a]">Shamshabad</span>
            </h1>

            {/* Decorative Subtle Line */}
            <div className="w-10 h-[2px] bg-[#b89b82] mb-2.5 sm:mb-4" />

            {/* Subtitle / Description Copy - Compact on mobile, full on desktop */}
            <p className="text-[#525d58] text-[11.5px] sm:text-[13px] leading-relaxed max-w-[390px] font-normal mb-3 sm:mb-8">
              <span className="sm:hidden">
                47 well-appointed rooms in <strong className="text-[#b59a6a] font-semibold">Shamshabad</strong>, minutes from RGIA Airport with AC, TV, balcony, lift, power backup &amp; 24-hr front desk.
              </span>
              <span className="hidden sm:inline">
                A comfortable and affordable stay in <strong className="text-[#b59a6a] font-semibold">Shamshabad</strong> near Rajiv Gandhi International Airport. Featuring 47 well-appointed rooms, welcoming families, couples, business travellers, tourists, pilgrims, and groups.
              </span>
            </p>

            {/* Action Buttons: Side-by-side on mobile, matching reference screenshot */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center w-full sm:w-auto mb-2.5 sm:mb-0">
              <Link
                href="#contact"
                className="px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#183b32] hover:bg-[#122e27] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs transition-all flex items-center justify-center gap-1.5 group whitespace-nowrap"
              >
                <span>Book your stay now</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/918106665517"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-white hover:bg-[#f3eee5] border border-[#183b32]/35 text-[#183b32] text-[11px] sm:text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                <span>WhatsApp us</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Mobile Bedroom Image - Increased size to cover screen space */}
        <div className="lg:hidden w-full px-4 sm:px-6 pb-3 sm:pb-8 flex-1 flex flex-col justify-center order-2">
          {/* Main Photo Card - Expanded to cover available space */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-[#eae5dd]">
            <Image
              src="/images/pearl_deluxe_room_1.jpg"
              alt="The Pearl Hotel Deluxe Room in Shamshabad"
              fill
              priority
              loading="eager"
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

      </section>

    </div>
  );
}