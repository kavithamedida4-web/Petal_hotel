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
  Sparkles,
  ShieldCheck,
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

  return (
    <section id="contact" className="w-full bg-[#f9f6f0] py-10 sm:py-14 border-t border-[#ede7de] overflow-x-hidden relative scroll-mt-14">
      {/* Decorative ambient color glows */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-[#b59a6a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-[#183b32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Compact Section Header */}
        <div className="text-center max-w-lg mx-auto mb-6 sm:mb-8">
          <h2 className="section-title text-[#183b32] mb-1.5" style={{ fontWeight: 500 }}>
            Plan Your Stay <span className="text-[#b59a6a]" style={{ fontWeight: 500 }}>With Us</span>
          </h2>

          <p className="text-xs text-[#525d58] leading-relaxed">
            Book your room directly with our front desk at <strong className="text-[#b59a6a] font-semibold">The Pearl Hotel Hyderabad</strong> in Shamshabad. We confirm reservations promptly with 12:00 noon check-in/out and 24/7 airport transfer assistance.
          </p>
        </div>

        {/* Compact Form Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#e5decb] shadow-lg shadow-[#183b32]/5 relative overflow-hidden">

          {/* Top Brand Color Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#183b32] via-[#b59a6a] to-[#183b32]" />

          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center justify-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-[#183b32]/10 text-[#183b32] flex items-center justify-center mb-3 border border-[#183b32]/20">
                <CheckCircle2 size={28} className="text-[#183b32]" />
              </div>
              <h3 className="font-serif text-xl text-[#183b32] font-semibold mb-1.5">
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
                <h3 className="font-serif text-lg sm:text-xl text-[#183b32] font-medium">
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
                    <span>Inquiry / Suite Category</span>
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

      </div>
    </section>
  );
}