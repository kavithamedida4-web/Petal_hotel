import React from "react";
import MairaHeroSection from "@/components/MairaHeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RoomFacilitiesSection from "@/components/RoomFacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f6f0] text-[#0f263d] flex flex-col selection:bg-[#0f263d] selection:text-white overflow-x-hidden w-full">
      {/* 1. The Pearl Hotel Hyderabad Hero */}
      <MairaHeroSection />

      {/* 2. Hotel Rooms & Services with Horizontal Scroll */}
      <ServicesSection />

      {/* 3. About Us - The Pearl Hotel Hyderabad */}
      <AboutUsSection />

      {/* 4. How It Works - Organic Curved Visual with 4 Steps */}
      <HowItWorksSection />

      {/* 5. A Home Away From Home - Room Facilities Badges */}
      <RoomFacilitiesSection />

      {/* 6. What Our Customers Say - Testimonials */}
      <TestimonialsSection />

      {/* 6. Photos Collection / Hotel Gallery */}
      <GallerySection />

      {/* 7. Common Questions / FAQs */}
      <FAQSection />

      {/* 8. Hotel Reservations & Contact Form */}
      <ContactSection />

      {/* 9. Luxury Footer with Edone Solutions attribution & WhatsApp */}
      <FooterSection />
    </main>
  );
}
