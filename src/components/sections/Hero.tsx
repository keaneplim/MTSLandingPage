"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-brand-blue-deep">
      {/* Background Overlay with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-deep via-brand-blue-deep/80 to-transparent z-10" />
        {/* Placeholder for high-quality truck image */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[20%] opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop')" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-blue-action text-white text-[10px] md:text-xs font-bold tracking-widest mb-4 md:mb-6 uppercase">
              Your Strategic Logistics Partner
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 md:mb-6">
              PRECISION &<br className="hidden sm:block" />
              <span className="text-brand-blue-action">CONFIDENCE</span>
            </h1>
            <div className="text-base md:text-xl text-brand-blue-light mb-8 md:mb-10 leading-relaxed max-w-2xl space-y-4">
              <p>
                Mitra Trans Perkasa (MTP) provides reliable logistics and industrial transportation from the heart of Kawasan Industri Medan (KIM), Medan, North Sumatra, Indonesia.
              </p>
              <p className="font-semibold text-white">
                Built on trust, driven by precision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-brand-blue-deep font-bold rounded-sm flex items-center justify-center gap-2 hover:bg-brand-blue-light transition-all transform hover:scale-105 text-sm md:text-base">
                Explore Our Services <ArrowRight size={18} />
              </button>
        
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs font-bold tracking-widest uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-brand-blue-action"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-10 z-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
