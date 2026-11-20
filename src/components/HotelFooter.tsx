"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function HotelFooter() {
  const [booked, setBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 5000);
  };

  return (
    <footer id="contact" className="w-full bg-[#200f0a] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Booking Card */}
        <div id="booking" className="bg-gradient-to-r from-[#ff856d] via-[#ff765b] to-[#fa694e] rounded-3xl p-8 sm:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase mb-2 block">
              Direct Reservation
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Book Your Luxury Getaway
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-8">
              Receive complimentary breakfast in bed every morning, late checkout, and welcome champagne on arrival.
            </p>

            {booked ? (
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl flex items-center gap-3 text-white">
                <CheckCircle2 size={24} className="text-white shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Reservation Request Received!</h4>
                  <p className="text-xs text-white/80 mt-0.5">Our concierge team will confirm your booking within 15 minutes.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="date"
                  required
                  className="px-4 py-2.5 rounded-xl bg-white text-[#200f0a] text-xs font-medium focus:outline-hidden"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  className="px-4 py-2.5 rounded-xl bg-white text-[#200f0a] text-xs font-medium focus:outline-hidden placeholder:text-stone-400"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#200f0a] hover:bg-[#150a06] text-white text-xs font-bold transition-all shadow-md"
                >
                  Reserve Now
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-xs text-white/70">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <span
              className="text-2xl font-normal text-white tracking-wide block mb-3"
              style={{ fontFamily: "'Brush Script MT', 'Dancing Script', 'Playfair Display', cursive, serif" }}
            >
              Hotel &amp; Resort
            </span>
            <p className="leading-relaxed">
              Exquisite beachside sanctuary offering world-class dining, signature suites, and serene coastal tranquility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-[11px]">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#rooms" className="hover:text-[#ff765b] transition-colors">Rooms &amp; Suites</Link></li>
              <li><Link href="#services" className="hover:text-[#ff765b] transition-colors">Dining &amp; Breakfast</Link></li>
              <li><Link href="#services" className="hover:text-[#ff765b] transition-colors">Spa &amp; Wellness</Link></li>
              <li><Link href="#booking" className="hover:text-[#ff765b] transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Guidelines */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-[11px]">Safety Standards</h4>
            <ul className="space-y-2">
              <li><span>■ COVID Free Certified</span></li>
              <li><span>■ Obligatory Mask Protocol</span></li>
              <li><span>■ Sanitized In-Room Dining</span></li>
              <li><span>■ Limited Capacity Suites</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-[11px]">Contact &amp; Location</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-[#ff765b]" />
                <span>Ocean Boulevard 108, Coastal Bay</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#ff765b]" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#ff765b]" />
                <span>concierge@hotelandresort.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50">
          <p>© 2026 Hotel &amp; Resort. All rights reserved.</p>
          <div className="flex gap-6 mt-3 sm:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
            <Link href="#" className="hover:text-white">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
