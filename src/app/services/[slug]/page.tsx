// src/app/services/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';

// Service data (you can move this to a separate file)
const servicesData = {
  'video-production': {
    title: 'Video Production',
    description: `Do you struggle to make good-looking content regularly?
From reels and product photos to full videos—we do it all. We make sure your content looks professional and fits your brand.`,
    features: [
      'Reels, videos, and photo shoots',
      'UGC and brand content',
      'Graphics and animations',
      'Start to finish production'
    ],
    benefits: [
      'Increased engagement',
      'Professional brand image',
      'Higher conversion rates'
    ]
  },
  'social-media-management': {
    title: 'Social Media Management',
    description: `Is your social media helping your brand grow?
We don't just post—we plan, create, and manage your brand's voice online. Our team handles everything to help you stay consistent, engaging, and relevant on all platforms.`,
    features: [
      'Monthly content planning',
      'Reels, carousels, and stories',
      'Captions, hashtags, and strategy',
      'Analytics and growth tracking'
    ],
    benefits: [
      'Stronger brand loyalty',
      'Increased followers & engagement',
      'Consistent online presence'
    ]
  },
  'design-development': {
    title: 'Design & Development',
    description: `Does your website or app look good and work smoothly?
We design and build websites and apps that not only look great but also deliver a smooth user experience. Whether it's a landing page or full ecommerce store, we've got it covered.`,
    features: [
      'Website design and development',
      'App design (UI/UX)',
      'Graphics and animations',
      'Responsive and mobile-friendly builds',
      'Landing pages and e-commerce platforms'
    ],
    benefits: [
      'Modern, attractive interfaces',
      'Improved user experience',
      'Stronger brand recognition'
    ]
  },
  'seo-optimization': {
    title: 'SEO Optimization',
    description: `Can your customers find you on Google?
If your site doesn't show up in search results, you're missing out. We help you rank higher with smart SEO strategies that improve your visibility and traffic over time.`,
    features: [
      'Keyword research and content improvement',
      'On-page and technical SEO',
      'Link building and blog writing',
      'Regular performance reports'
    ],
    benefits: [
      'Higher search rankings',
      'Increased organic traffic',
      'Better ROI on marketing'
    ]
  },
  'whatsapp-marketing': {
    title: 'WhatsApp Marketing',
    description: `Are you using WhatsApp to reach your customers directly?
WhatsApp is where people open and read messages. We help you use it to send updates, offers, and more—fast, direct, and personal.`,
    features: [
      'Bulk message campaigns',
      'Auto-replies and chatbot setup',
      'Customer updates and promotions',
      'Open rate and click tracking'
    ],
    benefits: [
      'Instant customer reach',
      'Higher open rates',
      'Personalized communication'
    ]
  },
  'email-marketing': {
    title: 'Email Marketing',
    description: `Are your emails being read or ignored?
We create email campaigns that connect with your audience. From catchy subject lines to well-designed layouts, we make sure your emails bring value and results.`,
    features: [
      'Newsletters, campaigns, and automation',
      'Email design and writing',
      'Subscriber list building',
      'Open and click analytics'
    ],
    benefits: [
      'Stronger audience connection',
      'Higher open and click rates',
      'Consistent brand presence in inboxes'
    ]
  }
};

export default async function ServicePage({ params }: { params: { slug: string } }) {
  // Await params as required by Next.js dynamic route API
  const awaitedParams = await Promise.resolve(params);
  const service = servicesData[awaitedParams.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 mt-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <ServiceSidebar />
            </aside>
            
            {/* Main Content */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
              {/* Service Header */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h1>
                <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </div>
              </div>
              
              {/* Service Content Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Features Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2  pb-2">
                    What we do
                  </h2>
                  <ul className="space-y-4">
                    {service.features?.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-3 h-3 bg-gray-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b-2  pb-2">
                    Benefits
                  </h2>
                  <ul className="space-y-4">
                    {service.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

        
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'video-production' },
    { slug: 'social-media-management' },
    { slug: 'design-development' },
    { slug: 'seo-optimization' },
    { slug: 'whatsapp-marketing' },
    { slug: 'email-marketing' },
  ];
}