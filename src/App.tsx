import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import Features from './Features';
import Showcase from './Showcase';
import CTA from './CTA';
import Footer from './Footer';
// No navigation state needed for single-page app as per instructions.

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#FAF8F5] text-[#3D3D3D] min-h-screen"
    >
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </motion.div>
  );
}
