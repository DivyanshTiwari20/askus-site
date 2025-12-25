import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.askusstudio.in"),

  verification: {
    google: "oElveCGm8AfKXlLcd0z7Z_yG582AdiqoE3sS0ZIuvYQ",
  },

  title: {
    default: "Askus Studio | Digital Agency for Startups in India",
    template: "%s | Askus Studio – Digital Agency for Startups",
  },

  description:
    "Askus Studio is a premium digital agency in India helping startups and small businesses grow with high-impact digital marketing, SEO, social media marketing, and scalable web development services.",

  keywords: [
    "digital agency for startups",
    "digital marketing agency india",
    "web development agency india",
    "seo services for startups",
    "social media marketing agency",
    "startup marketing agency",
  ],

  authors: [{ name: "Askus Studio" }],
  creator: "Askus Studio",
  publisher: "Askus Studio",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.askusstudio.in",
  },

  openGraph: {
    title: "Askus Studio | Digital Agency for Startups in India",
    description:
      "We help startups and growing businesses scale with performance-driven digital marketing, SEO, social media, and web development.",
    url: "https://www.askusstudio.in",
    siteName: "Askus Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Askus Studio – Digital Agency for Startups",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Askus Studio | Digital Agency for Startups",
    description:
      "Premium digital agency in India helping startups grow with marketing, SEO, and web development.",
    images: ["/twitter-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
