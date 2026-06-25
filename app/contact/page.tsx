import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | Smile Gallery Dental Clinic Borivali",
  description: "Contact Smile Gallery Dental Clinic in Borivali West, Mumbai. Speak directly with our clinical team to book an appointment or locate us on the map.",
};

export default function Page() {
  return <ContactClient />;
}
