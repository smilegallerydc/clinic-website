"use client";

import Link from "next/link";
import Image from "next/image";

// Brand-accurate social media SVG icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <defs>
      <radialGradient id="ig-grad-footer" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="5" fill="url(#ig-grad-footer)" />
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad-footer)" />
    <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="none" stroke="white" strokeWidth="1.2" opacity="0.3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true" fill="none">
    <rect width="24" height="24" rx="5" fill="#25D366" />
    <path
      d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.5871 3.93196 15.0699 4.68186 16.336L3.5 20.5L7.78066 19.3396C9.01301 20.0375 10.4571 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5Z"
      fill="#25D366"
      stroke="white"
      strokeWidth="1.2"
    />
    <path
      d="M9.02 7.57C8.82 7.1 8.62 7.09 8.43 7.08C8.27 7.07 8.09 7.07 7.91 7.07C7.73 7.07 7.44 7.14 7.19 7.41C6.94 7.69 6.25 8.34 6.25 9.66C6.25 10.98 7.21 12.26 7.34 12.44C7.48 12.62 9.16 15.29 11.77 16.4C13.93 17.32 14.38 17.14 14.87 17.09C15.35 17.04 16.47 16.44 16.7 15.82C16.93 15.2 16.93 14.67 16.86 14.55C16.79 14.43 16.61 14.36 16.35 14.23C16.08 14.1 14.77 13.45 14.53 13.36C14.29 13.27 14.11 13.22 13.93 13.5C13.75 13.77 13.25 14.36 13.09 14.54C12.93 14.72 12.77 14.74 12.5 14.61C12.24 14.48 11.39 14.2 10.38 13.3C9.59 12.6 9.06 11.74 8.9 11.47C8.74 11.2 8.88 11.06 9.01 10.93C9.13 10.81 9.28 10.62 9.41 10.46C9.54 10.3 9.58 10.18 9.67 10C9.76 9.82 9.72 9.66 9.65 9.53C9.58 9.4 9.05 8.07 8.82 7.51L9.02 7.57Z"
      fill="white"
    />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#FF0000" />
    <path
      d="M19.615 7.184C19.387 6.343 18.726 5.681 17.884 5.453C16.354 5 12 5 12 5C12 5 7.646 5 6.116 5.453C5.274 5.681 4.613 6.343 4.385 7.184C3.932 8.714 3.932 12 3.932 12C3.932 12 3.932 15.286 4.385 16.816C4.613 17.657 5.274 18.319 6.116 18.547C7.646 19 12 19 12 19C12 19 16.354 19 17.884 18.547C18.726 18.319 19.387 17.657 19.615 16.816C20.068 15.286 20.068 12 20.068 12C20.068 12 20.068 8.714 19.615 7.184Z"
      fill="white"
    />
    <polygon points="10.182,9.455 10.182,14.545 14.545,12" fill="#FF0000" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <rect width="24" height="24" rx="5" fill="#0077B5" />
    <path
      d="M19 19h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-3v-8h3v1.2c.5-.8 1.5-1.2 2.5-1.2 2 0 4.5 1.5 4.5 4.5V19zM6.5 8.5C5.7 8.5 5 7.8 5 7s.7-1.5 1.5-1.5S8 6.2 8 7s-.7 1.5-1.5 1.5zM8 19H5v-8h3v8z"
      fill="white"
    />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      key: "instagram",
      label: "Follow us on Instagram",
      href: "https://instagram.com/smilegallerydentalcl?utm_medium=copy_link",
      icon: <InstagramIcon />,
      hoverBg: "hover:bg-gradient-to-br hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#d6249f]",
    },
    {
      key: "whatsapp",
      label: "Chat on WhatsApp",
      href: "https://wa.me/message/MIPWG2AVM2GWC1",
      icon: <WhatsAppIcon />,
      hoverBg: "hover:bg-[#25D366]",
    },
    {
      key: "linkedin",
      label: "Dr. Hetal Chheda on LinkedIn",
      href: "https://www.linkedin.com/in/dr-hetal-chheda-shah-aaba2a20?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: <LinkedInIcon />,
      hoverBg: "hover:bg-[#0077B5]",
    },
    {
      key: "youtube",
      label: "Watch us on YouTube",
      href: "https://www.youtube.com/@SmileGalleryDentalClinic-DrHet",
      icon: <YouTubeIcon />,
      hoverBg: "hover:bg-[#FF0000]",
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      {/* Dynamic CTA Banner Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-8 md:p-12 shadow-xl shadow-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 leading-tight">
              Loved Your Experience With Us?
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium">
              Your feedback means a lot to us and helps others in Mumbai choose the right care. Take a moment to leave us a Google review!
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="https://g.page/r/CTDlFtXtThK6EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-primary hover:bg-slate-50 font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Review Us on Google
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logo.svg"
                alt="Smile Gallery Logo"
                width={36}
                height={36}
                className="brightness-0 invert"
              />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Smile<span className="text-primary-muted">Gallery</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              State-of-the-art dental care in Borivali West, where dentistry meets artistry. Dr. Hetal Chheda — BDS, PGDAOI Implant (France).
            </p>
            {/* Social Links — brand logos */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ key, label, href, icon, hoverBg }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-xl bg-slate-800 ${hoverBg} flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden`}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-base">Quick Links</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-muted transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-muted transition-colors">
                  About the Clinic
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-muted transition-colors">
                  Services &amp; Treatments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-muted transition-colors">
                  Contact &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-base">Clinic Hours</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Monday – Saturday</span>
                <span className="text-white font-medium">9:30 AM – 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary-muted font-semibold">Closed</span>
              </li>
            </ul>
            {/* Quick contact */}
            <div className="flex flex-col gap-1.5 mt-2">
              <a
                href="tel:+919819300553"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-primary-muted group-hover:text-white transition-colors shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +91 98193 00553
              </a>
              <a
                href="tel:+919326785438"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-primary-muted group-hover:text-white transition-colors shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +91 93267 85438
              </a>
            </div>
          </div>

          {/* Contact coordinates & Mini Map Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-base">Our Location</h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <p className="flex items-start gap-2 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 text-primary-muted shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>Ground Floor, Flat No. 1, Arvind Apartment, L.T. Road, Opp. P.N.G. Jewellers, Next to Swiss Paradise, Borivali West, Mumbai – 400092</span>
              </p>
              {/* Interactive Map — clicking opens Google Maps app */}
              <div className="w-full h-52 rounded-xl overflow-hidden relative border border-slate-700 bg-slate-800 group cursor-pointer">
                {/* Entire map container acts as link on mobile/desktop, disabling map pointer events to avoid scroll locks */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=19.228360041534398,72.85270486307037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Open clinic location in Google Maps"
                >
                  <span className="sr-only">Open in Map App</span>
                </a>
                
                <iframe
                  title="Smile Gallery Dental Clinic Map"
                  src="https://maps.google.com/maps?q=19.228360041534398,72.85270486307037&z=17&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

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
                  Tap to open in Map App 🗺️
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Details */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© {currentYear} Smile Gallery Dental Clinic &amp; Implant Centre. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-600">Est. 2011 · Borivali West, Mumbai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
