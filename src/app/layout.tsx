import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Jost, Inter, Josefin_Sans, Montserrat } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import data from "../../public/data.json";

import "./globals.css";
import NavBar from "@/components/MainSections/NavBar";
import { Footer } from "@/components/MainSections/Footer";
import { WhatsAppButton } from "@/components/Globals/WhatsAppButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Add Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

// Add Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Add Josefin Sans font
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

// Add Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Extract all category and product names for keywords
const allCategories = data.categories.map(cat => cat.name);
const allProducts = data.products.map(prod => prod.name);
const bestSellers = data.products
  .filter(prod => prod.tags?.includes("Best Seller"))
  .map(prod => prod.name);

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5ba45" },
    { media: "(prefers-color-scheme: dark)", color: "#f7af6b" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  viewportFit: "cover",
};

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://www.glowwormchips.com'),
  title: {
    default: "GLOW WORM CHIPS | Premium Kerala Banana Chips & Traditional Snacks",
    template: "%s | GLOW WORM CHIPS - Kerala's Finest"
  },
  description: "Buy premium Kerala banana chips and traditional snacks online from GLOW WORM CHIPS. Fresh, handmade snacks made from finest ingredients. Free shipping across Kerala. Order now!",
  applicationName: "GLOW WORM CHIPS",
  keywords: [
    // Commercial intent keywords
    "buy banana chips online",
    "order Kerala snacks online",
    "Kerala banana chips price",
    "traditional snacks delivery",
    // Location-based keywords
    "Kerala banana chips",
    "Malappuram snacks delivery",
    "Kerala traditional snacks",
    // Product categories
    ...allCategories.map(cat => `buy ${cat.toLowerCase()} online`),
    ...allProducts.map(prod => `buy ${prod.toLowerCase()}`),
    // Best sellers with commercial intent
    ...bestSellers.map(seller => `buy ${seller.toLowerCase()} online`),
    // Long-tail keywords
    "best banana chips in Kerala",
    "traditional Kerala snacks online",
    "authentic Malabar snacks delivery",
    "premium Kerala food products",
    // Brand keywords (reduced quantity, kept most important)
    "GLOW WORM chips",
    "Glowworm chips Kerala",
    "Glowworm chips Malappuram",
  ],
  authors: [{ name: "GLOW WORM", url: "https://glowwormchips.com" }],
  creator: "GLOW WORM Premium Snacks",
  publisher: "GLOW WORM Premium Snacks",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ml': '/ml',
    },
  },
  openGraph: {
    title: "GLOW WORM CHIPS | Premium Kerala Snacks Delivered to Your Door",
    description: "Order authentic Kerala banana chips and traditional snacks online. Fresh, handmade products with free shipping across Kerala. Premium quality guaranteed.",
    url: 'https://glowwormchips.com',
    siteName: 'GLOW WORM Premium Snacks',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GLOW WORM Premium Snacks & Food Products',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "GLOW WORM CHIPS | Premium Kerala Snacks Delivery",
    description: "Order authentic Kerala banana chips and traditional snacks online. Fresh, handmade products with free shipping across Kerala.",
    images: ['/twitter-image.jpg'],
    creator: '@glowwormchips',
    site: '@glowwormchips',
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
  category: "Food & Beverage",
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  appleWebApp: {
    capable: true,
    title: "GLOW WORM Snacks",
    statusBarStyle: "black-translucent",
  },
  other: {
    "contact:email": "glowwormchips@gmail.com",
    "contact:phone": "+919895193123",
    "business:contact_data:street_address": "Malappuram",
    "business:contact_data:locality": "Kerala",
    "business:contact_data:region": "Kerala",
    "business:contact_data:postal_code": "676505",
    "business:contact_data:country": "India",
    "business:hours": "Mo-Sa 09:00-18:00",
    "business:type": "Food Manufacturing",
    "og:price:currency": "INR",
    "og:price:amount": "Starting from 50",
    "product:brand": "GLOW WORM CHIPS",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:category": allCategories.join(", "),
    "product:best_seller": bestSellers.join(", "),
    "business:keywords": allProducts.join(", "),
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
    "business:contact_data:country_name": "India",
    "facebook-domain-verification": "your-facebook-verification-code",
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jost.variable} ${inter.variable} ${josefinSans.variable} ${montserrat.variable} antialiased bg-white`}
      >
        <NextTopLoader
          color="#2299DD"
          height={4}
          easing="ease"
          template='<div class="bar" role="bar"><div class="peg"></div></div> '
        />
        <NavBar/>
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
