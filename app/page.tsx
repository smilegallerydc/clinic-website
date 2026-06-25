"use client";

import Link from "next/link";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import { motion } from "framer-motion";

export default function Home() {
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  } as const;

  const heroItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <div className="space-y-20 pb-12">
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[calc(100vh-140px)] flex items-center bg-white overflow-hidden font-sans pt-2 md:pt-6 pb-6">
        {/* Modern grid background and soft gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,118,110,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,118,110,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-light/50 blur-3xl -z-20 animate-[pulse_10s_infinite_alternate]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-teal-50/70 blur-3xl -z-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <motion.div
              variants={heroContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-6 text-slate-800"
            >


              {/* Heading */}
              <motion.h1 variants={heroItem} className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-slate-900">
                Elevating the <br />
                <span className="text-gradient">Dental Experience</span> <br />
                for Your Family.
              </motion.h1>

              {/* Paragraph */}
              <motion.p variants={heroItem} className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                Welcome to Smile Gallery Dental Clinic, Borivali West. Led by Dr. Hetal Chheda, we combine expert artistry, painless laser procedures, and implants to give you the perfect smile.
              </motion.p>

              {/* Mini Trust reviews widget with avatars */}
              <motion.div variants={heroItem} className="flex items-center gap-4 py-1">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-50 text-primary flex items-center justify-center font-bold text-xs">SJ</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-50 text-accent flex items-center justify-center font-bold text-xs">MC</div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">ER</div>
                </div>
                <div>
                  <a 
                    href="https://g.page/r/CTDlFtXtThK6EBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col align-start"
                  >
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-500 text-sm">★</span>
                      ))}
                      <span className="text-slate-800 text-sm font-bold ml-1.5 group-hover:text-primary transition-colors">4.9/5</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5 group-hover:underline decoration-primary">Leave us a review on Google Business</p>
                  </a>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={heroItem} className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919819300553"
                  className="relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-white font-semibold text-sm transition-all duration-300 hover:bg-primary-hover shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 btn-hover-effect overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Call for Appointment
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://wa.me/message/MIPWG2AVM2GWC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] hover:bg-green-50 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.46 3.37 1.25 4.79L2 22l5.39-1.21A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.48c-.2.56-.99 1.04-1.62 1.18-.43.09-.99.17-2.88-.62-2.42-1.01-3.97-3.46-4.09-3.62-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97.21-.23.46-.29.62-.29.16 0 .31 0 .45.01.14.01.33-.05.52.4.2.46.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.23.62.97 1.33 1.57.91.81 1.68 1.06 1.92 1.18.23.12.37.1.51-.06.14-.16.59-.69.75-.93.16-.23.31-.19.52-.12.21.08 1.35.64 1.58.75.23.12.39.17.45.27.06.1.06.57-.14 1.12z"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={heroItem}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 max-w-md text-left"
              >
                <div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-slate-900">15k+</h4>
                  <p className="text-slate-500 text-xs mt-1">Happy Smiles</p>
                </div>
                <div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-slate-900">15+</h4>
                  <p className="text-slate-500 text-xs mt-1">Years Practice</p>
                </div>
                <div>
                  <h4 className="font-display font-black text-2xl sm:text-3xl text-slate-900">99.8%</h4>
                  <p className="text-slate-500 text-xs mt-1">Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Layered Editorial Collage */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] aspect-[4/5] sm:aspect-square md:aspect-[4/5] flex items-center justify-center">
                {/* Background accent soft shape */}
                <div className="absolute top-[10%] left-[5%] w-[85%] h-[80%] rounded-[3rem] bg-gradient-to-tr from-primary-light to-teal-50 -z-10 rotate-3" />

                {/* Main Image: Clinic Lobby (hero.jpg) */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -2 }}
                  animate={{ opacity: 1, y: 0, rotate: -2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                  className="absolute top-0 left-2 w-[65%] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 group bg-slate-100"
                >
                  <Image
                    src="/hero.jpg"
                    alt="Smile Gallery Dental Clinic Reception"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                {/* Secondary Overlapping Image: Doctor & Patient (doctor.jpg) */}
                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20, rotate: 2 }}
                  animate={{ opacity: 1, y: 0, x: 0, rotate: 2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                  className="absolute bottom-6 right-2 w-[58%] aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl border-8 border-white z-20 group bg-slate-100"
                >
                  <Image
                    src="/doctor.jpg"
                    alt="Dr. Hetal Chheda Consulting Patient"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                {/* Floating Decorative Reviews Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                  className="absolute top-[20%] right-[-10px] z-30 bg-white/90 backdrop-blur shadow-xl border border-slate-100 p-4 rounded-2xl flex items-center gap-3 max-w-[190px] pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-lg">
                    ★
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-800">Top Rated</span>
                    <span className="block text-[10px] text-slate-400">Borivali West, Mumbai</span>
                  </div>
                </motion.div>

                {/* Floating Technology Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="absolute bottom-[20%] left-[-20px] z-30 bg-white/90 backdrop-blur shadow-xl border border-slate-100 p-4 rounded-2xl flex items-center gap-3 max-w-[210px] pointer-events-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-primary flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-5 h-5 animate-pulse"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39 0.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-slate-800">Advanced Tech</span>
                    <span className="block text-[10px] text-slate-400">3D Diagnostic Scanners</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 font-sans overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-100">
              <Image
                src="/doctor.jpg"
                alt="Dr. Hetal Chheda Consulting Patient"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Design accents */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-primary-light -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-teal-100/50 -z-10 blur-xl" />
          </motion.div>

          {/* Right Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-primary font-bold text-xs uppercase tracking-widest block">
              About Smile Gallery
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
              Where Dentistry Meets Artistry – Dr. Hetal Chheda
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We believe dental care should be stress-free, pain-free, and personalized to your unique health goals. Under the guidance of <strong>Dr. Hetal Chheda (Cosmetic Dentist & Implantologist)</strong>, our practice provides a patient-first experience utilizing diagnostic modern tech like digital X-rays and gentle laser therapies.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              From cosmetic veneers and laminates, orthodontic aligners, and dental implants to pain-free gum therapy, our goal is to help you achieve your dream smile in a warm, relaxing atmosphere.
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
          </motion.div>
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
          </div>          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* General Dentistry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-md hover:border-primary/25 transition-[box-shadow,border-color] duration-300 group flex flex-col justify-between h-[360px]"
            >
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
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39 0.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
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
            </motion.div>

            {/* Orthodontics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-md hover:border-primary/25 transition-[box-shadow,border-color] duration-300 group flex flex-col justify-between h-[360px]"
            >
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
            </motion.div>

            {/* Cosmetic Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/50 shadow-sm hover:shadow-md hover:border-primary/25 transition-[box-shadow,border-color] duration-300 group flex flex-col justify-between h-[360px]"
            >
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
            </motion.div>
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

      {/* Before & After Cases */}
      <BeforeAfter />

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
