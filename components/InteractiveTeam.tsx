"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Doctor {
  id: number;
  name: string;
  role: string;
  education: string;
  bio: string;
  quote: string;
  image: string;
  skills: string[];
}

const teamData: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Evans, D.D.S.",
    role: "Lead Cosmetic & General Dentist",
    education: "Northwestern University Dental School (Class of '10)",
    bio: "Dr. Evans has over 15 years of dental practice experience, specializing in cosmetic smile makeovers, porcelain veneers, and reconstructive dentistry. She is dedicated to combining clinical excellence with a gentle, patient-first approach to make every dental visit relaxing and positive.",
    quote: "My goal is to give you a smile that not only looks stunning but also improves your overall wellness and confidence.",
    image: "/doctor.jpg",
    skills: ["Smile Makeovers", "Porcelain Veneers", "Teeth Whitening", "Crowns & Bridges"],
  },
  {
    id: 2,
    name: "Dr. Marcus Vance, Orthodontist",
    role: "Specialist Orthodontist & Invisalign Expert",
    education: "University of Illinois College of Dentistry (Class of '13)",
    bio: "Dr. Vance is a board-certified orthodontist specializing in advanced digital orthodontics. He has helped thousands of teens and adults achieve straight, healthy smiles using state-of-the-art clear aligner systems and comfortable traditional brackets.",
    quote: "Orthodontics is about more than straight teeth; it's about structural health, function, and building a foundation for a lifetime.",
    image: "/doctor.jpg", // Reusing or styling beautifully
    skills: ["Invisalign Clear Aligners", "Early Intervention", "Adult Orthodontics", "Surgical Orthodontics"],
  },
];

export default function InteractiveTeam() {
  const [selectedDoctorId, setSelectedDoctorId] = useState<number>(1);

  const activeDoc = teamData.find((d) => d.id === selectedDoctorId) || teamData[0];

  return (
    <div className="font-sans grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Doctor List Toggles (Left Column) */}
      <div className="lg:col-span-5 flex flex-col gap-4">
        <h4 className="font-display font-bold text-slate-900 text-lg uppercase tracking-wider mb-2">
          Select Practitioner
        </h4>
        <div className="flex flex-col gap-3">
          {teamData.map((doc) => {
            const isSelected = doc.id === selectedDoctorId;
            return (
              <button
                key={doc.id}
                onClick={() => setSelectedDoctorId(doc.id)}
                className={`w-full p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                    : "bg-slate-50 border-slate-100 hover:bg-slate-100/60 text-slate-800"
                }`}
              >
                <div>
                  <h5 className="font-display font-semibold text-base">{doc.name}</h5>
                  <p className={`text-xs ${isSelected ? "text-primary-light" : "text-slate-500"}`}>
                    {doc.role}
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? "bg-white/10 text-white" : "bg-white text-slate-400 border border-slate-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Bio Pane (Right Column) */}
      <motion.div
        key={selectedDoctorId}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
      >
        {/* Soft Decorative Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light rounded-bl-full -z-10 opacity-70" />

        {/* Doctor Image */}
        <div className="w-full md:w-48 shrink-0 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-slate-100">
          <Image
            src={activeDoc.image}
            alt={activeDoc.name}
            fill
            className={`object-cover object-center transition-transform duration-500 hover:scale-105 ${
              activeDoc.id === 2 ? "hue-rotate-15 saturate-125" : "" // simple visual difference
            }`}
          />
        </div>

        {/* Doctor Content */}
        <div className="flex-1 space-y-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary-light text-primary font-semibold text-xs mb-2">
              {activeDoc.role}
            </span>
            <h4 className="font-display font-bold text-2xl text-slate-900 leading-tight">
              {activeDoc.name}
            </h4>
            <p className="text-xs text-slate-500 font-sans italic mt-1">
              Education: {activeDoc.education}
            </p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed font-sans">
            {activeDoc.bio}
          </p>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 italic text-slate-700 text-xs font-sans relative">
            <span className="absolute top-1 left-2 font-display text-4xl text-primary/10 select-none">“</span>
            <p className="relative z-10 pl-4 pr-2">
              &quot;{activeDoc.quote}&quot;
            </p>
          </div>

          <div>
            <h6 className="text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
              Core Expertise
            </h6>
            <div className="flex flex-wrap gap-2">
              {activeDoc.skills.map((skill) => (
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
      </motion.div>
    </div>
  );
}
