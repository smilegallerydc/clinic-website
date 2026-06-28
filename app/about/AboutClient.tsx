"use client";

import React from "react";
import Gallery from "@/components/Gallery";
import BeforeAfter from "@/components/BeforeAfter";
import { motion } from "framer-motion";
import Image from "next/image";

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
            color: "bg-teal-100 text-primary"
          },
          {
            num: "02",
            title: "State-of-the-Art Tech",
            desc: "By avoiding messy mold putties and outdated diagnostics, our 3D scanning and computer-aided crowns ensure quick, accurate therapies.",
            color: "bg-amber-100 text-accent"
          },
          {
            num: "03",
            title: "Long-term Education",
            desc: "We don't just treat symptoms. We explain biological causes and customize custom preventive routines so you keep your natural teeth healthy.",
            color: "bg-indigo-100 text-indigo-800"
          }
        ].map((pillar, index) => (
          <motion.div
            key={pillar.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-4"
          >
            <div className={`w-10 h-10 rounded-xl ${pillar.color} flex items-center justify-center font-bold`}>
              {pillar.num}
            </div>
            <h3 className="font-display font-semibold text-lg text-slate-800">
              {pillar.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {pillar.desc}
            </p>
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Dr. Hetal Chheda Profile (Left Column) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Soft Decorative Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-bl-full -z-10 opacity-70" />
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-32 h-32 shrink-0 relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <Image
                    src="/doctor.jpg"
                    alt="Dr. Hetal Chheda"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary font-semibold text-xs mb-1">
                    Chief Dental Surgeon
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                    Dr. Hetal Chheda
                  </h3>
                  <p className="text-sm font-display font-semibold text-slate-600">
                    BDS, PGDAOI Implant (France)
                  </p>
                  <p className="text-xs text-slate-400 font-sans italic">
                    Founder, Cosmetic & Implant Specialist
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed font-sans">
                  Dr. Hetal Chheda is the founder and chief surgeon at Smile Gallery. With extensive experience in cosmetic smile redesign, dental implants, and laser therapies, she is dedicated to combining medical artistry with painless, patient-first care. She specializes in full mouth rehabilitation, laminates, and root canal therapies.
                </p>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 italic text-slate-700 text-xs font-sans relative">
                  <span className="absolute top-1 left-2 font-display text-4xl text-primary/10 select-none">“</span>
                  <p className="relative z-10 pl-4 pr-2">
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
                {["Smile Designing", "Dental Implants", "Laser Dentistry", "Root Canal Therapy"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg border border-slate-100 bg-white text-slate-600 text-xs font-medium font-sans"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Group Photo Section (Right Column) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4 h-full flex flex-col">
              <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden shadow-md border border-slate-100">
                <Image
                  src="/team-group.jpg"
                  alt="Smile Gallery Dental Clinic Team"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="space-y-2 mt-4">
                <h4 className="font-display font-semibold text-lg text-slate-900">
                  Our Supportive Clinical Team
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Behind every successful treatment at Smile Gallery is our unified team of dental assistants, specialists, and customer relations staff. Together, we maintain the highest standards of sterilization, diagnostic support, and patient comfort to ensure a hassle-free visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey Timeline Section */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 space-y-10">
        <h2 className="font-display font-bold text-2xl text-slate-900 text-center">
          Our Journey &amp; Growth
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-0">
          {timelineMilestones.map((milestone, index) => (
            <React.Fragment key={milestone.year}>
              {/* Milestone Card */}
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.15, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 border border-slate-100 relative z-10 flex-1 flex flex-col gap-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 w-full"
              >
                <span className="inline-block self-start px-3 py-1 rounded-full bg-primary text-white font-display font-bold text-sm">
                  {milestone.year}
                </span>
                <h4 className="font-display font-semibold text-slate-800 text-base leading-tight">
                  {milestone.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-sans">
                  {milestone.description}
                </p>
              </motion.div>

              {/* Arrow connector — shown between cards, not after the last one */}
              {index < timelineMilestones.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.15 + 0.2, ease: "easeOut" }}
                  className="flex-shrink-0 flex items-center justify-center z-20"
                >
                  {/* Right arrow on desktop */}
                  <div className="hidden md:flex w-10 h-10 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary drop-shadow-sm">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Down arrow on mobile */}
                  <div className="flex md:hidden w-10 h-10 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-primary drop-shadow-sm">
                      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
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
