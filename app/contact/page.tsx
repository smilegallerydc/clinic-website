import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Smile Gallery Dental Clinic Borivali",
  description: "Book an appointment at Smile Gallery Dental Clinic, Borivali West, Mumbai. Call +91 98193 00553 or +91 93267 85438. Located at L.T. Road, Opp. P.N.G. Jewellers, Borivali West – 400092.",
  alternates: {
    canonical: "https://smilegallerydentalclinic.in/contact",
  },
  openGraph: {
    title: "Contact & Book Appointment | Smile Gallery Dental Clinic Borivali",
    description: "Call us at +91 98193 00553. Located at L.T. Road, Opp. P.N.G. Jewellers, Borivali West, Mumbai – 400092. Open Mon–Sat 9:30 AM to 9 PM.",
    url: "https://smilegallerydentalclinic.in/contact",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Smile Gallery Dental Clinic – Contact & Location Borivali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | Smile Gallery Dental Clinic Borivali",
    description: "Call +91 98193 00553. Open Mon–Sat 9:30 AM–9 PM. Borivali West, Mumbai.",
    images: ["/hero.jpg"],
  },
};

export default function Page() {
  return <ContactClient />;
}
