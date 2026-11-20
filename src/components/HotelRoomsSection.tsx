"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Users, Wifi, Coffee, Star, ArrowRight } from "lucide-react";

const rooms = [
  {
    name: "Deluxe Ocean Suite",
    desc: "Panoramic views with private balcony, king size bed, and full morning breakfast buffet included.",
    price: "$280",
    image: "/images/hotel_hd_1.jpg",
    capacity: "2 Guests",
    size: "48 m²",
    rating: "4.9",
  },
  {
    name: "Garden Villa Suite",
    desc: "Surrounded by lush tropical gardens, featuring outdoor rain shower and personal butler service.",
    price: "$340",
    image: "/images/hotel_hd_2.jpg",
    capacity: "3 Guests",
    size: "62 m²",
    rating: "5.0",
  },
  {
    name: "Presidential Penthouse",
    desc: "The pinnacle of luxury with private plunge pool, master suite, and custom breakfast in bed menu.",
    price: "$520",
    image: "/images/hotel_hd_3.jpg",
    capacity: "4 Guests",
    size: "95 m²",
    rating: "5.0",
  },
];

export default function HotelRoomsSection() {
  return (
    <section id="rooms" className="w-full py-20 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff765b] mb-2 block">
              Accommodations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200f0a] tracking-tight">
              Featured Rooms &amp; Suites
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mt-4 md:mt-0 leading-relaxed">
            Every booking includes our signature artisan breakfast in bed, high-speed Wi-Fi, and personalized concierge.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-[0_10px_30px_rgba(32,15,10,0.04)] hover:shadow-[0_20px_40px_rgba(255,118,91,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-[#200f0a] flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  <span>{room.rating}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#200f0a]/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-white">
                  <span>{room.price}</span>
                  <span className="text-[10px] text-white/70 font-normal"> / night</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#200f0a] mb-2 group-hover:text-[#ff765b] transition-colors">
                  {room.name}
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed mb-6 flex-1">
                  {room.desc}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 py-3 border-t border-stone-100 text-[11px] text-stone-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users size={13} className="text-[#ff765b]" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Coffee size={13} className="text-[#ff765b]" />
                    <span>Breakfast</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi size={13} className="text-[#ff765b]" />
                    <span>Free Wi-Fi</span>
                  </div>
                </div>

                <Link
                  href="#booking"
                  className="w-full py-2.5 rounded-full bg-[#ff765b] hover:bg-[#fa694e] text-white text-xs font-bold tracking-wide text-center transition-all flex items-center justify-center gap-1 shadow-sm shadow-[#ff765b]/25"
                >
                  <span>Book This Room</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
