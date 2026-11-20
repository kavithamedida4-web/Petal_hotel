import React from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

interface Engineer {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  initials: string;
}

const engineers: Engineer[] = [
  {
    name: "Chris Evans",
    role: "Architect",
    phone: "080 323 5566",
    email: "chris@gmail.com",
    image: "/images/avatar_chris.svg",
    initials: "CE",
  },
  {
    name: "Alison Mary",
    role: "Civil Engineer",
    phone: "080 323 5566",
    email: "alison@gmail.com",
    image: "/images/avatar_alison.svg",
    initials: "AM",
  },
  {
    name: "Adam Foley",
    role: "Lead Contractor",
    phone: "080 323 5566",
    email: "adam@gmail.com",
    image: "/images/avatar_adam.svg",
    initials: "AF",
  },
];

export default function EngineersSection() {
  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Our Best Engineers
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
          </p>
        </div>

        {/* 3 Engineer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-10">
          {engineers.map((engineer, idx) => (
            <div
              key={engineer.name}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(2,155,174,0.08)] hover:-translate-y-1 transition-all duration-300 relative flex flex-col items-center text-center group"
            >
              {/* Top-left decorative yellow accent mark */}
              <div className="absolute top-4 left-4 text-[#eab308] opacity-70">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Engineer Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm relative mb-4 bg-slate-50 group-hover:border-[#029bae]/40 transition-colors">
                <Image
                  src={engineer.image}
                  alt={engineer.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-bold text-slate-900 text-base mb-0.5">
                {engineer.name}
              </h3>
              <p className="text-xs font-medium text-slate-400 mb-4">
                {engineer.role}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col gap-1 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center justify-center gap-1.5 hover:text-[#029bae] transition-colors">
                  <Phone size={12} className="text-[#029bae]" />
                  <span>{engineer.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 hover:text-[#029bae] transition-colors">
                  <Mail size={12} className="text-[#029bae]" />
                  <span>{engineer.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-slate-300 cursor-pointer hover:bg-slate-400 transition-colors"></span>
          <span className="w-6 h-2 rounded-full bg-[#029bae] cursor-pointer"></span>
          <span className="w-2 h-2 rounded-full bg-slate-300 cursor-pointer hover:bg-slate-400 transition-colors"></span>
        </div>

      </div>
    </section>
  );
}
