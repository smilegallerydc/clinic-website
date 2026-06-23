"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12c0 2.5 1 4.8 2.5 6.5C5.8 20 8.5 22 12 22s6.2-2 7.5-3.5c1.5-1.7 2.5-4 2.5-6.5 0-5.5-4.5-10-10-10z" />
                <path d="M12 6c-2 0-3 1.5-3 3.5s1 3.5 3 3.5 3-1.5 3-3.5S14 6 12 6z" />
                <path d="M9 16c2 1 4 1 6 0" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Smile<span className="text-primary">Care</span>
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
                  className={`font-sans font-medium text-sm transition-colors duration-200 hover:text-primary ${
                    isActive ? "text-primary font-semibold" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Burger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-sm transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
              id="header-cta"
            >
              Book Appointment
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isMobileMenuOpen ? (
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
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-sm bg-white p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-bold text-lg text-slate-900">
              Smile<span className="text-primary">Care</span>
            </span>
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
              <a href="tel:+15551234567" className="block text-sm font-semibold text-slate-700 mt-1">
                +1 (555) 123-4567
              </a>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-primary text-white text-center font-sans font-semibold text-sm shadow-md hover:bg-primary-hover transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
