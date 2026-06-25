import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Smile Gallery Dental Clinic Borivali West Mumbai",
  description: "Learn about Smile Gallery Dental Clinic, Borivali West, established in 2011. Led by Dr. Hetal Chheda, we offer state-of-the-art painless cosmetic and implant care.",
};

export default function Page() {
  return <AboutClient />;
}
