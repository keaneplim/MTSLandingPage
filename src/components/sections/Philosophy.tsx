"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Our Vision",
    text: "Providing logistics service to meet our customer's satisfaction as our top priority.",
    delay: 0.1,
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Our Mission",
    text: "To increase our service quality and personal professionalism while maintaining good relationship with our customer and business partner.",
    delay: 0.2,
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Safety First",
    text: "Conduct studies and research in the areas of safety and working to ensure excellence in every mile.",
    delay: 0.3,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-blue-deep mb-4"
          >
            The MTS Philosophy
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-brand-blue-action mx-auto mb-6"
          />
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-600 text-lg"
          >
            As we grow, we maintain a high level of commitment to protecting the environment 
            for the benefit of both nature and humans.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
              className="p-8 border border-gray-100 bg-gray-50/50 rounded-lg hover:border-brand-blue-action transition-all group"
            >
              <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-lg text-brand-blue-deep mb-6 group-hover:bg-brand-blue-deep group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue-deep mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed italic">
                "{card.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
