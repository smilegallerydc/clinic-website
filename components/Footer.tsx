"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      {/* Dynamic CTA Banner Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-hover p-8 md:p-12 shadow-xl shadow-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-2 leading-tight">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium">
              Schedule your first appointment today. Our friendly team is ready to welcome you to our modern clinic.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white text-primary hover:bg-slate-50 font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-2 rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.8 2.5 6.5C5.8 20 8.5 22 12 22s6.2-2 7.5-3.5c1.5-1.7 2.5-4 2.5-6.5 0-5.5-4.5-10-10-10z" />
                  <path d="M12 6c-2 0-3 1.5-3 3.5s1 3.5 3 3.5 3-1.5 3-3.5S14 6 12 6z" />
                  <path d="M9 16c2 1 4 1 6 0" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Smile<span className="text-primary-muted">Care</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-normal">
              State-of-the-art dental care tailored for your family. We focus on comfort, quality, and modern treatments.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-2">
              {["facebook", "instagram", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary hover:text-white text-slate-400 flex items-center justify-center transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {social === "facebook" && (
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                    )}
                    {social === "instagram" && (
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.01 3.71.054 1.139.052 1.9.24 2.502.475a4.454 4.454 0 011.66 1.08 4.454 4.454 0 011.08 1.66c.236.602.424 1.363.475 2.502.043.927.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.052 1.139-.24 1.9-.475 2.502a4.454 4.454 0 01-1.08 1.66 4.454 4.454 0 01-1.66 1.08c-.602.236-1.363.424-2.502.475-.927.043-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.139-.052-1.9-.24-2.502-.475a4.454 4.454 0 01-1.66-1.08 4.454 4.454 0 01-1.08-1.66c-.236-.602-.424-1.363-.475-2.502A34.524 34.524 0 012 12.315c0-2.43.01-2.784.054-3.71.052-1.139.24-1.9.475-2.502a4.454 4.454 0 011.08-1.66 4.454 4.454 0 011.66-1.08c.602-.236 1.363-.424 2.502-.475.927-.043 1.28-.054 3.71-.054zm1.102 4.757a5.565 5.565 0 100 11.13 5.565 5.565 0 000-11.13zm5.408 1.402a1.238 1.238 0 100 2.477 1.238 1.238 0 000-2.477z"
                        clipRule="evenodd"
                      />
                    )}
                    {social === "twitter" && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    )}
                  </svg>
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
                  Services & Treatments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-muted transition-colors">
                  Contact & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-base">Clinic Hours</h4>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              <li className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-1.5">
                <span>Saturday</span>
                <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-accent font-semibold">Closed</span>
              </li>
            </ul>
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
                <span>123 Bright-Smile Way, Medical District, Chicago, IL 60611</span>
              </p>
              {/* Stylized Interactive Map Placeholder */}
              <div className="w-full h-52 rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950 group">
                <div className="absolute inset-0 bg-slate-950 opacity-20 mix-blend-color pointer-events-none" />
                <iframe
                  title="SmileCare Dental Clinic Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11880.492291371424!2d-87.625902!3d41.898816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34eab842f1f%3A0x6fb878eb32c4e201!2sMagnificent%20Mile%2C%20Chicago%2C%20IL%2060611!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  className="border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 filter invert contrast-110 saturate-75"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Details */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© {currentYear} SmileCare Dental Practice. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
