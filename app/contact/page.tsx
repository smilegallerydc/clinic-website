"use client";

import BookingForm from "@/components/BookingForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 font-sans overflow-hidden">
      {/* 1. Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto space-y-4 pt-6"
      >
        <span className="text-primary font-bold text-xs uppercase tracking-widest block">
          Get In Touch
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
          Connect With Our Chicago Clinic
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Have an inquiry or ready to schedule your smile appointment? Use our secure online request portal or call our front desk coordinate directly.
        </p>
      </motion.section>

      {/* 2. Main Two Column Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Booking form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <BookingForm />
        </motion.div>

        {/* Right Side: Coordinates, Hours, Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Direct Phone & Email Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg">Direct Contacts</h3>
            
            <div className="space-y-3 text-sm">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Reception Desk
                  </span>
                  <span className="font-semibold text-slate-700">+1 (555) 123-4567</span>
                </div>
              </a>

              <a
                href="mailto:contact@smilecaredental.com"
                className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/20 transition-all shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Office Email
                  </span>
                  <span className="font-semibold text-slate-700">contact@smilecaredental.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Operational Hours Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg">Office Hours</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex justify-between border-b border-slate-200/50 pb-2">
                <span>Monday - Friday</span>
                <span className="text-slate-800 font-semibold">8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-200/50 pb-2">
                <span>Saturday</span>
                <span className="text-slate-800 font-semibold">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-accent font-bold">Closed</span>
              </li>
            </ul>
          </div>

          {/* Location & Map Block */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg">Clinic Address</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              123 Bright-Smile Way, Medical District, Chicago, IL 60611
            </p>
            {/* Interactive Iframe Google Map */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner relative group">
              <iframe
                title="SmileCare Dental Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371424!2d-87.625902!3d41.898816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34eab842f1f%3A0x6fb878eb32c4e201!2sMagnificent%20Mile%2C%20Chicago%2C%20IL%2060611!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="border-0 group-hover:opacity-100 opacity-90 transition-opacity duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
