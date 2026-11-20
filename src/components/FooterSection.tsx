"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0e1013] text-[#9ca3af] pt-16 sm:pt-20 pb-8 border-t border-white/10 overflow-x-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Main 4-Column Footer Grid matching Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Brand Logo matching Header Emblem & Typography */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <svg
                className="w-7 h-8 sm:w-8 sm:h-9 text-[#b59a6a] group-hover:text-[#cbb181] transition-colors shrink-0"
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
                <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-white leading-none">
                  Petal
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.25em] text-[#b59a6a] uppercase mt-1">
                  HOTEL &middot; SHAMSHABAD
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-[#8e95a5] leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Petal Hotel</strong> offers clean, comfortable accommodation in <strong className="text-white">Shamshabad</strong>, located just 10 minutes from Rajiv Gandhi International Airport. Whether you are traveling for business, a flight transit, or a family vacation, our 24/7 front desk team is always here to help you rest and feel at home.
            </p>
          </div>

          {/* Column 2: QUICK LINKS (2.5 cols) */}
          <div className="lg:col-span-2 sm:col-span-1 flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Rooms &amp; Services</span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Reservations</span>
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Common Questions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SERVICES (2.5 cols) */}
          <div className="lg:col-span-3 sm:col-span-1 flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase">
              HOTEL SERVICES
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="#services" className="text-[#b59a6a] hover:text-[#d1b585] transition-colors flex items-center gap-2 group font-semibold">
                  <span className="font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Standard Room (Twin Bed)</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Deluxe Room</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Executive Deluxe Room</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Fine Dining Restaurant</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Infinity Swimming Pool</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Spa &amp; Wellness Centre</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>24/7 Airport Transfer</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-xs sm:text-[13px]">
            <h4 className="font-sans text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase">
              CONTACT US
            </h4>
            
            <div className="flex flex-col gap-3.5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#b59a6a] shrink-0 mt-0.5" />
                <a href="tel:+919100048478" className="text-white font-medium hover:text-[#b59a6a] transition-colors tracking-wide">
                  +91 91000 48478
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#b59a6a] shrink-0 mt-0.5" />
                <a href="mailto:concierge@petalhotel.com" className="hover:text-white transition-colors break-all">
                  concierge@petalhotel.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#b59a6a] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#8e95a5] leading-relaxed">
                    Airport Road, Shamshabad, Hyderabad, Telangana 501218
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b59a6a] hover:underline font-semibold inline-block mt-1"
                  >
                    View locations on Google Maps
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#b59a6a] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Mon – Sun: 24/7 Operations</p>
                  <p className="text-[#8e95a5] text-[11px] mt-0.5">
                    24/7 Front Desk &amp; Airport Transfers
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e95a5]">
          <p className="text-center sm:text-left">
            &copy; 2026 Petal Hotel. All rights reserved.
          </p>

          <p className="text-center sm:text-right">
            Designed &amp; Developed by{" "}
            <span className="text-white font-bold tracking-wide">Edone Solutions</span>
          </p>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Pill Button in Bottom Right */}
      <a
        href="https://wa.me/919100048478"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full bg-[#00a884] hover:bg-[#008f6f] text-white text-xs font-semibold tracking-wide shadow-2xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat With Us"
      >
        <MessageCircle size={18} />
        <span>Chat With Us</span>
      </a>
    </footer>
  );
}