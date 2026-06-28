import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilegallerydentalclinic.in"),
  title: "Smile Gallery Dental Clinic | Dr. Hetal Chheda Borivali Mumbai",
  description: "Experience premium, modern dental care at Smile Gallery Dental Clinic, Borivali West. Led by Dr. Hetal Chheda, we specialize in cosmetic smile design, dental implants, and painless laser dentistry.",
  keywords: ["dental clinic Borivali", "dentist Borivali West", "Dr. Hetal Chheda", "Smile Gallery Dental Clinic", "cosmetic dentistry Mumbai", "dental implants Borivali", "laser dentistry Mumbai", "root canal Borivali"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Smile Gallery Dental Clinic | Dr. Hetal Chheda Borivali Mumbai",
    description: "Experience premium, modern dental care at Smile Gallery Dental Clinic, Borivali West. Book your appointment online today.",
    type: "website",
    locale: "en_US",
    siteName: "Smile Gallery Dental Clinic",
    url: "https://smilegallerydentalclinic.in",
  },
  alternates: {
    canonical: "https://smilegallerydentalclinic.in",
  },
};

// Local Business structured data for Google rich results
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Smile Gallery Dental Clinic & Implant Centre",
  "image": "https://smilegallerydentalclinic.in/hero.jpg",
  "url": "https://smilegallerydentalclinic.in",
  "telephone": "+919819300553",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ground Floor, Flat No. 1, Arvind Apartment, L.T. Road, Opp. P.N.G. Jewellers, Next to Swiss Paradise",
    "addressLocality": "Borivali West",
    "addressRegion": "Maharashtra",
    "postalCode": "400092",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.231051,
    "longitude": 72.852445
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:30",
      "closes": "21:00"
    }
  ],
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "180"
  },
  "founder": {
    "@type": "Person",
    "name": "Dr. Hetal Chheda",
    "jobTitle": "BDS, PGDAOI Implant (France)"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${urbanist.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to speed up Google Fonts — reduces FCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Local Business structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="flex-1 pt-20 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


