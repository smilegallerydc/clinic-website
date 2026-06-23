"use client";

import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-20 pb-12">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden font-sans pt-12">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="SmileCare Modern Dental Reception Area"
            fill
            priority
            className="object-cover object-center opacity-45 transform scale-105 animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl text-white space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary-muted/30 text-primary-muted text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-muted animate-pulse" />
                Accepting New Patients
              </span>
              <div className="inline-flex items-center gap-1.5 bg-slate-800/40 border border-slate-700/30 rounded-full px-3.5 py-1.5 text-xs text-slate-300 font-medium">
                <span className="text-amber-400 font-bold">★ 4.9</span>
                <span>(1,200+ Patient Reviews)</span>
              </div>
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Premium Dental Care Designed for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-muted to-teal-200">
                Perfect Smile
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              Combining cutting-edge digital diagnostics with a warm, caring environment to protect and enhance your family&apos;s oral health in Chicago, IL.
            </p>

            {/* Key Benefits List */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium pt-2">
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary-muted"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>State-of-the-Art Tech</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-primary-muted"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Anxiety-Free Sedation</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-0.5"
              >
                Schedule Appointment
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-700 hover:text-white text-slate-200 font-semibold text-sm border border-slate-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100">
              <Image
                src="/doctor.jpg"
                alt="Dr. Sarah Evans Consulting Patient"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-primary-light -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-teal-100/50 -z-10 blur-xl" />
          </div>

          {/* Right Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              About SmileCare Practice
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
              A Warm Welcome to a Different Kind of Dental Experience
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We believe dental care should be stress-free, pain-free, and personalized to your unique health goals. Under the guidance of <strong>Dr. Sarah Evans, D.D.S.</strong>, our practice provides a patient-first experience utilizing diagnostic modern tech like digital intraoral scans and gentle laser therapies.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              From cosmetic makeovers to pediatric checkups, our focus remains on long-term preventive wellness and restoring functionality in a luxurious, relaxing atmosphere.
            </p>
            
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-1.5 font-semibold text-sm text-primary hover:text-primary-hover border-b-2 border-primary hover:border-primary-hover pb-1 transition-all"
              >
                <span>Meet the Doctors & Team</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-4 h-4 mt-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Highlights */}
      <section className="bg-slate-50 py-16 border-y border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">
              Core Treatments
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-900">
              Our Comprehensive Services
            </h2>
            <p className="text-slate-500 text-sm">
              We offer high-fidelity dental treatments tailored to your oral health and aesthetic goals.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Dentistry */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-[360px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800">
                  General Dentistry
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Keep your natural teeth healthy for life. We offer comprehensive cleanings, composite fillings, dental root canals, and ceramic crowns.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover pt-4"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>

            {/* Orthodontics */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-[360px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800">
                  Orthodontics
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Straighten your teeth comfortably and discreetly. We are a certified Invisalign Provider, offering customized aligners and comfortable braces for teens & adults.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover pt-4"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>

            {/* Cosmetic Care */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between h-[360px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 21l8.904-4.452L21 21l-1.096-5.096a6.001 6.001 0 00-10.091 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v13.5a3 3 0 106 0V3M12 9h6"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-slate-800">
                  Cosmetic Dentistry
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Design the smile of your dreams. Achieve radiant, balanced results with handcrafted dental porcelain veneers, laser teeth whitening, and complete smile restorations.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover pt-4"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold text-sm transition-colors duration-300"
            >
              View All Dental Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans py-4 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Patient Stories
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-900">
            Over a Thousand Happy Smiles
          </h2>
          <p className="text-slate-500 text-sm">
            Read stories from individuals and families who experienced our caring, state-of-the-art approach.
          </p>
        </div>

        <Testimonials />
      </section>
    </div>
  );
}
