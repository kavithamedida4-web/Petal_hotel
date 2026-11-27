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
    <div className="w-full bg-[#f9f6f0] text-[#0f263d] relative overflow-x-hidden">

      {/* Top Navigation Bar - Light Cream with Bold Dark Nav Text */}
      <header className="w-full bg-[#f9f6f0] border-b border-[#eae6df] sticky top-0 z-50">
        <div className="w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28 py-2.5 sm:py-3 flex items-center justify-between">

          {/* Left Brand Logo: The Pearl Hotel Official Logo */}
          <Link href="/" className="flex items-center group py-0.5 focus:outline-none">
            <Image
              src="/images/pearl_hotel_logo.png"
              alt="The Pearl Hotel Hyderabad Logo"
              width={180}
              height={65}
              priority
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          {/* Center Navigation Links (Desktop) - Increased Size & High Contrast */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-semibold text-[#0f263d] tracking-wide">
            <Link href="/" className="hover:text-[#b59a6a] transition-colors py-1 focus:outline-none">
              Home
            </Link>
            <Link href="#services" className="hover:text-[#b59a6a] transition-colors py-1 focus:outline-none">
              Services
            </Link>
            <Link href="#about" className="hover:text-[#b59a6a] transition-colors py-1 focus:outline-none">
              About Us
            </Link>
            <Link href="#facilities" className="hover:text-[#b59a6a] transition-colors py-1 focus:outline-none">
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
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0f263d] hover:bg-[#091929] border border-[#b59a6a] text-[#faf7f2] hover:text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all shadow-xs cursor-pointer focus:outline-none"
            >
              <CalendarCheck size={15} className="text-[#b59a6a] shrink-0" strokeWidth={2} />
              <span>Reserve your stay</span>
            </a>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 -mr-1 text-[#0f263d] hover:bg-[#eae6df] rounded-md transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#eae6df] px-6 py-5 flex flex-col gap-4 text-base font-semibold text-[#0f263d] shadow-lg animate-fadeIn">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#b59a6a] focus:outline-none">Home</Link>
            <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#b59a6a] focus:outline-none">Services</Link>
            <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#b59a6a] focus:outline-none">About Us</Link>
            <Link href="#facilities" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-[#b59a6a] focus:outline-none">Facilities</Link>
          </div>
        )}
      </header>

      {/* Main Hero Container - Full screen on mobile (100dvh) */}
      <section className="relative w-full min-h-[calc(100dvh-57px)] lg:min-h-[640px] flex flex-col justify-between lg:flex-row lg:items-stretch overflow-hidden">

        {/* Full-bleed Right Bedroom Photo (Desktop Background) */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <Image
            src="/images/hero_bedroom_restored.jpg"
            alt="The Pearl Hotel Bedroom in Shamshabad"
            fill
            priority
            loading="eager"
            className="object-cover object-[center_right] sm:object-right"
            sizes="(max-width: 1024px) 100vw, 100vw"
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
            {/* Main Headline - Bold Sans-Serif matching reference screenshot */}
            <h1 className="section-title text-[#0f263d] mb-2 sm:mb-3">
              Welcome to<br />
              The Pearl Hotel in<br />
              <span className="text-[#b59a6a]">Shamshabad</span>
            </h1>

            {/* Decorative Subtle Line */}
            <div className="w-10 h-[2px] bg-[#b89b82] mb-2.5 sm:mb-4" />

            {/* Subtitle / Description Copy - Featuring Official Tagline */}
            <p className="text-[#525d58] text-[11.5px] sm:text-[13px] leading-relaxed max-w-[440px] font-normal mb-3 sm:mb-8">
              <span className="sm:hidden">
                <strong className="text-[#0f263d] font-semibold">Comfort, Elegance &amp; Hospitality</strong> &ndash; 47 well-appointed rooms in Shamshabad near RGIA Airport. Starting from ₹2,500/night.
              </span>
              <span className="hidden sm:inline">
                <strong className="text-[#0f263d] font-semibold">&ldquo;Comfort, Elegance &amp; Hospitality &ndash; Your Perfect Stay Near Hyderabad Airport.&rdquo;</strong> Budget-friendly luxury featuring 47 well-appointed rooms, welcoming families, couples, business travellers, tourists, pilgrims, and groups. Starting from ₹2,500/night.
              </span>
            </p>

            {/* Action Buttons: Side-by-side on mobile, matching reference screenshot */}
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row items-center w-full sm:w-auto mb-2.5 sm:mb-0">
              <Link
                href="#contact"
                className="px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-[#0f263d] hover:bg-[#091929] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-xs transition-all flex items-center justify-center gap-1.5 group whitespace-nowrap"
              >
                <span>Book your stay now</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/918106665517"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-white hover:bg-[#f3eee5] border border-[#0f263d]/35 text-[#0f263d] text-[11px] sm:text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5 shadow-xs whitespace-nowrap"
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
              src="/images/hero_bedroom_restored.jpg"
              alt="The Pearl Hotel Bedroom in Shamshabad"
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