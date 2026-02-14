"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Vision & Mission", href: "#philosophy" },
    { name: "Environment", href: "#sustainability" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                {/* Shield/Hexagon Background */}
                <path 
                  d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" 
                  fill="currentColor" 
                  className={cn(isScrolled ? "text-brand-blue-deep" : "text-white")}
                />
                {/* Abstract 'M' / Path Lines */}
                <path 
                  d="M30 70 L30 40 L50 60 L70 40 L70 70" 
                  stroke={isScrolled ? "white" : "#007BFF"} 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
                <path 
                  d="M50 25 L50 45" 
                  stroke={isScrolled ? "white" : "#007BFF"} 
                  strokeWidth="8" 
                  strokeLinecap="round" 
                  fill="none" 
                />
              </svg>
            </div>
            <div className="flex items-center gap-2 overflow-hidden">
              <span className={cn(
                "font-bold text-base sm:text-lg lg:text-xl tracking-tight transition-colors whitespace-nowrap",
                isScrolled ? "text-brand-blue-deep" : "text-white"
              )}>MITRA TRANS PERKASA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold hover:text-brand-blue-action transition-colors",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden xl:flex items-center gap-4 border-l border-gray-300 pl-6 ml-4 text-white">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-blue-action">
                <Phone size={14} />
                <span>HOTLINE</span>
              </div>
              <span className={cn(
                "text-sm font-bold",
                isScrolled ? "text-brand-blue-deep" : "text-white"
              )}>+6261-88811858</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-brand-blue-deep" />
            ) : (
              <Menu size={28} className={isScrolled ? "text-brand-blue-deep" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4 lg:hidden animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-gray-800 py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 p-4 bg-brand-blue-light rounded-lg">
            <p className="text-xs font-bold text-brand-blue-deep mb-1">CALL US</p>
            <p className="font-bold text-brand-blue-deep">+6261-88811858</p>
          </div>
        </div>
      )}
    </nav>
  );
}
