"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  BedDouble,
  Users,
  Calendar,
  MessageSquare,
  ShieldCheck,
  MapPin,
  Clock,
  ExternalLink,
  Navigation,
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "Deluxe Room",
    guests: "2 Guests",
    checkIn: "",
    checkOut: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageLines = [
      `*New Reservation / Inquiry - The Pearl Hotel Hyderabad*`,
      `---------------------------------------`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `✉️ *Email:* ${formData.email}`,
      `🏨 *Category:* ${formData.roomType}`,
      `👥 *Guests:* ${formData.guests}`,
      `📅 *Check-in Date:* ${formData.checkIn || "Not specified"}`,
      `📅 *Check-out Date:* ${formData.checkOut || "Not specified"}`,
      `📝 *Special Requests:* ${formData.message || "None"}`,
      `---------------------------------------`,
      `Sent via The Pearl Hotel Hyderabad Website`,
    ];

    const encodedText = encodeURIComponent(messageLines.join("\n"));
    const whatsappUrl = `https://wa.me/918106665517?text=${encodedText}`;

    // Open WhatsApp with pre-filled form info
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  const googleMapsTravelUrl = "https://www.google.com/travel/hotels/s/uSvWFWegFuYFxwFt8";

  return (
    <section id="contact" className="w-full bg-[#f9f6f0] py-12 sm:py-16 lg:py-20 border-t border-[#ede7de] overflow-x-hidden relative scroll-mt-14">
      {/* Decorative ambient color glows */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-[#b59a6a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-[#183b32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecdf] border border-[#d8cca8] text-[#183b32] text-xs font-semibold mb-3 shadow-xs">
            <MapPin size={13} className="text-[#b59a6a]" />
            <span>Sai Pramukh Enclave, Shamshabad &middot; Near RGIA Airport</span>
          </div>

          <h2 className="section-title text-[#183b32] mb-2">
            Plan Your Stay <span className="text-[#b59a6a]">With Us</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#525d58] leading-relaxed">
            Reserve your room directly with our front desk at <strong className="text-[#b59a6a] font-semibold">The Pearl Hotel Hyderabad</strong> in Shamshabad. 12:00 noon check-in/out and 24/7 airport assistance.
          </p>
        </div>

        {/* 2-Column Side-by-Side Grid: Left is Form, Right is Map & Hotel Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Compact Reservation & Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#e5decb] shadow-lg shadow-[#183b32]/5 relative overflow-hidden">

            {/* Top Brand Color Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#183b32] via-[#b59a6a] to-[#183b32]" />

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#183b32]/10 text-[#183b32] flex items-center justify-center mb-3 border border-[#183b32]/20">
                  <CheckCircle2 size={28} className="text-[#183b32]" />
                </div>
                <h3 className="font-sans text-xl text-[#183b32] font-bold mb-1.5">
                  Booking Request Sent!
                </h3>
                <p className="text-xs text-[#525d58] max-w-sm leading-relaxed mb-4">
                  Thank you, <span className="font-semibold text-[#183b32]">{formData.name || "Guest"}</span>. Your booking request has been sent directly to our front desk team at <span className="font-semibold text-[#183b32]">+91 81066 65517</span>. We will contact you shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918106665517?text=${encodeURIComponent(
                      `*Reservation Inquiry - The Pearl Hotel Hyderabad*\nName: ${formData.name}\nPhone: ${formData.phone}\nSuite: ${formData.roomType}\nGuests: ${formData.guests}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#00a884] hover:bg-[#008f6f] text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    Open WhatsApp Directly
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-[#183b32] text-white text-xs font-semibold hover:bg-[#122e27] transition-all cursor-pointer shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 pt-0.5">

                {/* Form Title */}
                <div className="border-b border-[#f0eae1] pb-2.5 flex items-baseline justify-between">
                  <h3 className="font-sans text-lg sm:text-xl text-[#183b32] font-bold">
                    Reservation &amp; Inquiry <span className="text-[#b59a6a]">Form</span>
                  </h3>
                  <span className="text-[10px] text-[#8c8273] hidden sm:inline">
                    Prompt 15-min response
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1">
                    Full Name <span className="text-[#b59a6a]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#b59a6a]">
                      <User size={14} />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajeshwar Rao"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] focus:bg-white focus:ring-1 focus:ring-[#183b32]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1">
                      Email Address <span className="text-[#b59a6a]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#b59a6a]">
                        <Mail size={14} />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="rajeshwar@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] focus:bg-white focus:ring-1 focus:ring-[#183b32]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1">
                      Phone Number <span className="text-[#b59a6a]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#b59a6a]">
                        <Phone size={14} />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] focus:bg-white focus:ring-1 focus:ring-[#183b32]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Category & Guests Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1 flex items-center gap-1">
                      <BedDouble size={13} className="text-[#b59a6a]" />
                      <span>Inquiry / Room Category</span>
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] transition-all cursor-pointer"
                    >
                      <option>Deluxe Room (1 King Bed, up to 3 adults • from ₹2,500)</option>
                      <option>Twin Room (2 Single Beds, up to 2 adults • from ₹2,500)</option>
                      <option>Suite Room (1 King Bed + Living Area, up to 3 adults • from ₹3,500)</option>
                      <option>Group / Event Booking (47 Rooms Available)</option>
                      <option>Day Rest / Airport Layover Stay</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1 flex items-center gap-1">
                      <Users size={13} className="text-[#b59a6a]" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] transition-all cursor-pointer"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 - 4 Guests</option>
                      <option>5+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Check-in & Check-out Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1 flex items-center gap-1">
                      <Calendar size={13} className="text-[#b59a6a]" />
                      <span>Check-in / Visit Date</span>
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] transition-all cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1 flex items-center gap-1">
                      <Calendar size={13} className="text-[#b59a6a]" />
                      <span>Check-out Date</span>
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-[#183b32] mb-1 flex items-center gap-1">
                    <MessageSquare size={13} className="text-[#b59a6a]" />
                    <span>Special Requests / Notes</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention extra bed (₹999/night), arrival time, early check-in, or airport pick-up flight details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#183b32] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#183b32] focus:bg-white focus:ring-1 focus:ring-[#183b32]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#183b32] via-[#1a443a] to-[#183b32] hover:from-[#122e27] hover:to-[#183b32] text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all shadow-md shadow-[#183b32]/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-98 border border-[#b59a6a]/30 mt-1"
                >
                  <span>Send Reservation Inquiry</span>
                  <Send size={14} className="text-[#b59a6a] group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Bottom Guarantee */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#78847e] pt-0.5">
                  <ShieldCheck size={13} className="text-[#183b32]" />
                  <span>Guaranteed privacy. Zero booking fees or hidden charges.</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Interactive Map & Hotel Location (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Map Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e5decb] shadow-lg shadow-[#183b32]/5 overflow-hidden flex flex-col">

              {/* Map Card Header */}
              <div className="p-4 sm:p-5 border-b border-[#f0eae1] bg-[#fbf9f5]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#183b32]">
                    Hotel Location &amp; Directions
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-[#183b32]/10 text-[#183b32] text-[10px] font-bold uppercase tracking-wider">
                    Shamshabad
                  </span>
                </div>
                <p className="text-xs text-[#525d58] leading-tight">
                  The Pearl Hotel Hyderabad &middot; PL NO 75/EP, Sai Pramukh Enclave
                </p>
              </div>

              {/* Embedded Google Map Iframe */}
              <div className="relative w-full h-[280px] sm:h-[320px] bg-[#e5decb]/30">
                <iframe
                  title="The Pearl Hotel Hyderabad Location Map"
                  src="https://maps.google.com/maps?q=The+Pearl+Hotel+Hyderabad,+Sai+Pramukh+Enclave,+Devatha+Bowli,+ThonduPally,+Shamshabad,+Hyderabad,+Telangana+501218&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Location Details & Quick Actions */}
              <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-white">

                {/* Address row */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#f4ede2] text-[#b59a6a] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#183b32]">Hotel Address</p>
                    <p className="text-[11.5px] text-[#525d58] leading-relaxed">
                      PL NO 75/EP, Sai Pramukh Enclave, Devatha Bowli, ThonduPally, Shamshabad, Hyderabad, Telangana 501218
                    </p>
                  </div>
                </div>

                {/* Timing & Airport proximity */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#f0ece4]">
                  <div className="flex items-start gap-2">
                    <Clock size={13} className="text-[#b59a6a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold text-[#183b32]">Check-in &amp; Out</p>
                      <p className="text-[10.5px] text-[#525d58]">12:00 PM for both</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Navigation size={13} className="text-[#b59a6a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] font-semibold text-[#183b32]">Airport Access</p>
                      <p className="text-[10.5px] text-[#525d58]">Minutes from RGIA</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps / Travel Direct Link Button */}
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={googleMapsTravelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#183b32] hover:bg-[#122e27] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group cursor-pointer"
                  >
                    <span>View on Google Maps / Travel</span>
                    <ExternalLink size={13} className="text-[#b59a6a] group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://wa.me/918106665517?text=Hi%2C%20I%20am%20traveling%20to%20The%20Pearl%20Hotel%20Hyderabad%20in%20Shamshabad.%20Please%20send%20directions%20or%20location%20pin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-xl bg-[#f7f4ee] hover:bg-[#ede5d8] border border-[#d8cca8]/60 text-[#183b32] text-[11.5px] font-semibold flex items-center justify-center gap-1.5 transition-all text-center"
                  >
                    <span>Request Location Pin on WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
