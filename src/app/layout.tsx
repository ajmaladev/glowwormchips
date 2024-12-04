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
  metadataBase: new URL('https://glowwormchips.com'),
  title: {
    default: "GLOW WORM Premium Snacks & Food Products",
    template: "%s | GLOW WORM Chips"
  },
  description: "Premium manufacturer of authentic Kerala snacks including banana chips, murukku, tapioca chips, dry fruits, and traditional biscuits. Delivering quality snacks worldwide with authentic taste and flavors.",
  applicationName: "GLOW WORM Premium Snacks",
  keywords: [
    // Category keywords
    ...allCategories,
    // Product keywords
    ...allProducts,
    // Location and business type keywords
    "Kerala snacks",
    "Malabar snacks",
    "Indian snacks",
    "Kerala food products",
    "traditional snacks",
    "authentic Kerala taste",
    "premium snacks",
    "handcrafted snacks",
    // Best sellers
    ...bestSellers,
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
  },
  openGraph: {
    title: "GLOW WORM Premium Snacks & Food Products",
    description: "Premium manufacturer of authentic Kerala snacks including banana chips, murukku, tapioca chips, dry fruits, and traditional biscuits.",
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
    title: "GLOW WORM Premium Snacks & Food Products",
    description: "Premium manufacturer of authentic Kerala snacks and food products",
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
    google: "your-google-verification-code",
  },
  appleWebApp: {
    capable: true,
    title: "GLOW WORM Snacks",
    statusBarStyle: "black-translucent",
  },
  other: {
    "contact:email": "glowwormchips@gmail.com",
    "contact:phone": "+919995700791",
    "business:contact_data:street_address": "Malappuram",
    "business:contact_data:locality": "Kerala",
    "business:contact_data:region": "Kerala",
    "business:contact_data:postal_code": "676505",
    "business:contact_data:country": "India",
    "business:hours": "Mo-Sa 09:00-18:00",
    "business:type": "Food Manufacturing",
    "og:price:currency": "INR",
    "og:price:amount": "Starting from 50",
    "product:brand": "GLOW WORM",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:category": allCategories.join(", "),
    "product:best_seller": bestSellers.join(", "),
    "business:keywords": allProducts.join(", "),
  },
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
