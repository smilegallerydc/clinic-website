import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Hetal Chheda | Smile Gallery Dental Clinic Borivali",
  description: "Meet Dr. Hetal Chheda, BDS & PGDAOI Implant (France), founder of Smile Gallery Dental Clinic since 2011. Learn about our philosophy, team, and state-of-the-art dental equipment in Borivali West.",
  alternates: {
    canonical: "https://smilegallerydentalclinic.in/about",
  },
  openGraph: {
    title: "About Dr. Hetal Chheda | Smile Gallery Dental Clinic Borivali",
    description: "Established in 2011 in Borivali West. Dr. Hetal Chheda combines international implant expertise with compassionate, modern dental care.",
    url: "https://smilegallerydentalclinic.in/about",
    images: [{ url: "/doctor.jpg", width: 1200, height: 630, alt: "Dr. Hetal Chheda – Smile Gallery Dental Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Hetal Chheda | Smile Gallery Dental Clinic",
    description: "Established in 2011. Dr. Hetal Chheda – BDS, PGDAOI Implant (France) – Borivali West, Mumbai.",
    images: ["/doctor.jpg"],
  },
};

export default function Page() {
  return <AboutClient />;
}
