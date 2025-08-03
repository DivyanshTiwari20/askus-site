// 'use client';

// import React from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';

// // Define animation variants with correct type casting
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//       duration: 0.6
//     }
//   }
// };

// const footerItemVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring' as const,
//       stiffness: 250,
//       damping: 22,
//       duration: 0.5
//     }
//   }
// };

// const ValuesAndFooter: React.FC = () => {
//   const footerLinks = {
//     Features: [
//       'Customer management',
//       'Security Holding',
//       'Invoices management',
//       'Live chat',
//       'Integrations',
//       'Pricing'
//     ],
//     Solutions: [
//       'Finance automation',
//       'Orders',
//       'CRM',
//       'Templates',
//       'Mobile Apps',
//       'Dashboards'
//     ],
//     'Help & Support': [
//       'Help center',
//       'Partner community',
//       'Professional development',
//       'Blog',
//       'Account help',
//       'Resources'
//     ]
//   };

//   return (
//     <div className="w-full">
//       <motion.footer
//         className="bg-gray-900 text-white py-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={containerVariants}
//       >
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//             {/* Logo and Newsletter */}
//             {/* <motion.div
//               className="lg:col-span-2"
//               variants={footerItemVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               <h3 className="text-3xl font-bold mb-8">Orbit</h3>
//               <div className="mb-8">
//                 <h4 className="text-lg font-semibold mb-4">Subscribe Newsletter</h4>
//                 <div className="flex">
//                   <input
//                     type="email"
//                     placeholder="Enter your email address..."
//                     className="flex-1 bg-gray-800 border border-gray-700 rounded-l-full px-6 py-3 focus:outline-none focus:border-purple-500"
//                   />
//                   <motion.button
//                     className="bg-purple-600 px-8 py-3 rounded-r-full font-semibold hover:bg-purple-700 transition-colors"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
//                   >
//                     Subscribe
//                   </motion.button>
//                 </div>
//               </div>

//               <p className="text-gray-400 text-sm mb-6">©2024 Orbit. All rights reserved.</p>

//               <div className="flex space-x-4">
//                 {['f', 'in', 't', 'ig'].map((social, index) => (
//                   <motion.div
//                     key={index}
//                     className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors"
//                     whileHover={{ scale: 1.13, backgroundColor: '#7c3aed' }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: 'spring' as const, stiffness: 350, damping: 18 }}
//                   >
//                     <span className="text-sm font-semibold">{social}</span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div> */}

//             Footer Links
//             {Object.entries(footerLinks).map(([category, links]) => (
//               <motion.div
//                 key={category}
//                 variants={footerItemVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 <h4 className="text-lg font-semibold mb-6">{category}</h4>
//                 <ul className="space-y-3">
//                   {links.map((link, linkIndex) => (
//                     <motion.li
//                       key={linkIndex}
//                       whileHover={{ x: 8, color: '#fff' }}
//                       transition={{ type: 'spring' as const, stiffness: 300, damping: 18 }}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true, amount: 0.2 }}
//                     >
//                       <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
//                         {link}
//                       </a>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default ValuesAndFooter;