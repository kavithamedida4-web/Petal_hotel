import React from "react";
import { Utensils, Sparkles, Waves, Dumbbell, ShieldCheck, Clock } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Gourmet Breakfast in Bed",
    desc: "Handcrafted fruit platters, fresh juices, organic pastries, and artisanal coffees delivered directly to your suite.",
  },
  {
    icon: Waves,
    title: "Infinity Pool & Beachfront",
    desc: "Heated salt-water infinity pool with private cabanas and panoramic sunset views overlooking the ocean.",
  },
  {
    icon: Sparkles,
    title: "Luxury Wellness & Spa",
    desc: "Holistic treatments, aromatherapy massages, and thermal saunas designed to rejuvenate body and mind.",
  },
  {
    icon: ShieldCheck,
    title: "Certified COVID-Free",
    desc: "Rigorous daily sanitization standards, contactless check-in, and limited capacity for your safety and peace of mind.",
  },
  {
    icon: Dumbbell,
    title: "Modern Fitness Center",
    desc: "State-of-the-art cardiovascular and weight-training equipment with personal trainers available upon request.",
  },
  {
    icon: Clock,
    title: "24/7 Butler & Room Service",
    desc: "Dedicated concierge and round-the-clock private dining to attend to every detail of your stay.",
  },
];

export default function HotelServicesSection() {
  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff765b] mb-2 block">
            Exceptional Hospitality
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200f0a] tracking-tight mb-4">
            Services &amp; Experiences
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
            Crafted for relaxation and elegance, our amenities make every moment of your stay memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="p-7 rounded-2xl bg-[#faf8f5] border border-stone-100 hover:border-[#ff765b]/30 hover:bg-white hover:shadow-[0_10px_30px_rgba(255,118,91,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff765b]/10 text-[#ff765b] flex items-center justify-center mb-5 group-hover:bg-[#ff765b] group-hover:text-white transition-colors duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-[#200f0a] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
