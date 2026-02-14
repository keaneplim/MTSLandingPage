import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-deep text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" 
                    fill="white" 
                  />
                  <path 
                    d="M30 70 L30 40 L50 60 L70 40 L70 70" 
                    stroke="#003366" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                  />
                  <path 
                    d="M50 25 L50 45" 
                    stroke="#003366" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    fill="none" 
                  />
                </svg>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight whitespace-nowrap text-white">MITRA TRANS PERKASA</span>
              </div>
            </div>
            <p className="text-brand-blue-light text-sm leading-relaxed">
              Providing premium logistics and warehousing services to meet our customer's satisfaction as our top priority.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-brand-blue-action transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="hover:text-brand-blue-action transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-brand-blue-light text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="#philosophy" className="hover:text-white transition-colors">Vision & Mission</Link></li>
              <li><Link href="#sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Headquarters</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="mt-1 text-brand-blue-action"><MapPin size={20} /></div>
                <div>
                  <p className="text-sm font-bold mb-1">Address</p>
                  <p className="text-brand-blue-light text-sm leading-relaxed">
                    Jl. Pulau Natuna-1<br />
                    Komp. KIM-2 Warehouse No. C-3<br />
                    Kawasan Industri Medan (KIM) II<br />
                    Deli Serdang, Sumut - Indonesia
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="mt-1 text-brand-blue-action"><Phone size={20} /></div>
                  <div>
                    <p className="text-sm font-bold mb-1">Phone</p>
                    <p className="text-brand-blue-light text-sm">+6261-88811858</p>
                    <p className="text-brand-blue-light text-sm">6871693</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-brand-blue-action"><Mail size={20} /></div>
                  <div>
                    <p className="text-sm font-bold mb-1">Email</p>
                    <p className="text-brand-blue-light text-sm">info@mitratransperkasa.co.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-blue-light text-xs">
            © {new Date().getFullYear()} Mitra Trans Perkasa. All rights reserved.
          </p>
          <p className="text-brand-blue-action font-bold text-xs tracking-wider italic">
            "WE GOT THE CONFIDENCE WHEN WE GIVE THE BEST"
          </p>
        </div>
      </div>
    </footer>
  );
}
