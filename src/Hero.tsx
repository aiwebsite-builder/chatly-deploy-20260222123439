import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SiSlack, SiStripe, SiNetflix, SiAirbnb } from 'react-icons/si';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-24 md:py-32">
      <div className="bg-pattern absolute inset-0 opacity-20"></div> {/* Subtle pattern */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-[#1A1A1A] mb-6 drop-shadow-sm">
            Unlock Your <span className="text-[#1A3A2A]">Digital</span> Potential.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#3D3D3D] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
            Meridian helps visionary businesses craft compelling online experiences with cutting-edge design and seamless technology.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
            <button className="btn-primary">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 border-t border-[#E0DBD3] pt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#8A8A7A] mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap gap-x-10 gap-y-6 justify-center lg:justify-start items-center">
              <motion.div variants={iconVariants}>
                <SiStripe className="h-8 w-auto text-[#8A8A7A] hover:text-[#1A3A2A] transition-colors duration-300" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <SiNetflix className="h-8 w-auto text-[#8A8A7A] hover:text-[#1A3A2A] transition-colors duration-300" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <SiSlack className="h-8 w-auto text-[#8A8A7A] hover:text-[#1A3A2A] transition-colors duration-300" />
              </motion.div>
              <motion.div variants={iconVariants}>
                <SiAirbnb className="h-8 w-auto text-[#8A8A7A] hover:text-[#1A3A2A] transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
          className="relative mt-16 lg:mt-0 flex justify-center lg:justify-end"
        >
          <img
            src="https://images.unsplash.com/photo-1593642532781-03d1591c28f0?auto=format&fit=crop&w=1200&q=80"
            alt="Digital workspace showcasing Meridian's capabilities"
            className="w-full max-w-xl lg:max-w-none h-auto rounded-3xl shadow-2xl shadow-gray-400/30 object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3A2A]/20 to-transparent rounded-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
