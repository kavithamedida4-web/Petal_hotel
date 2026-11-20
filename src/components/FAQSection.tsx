"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How far is Petal Hotel from Rajiv Gandhi International Airport (HYD)?",
    answer:
      "We are located in Shamshabad, about 10 minutes (approximately 6 km) from the airport terminal. You can easily reach us by taxi or request our private airport pick-up service.",
  },
  {
    id: 2,
    question: "What are your check-in and check-out times? Is early check-in allowed?",
    answer:
      "Standard check-in is at 12:00 PM (noon) and check-out is at 11:00 AM. If you have an early morning flight or late-night arrival, please let us know on WhatsApp in advance. We provide early check-in whenever rooms are available.",
  },
  {
    id: 3,
    question: "How do I arrange 24/7 airport pick-up or drop-off?",
    answer:
      "Our airport transfer service runs 24 hours a day. Simply share your flight number and landing time with our front desk via WhatsApp or phone call, and our driver will meet you outside the arrival gate.",
  },
  {
    id: 4,
    question: "Is breakfast included, and what are the restaurant timings?",
    answer:
      "Yes, freshly prepared breakfast is served daily from 7:00 AM to 10:30 AM featuring South Indian dishes (idli, vada, dosa), North Indian parathas, eggs, toast, and hot tea/coffee. Round-the-clock in-room dining is also available.",
  },
  {
    id: 5,
    question: "Is high-speed Wi-Fi available in the rooms for work?",
    answer:
      "Yes, high-speed Wi-Fi is free for all guests across the entire hotel, including bedrooms and the lobby, with reliable bandwidth for video meetings and remote work.",
  },
  {
    id: 6,
    question: "Do you have free parking space for personal vehicles?",
    answer:
      "Yes, we provide secure, free on-site car parking with 24/7 CCTV surveillance and security staff on duty.",
  },
  {
    id: 7,
    question: "What identity documents are needed at check-in?",
    answer:
      "All staying adult guests must present an original government-issued photo ID (Aadhaar Card, Passport, Driving License, or Voter ID). As per local hotel guidelines, PAN cards cannot be used as address proof.",
  },
  {
    id: 8,
    question: "Can I book directly through WhatsApp or phone call?",
    answer:
      "Yes, absolutely. You can WhatsApp or call us directly at +91 91000 48478 for quick room booking, special group rates, and immediate booking confirmation without any extra portal fees.",
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
          {/* Heading with Brand Green + Gold - font-serif font-semibold (weight 600) */}
          <h2 className="font-serif font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-tight text-[#183b32] tracking-tight">
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
                className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? "bg-[#edf5f1] border-2 border-[#183b32] shadow-sm"
                    : "bg-white border border-[#eae4da] hover:border-[#183b32]/40 shadow-xs"
                }`}
                onClick={() => toggle(faq.id)}
              >
                {/* Accordion Question Header */}
                <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
                  <h3
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isOpen ? "text-[#183b32]" : "text-[#183b32]/90"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <button
                    aria-label={isOpen ? "Collapse question" : "Expand question"}
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "text-[#183b32] bg-[#183b32]/10" : "text-[#8c7b6c]"
                    }`}
                  >
                    {isOpen ? <ChevronUp size={18} strokeWidth={2.2} /> : <ChevronDown size={18} />}
                  </button>
                </div>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#183b32]/15 animate-fadeIn">
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
