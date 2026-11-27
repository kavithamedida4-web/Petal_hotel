"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Where is The Pearl Hotel Hyderabad located, and how far is it from the airport?",
    answer:
      "We are located at PL NO 75/EP, Sai Pramukh Enclave, Devatha Bowli, ThonduPally, Shamshabad, Hyderabad 501218, just minutes from Rajiv Gandhi International Airport (RGIA). We can also assist with 24/7 airport pick-up and drop-off.",
  },
  {
    id: 2,
    question: "What are the standard check-in and check-out timings?",
    answer:
      "Both check-in and check-out are at 12:00 noon. If you need early check-in or late check-out due to flight timings, please connect with our front desk on WhatsApp (+91 97000 00970) in advance.",
  },
  {
    id: 3,
    question: "What room types are available, and what are the starting rates?",
    answer:
      "We offer 3 comfortable room categories: Deluxe Room (1 king bed, up to 3 adults, from ₹2,500/night), Twin Room (2 single beds, up to 2 adults, from ₹2,500/night), and Suite Room (1 king bed + living area, up to 3 adults, from ₹3,500/night). All rooms feature AC, a TV, a balcony, and an attached bathroom. Extra bed is available for ₹999/night.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), Debit and Credit Cards (Visa, MasterCard, RuPay), and Net Banking.",
  },
  {
    id: 5,
    question: "What is your cancellation and date change policy?",
    answer:
      "For cancellations or date changes, please contact the hotel directly at +91 97000 00970. Cancellation charges may apply depending on the booking terms and how early you notify us.",
  },
  {
    id: 6,
    question: "What amenities are provided during the stay?",
    answer:
      "Guests enjoy Free high-speed Wi-Fi, Air Conditioning, Free On-Site Parking, In-House Restaurant, 24-Hour Room Service, 24-Hour Front Desk, 100% Power Backup, Lift / Elevator to all floors, and CCTV Security.",
  },
  {
    id: 7,
    question: "What identity documents and house rules must guests follow?",
    answer:
      "All adult guests must present an original government-issued photo ID (Aadhaar, Passport, Driving License, or Voter ID; PAN card is not accepted). Smoking is restricted to permitted areas. Quiet hours are observed at night. Visitors and outside food are subject to hotel policy. Pets require prior management approval. Guests are responsible for their belongings.",
  },
  {
    id: 8,
    question: "How can I book a room or contact hotel reception?",
    answer:
      "You can call or WhatsApp our guest reception directly at +91 97000 00970, or email info@pearlhotelhyderabad.com for instant direct booking with zero commission fees.",
  },
  {
    id: 9,
    question: "Can I book through MakeMyTrip, Goibibo, Booking.com, or Agoda?",
    answer:
      "Our listings on major travel portals (MakeMyTrip, Goibibo, Booking.com, and Agoda) will be live soon. However, booking directly via our website enquiry form, Call, or WhatsApp guarantees you the best direct rates, free room selection, and instant front desk confirmation.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? 0 : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#f9f6f0] py-16 sm:py-20 lg:py-24 border-t border-[#ede7de] overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* Header - Styled with Website Brand Colors */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Heading with Brand Navy + Gold */}
          <h2 className="section-title text-[#0f263d]">
            Common <span className="text-[#b59a6a]">Questions</span>
          </h2>
        </div>

        {/* Accordion List with Website Colors */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${isOpen
                  ? "bg-[#eef4f9] border-2 border-[#0f263d] shadow-sm"
                  : "bg-white border border-[#eae4da] hover:border-[#0f263d]/40 shadow-xs"
                  }`}
                onClick={() => toggle(faq.id)}
              >
                {/* Accordion Question Header */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <h3
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${isOpen ? "text-[#0f263d]" : "text-[#0f263d]/90"
                      }`}
                  >
                    {faq.question}
                  </h3>

                  <button
                    aria-label={isOpen ? "Collapse question" : "Expand question"}
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? "text-[#0f263d] bg-[#0f263d]/10" : "text-[#8c7b6c]"
                      }`}
                  >
                    {isOpen ? <ChevronUp size={18} strokeWidth={2.2} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#0f263d]/15 animate-fadeIn">
                    <p className="text-xs sm:text-[13.5px] text-[#44524c] leading-relaxed pt-3.5 font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
