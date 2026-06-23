import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmileCare Dental Practice | Premium Dental Clinic Chicago",
  description: "Experience premium, modern dental care at SmileCare. From general dentistry to orthodontics & cosmetic smile makeovers, our expert team utilizes state-of-the-art tech in Chicago, IL.",
  keywords: ["dental clinic Chicago", "dentist Chicago", "cosmetic dentistry", "orthodontics", "dental clinic", "teeth whitening", "invisalign", "root canal", "dental implants"],
  openGraph: {
    title: "SmileCare Dental Practice | Premium Dental Clinic Chicago",
    description: "Experience premium, modern dental care at SmileCare. Book your appointment online today.",
    type: "website",
    locale: "en_US",
    siteName: "SmileCare Dental Practice",
  },
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

