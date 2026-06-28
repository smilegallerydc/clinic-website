import ServicesClient from "./ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Services – Implants, Smile Design, Root Canal | Smile Gallery Borivali",
  description: "Complete dental treatments at Smile Gallery, Borivali West: dental implants, Invisalign aligners, smile designing, root canal therapy, laser dentistry, OPG scans, teeth whitening & more.",
  alternates: {
    canonical: "https://smilegallerydentalclinic.in/services",
  },
  openGraph: {
    title: "Dental Services – Implants, Smile Design, Root Canal | Smile Gallery Borivali",
    description: "Full-range dental treatments in Borivali West. Implants, aligners, cosmetic veneers, laser therapy, root canals and more by Dr. Hetal Chheda.",
    url: "https://smilegallerydentalclinic.in/services",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Smile Gallery Dental Services Borivali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services | Smile Gallery Dental Clinic Borivali",
    description: "Implants, smile design, root canals, laser dentistry & more in Borivali West, Mumbai.",
    images: ["/hero.jpg"],
  },
};

export default function Page() {
  return <ServicesClient />;
}
