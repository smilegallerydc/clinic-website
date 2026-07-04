"use client";

import React from "react";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import { motion } from "framer-motion";
import Image from "next/image";
import { HeartPulse, Cpu, BookOpen } from "lucide-react";

export default function About() {
  const timelineMilestones = [
    {
      year: "2011",
      title: "Clinic Foundation",
      description: "Smile Gallery Dental Clinic was established on L.T. Road in Borivali West, Mumbai, under Dr. Hetal Chheda, B.D.S., dedicated to premium, painless family dentistry.",
    },
    {
      year: "2017",
      title: "Advanced Cosmetic & Implant Dentistry",
      description: "Expanded clinical offerings to include modern dental implants, smile designing/aesthetic laminates, and advanced restorative procedures.",
    },
    {
      year: "2023",
      title: "Modern Digital Upgrades",
      description: "Transitioned to full digital diagnostic imaging and advanced painless treatments, ensuring the highest standards of safety, sterilization, and care.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 font-sans overflow-hidden">
      {/* 1. Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto space-y-4 pt-6"
      >
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
          Dedicated to Excellence in Modern Dentistry
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We combine advanced digital diagnostic equipment with a calming, empathetic environment to make your dental care journey pleasant and effective.
        </p>
      </motion.section>

      {/* 2. Philosophy & Core Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            num: "01",
            title: "Patient Comfort First",
            desc: "From noise-canceling headphones to calming sedation options, we design every touchpoint of your appointment to ease anxiety.",
            icon: <HeartPulse className="w-5 h-5 text-teal-600" />,
            color: "bg-teal-50 border-teal-100/60 shadow-teal-50/20",
            hoverAccent: "from-teal-500 to-teal-400"
          },
          {
            num: "02",
            title: "State-of-the-Art Tech",
            desc: "By avoiding messy mold putties and outdated diagnostics, our 3D scanning and computer-aided scans ensure quick, accurate therapies.",
            icon: <Cpu className="w-5 h-5 text-amber-600" />,
            color: "bg-amber-50 border-amber-100/60 shadow-amber-50/20",
            hoverAccent: "from-amber-500 to-amber-400"
          },
          {
            num: "03",
            title: "Long-term Education",
            desc: "We don't just treat symptoms. We explain biological causes and customize custom preventive routines so you keep your natural teeth healthy.",
            icon: <BookOpen className="w-5 h-5 text-indigo-600" />,
            color: "bg-indigo-50 border-indigo-100/60 shadow-indigo-50/20",
            hoverAccent: "from-indigo-500 to-indigo-400"
          }
        ].map((pillar, index) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white rounded-[2rem] p-8 border border-slate-100/90 shadow-xl shadow-slate-100/60 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group flex flex-col justify-between min-h-[270px] relative overflow-hidden cursor-default"
          >
            {/* Watermark Large Number */}
            <span className="absolute -bottom-10 -right-4 font-display font-black text-[9rem] leading-none text-slate-50 group-hover:text-slate-100/60 transition-colors duration-500 select-none pointer-events-none -z-10">
              {pillar.num}
            </span>

            <div className="space-y-6 relative z-10">
              <div className={`w-12 h-12 rounded-2xl ${pillar.color} border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm`}>
                {pillar.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-xl text-slate-900 group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                  {pillar.desc}
                </p>
              </div>
            </div>
            {/* Animated bottom indicator bar */}
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.hoverAccent} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
          </motion.div>
        ))}
      </section>

      {/* 3. Meet the Founder & Our Team */}
      <section className="space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-primary font-bold text-xs uppercase tracking-widest text-gradient">
            Our Founder & Clinical Team
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-900">
            Meet Our Chief Dentist & Team
          </h2>
          <p className="text-slate-500 text-sm">
            Providing exceptional dental care backed by advanced international credentials and a supportive clinical staff.
          </p>
        </div>

        <div className="space-y-10">
          {/* Doctor Profiles Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dr. Hetal Chheda Profile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10 group"
            >
              {/* Soft Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-bl-full -z-10 opacity-70" />
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="w-28 h-36 shrink-0 relative rounded-2xl overflow-hidden shadow-md border border-slate-100 transition-transform duration-500 group-hover:scale-[1.03]">
                    <Image
                      src="/doctor-about.jpg"
                      alt="Dr. Hetal Chheda"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary font-semibold text-xs mb-1">
                      Chief Dental Surgeon
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                      Dr. Hetal Chheda
                    </h3>
                    <p className="text-sm font-display font-semibold text-slate-600">
                      BDS, PGDAOI Implant (France)
                    </p>
                    <p className="text-xs text-slate-400 font-sans italic font-medium">
                      Founder, Implant Specialist &amp; Cosmetic Dentist
                    </p>
                    <div className="pt-2 flex justify-center sm:justify-start">
                      <a
                        href="https://www.linkedin.com/in/dr-hetal-chheda-shah-aaba2a20?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077B5] hover:text-[#0077B5]/85 hover:underline"
                        aria-label="Dr. Hetal Chheda LinkedIn Profile"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-1.764 1.75-1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                    Dr. Hetal Chheda is the founder and chief surgeon at Smile Gallery. With extensive experience in cosmetic smile redesign, <strong>dental implants</strong>, and <strong>painless laser procedures</strong>, she is dedicated to combining medical artistry with patient-first care. She specializes in <strong>full mouth implant treatment</strong>, laminates, and root canal therapies.
                  </p>
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 italic text-slate-700 text-xs font-sans relative">
                    <span className="absolute top-1 left-2 font-display text-4xl text-primary/10 select-none">"</span>
                    <p className="relative z-10 pl-4 pr-2 font-medium">
                      &quot;My mission is to help you achieve your dream smile through advanced, painless, and highly personalized dental care. Everyone deserves the perfect smile.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h6 className="text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Core Clinical Focus
                </h6>
                <div className="flex flex-wrap gap-2">
                  {["Dental Implants", "Smile Designing", "Painless Laser Dentistry", "Root Canal Therapy", "Full Mouth Rehabilitation"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg border border-slate-100 bg-white text-slate-600 text-xs font-semibold font-sans hover:border-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Dr. Tanvee Profile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col justify-between relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/10 group"
            >
              {/* Soft Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 opacity-70" />
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="w-28 h-36 shrink-0 relative rounded-2xl overflow-hidden shadow-md border border-slate-100 transition-transform duration-500 group-hover:scale-[1.03]">
                    <Image
                      src="/dr-tanvee.jpg"
                      alt="Dr. Tanvee"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-accent font-semibold text-xs mb-1">
                      Senior Dental Surgeon
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                      Dr. Tanvee
                    </h3>
                    <p className="text-sm font-display font-semibold text-slate-600">
                      BDS — Over 20 Years Experience
                    </p>
                    <p className="text-xs text-slate-400 font-sans italic font-medium">
                      Pediatric to Geriatric Care Specialist
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                    Dr. Tanvee brings over two decades of clinical expertise to Smile Gallery Dental Clinic, where patient comfort meets advanced dentistry. She cares for patients across all age groups — from <strong>pediatric to geriatric</strong> — with calm, reassuring precision. Patients value her clear communication and her ability to understand your goals so you feel confident from consultation to final result.
                  </p>
                  <div className="bg-amber-50/60 rounded-2xl p-4 border border-amber-100/85 italic text-slate-700 text-xs font-sans relative">
                    <span className="absolute top-1 left-2 font-display text-4xl text-accent/10 select-none">"</span>
                    <p className="relative z-10 pl-4 pr-2 font-medium">
                      &quot;Great dentistry starts with listening. I take time to understand your goals so you feel confident every step of the way.&quot;
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h6 className="text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                  Core Clinical Focus
                </h6>
                <div className="flex flex-wrap gap-2">
                  {["Pediatric Dentistry", "Geriatric Care", "Preventive Dentistry", "Root Canal", "Painless Dentistry"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg border border-amber-100 bg-amber-50/50 text-slate-600 text-xs font-semibold font-sans hover:border-accent/20 hover:text-accent transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Team Photo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-[2rem] p-6 sm:p-8 border border-slate-100 shadow-xl relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 relative aspect-[4096/1836] rounded-2xl overflow-hidden shadow-md border border-slate-100 w-full transition-transform duration-500 group-hover:scale-[1.01]">
                <Image
                  src="/team-group-v2.jpg"
                  alt="Smile Gallery Dental Clinic Team – Borivali West"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  priority
                />
              </div>
              <div className="lg:col-span-2 space-y-4">
                <h4 className="font-display font-extrabold text-2xl text-slate-900 group-hover:text-primary transition-colors duration-300">
                  Our Supportive Clinical Team
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium">
                  Behind every successful treatment at Smile Gallery is our unified team of dental assistants, specialists, and patient-care staff. Together we maintain the highest standards of sterilization, diagnostic support, and patient comfort — from your first visit to your final smile.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Sterilization Protocols", "Painless Care", "Digital Diagnostics", "In-House OPG", "Patient First"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-teal-50 text-primary text-xs font-semibold border border-teal-100 font-sans hover:bg-primary-light transition-colors duration-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Journey Timeline Section */}
      <section className="bg-slate-50 rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-primary font-bold text-xs uppercase tracking-widest text-gradient">
            Our Journey
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900">
            Our Journey &amp; Growth
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed font-sans font-medium">
            Since 2011, we have been committed to advancing dental diagnostics, cosmetic artistry, and modern comfort for Borivali families.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row gap-10 md:gap-6 md:pt-12">
          {/* Timeline connecting line */}
          {/* Vertical line on mobile */}
          <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-slate-200 md:hidden" />
          {/* Horizontal line on desktop */}
          <div className="hidden md:block absolute top-[12px] left-0 right-0 h-0.5 bg-slate-200" />

          {timelineMilestones.map((milestone, index) => (
            <div key={milestone.year} className="relative pl-10 md:pl-0 flex-1 flex flex-col">
              {/* Timeline pulsing bullet dot */}
              <div className="absolute left-[10px] md:left-[50%] md:-translate-x-[50%] top-2 md:-top-[22px] z-20">
                <div className="w-5 h-5 rounded-full bg-white border-4 border-primary shadow-md flex items-center justify-center relative">
                  <span className="absolute -inset-2.5 rounded-full bg-primary/15 animate-ping -z-10" />
                </div>
              </div>

              {/* Milestone Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex-1 flex flex-col gap-3 relative z-10 w-full"
              >
                <span className="inline-block self-start px-3.5 py-1 rounded-full bg-primary-light text-primary font-display font-extrabold text-xs shadow-sm border border-primary/5">
                  {milestone.year}
                </span>
                <h4 className="font-display font-extrabold text-slate-800 text-base leading-tight">
                  {milestone.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans font-medium mt-1">
                  {milestone.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Visual Tour Gallery */}
      <section className="pt-4 pb-12">
        <Gallery />
      </section>
    </div>
  );
}
