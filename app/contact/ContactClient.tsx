"use client";

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
          Connect With Our Borivali Clinic
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We schedule all consultations and dental appointments directly over phone call. Connect with us instantly and secure your visit.
        </p>
      </motion.section>

      {/* 2. Main Two Column Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Big Interactive Call Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8 relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
          
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 animate-pulse">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
              Painless Booking: Just Call Directly
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed font-sans">
              To guarantee the fastest possible alignment with Dr. Hetal Chheda&apos;s schedule and avoid waiting for email replies, we coordinate all appointments directly over a phone call. Click on either number below to connect with our reception desk immediately.
            </p>
          </div>

          {/* Large phone call links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:+919819300553"
              className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-primary hover:border-primary text-slate-800 hover:text-white transition-all duration-300 shadow-sm flex flex-col items-center text-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white text-slate-500 group-hover:bg-white/10 group-hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-90">
                  Primary Line
                </span>
                <span className="font-display font-extrabold text-lg sm:text-xl block mt-1 tracking-tight">
                  +91 98193 00553
                </span>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/70 text-slate-600 group-hover:bg-white/15 group-hover:text-white transition-colors font-sans">
                Tap to Call Now
              </span>
            </a>

            <a
              href="tel:+919326785438"
              className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-primary hover:border-primary text-slate-800 hover:text-white transition-all duration-300 shadow-sm flex flex-col items-center text-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white text-slate-500 group-hover:bg-white/10 group-hover:text-white flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-90">
                  Secondary Line
                </span>
                <span className="font-display font-extrabold text-lg sm:text-xl block mt-1 tracking-tight">
                  +91 93267 85438
                </span>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/70 text-slate-600 group-hover:bg-white/15 group-hover:text-white transition-colors font-sans">
                Tap to Call Now
              </span>
            </a>
          </div>

          <div className="border-t border-slate-100 pt-6 space-y-4">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wider">
              Booking Benefits
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500 font-sans">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                No tedious registration forms required
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Instant confirmation & time slot locking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Reschedule easily if your plans change
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Speak directly with our qualified clinical team
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Side: Coordinates, Hours, Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Direct Contacts Info Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg">Alternative Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:smilegallerydc@gmail.com"
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
                  <span className="font-semibold text-slate-700">smilegallerydc@gmail.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* Operational Hours Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg">Office Hours</h3>
            <ul className="space-y-2 text-sm text-slate-500 font-sans">
              <li className="flex justify-between border-b border-slate-200/50 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-slate-800 font-semibold">9:30 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-accent font-bold">Closed</span>
              </li>
            </ul>
          </div>

          {/* Location & Map Block with Custom Pins */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-slate-800 text-lg">Clinic Address</h3>
              {/* Map App navigation button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=19.228360041534398,72.85270486307037"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Navigate
              </a>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Ground Floor, Flat No. 1, Arvind Apartment, L.T. Road, Opp. P.N.G. Jewellers, Next to Swiss Paradise, Borivali West, Mumbai – 400092
            </p>
            
            {/* Interactive Iframe Google Map with Custom Overlay Pin */}
            <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner relative group cursor-pointer">
              {/* Entire map container acts as link on mobile/desktop, disabling map pointer events to avoid scroll locks */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=19.228360041534398,72.85270486307037"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Open in Map App</span>
              </a>
              
              <iframe
                title="Smile Gallery Dental Location Map"
                src="https://maps.google.com/maps?q=19.228360041534398,72.85270486307037&z=17&output=embed"
                width="100%"
                height="100%"
                className="border-0 pointer-events-none group-hover:opacity-100 opacity-90 transition-opacity duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Custom Pin Overlay centered over the clinic coordinate */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center z-20">
                {/* Pulse ring animation */}
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping" />
                {/* Pin Head */}
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center shadow-lg relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.8 2.5 6.5C5.8 20 8.5 22 12 22s6.2-2 7.5-3.5c1.5-1.7 2.5-4 2.5-6.5 0-5.5-4.5-10-10-10zM12 6c-2 0-3 1.5-3 3.5s1 3.5 3 3.5 3-1.5 3-3.5S14 6 12 6z" />
                  </svg>
                </div>
                {/* Pin Tip */}
                <div className="w-2 h-2 bg-primary rotate-45 -mt-1 border-r border-b border-white relative z-10" />
                
                {/* Clinic custom label */}
                <div className="mt-1 bg-slate-900/90 text-white text-[10px] font-bold py-1 px-2.5 rounded-full shadow-md backdrop-blur-sm whitespace-nowrap border border-white/10 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  Smile Gallery
                </div>
              </div>

              {/* Soft overlay stating tap instruction */}
              <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-semibold py-1.5 px-3 rounded-xl shadow-md border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-sans">
                Tap to open in Map App
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
