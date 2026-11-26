"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, Sparkles } from "lucide-react";

type Category = "All" | "Suites" | "Amenities" | "Dining";

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  album: string;
  tag: string;
  src: string;
  colSpan: string;
  aspect: string;
}

const galleryItems: GalleryItem[] = [
  // Row 1 (Featured Duo: 8 cols + 4 cols)
  {
    id: 1,
    title: "Presidential Emerald King Suite",
    category: "Suites",
    album: "Luxury Suites",
    tag: "Signature Suite",
    src: "/images/petal_luxury_suite.jpg",
    colSpan: "col-span-12 md:col-span-8",
    aspect: "h-[180px] sm:h-[220px] lg:h-[250px]",
  },
  {
    id: 2,
    title: "Rooftop Sunset Horizon Pool",
    category: "Amenities",
    album: "Pool & Wellness",
    tag: "Panoramic View",
    src: "/images/hotel_gallery_pool.jpg",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "h-[180px] sm:h-[220px] lg:h-[250px]",
  },

  // Row 2 (Trio: 4 cols each)
  {
    id: 3,
    title: "Michelin Fine Dining Restaurant",
    category: "Dining",
    album: "Dining",
    tag: "Gourmet Cuisine",
    src: "/images/hotel_gallery_dining.jpg",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "h-[130px] sm:h-[155px]",
  },
  {
    id: 4,
    title: "Grand Travertine Chandelier Lobby",
    category: "Dining",
    album: "Architecture",
    tag: "24/7 Front Desk",
    src: "/images/hotel_gallery_lobby.jpg",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "h-[130px] sm:h-[155px]",
  },
  {
    id: 5,
    title: "Contemporary Minimalist Suite",
    category: "Suites",
    album: "Luxury Suites",
    tag: "Shamshabad Stay",
    src: "/images/petal_hotel_hero.jpg",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "h-[130px] sm:h-[155px]",
  },

  // Row 3 (Balanced Duo: 6 cols each)
  {
    id: 6,
    title: "Calacatta Marble Spa & Soaking Tub",
    category: "Amenities",
    album: "Wellness Spa",
    tag: "Ayurvedic Spa",
    src: "/images/hotel_gallery_spa.jpg",
    colSpan: "col-span-12 sm:col-span-6",
    aspect: "h-[150px] sm:h-[180px]",
  },
  {
    id: 7,
    title: "Heritage Royal Palace Master Suite",
    category: "Suites",
    album: "Heritage Living",
    tag: "Royal Indian Decor",
    src: "/images/indian_hotel_hero.jpg",
    colSpan: "col-span-12 sm:col-span-6",
    aspect: "h-[150px] sm:h-[180px]",
  },
];

// Clean 6 square images for mobile 3-column Instagram-style grid (compact 2 rows)
const mobileImages = [
  { id: 1, src: "/images/petal_luxury_suite.jpg", title: "Presidential Emerald King Suite" },
  { id: 2, src: "/images/indian_hotel_hero.jpg", title: "Heritage Royal Palace Suite" },
  { id: 3, src: "/images/hotel_gallery_pool.jpg", title: "Rooftop Sunset Horizon Pool" },
  { id: 4, src: "/images/hotel_gallery_dining.jpg", title: "Michelin Fine Dining" },
  { id: 5, src: "/images/petal_hotel_hero.jpg", title: "Contemporary Minimalist Suite" },
  { id: 6, src: "/images/hotel_gallery_lobby.jpg", title: "Grand Travertine Lobby" },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string; album?: string; tag?: string } | null>(null);

  return (
    <section id="gallery" className="w-full bg-[#111215] text-white py-10 sm:py-14 overflow-x-hidden relative">

      {/* Decorative ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#b59a6a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Section Header */}
        <div className="max-w-2xl mx-auto mb-5 sm:mb-8 text-center">
          <h2 className="section-title text-white mb-1.5">
            Our Curated <span className="text-[#b59a6a]">Photo Gallery</span>
          </h2>

          <p className="text-xs text-[#9da3af] leading-relaxed max-w-md mx-auto">
            A real look inside our guest rooms, restaurant, and hotel facilities in Shamshabad.
          </p>
        </div>

        {/* ============================================================
            MOBILE VIEW: EXACT 3-COLUMN SQUARE INSTAGRAM GRID (UNCHANGED)
           ============================================================ */}
        <div className="md:hidden w-full max-w-sm mx-auto px-1">
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
            {mobileImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImg({ src: img.src, title: img.title, album: "Gallery", tag: "The Pearl Hotel" })}
                className="relative aspect-square overflow-hidden cursor-pointer bg-[#1c1e24] active:opacity-75 transition-opacity rounded-sm"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            DESKTOP VIEW: COMPACT BENTO MAGAZINE GRID
           ============================================================ */}
        <div className="hidden md:grid grid-cols-12 gap-2.5 sm:gap-3.5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className={`${item.colSpan} group relative rounded-xl overflow-hidden cursor-pointer bg-[#1c1e24] border border-white/10 hover:border-[#b59a6a]/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#b59a6a]/10`}
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 50vw, 380px"
                />

                {/* Subtle Hover Darkening with Zoom Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-md border border-white/30">
                    <ZoomIn size={16} strokeWidth={2.2} />
                  </span>
                </div>

                {/* Golden Accent Corner Border on Hover */}
                <div className="absolute inset-0 pointer-events-none border border-[#b59a6a]/0 group-hover:border-[#b59a6a]/40 rounded-xl transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen High-Resolution Lightbox Modal - Pure Image Only, No Text */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-50 border border-white/15 shadow-xl"
            aria-label="Close image"
          >
            <X size={20} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[88vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
          >
            <div className="relative w-full h-[65vh] sm:h-[80vh]">
              <Image
                src={selectedImg.src}
                alt="The Pearl Hotel Hyderabad Gallery"
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}