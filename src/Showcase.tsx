import React from 'react';
import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative flex justify-center lg:justify-start"
        >
          <img
            src="https://images.unsplash.com/photo-1677395027581-229ef58df73a?auto=format&fit=crop&w=1200&q=80"
            alt="Product interface preview on a laptop"
            className="w-full max-w-xl h-auto rounded-3xl shadow-2xl shadow-[#1A3A2A]/20 object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A2A]/10 to-transparent rounded-3xl pointer-events-none"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center lg:text-left"
        >
          <p className="text-xl font-semibold uppercase tracking-widest text-[#8A8A7A] mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-8">
            Experience the Meridian Difference
          </h2>
          <p className="text-lg text-[#3D3D3D] leading-relaxed mb-8">
            We don't just build websites; we craft digital ecosystems that reflect your brand's unique identity and drive tangible results. From intuitive user interfaces to robust backend systems, every detail is meticulously engineered for excellence.
          </p>
          <ul className="list-disc list-inside text-lg text-[#3D3D3D] leading-relaxed space-y-3 mb-10">
            <li>Seamless user journeys and intuitive navigation.</li>
            <li>Optimized for speed, performance, and accessibility.</li>
            <li>Scalable architecture ready for future growth.</li>
            <li>Integrated with essential third-party tools.</li>
          </ul>
          <button className="btn-primary">
            View Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
}
