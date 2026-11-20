"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Menu, X, ArrowRight } from "lucide-react";

export default function HotelHeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBg, setActiveBg] = useState<"indian" | "guest" | "suite">("indian");

  const bgImages = {
    indian: "/images/indian_hotel_hero.jpg",
    guest: "/images/hotel_guest_clean.jpg",
    suite: "/images/hotel_hd_1.jpg",
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[920px] overflow-hidden bg-[#200f0a] select-none flex flex-col justify-between">
      
      {/* Background Hotel Photo (Right & Center) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImages[activeBg]}
          alt="Indian Luxury Hotel & Resort bedroom with breakfast in bed"
          fill
          priority
          className="object-cover object-center transition-all duration-700 brightness-95 contrast-105"
          sizes="100vw"
        />
        {/* Soft vignette on the right */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>
      </div>

      {/* Signature Coral Curved Diagonal Shape (Left) */}
      <svg
        viewBox="0 0 1440 820"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      >
        <defs>
          <linearGradient id="coralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff856d" />
            <stop offset="60%" stopColor="#ff765b" />
            <stop offset="100%" stopColor="#fa694e" />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="12" dy="0" stdDeviation="16" floodColor="#000000" floodOpacity="0.18" />
          </filter>
        </defs>
        <path
          d="M 0,0 L 410,0 C 620,130 760,260 760,430 C 760,560 650,700 510,820 L 0,820 Z"
          fill="url(#coralGrad)"
          filter="url(#softShadow)"
        />
      </svg>

      {/* Top Header / Navigation Bar */}
      <header className="relative z-20 w-full pt-6 sm:pt-8 px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Left: Cursive Script Logo "Hotel & Resort" */}
        <Link href="/" className="group">
          <span
            className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-white tracking-wide drop-shadow-xs transition-transform group-hover:scale-105 inline-block"
            style={{ fontFamily: "'Brush Script MT', 'Dancing Script', 'Playfair Display', cursive, serif" }}
          >
            Hotel &amp; Resort
          </span>
        </Link>

        {/* Right: Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-10 text-white font-medium text-xs sm:text-sm tracking-wide">
          <Link
            href="#rooms"
            className="hover:text-amber-200 transition-colors drop-shadow-xs py-1"
          >
            Rooms&amp;Suites
          </Link>
          <Link
            href="#services"
            className="hover:text-amber-200 transition-colors drop-shadow-xs py-1"
          >
            Services
          </Link>
          <Link
            href="#blog"
            className="hover:text-amber-200 transition-colors drop-shadow-xs py-1"
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="hover:text-amber-200 transition-colors drop-shadow-xs py-1"
          >
            Contact
          </Link>

          {/* Hamburger Menu Icon (3 white horizontal lines) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col justify-center items-center gap-1 w-6 h-6 hover:opacity-80 transition-opacity ml-1"
            aria-label="Toggle Menu"
          >
            <span className="w-5 h-0.5 bg-white rounded-full"></span>
            <span className="w-5 h-0.5 bg-white rounded-full"></span>
            <span className="w-5 h-0.5 bg-white rounded-full"></span>
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-1"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 right-6 z-30 bg-[#200f0a]/95 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl flex flex-col gap-4 text-white text-sm">
          <Link href="#rooms" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff765b]">Rooms &amp; Suites</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff765b]">Services</Link>
          <Link href="#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff765b]">Blog</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#ff765b]">Contact</Link>
        </div>
      )}

      {/* Hero Content (Positioned inside the Coral Shape on the left) */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-16 my-auto max-w-xl lg:max-w-2xl">
        <div className="flex flex-col items-start pt-2 pb-8">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-white leading-[1.08] tracking-tight drop-shadow-xs mb-5">
            Breakfast<br />
            in bed included
          </h1>

          {/* Subtitle / Description */}
          <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-sm sm:max-w-md font-light mb-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.
          </p>

          {/* Pill CTA Button */}
          <Link
            href="#booking"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#200f0a] hover:bg-[#150a06] text-white text-xs sm:text-sm font-bold tracking-wide shadow-xl shadow-black/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 group"
          >
            <span>Book Now</span>
            <ArrowRight size={14} className="opacity-70 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Image Switcher Pill */}
          <div className="mt-8 flex items-center gap-2 bg-black/20 backdrop-blur-xs p-1.5 rounded-full border border-white/15">
            <span className="text-[10px] text-white/70 font-medium px-2">View:</span>
            <button
              onClick={() => setActiveBg("indian")}
              className={`text-[10px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                activeBg === "indian" ? "bg-white text-[#ff765b] shadow-xs" : "text-white/80 hover:text-white"
              }`}
            >
              Indian Heritage Room
            </button>
            <button
              onClick={() => setActiveBg("guest")}
              className={`text-[10px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                activeBg === "guest" ? "bg-white text-[#ff765b] shadow-xs" : "text-white/80 hover:text-white"
              }`}
            >
              Guest Breakfast
            </button>
            <button
              onClick={() => setActiveBg("suite")}
              className={`text-[10px] px-2.5 py-1 rounded-full font-semibold transition-all ${
                activeBg === "suite" ? "bg-white text-[#ff765b] shadow-xs" : "text-white/80 hover:text-white"
              }`}
            >
              Luxury Suite
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar / Strip */}
      <div className="relative z-20 w-full flex flex-col sm:flex-row items-stretch text-white text-[11px] sm:text-xs">
        
        {/* Left Segment (Coral - Aligned with curve bottom) */}
        <div className="w-full sm:w-[35.5%] bg-[#ff765b] py-3 px-6 sm:px-12 flex items-center tracking-wider font-bold uppercase shadow-inner">
          <span>OBLIGATORY USE OF FACE MASK</span>
        </div>

        {/* Right Segment (Dark Chocolate Brown) */}
        <div className="w-full sm:w-[64.5%] bg-[#200f0a] py-3 px-6 sm:px-12 flex items-center justify-between flex-wrap gap-4 border-t sm:border-t-0 sm:border-l border-white/10">
          
          {/* Health & Safety Points */}
          <div className="flex items-center gap-6 font-medium text-white/90">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white inline-block"></span>
              <span>COVID FREE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white inline-block"></span>
              <span>Limited Capacity</span>
            </div>
          </div>

          {/* Quick Contact Icons */}
          <div className="flex items-center gap-5 text-white/85">
            <Link href="mailto:info@hotelandresort.com" className="hover:text-[#ff765b] transition-colors" title="Email Us">
              <Mail size={15} />
            </Link>
            <Link href="#location" className="hover:text-[#ff765b] transition-colors" title="Our Location">
              <MapPin size={15} />
            </Link>
            <Link href="tel:+18005550199" className="hover:text-[#ff765b] transition-colors" title="Call Us">
              <Phone size={15} />
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}
