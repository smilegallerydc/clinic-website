"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact & Booking", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="shrink-0"
              >
                <Image
                  src="/logo.svg"
                  alt="Smile Gallery Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-300"
                />
              </motion.div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                Smile<span className="text-primary">Gallery</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-sans font-medium text-sm transition-colors duration-200 py-1 hover:text-primary ${
                      isActive ? "text-primary font-semibold" : "text-slate-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Burger */}
            <div className="flex items-center gap-4">
              <motion.a
                href="tel:+919819300553"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-sm transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 gap-2"
                id="header-cta"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call to Book
              </motion.a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center w-10 h-10"
                aria-label="Toggle Menu"
                id="mobile-menu-btn"
              >
                <div className="relative w-5 h-4 flex flex-col justify-between items-center">
                  <span className={`h-[2px] w-5 bg-slate-600 rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? "rotate-45 translate-x-[3px] -translate-y-[1px]" : ""}`} />
                  <span className={`h-[2px] w-5 bg-slate-600 rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                  <span className={`h-[2px] w-5 bg-slate-600 rounded-full transition-all duration-300 origin-left ${isMobileMenuOpen ? "-rotate-45 translate-x-[3px] translate-y-[1px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu (rendered outside header using AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-80 max-w-sm bg-white p-6 shadow-2xl z-50 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group">
                  <Image
                    src="/logo.svg"
                    alt="Smile Gallery Logo"
                    width={32}
                    height={32}
                    className="shrink-0"
                  />
                  <span className="font-display font-bold text-lg text-slate-900">
                    Smile<span className="text-primary">Gallery</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-5 flex-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-sans font-medium text-base py-2 border-b border-slate-50 transition-colors ${
                        isActive ? "text-primary font-semibold" : "text-slate-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <div className="text-xs text-slate-400 text-center font-sans">
                  Need immediate help? Call us at
                  <a href="tel:+919819300553" className="block text-sm font-semibold text-slate-700 mt-1 hover:text-primary transition-colors">
                    +91 98193 00553
                  </a>
                  <a href="tel:+919326785438" className="block text-sm font-semibold text-slate-700 hover:text-primary transition-colors">
                    +91 93267 85438
                  </a>
                </div>
                <a
                  href="tel:+919819300553"
                  className="w-full py-3 rounded-xl bg-primary text-white text-center font-sans font-semibold text-sm shadow-md hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call to Book
                </a>
                <a
                  href="https://wa.me/message/MIPWG2AVM2GWC1"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#25D366] text-white text-center font-sans font-semibold text-sm shadow-md hover:bg-[#1da850] transition-colors flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.46 3.37 1.25 4.79L2 22l5.39-1.21A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.48c-.2.56-.99 1.04-1.62 1.18-.43.09-.99.17-2.88-.62-2.42-1.01-3.97-3.46-4.09-3.62-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97.21-.23.46-.29.62-.29.16 0 .31 0 .45.01.14.01.33-.05.52.4.2.46.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.23.62.97 1.33 1.57.91.81 1.68 1.06 1.92 1.18.23.12.37.1.51-.06.14-.16.59-.69.75-.93.16-.23.31-.19.52-.12.21.08 1.35.64 1.58.75.23.12.39.17.45.27.06.1.06.57-.14 1.12z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
