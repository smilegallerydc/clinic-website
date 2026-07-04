"use client";

import Accordion from "@/components/Accordion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, AlignVerticalDistributeCenter, Smile, Activity, ScanSearch } from "lucide-react";

interface TreatmentItem {
  id: string;
  name: string;
  category: string;
  duration: string;
  expectText: string;
  benefits: string[];
}

const servicesData: TreatmentItem[] = [
  {
    id: "fmr",
    name: "Full Mouth Rehabilitation (FMR)",
    category: "Restorative",
    duration: "Multiple Sessions",
    expectText: "A comprehensive reconstruction of all teeth in both the upper and lower jaws. Tailored for patients with extensive tooth wear, decay, or trauma to restore complete chewing function, bite alignment, and smile aesthetics.",
    benefits: [
      "Restores full chewing functionality and bite force",
      "Improves overall facial support and smile aesthetics",
      "Long-lasting, custom-crafted durable restorations",
      "Resolves chronic joint discomfort from incorrect alignment",
    ],
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    category: "Restorative",
    duration: "3 - 6 Months",
    expectText: "The gold standard for replacing missing teeth. A biocompatible titanium post is surgically placed into the jawbone, fusing over a few months, topped with a custom-crafted high-strength ceramic crown that matches your natural teeth.",
    benefits: [
      "Looks, feels, and functions exactly like natural teeth",
      "Prevents jawbone shrinkage and facial structure changes",
      "Doesn't require altering or grinding down adjacent teeth",
      "Highly durable solution that can last a lifetime with proper care",
    ],
  },
  {
    id: "root-canals",
    name: "Root Canal Therapy (RCT)",
    category: "Restorative",
    duration: "1 - 2 Sessions",
    expectText: "A pain-relieving procedure designed to save infected or severely decayed teeth. We use advanced rotary endodontics to carefully clean the inner root canal system, remove bacteria and pulp, and seal it to prevent reinfection.",
    benefits: [
      "Relieves active toothaches and throbbing pain",
      "Prevents the spread of infection to surrounding tissues",
      "Saves your natural tooth from extraction",
      "High success rate with modern pain-free techniques",
    ],
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic",
    duration: "45 - 60 Mins",
    expectText: "Professional medical-grade bleaching treatments to safely lift deep stains and brighten your smile. We offer both single-visit in-office power whitening and convenient custom-takehome trays for long-lasting results.",
    benefits: [
      "Instantly brightens your smile by several shades",
      "Safe, controlled application that minimizes sensitivity",
      "Effective against coffee, tea, and aging stains",
      "Quick cosmetic boost for special events and confidence",
    ],
  },
  {
    id: "braces",
    name: "Braces & Orthodontics",
    category: "Orthodontics",
    duration: "12 - 24 Months",
    expectText: "Correction of misaligned teeth and bite issues using comfortable modern metal or ceramic bracket systems. Our treatment plans ensure teeth are guided gradually into their optimal positions for health and beauty.",
    benefits: [
      "Corrects crowding, spacing, and severe bite misalignments",
      "Improves oral hygiene by making teeth easier to clean",
      "Reduces risk of uneven tooth wear and chipping",
      "Enhances long-term facial balance and aesthetics",
    ],
  },
  {
    id: "invisalign",
    name: "Invisalign® Clear Aligners",
    category: "Orthodontics",
    duration: "6 - 18 Months",
    expectText: "Clear, removable medical-grade plastic aligners customized using digital 3D scans. Virtually invisible, they slowly move your teeth to their perfect positions, allowing you to eat, brush, and floss normally.",
    benefits: [
      "Completely discreet and virtually invisible",
      "Removable for optimal brushing, flossing, and eating",
      "Comfortable, smooth material without sharp wires",
      "Requires fewer physical clinic adjustment visits",
    ],
  },
  {
    id: "cosmetic-procedures",
    name: "Cosmetic Procedures & Fillings",
    category: "Cosmetic",
    duration: "30 - 45 Mins",
    expectText: "Aesthetic smile enhancements using tooth-colored composite bonding, porcelain veneers, and mercury-free white fillings. We repair chipped, decayed, or misshapen teeth to restore a natural-looking appearance.",
    benefits: [
      "Restores damaged teeth using natural tooth-colored materials",
      "Seamless blending with your existing enamel",
      "Minimally invasive procedures preserving tooth structure",
      "Strengthens teeth and prevents further decay",
    ],
  },
  {
    id: "tmj-pain",
    name: "TMJ Pain Management",
    category: "General",
    duration: "Varies",
    expectText: "Diagnosis and therapy for Temporomandibular Joint (TMJ) disorders, which cause jaw clicking, headaches, and facial muscle pain. We provide customized bite guards, splints, and muscle relaxation guidance.",
    benefits: [
      "Relieves chronic jaw pain, tension, and headaches",
      "Prevents grinding (bruxism) and wear on tooth surfaces",
      "Restores normal jaw movement and joint tracking",
      "Improves sleep quality and decreases facial muscle fatigue",
    ],
  },
  {
    id: "fixed-teeth",
    name: "Fixed Teeth in 7 Days",
    category: "Restorative",
    duration: "7 Days",
    expectText: "An accelerated dental implant technique designed for full-arch restoration. Using modern loading protocols, patients receive fully functional, fixed permanent teeth securely attached to implants in just 7 days.",
    benefits: [
      "Extremely fast transition to fully functional teeth",
      "Eliminates the wait time of traditional implant bridges",
      "Provides immediate confidence and chewing ability",
      "Fewer surgical visits and customized aesthetic arches",
    ],
  },
  {
    id: "complete-denture",
    name: "Complete Dentures",
    category: "Restorative",
    duration: "3 - 4 Sessions",
    expectText: "Custom-crafted, high-comfort removable prosthetic teeth designed for patients who have lost all teeth in one or both arches. We focus on achieving a natural appearance, stable fit, and correct bite.",
    benefits: [
      "Restores speaking ability and proper chewing function",
      "Supports facial muscles to restore a youthful appearance",
      "Affordable and non-invasive tooth replacement option",
      "Easy to clean and custom shaded to look natural",
    ],
  },
  {
    id: "gum-surgery",
    name: "Gum Surgery",
    category: "General",
    duration: "45 - 60 Mins",
    expectText: "Therapeutic and cosmetic periodontal surgeries to treat advanced gum disease (periodontitis) or fix uneven gum lines. Procedures include deep scaling, pocket reduction, and gum grafting for gum health.",
    benefits: [
      "Stops the progression of advanced periodontal disease",
      "Protects underlying bone and prevents tooth loss",
      "Reduces gum pockets to make cleaning easier",
      "Improves aesthetics by correcting 'gummy' smiles",
    ],
  },
  {
    id: "in-house-opg",
    name: "In-House OPG & Full Mouth X-Ray",
    category: "General",
    duration: "10 Mins",
    expectText: "State-of-the-art Orthopantomogram (OPG) digital imaging right inside our clinic. Provides a panoramic, high-resolution view of your entire mouth, teeth, upper/lower jawbones, and sinuses in seconds.",
    benefits: [
      "Fast, immediate diagnostics without sending you outside",
      "Extremely low radiation exposure compared to film X-rays",
      "Essential for planning implants, wisdom teeth, and RCTs",
      "Allows comprehensive visualization of hidden bone issues",
    ],
  },
  {
    id: "dental-scanner",
    name: "Intraoral Dental Scanner",
    category: "General",
    duration: "10 - 15 Mins",
    expectText: "High-precision digital impressions utilizing our advanced intraoral scanner. Say goodbye to uncomfortable, gooey physical mold putties; this scanner captures thousands of points per second to create a perfect 3D digital model.",
    benefits: [
      "No gagging or discomfort from traditional putty molds",
      "Extremely accurate 3D representations for crowns/aligners",
      "Faster turnaround times for orthodontic and prosthetic work",
      "Immediate interactive 3D visualization of your bite",
    ],
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 font-sans overflow-hidden">
      {/* 1. Page Header */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto space-y-4 pt-6"
      >
        <span className="text-primary font-bold text-xs uppercase tracking-widest block">
          Smile Gallery Treatments
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
          Comprehensive Clinical Excellence
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We categorize our treatments to help you find answers easily. Explore our services below and expand any item to review its clinical workflow.
        </p>
      </motion.section>

      {/* 2. Category Highlights Icons Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { 
            title: "Dental Implants", 
            subtitle: "Implantology Unit", 
            desc: "Specialized implant care",
            color: "bg-primary-light text-primary border-primary/10",
            icon: <Stethoscope className="w-5 h-5" />
          },
          { 
            title: "Invisalign® Aligners", 
            subtitle: "Orthodontic Unit", 
            desc: "3D digital scanning",
            color: "bg-blue-50 text-[#0F6FBA] border-blue-100/60",
            icon: <AlignVerticalDistributeCenter className="w-5 h-5" />
          },
          { 
            title: "Cosmetic Dentistry", 
            subtitle: "Cosmetic Unit", 
            desc: "Veneers & smile design",
            color: "bg-accent-light text-accent border-accent-light/60",
            icon: <Smile className="w-5 h-5" />
          },
          { 
            title: "General Dentistry", 
            subtitle: "Painless Clinic Unit", 
            desc: "Laser RCT & checkups",
            color: "bg-teal-50 text-teal-700 border-teal-100/60",
            icon: <ScanSearch className="w-5 h-5" />
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-white border border-slate-100 rounded-3xl p-6 text-center shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col items-center justify-between min-h-[220px]"
          >
            <div className="space-y-4 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-xl ${item.color} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {item.icon}
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-100 text-[9px] font-bold uppercase tracking-wider mb-2">
                  {item.subtitle}
                </span>
                <h3 className="font-display font-extrabold text-slate-900 text-base group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              </div>
            </div>
            <p className="text-slate-400 text-xs mt-2 font-medium font-sans">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 3. Detailed Services Accordions */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-display font-bold text-2xl text-slate-900 text-center mb-8">
          Detailed Treatment Workflows
        </h2>

        <div className="space-y-4">
          {servicesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            >
              <Accordion title={`${item.name} (${item.category})`}>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-xs uppercase text-slate-400">Duration:</span>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold font-sans">
                          {item.duration}
                        </span>
                      </div>
                      {item.id === "invisalign" && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
                          <Image
                            src="/invisalign-logo.png"
                            alt="Invisalign logo"
                            width={64}
                            height={20}
                            className="object-contain h-5 w-auto"
                          />
                          <span className="text-[10px] font-bold text-[#0F6FBA] border-l border-blue-200 pl-2 whitespace-nowrap">Certified Provider</span>
                        </div>
                      )}
                    </div>
                    <p className="text-slate-600 leading-relaxed font-sans">{item.expectText}</p>
                  </div>

                  <div>
                    <h5 className="font-bold text-xs uppercase text-slate-700 mb-2">Expected Benefits</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Action Banner */}
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-primary-light border border-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
        <h2 className="font-display font-bold text-2xl text-slate-800 max-w-md mx-auto">
          Need a Custom Quote or Diagnosis?
        </h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Dental health varies per individual. Schedule an initial clean or diagnostic scan and our expert dental staff will detail a custom payment and care package.
        </p>
        <div className="pt-2">
          <a
            href="tel:+919819300553"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-colors duration-300 shadow-md cursor-pointer"
          >
            Call for Consultation
          </a>
        </div>
      </motion.section>
    </div>
  );
}
