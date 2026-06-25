import ServicesClient from "./ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Services & Treatments | Smile Gallery Dental Clinic Borivali",
  description: "Explore our wide range of dental treatments including dental implants, clear aligners (Invisalign), cosmetic smile design, root canal therapy, and in-house OPG scans.",
};

export default function Page() {
  return <ServicesClient />;
}
