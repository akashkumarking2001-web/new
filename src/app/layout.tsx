import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://axosoul.com'),
  title: {
    default: "AxoSoul | Top Web Development & Mobile Apps Agency",
    template: "%s | AxoSoul Digital Agency"
  },
  description: "AxoSoul is a premium tech agency specializing in high-performance Web Development, cross-platform Mobile Apps, and ROI-driven Digital Marketing services.",
  keywords: ["Web Development", "Mobile App Development", "SEO Services", "Digital Marketing", "React", "Next.js", "Flutter", "Tech Agency"],
  authors: [{ name: "AxoSoul Tech Team" }],
  openGraph: {
    title: "AxoSoul | Top Web Development & Mobile Apps Agency",
    description: "Building bleeding-edge websites, mobile apps, and driving explosive digital growth. Partner with AxoSoul today.",
    url: "https://axosoul.com",
    siteName: "AxoSoul",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const techAgencySchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AxoSoul",
  "image": "https://axosoul.com/AxoSoul.png",
  "@id": "https://axosoul.com",
  "url": "https://axosoul.com",
  "telephone": "+18001234567",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Tech Lane",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "description": "Premium tech agency specializing in Web Development, Mobile Apps, and Digital Marketing.",
  "sameAs": [
    "https://twitter.com/axosoul",
    "https://linkedin.com/company/axosoul"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(techAgencySchema) }}
        />
      </head>
      <body className="bg-void text-text-primary font-sans antialiased overflow-x-hidden min-h-screen relative" suppressHydrationWarning>
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
