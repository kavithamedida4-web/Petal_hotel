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
    const whatsappUrl = `https://wa.me/919700000970?text=${encodedText}`;

    // Open WhatsApp with pre-filled form info
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#f9f6f0] py-12 sm:py-16 lg:py-20 border-t border-[#ede7de] overflow-x-hidden relative scroll-mt-14">
      {/* Decorative ambient color glows */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-[#b59a6a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-72 h-72 bg-[#0f263d]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2ecdf] border border-[#d8cca8] text-[#0f263d] text-xs font-semibold mb-3 shadow-xs">
            <MapPin size={13} className="text-[#b59a6a]" />
            <span>Sai Pramukh Enclave, Shamshabad &middot; Near RGIA Airport</span>
          </div>

          <h2 className="section-title text-[#0f263d] mb-2">
            Plan Your Stay <span className="text-[#b59a6a]">With Us</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#525d58] leading-relaxed">
            Reserve your room directly with our front desk at <strong className="text-[#b59a6a] font-semibold">The Pearl Hotel Hyderabad</strong> in Shamshabad. 12:00 noon check-in/out and 24/7 airport assistance.
          </p>
        </div>

        {/* 2-Column Grid: Exactly Equal 50/50 Width and Height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Reservation & Inquiry Form */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#e5decb] shadow-lg shadow-[#0f263d]/5 relative overflow-hidden flex flex-col justify-between h-full">

            {/* Top Brand Color Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f263d] via-[#b59a6a] to-[#0f263d]" />

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center my-auto animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-[#0f263d]/10 text-[#0f263d] flex items-center justify-center mb-4 border border-[#0f263d]/20">
                  <CheckCircle2 size={32} className="text-[#0f263d]" />
                </div>
                <h3 className="font-sans text-xl text-[#0f263d] font-bold mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-[#525d58] max-w-sm leading-relaxed mb-6">
                  Thank you, <span className="font-semibold text-[#0f263d]">{formData.name || "Guest"}</span>. Your booking request has been sent to our front desk at <span className="font-semibold text-[#0f263d]">+91 97000 00970</span>. We will contact you shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919700000970?text=${encodeURIComponent(
                      `*Reservation Inquiry - The Pearl Hotel Hyderabad*\nName: ${formData.name}\nPhone: ${formData.phone}\nSuite: ${formData.roomType}\nGuests: ${formData.guests}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#00a884] hover:bg-[#008f6f] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                  >
                    Open WhatsApp Directly
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#0f263d] text-white text-xs sm:text-sm font-semibold hover:bg-[#091929] transition-all cursor-pointer shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-3.5 pt-0.5">

                {/* Form Header */}
                <div className="border-b border-[#f0eae1] pb-2.5 flex items-baseline justify-between">
                  <h3 className="font-sans text-lg sm:text-xl text-[#0f263d] font-bold">
                    Reservation &amp; Inquiry <span className="text-[#b59a6a]">Form</span>
                  </h3>
                  <span className="text-[10.5px] text-[#8c8273]">
                    Prompt 15-min response
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1">
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
                      className="w-full pl-9 pr-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] focus:bg-white focus:ring-1 focus:ring-[#0f263d]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1">
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
                        className="w-full pl-9 pr-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] focus:bg-white focus:ring-1 focus:ring-[#0f263d]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1">
                      Phone Number <span className="text-[#b59a6a]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#b59a6a]">
                        <Phone size={14} />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97000 00970"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] focus:bg-white focus:ring-1 focus:ring-[#0f263d]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Category & Guests Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1 flex items-center gap-1">
                      <BedDouble size={13} className="text-[#b59a6a]" />
                      <span>Room Category</span>
                    </label>
                    <select
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] transition-all cursor-pointer"
                    >
                      <option>Deluxe Room (from ₹2,500)</option>
                      <option>Twin Room (from ₹2,500)</option>
                      <option>Suite Room (from ₹3,500)</option>
                      <option>Group Booking (47 Rooms)</option>
                      <option>Airport Layover / Day Rest</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1 flex items-center gap-1">
                      <Users size={13} className="text-[#b59a6a]" />
                      <span>Number of Guests</span>
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] transition-all cursor-pointer"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Check-in & Check-out Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1 flex items-center gap-1">
                      <Calendar size={13} className="text-[#b59a6a]" />
                      <span>Check-in Date</span>
                    </label>
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] transition-all cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1 flex items-center gap-1">
                      <Calendar size={13} className="text-[#b59a6a]" />
                      <span>Check-out Date</span>
                    </label>
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] transition-all cursor-pointer"
                    />
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-[#0f263d] mb-1 flex items-center gap-1">
                    <MessageSquare size={13} className="text-[#b59a6a]" />
                    <span>Special Requests / Notes</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Mention extra bed (₹999/night), arrival time, early check-in, or airport pick-up flight details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg sm:rounded-xl bg-[#fcfaf7] border border-[#e2dacb] text-[#0f263d] placeholder:text-[#a8a194] text-xs sm:text-[13px] focus:outline-none focus:border-[#0f263d] focus:bg-white focus:ring-1 focus:ring-[#0f263d]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button & Guarantee */}
                <div className="pt-1 flex flex-col gap-2 mt-auto">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#0f263d] via-[#163859] to-[#0f263d] hover:from-[#091929] hover:to-[#0f263d] text-white text-xs sm:text-[13px] font-semibold tracking-wide transition-all shadow-md shadow-[#0f263d]/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-98 border border-[#b59a6a]/30"
                  >
                    <span>Send Reservation Inquiry</span>
                    <Send size={14} className="text-[#b59a6a] group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-[#78847e] text-center">
                    <ShieldCheck size={13} className="text-[#0f263d] shrink-0" />
                    <span>Guaranteed privacy &middot; Direct front desk confirmation &middot; No booking fees</span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: ONLY MAP, NO TEXT (Exact Same Height & Rounded Style as Left Card) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e5decb] shadow-lg shadow-[#0f263d]/5 overflow-hidden h-[440px] sm:h-[480px] lg:h-full min-h-[380px] relative">
            <iframe
              title="The Pearl Hotel Hyderabad Location Map"
              src="https://maps.google.com/maps?q=The+Pearl+Hotel+Hyderabad,+Sai+Pramukh+Enclave,+Devatha+Bowli,+ThonduPally,+Shamshabad,+Hyderabad,+Telangana+501218&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
