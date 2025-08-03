'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
    
    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 80092 27002",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@askus.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Mumbai, India",
      description: "Come say hello at our office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Fri: 9AM-6PM",
      description: "Weekend support available"
    }
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
      <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-16">
          
          {/* Hero Section */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Let's Start Your
              <br />
              <span className="text-gray-800">Digital Journey</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to transform your brand? Get in touch with our experts and let's create something extraordinary together.
            </motion.p>
          </motion.div> */}

          {/* Contact Info Cards
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <info.icon className="w-8 h-8 text-blue-600 mb-4 group-hover:text-purple-600 transition-colors duration-300" />
                <h3 className="text-lg font-bold mb-2 text-gray-800">{info.title}</h3>
                <p className="text-gray-800 font-semibold mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
            
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

                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    >
                      <option value="">Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
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
              className="space-y-8 order-1 lg:order-2"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Need Quick Help?</h3>
                <p className="text-lg mb-8 opacity-90">
                  Call us directly and speak with our experts right away.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6" />
                    <span className="text-xl font-semibold">+91 80092 27002</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6" />
                    <span className="text-lg">hello@askus.com</span>
                  </div>
                </div>

                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Call Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Ask Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Expert Team</h4>
                      <p className="text-gray-600 text-sm">50+ marketing experts ready to help you succeed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Proven Results</h4>
                      <p className="text-gray-600 text-sm">150+ brands transformed with measurable success</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Quick Response</h4>
                      <p className="text-gray-600 text-sm">We respond within 24 hours, guaranteed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Custom Solutions</h4>
                      <p className="text-gray-600 text-sm">Tailored strategies for your unique business needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Frequently Asked Questions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How quickly can you start my project?</h3>
                <p className="text-gray-600 mb-6">We typically begin new projects within 2-3 business days after our initial consultation and agreement finalization.</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Do you work with small businesses?</h3>
                <p className="text-gray-600">Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable to fit your needs and budget.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">What's included in your digital marketing services?</h3>
                <p className="text-gray-600 mb-6">Our comprehensive services include strategy development, content creation, social media management, SEO, paid advertising, and detailed analytics reporting.</p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">How do you measure success?</h3>
                <p className="text-gray-600">We use data-driven metrics tailored to your goals: website traffic, conversion rates, engagement levels, ROI, and other KPIs specific to your industry.</p>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white mt-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">Join 150+ brands that trust us with their digital transformation.</p>
            <motion.button
              className="bg-white text-blue-600 px-8 sm:px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule a Call</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div> */}

        </div>
      </div>
      <Footer />
    </>
  );
}