'use client';

import Link from 'next/link';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';
import BeforeAfter from '@/components/BeforeAfter';
import { motion } from 'framer-motion';
import { ScanSearch, Scan, HeartPulse, Sparkles, Phone, MapPin, Stethoscope, Smile, ShieldCheck, BookOpen, Activity } from 'lucide-react';

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
            transition: { duration: 0.45, ease: 'easeOut' as const },
        },
    };

    return (
        <div className="space-y-12 sm:space-y-20 pb-12">
            {/* 1. Hero Section */}
            <section className="relative flex items-center bg-white overflow-hidden font-sans pt-8 pb-10 sm:pt-6 sm:pb-12 lg:min-h-[calc(100vh-80px)] lg:pt-0 lg:pb-0">
                {/* Modern grid background and soft gradients */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,118,110,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,118,110,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary-light/50 blur-3xl -z-20 animate-[pulse_10s_infinite_alternate]" />
                <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-teal-50/70 blur-3xl -z-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                        {/* Left Column: Content */}
                        <motion.div
                            variants={heroContainer}
                            initial="hidden"
                            animate="visible"
                            className="lg:col-span-6 space-y-4 lg:space-y-3 text-slate-800"
                        >
                            {/* Heading */}
                            <motion.div variants={heroItem}>
                                <h1 className="font-display font-extrabold text-[1.75rem] sm:text-4xl lg:text-[2.75rem] leading-[1.15] sm:leading-[1.1] tracking-tight text-slate-900">
                                    <span className="text-gradient">Smile Gallery</span>{' '}
                                    Dental Clinic &amp; Implant Center.
                                </h1>
                            </motion.div>

                            {/* Paragraph */}
                            <motion.p
                                variants={heroItem}
                                className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-normal"
                            >
                                Led by{' '}
                                <strong className="text-slate-800 font-semibold">Dr. Hetal Chheda</strong>,
                                {' '}we use <strong className="text-primary font-semibold">expert artistry</strong>, <strong className="text-primary font-semibold">painless laser procedures</strong>, and <strong className="text-primary font-semibold">advanced implants</strong> to design healthy, natural looking, perfect smiles.
                            </motion.p>

                            {/* USP Badges */}
                            <motion.div
                                variants={heroItem}
                                className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-2 pt-1"
                            >
                                {[
                                    { label: "In-House OPG",      icon: <ScanSearch className="w-3.5 h-3.5 shrink-0" />, color: "pill-shimmer-teal text-teal-800 border-teal-100" },
                                    { label: "Dental Scanner",    icon: <Scan className="w-3.5 h-3.5 shrink-0" />,       color: "pill-shimmer-blue text-blue-800 border-blue-100" },
                                    { label: "Implant Specialist",icon: <Activity className="w-3.5 h-3.5 shrink-0" />,   color: "pill-shimmer-pink text-primary border-pink-100" },
                                    { label: "Painless Dentistry",icon: <Sparkles className="w-3.5 h-3.5 shrink-0" />,  color: "pill-shimmer-purple text-accent border-purple-100" },
                                ].map((badge, idx) => (
                                    <motion.span
                                        key={badge.label}
                                        initial={{ opacity: 0, scale: 0.9, y: 5 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: 0.15 + idx * 0.08, ease: "easeOut" }}
                                        whileHover={{ scale: 1.04, y: -2 }}
                                        className={`inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full border text-xs font-semibold font-sans cursor-default transition-all duration-200 ${badge.color}`}
                                    >
                                        {badge.icon}
                                        {badge.label}
                                    </motion.span>
                                ))}
                            </motion.div>


                            {/* Book Your Visit */}
                            <motion.div
                                variants={heroItem}
                                className="inline-flex flex-row flex-wrap items-center gap-x-5 gap-y-2 w-fit"
                            >
                                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest mr-1">Book Your Visit:</span>
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                                    <a
                                        href="https://maps.google.com/?q=19.228360041534398,72.85270486307037"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-slate-700 text-xs sm:text-sm font-semibold hover:text-primary transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-primary shrink-0">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                        <span>Borivali West</span>
                                    </a>
                                    <a
                                        href="tel:+919819300553"
                                        className="flex items-center gap-1.5 text-slate-700 text-xs sm:text-sm font-semibold hover:text-primary transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-primary shrink-0">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                        </svg>
                                        <span>+91 98193 00553</span>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Mini Trust reviews widget with avatars */}
                            <motion.div
                                variants={heroItem}
                                className="flex items-center gap-4"
                            >
                                <div className="flex -space-x-3">
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-teal-50 text-primary flex items-center justify-center font-bold text-[10px]">
                                        SJ
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-amber-50 text-accent flex items-center justify-center font-bold text-[10px]">
                                        MC
                                    </div>
                                    <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-[10px]">
                                        ER
                                    </div>
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
                                                <span
                                                    key={i}
                                                    className="text-amber-500 text-xs"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                            <span className="text-slate-800 text-xs font-bold ml-1.5 group-hover:text-primary transition-colors">
                                                4.9/5 (180+ Google Reviews)
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                variants={heroItem}
                                className="flex flex-wrap items-center gap-4"
                            >
                                <a
                                    href="tel:+919819300553"
                                    className="relative inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary text-white font-semibold text-sm transition-all duration-300 hover:bg-primary-hover shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 btn-hover-effect overflow-hidden group cursor-pointer"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Call for Appointment
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className="w-4 h-4 group-hover:scale-110 transition-transform"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.127-4.105-6.93-6.93l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <a
                                    href="https://wa.me/message/MIPWG2AVM2GWC1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] hover:bg-green-50 hover:-translate-y-0.5 inline-flex items-center gap-2"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.74.46 3.37 1.25 4.79L2 22l5.39-1.21A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.93 13.48c-.2.56-.99 1.04-1.62 1.18-.43.09-.99.17-2.88-.62-2.42-1.01-3.97-3.46-4.09-3.62-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97.21-.23.46-.29.62-.29.16 0 .31 0 .45.01.14.01.33-.05.52.4.2.46.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.23.62.97 1.33 1.57.91.81 1.68 1.06 1.92 1.18.23.12.37.1.51-.06.14-.16.59-.69.75-.93.16-.23.31-.19.52-.12.21.08 1.35.64 1.58.75.23.12.39.17.45.27.06.1.06.57-.14 1.12z" />
                                    </svg>
                                    <span>WhatsApp</span>
                                </a>
                            </motion.div>

                            {/* Book via Social Media Channels */}
                            <motion.div
                                variants={heroItem}
                                className="flex flex-row flex-wrap items-center gap-3 pt-1"
                            >
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
                                    Book Via:
                                </span>
                                <div className="flex flex-wrap items-center gap-2">
                                    <a
                                        href="https://instagram.com/smilegallerydentalcl?utm_medium=copy_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50 hover:bg-[#E1306C]/5 hover:border-[#E1306C]/30 text-slate-600 hover:text-[#E1306C] text-[11px] font-semibold transition-all duration-300 shadow-sm"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/1ETCRfJFUe/?mibextid=wwXIfr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-100 bg-slate-50 hover:bg-[#1877F2]/5 hover:border-[#1877F2]/30 text-slate-600 hover:text-[#1877F2] text-[11px] font-semibold transition-all duration-300 shadow-sm"
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                        <span>Facebook</span>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                variants={heroItem}
                                className="grid grid-cols-3 gap-3 sm:gap-6 pt-3 border-t border-slate-100 max-w-md text-left"
                            >
                                <div>
                                    <h4 className="font-display font-black text-xl sm:text-3xl text-slate-900">
                                        15k+
                                    </h4>
                                    <p className="text-slate-500 text-[10px] sm:text-xs mt-1">
                                        Happy Smiles
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-display font-black text-xl sm:text-3xl text-slate-900">
                                        15+
                                    </h4>
                                    <p className="text-slate-500 text-[10px] sm:text-xs mt-1">
                                        Years Practice
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-display font-black text-xl sm:text-3xl text-slate-900">
                                        100%
                                    </h4>
                                    <p className="text-slate-500 text-[10px] sm:text-xs mt-1">
                                        Satisfaction
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Layered Editorial Collage — hidden on mobile to keep hero clean */}
                        <div className="hidden sm:flex lg:col-span-6 relative justify-center lg:justify-end">
                            <div className="relative w-full max-w-[420px] lg:max-w-[440px] xl:max-w-[480px] aspect-[4/5] flex items-center justify-center">
                                {/* Background accent soft shape */}
                                <div className="absolute top-[10%] left-[5%] w-[85%] h-[80%] rounded-[3rem] bg-gradient-to-tr from-primary-light to-teal-50 -z-10 rotate-3" />

                                {/* Main Image: Clinic Lobby (hero.jpg) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30, rotate: -2 }}
                                    animate={{ opacity: 1, y: 0, rotate: -2 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: 'easeOut',
                                        delay: 0.25,
                                    }}
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

                                {/* Secondary Overlapping Image: Clinic Team Photo */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                        x: 20,
                                        rotate: 2,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        x: 0,
                                        rotate: 2,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        ease: 'easeOut',
                                        delay: 0.4,
                                    }}
                                    className="absolute bottom-6 right-2 w-[62%] aspect-[4096/1836] rounded-[1.5rem] overflow-hidden shadow-2xl border-8 border-white z-20 group bg-slate-100"
                                >
                                    <Image
                                        src="/team-group-v2.jpg"
                                        alt="Smile Gallery Dental Clinic Team and staff members"
                                        fill
                                        priority
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
                                        <span className="block font-bold text-sm text-slate-800">
                                            Top Rated
                                        </span>
                                        <span className="block text-[10px] text-slate-400">
                                            Borivali West, Mumbai
                                        </span>
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
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39 0.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-sm text-slate-800">
                                            Advanced Tech
                                        </span>
                                        <span className="block text-[10px] text-slate-400">
                                            3D Diagnostic Scanners
                                        </span>
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
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
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
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.55,
                            ease: 'easeOut',
                            delay: 0.15,
                        }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <span className="text-primary font-bold text-xs uppercase tracking-widest block">
                            About Smile Gallery
                        </span>
                        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
                            Where Dentistry Meets Artistry – Dr. Hetal Chheda
                        </h2>
                        <p className="text-slate-600 text-base leading-relaxed">
                            We believe dental care should be stress-free,
                            pain-free, and personalized to your unique health
                            goals. Under the guidance of{' '}
                            <strong>
                                Dr. Hetal Chheda (Cosmetic Dentist &
                                Implantologist)
                            </strong>
                            , our practice provides a patient-first experience
                            utilizing diagnostic modern tech like digital X-rays
                            and gentle laser therapies.
                        </p>
                        <p className="text-slate-600 text-base leading-relaxed">
                            From cosmetic veneers and laminates, orthodontic
                            aligners, and dental implants to pain-free gum
                            therapy, our goal is to help you achieve your dream
                            smile in a warm, relaxing atmosphere.
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
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Core Services Highlights */}
            <section className="bg-slate-50 py-10 sm:py-16 border-y border-slate-100 font-sans">
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
                            We offer high-fidelity dental treatments tailored to
                            your oral health and aesthetic goals.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {/* Dental Implants & FMR */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: 0.05,
                                ease: 'easeOut',
                            }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group flex flex-col justify-between min-h-[400px] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Stethoscope className="w-5 h-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Implants
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-primary transition-colors">
                                        Dental Implants &amp; FMR
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        The absolute gold standard for replacing missing teeth under the expert care of international PGDAOI credentialed specialist, Dr. Hetal Chheda.
                                    </p>
                                </div>
                                <ul className="space-y-1.5 pt-2 border-t border-slate-50">
                                    {[
                                        "Single-Stage Implants",
                                        "Fixed Teeth in 7 Days",
                                        "Full Mouth Rehab (FMR)"
                                    ].map((feat) => (
                                        <li key={feat} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover pt-4 border-t border-slate-50 mt-4"
                            >
                                <span>Explore Treatment</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        </motion.div>

                        {/* Invisalign® Clear Aligners */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: 0.15,
                                ease: 'easeOut',
                            }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-[#0F6FBA]/5 hover:border-[#0F6FBA]/20 transition-all duration-300 group flex flex-col justify-between min-h-[400px] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2.5 h-full bg-[#0F6FBA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-slate-100 p-1.5 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <Image
                                            src="/invisalign-logo.png"
                                            alt="Invisalign logo brand"
                                            width={32}
                                            height={32}
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-[9px] font-bold text-[#0F6FBA] bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Orthodontics
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-[#0F6FBA] transition-colors">
                                        Invisalign® Clear Aligners
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Straighten your teeth comfortably and discreetly. We are a certified provider offering customized, virtually invisible medical-grade aligners using advanced 3D scanning.
                                    </p>
                                </div>
                                <ul className="space-y-1.5 pt-2 border-t border-slate-50">
                                    {[
                                        "Virtually Invisible Aligners",
                                        "Removable for Dining & Cleaning",
                                        "Custom 3D Digital Impressions"
                                    ].map((feat) => (
                                        <li key={feat} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0F6FBA]" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F6FBA] hover:text-[#0F6FBA]/80 pt-4 border-t border-slate-50 mt-4"
                            >
                                <span>Explore Treatment</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        </motion.div>

                        {/* In-House OPG & Scanner */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: 0.25,
                                ease: 'easeOut',
                            }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-emerald-600/5 hover:border-emerald-600/20 transition-all duration-300 group flex flex-col justify-between min-h-[400px] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2.5 h-full bg-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <ScanSearch className="w-5 h-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Diagnostics
                                    </span>
                                </div>
                                {/* Real scanner photo */}
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 -mx-0">
                                    <Image
                                        src="/dental-scanner.jpg"
                                        alt="Shining 3D intraoral dental scanner in use at Smile Gallery"
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 1024px) 100vw, 300px"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-emerald-600 transition-colors">
                                        In-House OPG &amp; Scanner
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        State-of-the-art digital dental imaging on-premise. Get high-precision 3D digital impressions and instant panoramic x-rays without lab waiting times.
                                    </p>
                                </div>
                                <ul className="space-y-1.5 pt-2 border-t border-slate-50">
                                    {[
                                        "Instant Panoramic X-Ray (OPG)",
                                        "No messy mold putties",
                                        "Highly accurate diagnostic planning"
                                    ].map((feat) => (
                                        <li key={feat} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-600/80 pt-4 border-t border-slate-50 mt-4"
                            >
                                <span>Explore Diagnostics</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </Link>
                        </motion.div>

                        {/* Cosmetic & General Care */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: 0.35,
                                ease: 'easeOut',
                            }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/20 transition-all duration-300 group flex flex-col justify-between min-h-[400px] relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2.5 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Smile className="w-5 h-5" />
                                    </div>
                                    <span className="text-[9px] font-bold text-accent bg-accent-light px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Aesthetics
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-accent transition-colors">
                                        Cosmetic &amp; General Care
                                    </h3>
                                    <p className="text-slate-500 text-xs leading-relaxed">
                                        Design the smile of your dreams and preserve your natural tooth structures with painless dental procedures, veneers, and fillings.
                                    </p>
                                </div>
                                <ul className="space-y-1.5 pt-2 border-t border-slate-50">
                                    {[
                                        "Custom Porcelain Veneers",
                                        "Laser Teeth Whitening",
                                        "Painless Laser Root Canals"
                                    ].map((feat) => (
                                        <li key={feat} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-accent group-hover:text-accent/80 pt-4 border-t border-slate-50 mt-4"
                            >
                                <span>Explore Treatment</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
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
                    <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-slate-700 font-semibold">
                        <span className="text-amber-500 flex gap-0.5">
                            ★★★★★
                        </span>
                        <span className="text-slate-800">
                            4.9/5 Rating (180+ Google Reviews)
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm">
                        Read stories from individuals and families who
                        experienced our caring, state-of-the-art approach.
                    </p>
                </div>

                <Testimonials />
            </section>
        </div>
    );
}
