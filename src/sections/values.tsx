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

const Values: React.FC = () => {
  const values = [
    { number: '001', title: 'Customer-centric', description: "Need help or guidance? We're here for you every step of the way.", icon: '👥' },
    { number: '002', title: 'Innovation', description: 'Count on us for support, guidance, and teamwork at all times.', icon: '💡' },
    { number: '003', title: 'Excellence', description: "Get in touch with us for assistance, guidance, and teamwork.", icon: '⭐' },
    { number: '004', title: 'Communicate', description: 'Count on us for support, guidance, and collaboration.', icon: '💬' }
  ];

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
            At Ask Us, we are driven by a set of core values that guide everything we do. <b>We believe in Empowering Startups with Passion and Precision. </b>  
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
    </div>
  );
};

export default Values;