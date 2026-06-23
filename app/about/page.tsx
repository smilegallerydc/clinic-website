"use client";

import InteractiveTeam from "@/components/InteractiveTeam";
import { motion } from "framer-motion";

export default function About() {
  const timelineMilestones = [
    {
      year: "2010",
      title: "Clinic Foundation",
      description: "SmileCare was opened in the Chicago Medical District, focusing on general family dental health and comforting patient-first environments.",
    },
    {
      year: "2016",
      title: "Advanced Cosmetic Expansion",
      description: "Dr. Sarah Evans expanded the clinic's focus to cosmetic smile restoration, cosmetic porcelain work, and laser dental therapies.",
    },
    {
      year: "2022",
      title: "100% Digital Upgrade",
      description: "Completed full modernization. Swapped physical teeth impressions with intraoral 3D scans and added high-fidelity sedation care.",
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

      {/* 3. Interactive Doctors / Team Display */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">
            Expert Personnel
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-900">
            Meet Our Dental Board
          </h2>
          <p className="text-slate-500 text-sm">
            Click on a practitioner below to inspect their academic credentials, values, and core clinical focus.
          </p>
        </div>

        <InteractiveTeam />
      </section>

      {/* 4. Journey Timeline Section */}
      <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 space-y-10">
        <h2 className="font-display font-bold text-2xl text-slate-900 text-center">
          Our Journey & Growth
        </h2>

        <div className="relative max-w-3xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-4">
          {/* Timeline Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block" />

          {timelineMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 border border-slate-100 relative z-10 flex-1 flex flex-col gap-3 shadow-sm hover:shadow transition-shadow"
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
          ))}
        </div>
      </section>
    </div>
  );
}
