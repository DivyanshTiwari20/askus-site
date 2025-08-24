'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building2 } from 'lucide-react';
import { CoolMode } from "@/components/magicui/cool-mode";

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

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
          {/* Responsive: form on top, content below on mobile/tablet; side by side on desktop */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16"
          >
            {/* Right Column - CTA and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 font-jakarta">
                  Why <span className="text-violet-700">ASKUS?</span>
                </h2>
                <p className="text-base font-manrope mb-6 text-gray-700">
                  <b>Transforming ideas</b> into impactful <b>digital solutions</b>, we tailor every project to <b>elevate your brand</b> and connect with your audience effectively.
                </p>
                <p className="text-base font-manrope mb-8 text-gray-700">
                  At <b>ASKUS</b>, we partner with <b>visionary brands</b> that are hungry for <b>growth</b>.
                </p>
                {/* Key Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-jakarta">Results-Driven Approach</h4>
                      <p className="text-sm text-gray-600 font-manrope">Every strategy we craft is built around measurable outcomes and real business growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-jakarta">Creative Excellence</h4>
                      <p className="text-sm text-gray-600 font-manrope">Award-winning designs and content that captivate audiences and drive engagement.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-jakarta">End-to-End Solutions</h4>
                      <p className="text-sm text-gray-600 font-manrope">From concept to execution, we handle every aspect of your digital transformation journey.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-violet-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-jakarta">24/7 Support</h4>
                      <p className="text-sm text-gray-600 font-manrope">Dedicated support team ensuring your success at every step of the way. <p>Contat us :</p>
                        <b>+91-8009227002<br />askusstudio@gmail.com</b>
                      </p>
                    </div>
                  </div>
                 
                
                </div>
                {/* Stats Section */}
                {/* <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-violet-50/50 rounded-2xl border border-violet-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-700 font-jakarta">500+</div>
                    <div className="text-xs text-gray-600 font-manrope">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-700 font-jakarta">98%</div>
                    <div className="text-xs text-gray-600 font-manrope">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-700 font-jakarta">24/7</div>
                    <div className="text-xs text-gray-600 font-manrope">Support Available</div>
                  </div>
                </div> */}
                
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl">
                <div className="flex items-center mb-8">
                  <MessageSquare className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Send us a Message</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name and E   */}
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Company and Phone */}
                    <div className="relative">
                      <Building2 className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                      />
                    </div>
                  </div>
                  {/* Service Select */}
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
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
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                  {/* Submit Button */}
                  <CoolMode>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-900 transition-all duration-300 disabled:opacity-50"
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
                  </CoolMode>
                </div>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </>
  );
}