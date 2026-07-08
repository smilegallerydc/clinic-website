import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

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
  metadataBase: new URL("https://smilegalleryimplants.com"),
  title: {
    default: "Smile Gallery Dental Clinic | Dr. Hetal Chheda – Borivali West, Mumbai",
    template: "%s | Smile Gallery Dental Clinic Borivali",
  },
  description: "Experience premium, modern dental care at Smile Gallery Dental Clinic, Borivali West. Led by Dr. Hetal Chheda (BDS, PGDAOI Implant – France), we specialize in cosmetic smile design, dental implants, and painless laser dentistry.",
  keywords: ["dental clinic Borivali", "best dentist Borivali West", "dentist Borivali West", "Dr Hetal Chheda dentist", "Smile Gallery Dental Clinic", "cosmetic dentistry Mumbai", "dental implants Borivali West", "implant dentist Borivali", "implant specialist Mumbai", "full mouth implant treatment", "missing tooth implants Borivali", "laser dentistry Mumbai", "painless dentistry Borivali", "painless laser procedures", "root canal Borivali", "root canal specialist Mumbai", "in house OPG Borivali", "dental scanner Borivali", "3D dental scanner Mumbai", "pediatric dentistry Borivali", "geriatric dentistry Mumbai", "Invisalign Mumbai", "Invisalign Borivali West", "clear aligners Borivali", "teeth whitening Borivali", "smile designing Mumbai", "western suburbs dentist Mumbai", "painless artistry dentistry"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Smile Gallery Dental Clinic | Dr. Hetal Chheda – Borivali West, Mumbai",
    description: "Premium dental care in Borivali West since 2011. Dental implants, smile makeovers, laser dentistry. Call +91 98193 00553.",
    type: "website",
    locale: "en_IN",
    siteName: "Smile Gallery Dental Clinic",
    url: "https://smilegalleryimplants.com",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Smile Gallery Dental Clinic – Borivali West Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Gallery Dental Clinic | Dr. Hetal Chheda – Borivali West",
    description: "Premium dental care in Borivali West since 2011. Dental implants, smile makeovers, laser dentistry.",
    images: ["/hero.jpg"],
  },
  alternates: {
    canonical: "https://smilegalleryimplants.com",
  },
};

// Local Business structured data for Google rich results
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Smile Gallery Dental Clinic & Implant Centre",
  "image": "https://smilegalleryimplants.com/hero.jpg",
  "url": "https://smilegalleryimplants.com",
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W5XLM4LL');`}
        </Script>


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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5XLM4LL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1 pt-20 pb-16 md:pb-16 pb-28">
          {children}
        </main>
        <Footer />

        {/* Sticky mobile bottom action bar — only visible on mobile/tablet */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-3 flex gap-3">
          <a
            href="tel:+919819300553"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold text-sm shadow-md shadow-primary/20 active:scale-95 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call Now
          </a>
          <a
            href="https://wa.me/message/MIPWG2AVM2GWC1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-md shadow-green-500/20 active:scale-95 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.46 3.37 1.25 4.79L2 22l5.39-1.21A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.48c-.2.56-.99 1.04-1.62 1.18-.43.09-.99.17-2.88-.62-2.42-1.01-3.97-3.46-4.09-3.62-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97.21-.23.46-.29.62-.29.16 0 .31 0 .45.01.14.01.33-.05.52.4.2.46.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.23.62.97 1.33 1.57.91.81 1.68 1.06 1.92 1.18.23.12.37.1.51-.06.14-.16.59-.69.75-.93.16-.23.31-.19.52-.12.21.08 1.35.64 1.58.75.23.12.39.17.45.27.06.1.06.57-.14 1.12z"/>
            </svg>
            WhatsApp
          </a>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}


