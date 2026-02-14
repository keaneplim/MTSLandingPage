"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Heart } from "lucide-react";

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-24 bg-brand-blue-deep overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-action/10 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Growing Responsibly for the <br />
              <span className="text-brand-blue-light">Future of Indonesia</span>
            </motion.h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue-action">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Environmental Protection</h4>
                  <p className="text-brand-blue-light/70 text-sm leading-relaxed">
                    We maintain a high level of commitment to practice protecting the natural environment on individual, 
                    organizational, and governmental levels.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue-action">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Our Dedicated Employees</h4>
                  <p className="text-brand-blue-light/70 text-sm leading-relaxed">
                    Much of our success would not have been possible without our close relationship with our 
                    dedicated employees who embody the MTS spirit.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-blue-action">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Customer Confidence</h4>
                  <p className="text-brand-blue-light/70 text-sm leading-relaxed">
                    "WE EXIST BECAUSE OF CUSTOMER CONFIDENCE" — This is not just a tagline, 
                    but the foundation of every operation we conduct.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Sustainability and Nature"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stat Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-lg shadow-xl max-w-[240px]">
              <p className="text-brand-blue-deep font-black text-4xl mb-1">100%</p>
              <p className="text-gray-500 text-xs font-bold tracking-widest uppercase">Commitment to Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
