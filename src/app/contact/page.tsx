
'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Typed change handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Typed submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);

    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  const contactInfo = [
    { icon: Phone, title: "Call Us", content: "+91 80092 27002", description: "Mon-Fri from 8am to 5pm" },
    { icon: Mail, title: "Email Us", content: "hello@askus.com", description: "We'll respond within 24 hours" },
    { icon: MapPin, title: "Visit Us", content: "Mumbai, India", description: "Come say hello at our office" },
    { icon: Clock, title: "Working Hours", content: "Mon-Fri: 9AM-6PM", description: "Weekend support available" }
  ];

  const services = [
    "Brand Strategy",
    "Digital Marketing",
    "Social Media Management",
    "Content Creation",
    "Web Development",
    "SEO Services",
    "Paid Advertising",
    "Other"
  ];

  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-12 md:py-16">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 md:mb-16"
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white/80 dark:bg-black/40 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl">
                <div className="flex flex-col xs:flex-row items-start xs:items-center mb-6 xs:mb-8">
                  <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 mr-0 xs:mr-3 mb-2 xs:mb-0" />
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                    Send us a Message
                  </h2>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Name and Email */}
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 sm:top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        autoComplete="name"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 sm:top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Company and Phone */}
                    <div className="relative">
                      <Building2 className="absolute left-4 top-3.5 sm:top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        autoComplete="organization"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 sm:top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  {/* Service Select */}
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 sm:py-4 bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  {/* Message Textarea */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 sm:py-4 bg-white/70 dark:bg-black/30 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                    />
                  </div>
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black dark:bg-blue-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-900 dark:hover:bg-blue-800 transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTA and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            >
              <div className="bg-white/80 dark:bg-black/40 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl">
                <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-bold mb-3 sm:mb-4 font-jakarta">
                  Why <span className="text-violet-700">ASKUS?</span>
                </h2>
                <p className="text-sm sm:text-base font-manrope mb-3 sm:mb-4">
                  <b>Transforming ideas</b> into impactful <b>digital solutions</b>, we tailor every project to <b>elevate your brand</b> and connect with your audience effectively.
                </p>
                <p className="text-sm sm:text-base font-manrope">
                  At <b>ASKUS</b>, we partner with <b>visionary brands</b> that are hungry for <b>growth</b>. If you’re driven by <b>ambition</b> and ready to <b>disrupt your industry</b>, let’s build something <b>extraordinary</b> together.
                </p>
              </div>
            </motion.div>
          </form>

          {/* Contact Info Section for mobile/tablet */}
          <div className="block lg:hidden mb-10">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-white/80 dark:bg-black/40 rounded-xl p-4 border border-white/20 shadow"
                >
                  <info.icon className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white text-base">{info.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{info.content}</div>
                    <div className="text-xs text-gray-400">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section for desktop */}
          <div className="hidden lg:block mb-10">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center bg-white/80 dark:bg-black/40 rounded-2xl p-6 border border-white/20 shadow"
                >
                  <info.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="font-semibold text-gray-800 dark:text-white text-lg mb-1">{info.title}</div>
                  <div className="text-base text-gray-600 dark:text-gray-300 mb-1">{info.content}</div>
                  <div className="text-xs text-gray-400">{info.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
