"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function JamesCooperHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<"hd" | "exact">("hd");

  return (
    <div className="w-full min-h-screen bg-[#fbf9f4] text-[#231f1e] font-sans flex flex-col justify-between selection:bg-[#a95337] selection:text-white">
      
      {/* Top Navigation Bar */}
      <header className="w-full pt-6 pb-4 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo: Sunburst / Starburst + James Cooper */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Sunburst SVG Icon */}
          <svg
            className="w-6 h-6 text-[#a95337] group-hover:rotate-45 transition-transform duration-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <line x1="12" y1="2" x2="12" y2="7" />
            <line x1="12" y1="17" x2="12" y2="22" />
            <line x1="2" y1="12" x2="7" y2="12" />
            <line x1="17" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="4.93" x2="8.46" y2="8.46" />
            <line x1="15.54" y1="15.54" x2="19.07" y2="19.07" />
            <line x1="4.93" y1="19.07" x2="8.46" y2="15.54" />
            <line x1="15.54" y1="8.46" x2="19.07" y2="4.93" />
          </svg>
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#231f1e]">
            James Cooper
          </span>
        </Link>

        {/* Center Menu Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-[13px] font-medium text-[#5e5852]">
          <Link href="#home" className="text-[#231f1e] font-semibold hover:text-[#a95337] transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#231f1e] transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-[#231f1e] transition-colors">
            Services
          </Link>
          <Link href="#projects" className="hover:text-[#231f1e] transition-colors">
            Projects
          </Link>
          <Link href="#process" className="hover:text-[#231f1e] transition-colors">
            Process
          </Link>
          <Link href="#testimonials" className="hover:text-[#231f1e] transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-[#231f1e] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-[#a95337] hover:bg-[#92442c] text-white text-xs font-medium tracking-wide shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Let&apos;s Work Together
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="#contact"
            className="sm:hidden px-4 py-1.5 rounded-full bg-[#a95337] text-white text-xs font-medium"
          >
            Contact
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#231f1e] hover:text-[#a95337]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-6 bg-white rounded-2xl p-6 shadow-xl border border-stone-200 flex flex-col gap-3 text-sm text-[#5e5852] font-medium z-30">
          <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="text-[#a95337] font-semibold py-1">Home</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#231f1e] py-1">About</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#231f1e] py-1">Services</Link>
          <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#231f1e] py-1">Projects</Link>
          <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#231f1e] py-1">Process</Link>
          <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#231f1e] py-1">Testimonials</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#231f1e] py-1">Contact</Link>
        </div>
      )}

      {/* Main Hero Section Grid */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 sm:py-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Main Headline, Bio, Buttons, Social Proof */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
            
            {/* Eyebrow: DIGITAL CREATOR + horizontal line */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#7a726c] uppercase">
                DIGITAL CREATOR
              </span>
              <span className="w-12 h-px bg-[#d5ceca] inline-block"></span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.12] text-[#231f1e] tracking-tight mb-5">
              Design that<br />
              tells your <span className="italic text-[#a95337] font-serif">story.</span>
            </h1>

            {/* Subtitle / Bio Paragraph */}
            <p className="text-[#6b645e] text-xs sm:text-sm leading-relaxed max-w-md font-normal mb-8">
              I&apos;m James Cooper, a digital creator crafting thoughtful brands and websites that connect, inspire, and leave a lasting impression.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex items-center gap-5 mb-14 sm:mb-16">
              <Link
                href="#projects"
                className="px-6 py-2.5 rounded-lg bg-[#a95337] hover:bg-[#92442c] text-white text-xs font-semibold tracking-wide shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="text-[#6b645e] hover:text-[#231f1e] text-xs font-medium transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>Learn More</span>
                <span className="text-[#a95337] text-sm group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Trusted By Client Logos Bar */}
            <div className="w-full pt-4 border-t border-[#e8e2dc]/60">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#9d958f] uppercase block mb-3.5">
                TRUSTED BY
              </span>
              <div className="flex items-center gap-6 sm:gap-9 flex-wrap text-[#615a54] text-xs sm:text-sm opacity-80">
                <span className="font-serif font-bold tracking-tight hover:opacity-100 transition-opacity">
                  Harvest
                </span>
                <span className="font-sans font-bold tracking-[0.25em] text-[11px] hover:opacity-100 transition-opacity">
                  NOMAD
                </span>
                <span className="font-serif italic font-medium hover:opacity-100 transition-opacity">
                  Clay &amp; Co.
                </span>
                <span className="font-serif font-bold tracking-wide hover:opacity-100 transition-opacity">
                  Forage
                </span>
                <div className="flex items-center gap-1 font-sans font-extrabold tracking-wider text-[11px] hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5 text-[#a95337]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L4 16h6l-3 6 13-14h-5z" />
                  </svg>
                  <span>WILDWOOD</span>
                </div>
              </div>

              {/* Photo switcher */}
              <div className="mt-4 flex items-center gap-2 text-[10px] text-stone-400">
                <span>Display mode:</span>
                <button
                  type="button"
                  onClick={() => setActiveImage(activeImage === "hd" ? "exact" : "hd")}
                  className="underline hover:text-[#a95337] transition-colors cursor-pointer"
                >
                  {activeImage === "hd" ? "View Original Screenshot Crop" : "View Crisp 4K Editorial Photo"}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Arch Image with Floating Status Card */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[460px] lg:max-w-[500px]">
              
              {/* Arched Photo Container with Signature Top-Left Rounded Arch */}
              <div className="relative w-full aspect-[4/3.2] overflow-hidden rounded-tl-[160px] sm:rounded-tl-[200px] lg:rounded-tl-[240px] rounded-tr-3xl rounded-b-2xl shadow-xl shadow-stone-900/10 bg-[#e8e1d9]">
                <Image
                  src={activeImage === "hd" ? "/images/james_cooper_hd.jpg" : "/images/james_cooper_exact.png"}
                  alt="James Cooper - Digital Creator at wooden desk"
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Status Badge (Bottom Right) */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-5 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl py-2.5 px-4 shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-stone-200/80 flex items-center gap-3">
                {/* Circular Olive Green Badge with 'J' */}
                <div className="w-9 h-9 rounded-full bg-[#5f6341] flex items-center justify-center text-white font-serif font-bold text-base shadow-xs shrink-0">
                  J
                </div>
                {/* Availability Text */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-stone-400 font-medium leading-tight">Available for</span>
                  </div>
                  <span className="text-xs font-semibold text-[#231f1e] tracking-tight">new projects</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Subtle bottom padding */}
      <div className="h-6"></div>

    </div>
  );
}
