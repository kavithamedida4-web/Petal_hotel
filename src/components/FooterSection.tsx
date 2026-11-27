"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#091422] text-[#9ca3af] pt-16 sm:pt-20 pb-8 border-t border-white/10 overflow-x-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pb-12 sm:pb-14">
          
          {/* Column 1: Brand Info (4 cols on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
            {/* Brand Logo with White Typography for Dark Background */}
            <Link href="/" className="inline-flex items-center group self-start">
              <Image
                src="/images/pearl_hotel_logo_white.png"
                alt="The Pearl Hotel Hyderabad Logo"
                width={190}
                height={65}
                className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            {/* Hotel Description with improved line spacing and readability */}
            <p className="text-[13px] text-[#9ca3af] leading-[1.7] max-w-sm sm:max-w-md">
              <strong className="text-white font-semibold">The Pearl Hotel Hyderabad</strong> offers a comfortable, elegant, and affordable stay near Hyderabad Airport with 47 well-appointed rooms. Welcoming families, couples, business travellers, tourists, pilgrims, international guests, and groups with 12:00 noon check-in/out, lift, 100% power backup, and 24/7 front desk support.
            </p>
          </div>

          {/* Column 2: QUICK LINKS (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="/" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Rooms &amp; Services</span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Facilities</span>
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Photo Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Reservations</span>
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: ROOMS & SERVICES (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-sans text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase">
              ROOMS &amp; SERVICES
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Deluxe Room (from ₹2,500)</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Twin Room (from ₹2,500)</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Suite Room (from ₹3,500)</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>In-House Restaurant &amp; Room Service</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>24-Hour Front Desk &amp; Power Backup</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>Lift &amp; Free On-Site Parking</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#9ca3af] hover:text-[#b59a6a] transition-colors flex items-center gap-2 group">
                  <span className="text-[#b59a6a] font-bold group-hover:translate-x-0.5 transition-transform">&gt;</span>
                  <span>24/7 Airport Transfer Assistance</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-xs sm:text-[13px]">
            <h4 className="font-sans text-xs sm:text-[13px] font-extrabold tracking-widest text-white uppercase">
              CONTACT US
            </h4>
            
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#b59a6a]">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919700000970" className="text-white font-medium hover:text-[#b59a6a] transition-colors tracking-wide">
                    +91 97000 00970
                  </a>
                  <a href="tel:+918106665517" className="text-[#9ca3af] text-xs hover:text-[#b59a6a] transition-colors tracking-wide">
                    +91 81066 65517
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#b59a6a]">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@pearlhotelhyderabad.com" className="text-[#9ca3af] hover:text-white transition-colors break-all">
                  info@pearlhotelhyderabad.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#b59a6a]">
                  <MapPin size={16} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[#8e95a5] leading-relaxed">
                    PL NO 75/EP, Sai Pramukh Enclave, Devatha Bowli, ThonduPally, Shamshabad, Hyderabad, Telangana 501218
                  </p>
                  <a
                    href="https://www.google.com/travel/hotels/s/uSvWFWegFuYFxwFt8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b59a6a] hover:underline font-semibold inline-block"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#b59a6a]">
                  <Clock size={16} />
                </div>
                <div className="flex flex-col">
                  <p className="text-white font-semibold">
                    Check-in: 12:00 PM | Check-out: 12:00 PM
                  </p>
                  <p className="text-[#8e95a5] text-[11px] mt-0.5">
                    24-Hour Front Desk &amp; Room Assistance
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Accepted Payment Methods and Domain Info */}
        <div className="py-4 border-t border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8e95a5]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span className="text-white font-medium">Accepted Payments:</span>
            <span>Cash &bull; UPI (GPay / PhonePe / Paytm) &bull; Debit / Credit Cards &bull; Net Banking</span>
          </div>
          <div className="text-[11px] text-[#b59a6a] font-medium tracking-wide">
            Domain: pearlhotelhyderabad.com
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#8e95a5]">
          <p className="text-center sm:text-left">
            &copy; 2026 The Pearl Hotel Hyderabad. All rights reserved.
          </p>

          <p className="text-center sm:text-right">
            Designed &amp; Developed by{" "}
            <span className="text-white font-bold tracking-wide">Edone Solutions</span>
          </p>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Pill Button in Bottom Right */}
      <a
        href="https://wa.me/919700000970"
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