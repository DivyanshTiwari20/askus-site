
'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 24,
      mass: 0.8,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.07,
    y: -8,
    boxShadow: '0 16px 32px rgba(80, 60, 200, 0.10), 0 1.5px 0 rgba(255,255,255,0.6) inset',
    transition: {
      type: 'spring' as const,
      stiffness: 350,
      damping: 18,
      mass: 0.7,
      duration: 0.25
    }
  }
};

const iconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: 8,
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 18,
      duration: 0.25
    }
  }
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
      duration: 0.5
    }
  }
};

const ValuesAndFooter: React.FC = () => {
  const values = [
    { number: '001', title: 'Customer-centric', description: "Need help or guidance? We're here for you every step of the way.", icon: '👥' },
    { number: '002', title: 'Innovation', description: 'Count on us for support, guidance, and teamwork at all times.', icon: '💡' },
    { number: '003', title: 'Excellence', description: "Get in touch with us for assistance, guidance, and teamwork.", icon: '⭐' },
    { number: '004', title: 'Communicate', description: 'Count on us for support, guidance, and collaboration.', icon: '💬' }
  ];

  const footerLinks = {
    Features: ['Customer management', 'Security Holding', 'Invoices management', 'Live chat', 'Integrations', 'Pricing'],
    Solutions: ['Finance automation', 'Orders', 'CRM', 'Templates', 'Mobile Apps', 'Dashboards'],
    'Help & Support': ['Help center', 'Partner community', 'Professional development', 'Blog', 'Account help', 'Resources']
  };

  return (
    <div className="w-full">
      {/* Core Values */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="text-center mb-16" variants={footerItemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our core values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fully functional dolor sit amet, consectetur risuse rutile et imperdiet dolores officin taccusantium.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group bg-white rounded-xl p-8 border border-gray-200 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.2 }}
                style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6)' }}
              >
                <div className="text-sm text-gray-400 mb-2">{value.number}</div>
                <motion.div className="text-3xl mb-4" variants={iconVariants} initial="initial" whileHover="hover">
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-900 text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              className="lg:col-span-2"
              variants={footerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-8">Orbit</h3>
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Subscribe Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-l-full px-6 py-3 focus:outline-none focus:border-purple-500"
                  />
                  <motion.button
                    className="bg-purple-600 px-8 py-3 rounded-r-full font-semibold hover:bg-purple-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6">©2024 Orbit. All rights reserved.</p>
              <div className="flex space-x-4">
                {['f', 'in', 't', 'ig'].map((social, idx) => (
                  <motion.div
                    key={idx}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors"
                    whileHover={{ scale: 1.13, backgroundColor: '#7c3aed' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring' as const, stiffness: 350, damping: 18 }}
                  >
                    <span className="text-sm font-semibold">{social}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {Object.entries(footerLinks).map(([category, links], catIdx) => (
              <motion.div
                key={category}
                variants={footerItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, linkIdx) => (
                    <motion.li
                      key={linkIdx}
                      whileHover={{ x: 8, color: '#fff' }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
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
    </div>
  );
};

export default ValuesAndFooter;