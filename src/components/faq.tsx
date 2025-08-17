// How to install this Accordion component:
// 1. Make sure you have the Accordion UI components in your project.
//    If you're using shadcn/ui, run:
//      npx shadcn-ui@latest add accordion
// 2. If you have a custom Accordion component, ensure it's located at "@/components/ui/accordion".
// 3. Then, import the components as shown below:

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/magicui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq1 = ({
  heading = "Frequently asked questions",
  items = [
    {
      id: "faq-1",
      question: "What services does Askus Studio provide?",
      answer:
        "We specialize in Social Media Marketing (SMM) and UGC (User-Generated Content) Creation, backed by performance-driven strategies. Additionally, we offer web design & development, SEO, paid ads (Google & Meta), email marketing, branding, and video production as secondary services.",
    },
    {
      id: "faq-2",
      question: "Do you work with international clients outside India?",
      answer:
        "Yes! 🌍 We proudly work with businesses across the globe. Our team is experienced in handling campaigns for diverse markets, including the US, UK, Europe, and Asia, while also deeply understanding the Indian digital ecosystem.",
    },
    {
      id: "faq-3",
      question: "How do you ensure results in social media marketing?",
      answer:
        "We follow a data-driven approach—starting with audience research, competitor analysis, content strategy, and targeted ad campaigns. Every move is tracked with analytics to ensure engagement, growth, and sales conversions.",
    },
    {
      id: "faq-4",
      question: "What is UGC and why is it important for my brand?",
      answer:
        "UGC (User-Generated Content) is authentic, relatable content created by real people. It builds trust and drives higher conversions compared to traditional ads. We create scroll-stopping UGC videos and campaigns that boost credibility and sales.",
    },
    {
      id: "faq-5",
      question: "How do your pricing packages work?",
      answer:
        "We offer transparent, pre-designed packages for SMM (starting at ₹12,000/month) and UGC videos (starting at ₹9,999). For larger or custom projects, we also provide tailored solutions based on your business needs.",
    },
    {
      id: "faq-6",
      question: "Can you help if I already have an in-house team?",
      answer:
        "Absolutely. We often collaborate with in-house teams to strengthen their strategies, add creative firepower, and bring in our expertise where needed—be it UGC, performance marketing, or full-fledged campaigns.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-16 md:py-32"> {/* Reduced padding on mobile for better fit */}
      <div className="container max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
        <h1 className="mb-4 font-bold md:mb-11 text-3xl sm:text-4xl md:text-5xl"> {/* Responsive font sizes */}
          {heading}
        </h1>
        <div className="mx-auto w-full max-w-4xl">
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline text-base sm:text-lg text-center">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base text-left"> {/* Responsive text sizes */}
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { Faq1 };

