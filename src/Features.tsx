import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  MessageCircle,
  BarChart2,
} from 'lucide-react';

const featureData = [
  {
    icon: <Sparkles className="h-8 w-8 text-[#1A3A2A]" />,
    title: 'Innovative Design',
    description: 'Crafting visually stunning and user-centric interfaces that captivate and convert.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-[#1A3A2A]" />,
    title: 'Robust Development',
    description: 'Building secure, scalable, and high-performance web applications tailored to your needs.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#1A3A2A]" />,
    title: 'SEO Optimization',
    description: 'Enhancing your online visibility to drive organic traffic and maximize reach.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-[#1A3A2A]" />,
    title: 'Strategic Consulting',
    description: 'Providing expert guidance to define your digital strategy and achieve business goals.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-[#1A3A2A]" />,
    title: '24/7 Support',
    description: 'Reliable and prompt support to ensure your digital presence is always optimal.',
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-[#1A3A2A]" />,
    title: 'Analytics & Insights',
    description: 'Leveraging data to understand user behavior and continually improve performance.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Features() {
  return (
    <section className="bg-[#FEFCF9] py-24 md:py-32 border-t border-b border-[#E0DBD3]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-semibold uppercase tracking-widest text-[#8A8A7A] mb-4"
        >
          Our Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-16"
        >
          Solutions Designed for Growth
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <div className="p-4 bg-[#1A3A2A]/10 rounded-full mb-6 group-hover:bg-[#1A3A2A]/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">
                {feature.title}
              </h3>
              <p className="text-md text-[#3D3D3D] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
