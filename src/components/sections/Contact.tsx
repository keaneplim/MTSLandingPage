"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-bold text-brand-blue-deep mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to optimize your logistics? Send us a message and our team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-blue-action outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-blue-action outline-none transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-blue-action outline-none transition-colors">
                    <option>Logistics Inquiry</option>
                    <option>Warehousing Solution</option>
                    <option>Partnership Proposal</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:border-brand-blue-action outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-4 bg-brand-blue-deep text-white font-bold rounded-sm hover:bg-brand-blue-action transition-all flex items-center justify-center gap-2 group">
                  Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="bg-brand-blue-deep p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="text-brand-blue-action shrink-0" />
                    <p className="text-brand-blue-light text-sm leading-relaxed">
                      Jl. Pulau Natuna-1<br />
                      Komp. KIM-2 Warehouse No. C-3<br />
                      Kawasan Industri Medan (KIM) II<br />
                      Deli Serdang, Sumut - Indonesia
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-brand-blue-action shrink-0" />
                    <div>
                      <p className="text-brand-blue-light text-sm">+6261-88811858</p>
                      <p className="text-brand-blue-light text-sm">mittransperkasa@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10 relative z-10">
                <p className="text-brand-blue-action font-bold text-sm mb-2">Our Motto</p>
                <p className="text-white italic font-medium leading-relaxed">
                  "WE GOT THE CONFIDENCE WHEN WE GIVE THE BEST"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
