"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ZoomIn, X } from "lucide-react";

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
    title: "The Pearl Hotel Illuminated Night Facade",
    category: "Amenities",
    album: "Hotel Architecture",
    tag: "Exterior Facade",
    src: "/images/pearl_exterior_night_wide.jpg",
    colSpan: "col-span-12 md:col-span-8",
    aspect: "h-[180px] sm:h-[220px] lg:h-[250px]",
  },
  {
    id: 2,
    title: "Deluxe King Room with AC & Balcony",
    category: "Suites",
    album: "Guest Rooms",
    tag: "King Bed",
    src: "/images/pearl_deluxe_room_1.jpg",
    colSpan: "col-span-12 md:col-span-4",
    aspect: "h-[180px] sm:h-[220px] lg:h-[250px]",
  },

  // Row 2 (Trio: 4 cols each)
  {
    id: 3,
    title: "In-House Restaurant & Banquet Hall",
    category: "Dining",
    album: "Dining & Cuisine",
    tag: "Multi-Cuisine",
    src: "/images/pearl_restaurant.jpg",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "h-[130px] sm:h-[155px]",
  },
  {
    id: 4,
    title: "Reception Lobby & Elevator Access",
    category: "Amenities",
    album: "Lobby & Lift",
    tag: "24/7 Front Desk",
    src: "/images/pearl_lobby_elevator.jpg",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "h-[130px] sm:h-[155px]",
  },
  {
    id: 5,
    title: "Twin Room with 2 Single Beds",
    category: "Suites",
    album: "Guest Rooms",
    tag: "Twin Beds",
    src: "/images/pearl_twin_room.jpg",
    colSpan: "col-span-12 sm:col-span-4",
    aspect: "h-[130px] sm:h-[155px]",
  },

  // Row 3 (Balanced Duo: 6 cols each)
  {
    id: 6,
    title: "Spotless Marble Guest Corridor",
    category: "Amenities",
    album: "Floor & Rooms",
    tag: "CCTV Monitored",
    src: "/images/pearl_corridor.jpg",
    colSpan: "col-span-12 sm:col-span-6",
    aspect: "h-[150px] sm:h-[180px]",
  },
  {
    id: 7,
    title: "Suite Room with Living & Seating Space",
    category: "Suites",
    album: "Luxury Living",
    tag: "Suite Room",
    src: "/images/pearl_suite_room.jpg",
    colSpan: "col-span-12 sm:col-span-6",
    aspect: "h-[150px] sm:h-[180px]",
  },
];

// Clean 6 square images for mobile 3-column Instagram-style grid (compact 2 rows)
const mobileImages = [
  { id: 1, src: "/images/pearl_exterior_night_wide.jpg", title: "The Pearl Hotel Hyderabad" },
  { id: 2, src: "/images/pearl_deluxe_room_1.jpg", title: "Deluxe King Room" },
  { id: 3, src: "/images/pearl_restaurant.jpg", title: "In-House Restaurant" },
  { id: 4, src: "/images/pearl_twin_room.jpg", title: "Twin Room" },
  { id: 5, src: "/images/pearl_lobby_elevator.jpg", title: "Elevator Lobby" },
  { id: 6, src: "/images/pearl_corridor.jpg", title: "Hotel Corridor" },
];

export default function GallerySection() {
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="gallery" className="w-full bg-[#17181c] text-white py-10 sm:py-14 relative overflow-hidden">
      {/* Subtle warm ambient background glow */}
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
            MOBILE VIEW: EXACT 3-COLUMN SQUARE INSTAGRAM GRID
           ============================================================ */}
        <div className="md:hidden w-full max-w-sm mx-auto px-1">
          <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
            {mobileImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightboxImg(img)}
                className="relative aspect-square w-full rounded-md overflow-hidden bg-[#24262d] cursor-pointer group shadow-xs border border-white/5 active:scale-95 transition-transform"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <ZoomIn size={14} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10.5px] text-[#8e95a5] font-medium tracking-wide">
              Tap any photo to view full size
            </span>
          </div>
        </div>

        {/* ============================================================
            TABLET & DESKTOP VIEW: SOPHISTICATED BENTO EDITORIAL GRID
           ============================================================ */}
        <div className="hidden md:block">

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-2.5 sm:gap-3">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg({ src: item.src, title: item.title })}
                className={`${item.colSpan} relative rounded-xl overflow-hidden bg-[#202228] cursor-pointer group border border-white/5 shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Clean subtle hover overlay with center zoom icon (no text clutter on images) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-50"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={lightboxImg.src}
                alt={lightboxImg.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <p className="text-white text-xs sm:text-sm font-medium mt-3 text-center px-4">
              {lightboxImg.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
