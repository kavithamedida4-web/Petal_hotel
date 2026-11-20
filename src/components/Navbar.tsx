"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded bg-[#029bae] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-2.5 h-2.5 bg-white rounded-xs"></div>
            </div>
            <span className="text-sm font-bold tracking-[0.2em] text-[#029bae] uppercase">
              CONSTRUCTION
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-xs font-semibold text-slate-800 hover:text-[#029bae] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#029bae] after:rounded-full"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Project
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 flex flex-col gap-3">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#029bae] py-1"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-600 py-1"
            >
              About Us
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-600 py-1"
            >
              Services
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-600 py-1"
            >
              Project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
