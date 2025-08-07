'use client';

import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Animation variants are kept as they were in your original code
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6,
    },
  },
};

const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 250,
      damping: 22,
      duration: 0.5,
    },
  },
};

const Footer: React.FC = () => {
  // Your original content is preserved
  const footerLinks = {
    Features: [
      'Creative solutions',
      'Results-driven strategies',
      'Personalized client support',
      'Cutting-edge technology',
      'Growth-focused mindset',
      'Affordable pricing'
    ],
    Services: [
      'Video Production',
      'Design & Development',
      'Social Media Management',
      'Email Marketing',
      'SEO Optimization',
      'WhatsApp Marketing',
    ],
    'Get in touch': [
      '+91-80092 27002',
      'askusstudio@gmail.com',
      'Mon-Sat,  10:00AM - 6:00PM',
      'L-78, Sec-D, Sachivalaya Colony, L.K.O, Uttar Pradesh.',
    ],
  };

  return (
    // The main wrapper now has a light background
    <div className="w-full bg-[#EAE8E4]">
      <motion.footer
        // Styles updated to match the light theme with dark text
        className="text-gray-800 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Column 1: Logo and Newsletter (Styles Updated) */}
            <motion.div
              className="lg:col-span-2"
              variants={footerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8">.Askus</h3>
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Connect With Us.</h4>
                <div className="flex flex-col sm:flex-row items-stretch">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    // Input field styles updated for a light theme
                    className="flex-1 bg-white border border-gray-300 rounded-l-md px-4 py-2 text-gray-800 focus:outline-none focus:border-gray-500"
                  />
                  <motion.button
                    // Button styles updated to the dark theme from the image
                    className="bg-gray-800 text-white px-6 py-2 rounded-r-md font-semibold hover:bg-black transition-colors mt-3 sm:mt-0 sm:ml-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>

              <div className="flex space-x-4">
                {['f', 'in', 't', 'ig'].map((social, index) => (
                  <motion.div
                    key={index}
                    // Social icon styles updated for a light theme
                    className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 hover:text-white transition-colors"
                    whileHover={{ scale: 1.13 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring' as const, stiffness: 350, damping: 18 }}
                  >
                    <span className="text-sm font-semibold">{social}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links (Styles Updated) */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                variants={footerItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h4 className="text-sm font-bold uppercase tracking-wider mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 8, color: '#000' }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Bottom Copyright Bar (Added from the "DR PINK" design) */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 text-center">
          <p className="text-xs text-gray-400">©2024 Orbit. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;