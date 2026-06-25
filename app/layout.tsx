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
  title: "Smile Gallery Dental Clinic | Dr. Hetal Chheda Borivali Mumbai",
  description: "Experience premium, modern dental care at Smile Gallery Dental Clinic, Borivali West. Led by Dr. Hetal Chheda, we specialize in cosmetic smile design, dental implants, and painless laser dentistry.",
  keywords: ["dental clinic Borivali", "dentist Borivali West", "Dr. Hetal Chheda", "Smile Gallery Dental Clinic", "cosmetic dentistry Mumbai", "dental implants Borivali", "laser dentistry Mumbai", "root canal Borivali"],
  openGraph: {
    title: "Smile Gallery Dental Clinic | Dr. Hetal Chheda Borivali Mumbai",
    description: "Experience premium, modern dental care at Smile Gallery Dental Clinic, Borivali West. Book your appointment online today.",
    type: "website",
    locale: "en_US",
    siteName: "Smile Gallery Dental Clinic",
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

