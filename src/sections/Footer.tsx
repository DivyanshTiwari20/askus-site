'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

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
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email, 
          message: 'A new user subscribed to the newsletter.' 
        }),
      });

      if (response.ok) {
        alert('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      { label: 'Video Production', href: '/services/video-production' },
      { label: 'Design & Development', href: '/services/design-development' },
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'SEO Optimization', href: '/services/seo-optimization' },
      { label: 'WhatsApp Marketing', href: '/services/whatsapp-marketing' },
    ],
    'Get in touch': [
      '+91-80092 27002',
      'askusstudio@gmail.com',
      'Mon-Sat,  10:00AM - 6:00PM',
      'L-78, Sec-D, Sachivalaya Colony, L.K.O, Uttar Pradesh.',
    ],
  };

  const socialLinks = [
    { label: 'f', url: 'https://www.facebook.com/profile.php?id=61571452027819' },
    { label: 'in', url: 'https://www.linkedin.com/in/askus-growth-agency-a785692b6' },
    { label: 't', url: 'https://x.com/askus_studio' },
    { label: 'ig', url: 'https://www.instagram.com/askus_studio/' },
  ];

  return (
    <div className="w-full bg-[#EAE8E4]">
      <motion.footer
        className="text-gray-800 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Column 1: Logo + Newsletter */}
            <motion.div
              className="lg:col-span-2"
              variants={footerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/logoo.png"
                alt="Askus Logo"
                className="h-[120px] w-auto mb-8"
                style={{ objectFit: 'contain' }}
              />
              {/* <h3 className="text-3xl font-bold mb-8">.Askus</h3> */}
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Connect With Us.</h4>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch">
                  <input
                    type="email"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white border border-gray-300 rounded-l-md px-4 py-2 text-gray-800 focus:outline-none focus:border-gray-500"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gray-800 text-white px-6 py-2 rounded-r-md font-semibold hover:bg-black transition-colors mt-3 sm:mt-0 sm:ml-0 disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </motion.button>
                </form>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 hover:text-white transition-colors"
                    whileHover={{ scale: 1.13 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                  >
                    <span className="text-sm font-semibold">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
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
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {typeof link === 'object' && link.href ? (
                        <Link href={link.href} className="text-gray-600 hover:text-black transition-colors text-sm">
                          {link.label}
                        </Link>
                      ) : (
                        <span className="text-gray-600 text-sm">{typeof link === 'string' ? link : link.label}</span>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Bottom Bar */}
      <div className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-row items-center justify-center gap-3">
          {/* <img
            src="/logoo.png"
            alt="Askus Studio Logo"
            className="h-[60px] w-auto mb-8"
            style={{ objectFit: "contain", margin: 0, padding: 0 }}
          /> */}
          <p className="text-xs text-gray-400">©2025 askusStudio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;