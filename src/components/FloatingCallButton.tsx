'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
    return (
        <motion.a
            href="tel:+918009227002"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-black rounded-full shadow-lg hover:shadow-xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-75"></div>
            <Phone className="w-8 h-8 text-white relative z-10" />
        </motion.a>
    );
};

export default FloatingCallButton;
