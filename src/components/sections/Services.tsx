"use client";

import React from "react";
import { motion } from "framer-motion";
import { Truck, Box, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Inland Transportation",
    description: "Reliable fleet management across Sumatra and Java, optimized for safety and on-time delivery.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Box className="w-10 h-10" />,
    title: "Distribution & Fulfillment",
    description: "End-to-end supply chain solutions tailored to meet the specific demands of your business partners.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: "Logistics Research",
    description: "Continuous study and research in safety and operational efficiency to provide the best service.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-blue-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-deep mb-4">Our Core Capabilities</h2>
            <div className="w-24 h-1 bg-brand-blue-action mb-6" />
            <p className="text-gray-600 text-lg">
              We provide integrated logistics solutions designed to drive efficiency and build confidence in your supply chain.
            </p>
          </div>
          <button className="px-6 py-3 bg-brand-blue-deep text-white font-bold rounded-sm hover:bg-brand-blue-action transition-colors shrink-0">
            View Technical Specs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm flex flex-col border border-gray-100"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-200">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1">
                <div className="text-brand-blue-action mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue-deep mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
