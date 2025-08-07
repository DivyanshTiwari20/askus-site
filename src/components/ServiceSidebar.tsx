// components/ServiceSidebar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const services = [
  {
    slug: 'video-production',
    title: 'Video Production'
  },
  {
    slug: 'design-development',
    title: 'Design & Development'
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management'
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing'
  },
  {
    slug: 'seo-optimization',
    title: 'SEO Optimization'
  },
  {
    slug: 'whatsapp-marketing',
    title: 'WhatsApp Marketing'
  }
];

interface ServiceSidebarProps {
  className?: string;
}

export default function ServiceSidebar({ className = '' }: ServiceSidebarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const currentService = pathname.split('/').pop();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-between w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3 rounded-lg font-semibold shadow-lg"
        >
          <span>Our Service List</span>
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <div className={`hidden lg:block w-80 ${className}`}>
        <div className="bg-black text-white px-6 py-4 rounded-t-lg">
          <h2 className="text-lg font-semibold">Our Service List</h2>
        </div>
        <div className="bg-white border border-gray-200 rounded-b-lg shadow-lg overflow-hidden">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`block px-6 py-4 border-b border-gray-100 last:border-b-0 transition-all duration-200 hover:bg-gray-50 hover:pl-8 ${
                currentService === service.slug
                  ? 'bg-purple-50 border-l-4 border-l-purple-600 text-purple-700 font-medium'
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              {service.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mb-6 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 border-b border-gray-100 last:border-b-0 transition-all duration-200 ${
                currentService === service.slug
                  ? 'bg-purple-50 border-l-4 border-l-purple-600 text-purple-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
              }`}
            >
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}