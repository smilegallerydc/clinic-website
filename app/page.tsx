import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dental Clinic in Borivali West | Smile Gallery – Dr. Hetal Chheda",
  description: "Smile Gallery Dental Clinic, Borivali West, Mumbai. Dr. Hetal Chheda offers dental implants, smile design, root canals, laser dentistry & more. Call +91 98193 00553.",
  alternates: {
    canonical: "https://smilegallerydentalclinic.in/",
  },
  openGraph: {
    title: "Best Dental Clinic in Borivali West | Smile Gallery – Dr. Hetal Chheda",
    description: "Premium dental care since 2011. Dental implants, smile makeovers, laser dentistry in Borivali West, Mumbai.",
    url: "https://smilegallerydentalclinic.in/",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Smile Gallery Dental Clinic Borivali West" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Borivali West | Smile Gallery",
    description: "Premium dental care since 2011. Dental implants, smile makeovers, laser dentistry.",
    images: ["/hero.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}
