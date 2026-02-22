import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#1A3A2A] text-white py-24 md:py-32 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-8 drop-shadow-md"
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Let's build something extraordinary together. Contact us today for a personalized consultation.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-[#1A3A2A] bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300 ease-out group"
        >
          Start Your Project <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
