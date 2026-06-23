"use client";

import InteractiveTeam from "@/components/InteractiveTeam";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20 font-sans">
      {/* 1. Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
          Dedicated to Excellence in Modern Dentistry
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We combine advanced digital diagnostic equipment with a calming, empathetic environment to make your dental care journey pleasant and effective.
        </p>
      </section>

      {/* 2. Philosophy & Core Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-primary flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="font-display font-semibold text-lg text-slate-800">
            Patient Comfort First
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            From noise-canceling headphones to calming sedation options, we design every touchpoint of your appointment to ease anxiety.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-accent flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="font-display font-semibold text-lg text-slate-800">
            State-of-the-Art Tech
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            By avoiding messy mold putties and outdated diagnostics, our 3D scanning and computer-aided crowns ensure quick, accurate therapies.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="font-display font-semibold text-lg text-slate-800">
            Long-term Education
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            We don&apos;t just treat symptoms. We explain biological causes and customize custom preventive routines so you keep your natural teeth healthy.
          </p>
        </div>
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

          {milestonesMap(timelineMilestones)}
        </div>
      </section>
    </div>
  );
}

function milestonesMap(items: { year: string; title: string; description: string }[]) {
  return items.map((milestone) => (
    <div
      key={milestone.year}
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
    </div>
  ));
}
