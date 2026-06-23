"use client";

import Link from "next/link";
import Accordion from "@/components/Accordion";

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
    id: "general-checkup",
    name: "Comprehensive Checkup & Dental Clean",
    category: "General",
    duration: "45 - 60 Mins",
    expectText: "A thorough examination of your teeth, gums, and oral tissues. We take low-radiation digital X-rays to screen for hidden issues, perform gentle plaque and tartar scaling, polish your teeth to remove stains, and provide a personalized oral care roadmap.",
    benefits: [
      "Prevents gum disease and tooth decay",
      "Removes stubborn tartar plaque that brushing misses",
      "Early screening for oral cancers and structural wear",
      "Freshens breath and removes surface stains",
    ],
  },
  {
    id: "invisalign",
    name: "Invisalign® Clear Aligners",
    category: "Orthodontics",
    duration: "Varies (6-18 months)",
    expectText: "We start with a 3D digital scan of your mouth using our modern iTero scanner—no messy putty molds required. We compile a virtual simulation of your teeth alignment journey from start to finish. You receive custom-made, clear, removable medical-grade aligners to wear 22 hours a day, changing trays every 1-2 weeks.",
    benefits: [
      "Virtually invisible treatment option",
      "Removable for easy eating, brushing, and flossing",
      "Smoother, more comfortable plastic trays compared to metal brackets",
      "Fewer office visits needed for tightening adjustments",
    ],
  },
  {
    id: "porcelain-veneers",
    name: "Handcrafted Porcelain Veneers",
    category: "Cosmetic",
    duration: "2 Sessions",
    expectText: "First, we consult on your aesthetic goals and create a digital mock-up preview of your new smile. We conservatively prepare the tooth surfaces, take a digital scan, and fit comfortable temporary veneers. Once our master ceramist handcrafts your final high-strength porcelain shells, we permanently bond them to your teeth.",
    benefits: [
      "Corrects severe discoloration, spacing gaps, or chips",
      "Stronger and more stain-resistant than natural enamel",
      "Tailored shape and color for a completely natural look",
      "Immediate transformation in just two appointments",
    ],
  },
  {
    id: "dental-implants",
    name: "Single & Multi-Tooth Dental Implants",
    category: "Restorative",
    duration: "3 - 6 Months",
    expectText: "We utilize high-resolution 3D CBCT scans to map out safe bone structure. In a comfortable procedure (under local numbing or sedation), we place a biocompatible titanium post. Once the bone fuses with the post over a few months, we place a custom-crafted ceramic crown that perfectly matches your surrounding teeth.",
    benefits: [
      "Looks, feels, and functions exactly like a natural tooth",
      "Prevents bone loss and structural shifting in the jaw",
      "High success rate and lasts a lifetime with proper care",
      "No adjustments or grinding of adjacent teeth required",
    ],
  },
  {
    id: "wisdom-teeth",
    name: "Gentle Root Canal & Wisdom Teeth Care",
    category: "Restorative",
    duration: "60 - 90 Mins",
    expectText: "Designed to relieve active toothache and save teeth from extraction. We use advanced rotary diagnostics to clean out infected tooth pulp and seal the canal. We offer nitrous oxide (laughing gas) and oral sedation to ensure you are comfortable, relaxed, and pain-free throughout the entire procedure.",
    benefits: [
      "Instantly relieves severe tooth pain caused by inflammation",
      "Prevents the spread of infection to other teeth or bones",
      "Allows you to keep your natural tooth instead of extracting it",
      "High-fidelity local anesthetics ensure a pain-free process",
    ],
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 font-sans">
      {/* 1. Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block">
          SmileCare Treatments
        </span>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
          Comprehensive Clinical Excellence
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          We categorize our treatments to help you find answers easily. Explore our services below and expand any item to review its clinical workflow.
        </p>
      </section>

      {/* 2. Category Highlights Icons Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["General", "Orthodontics", "Cosmetic", "Restorative"].map((category) => (
          <div
            key={category}
            className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 shadow-sm"
          >
            <span className="inline-block px-3 py-1 bg-white rounded-full text-slate-500 border border-slate-100 text-xs font-semibold uppercase tracking-wider mb-3">
              Treatment Unit
            </span>
            <h3 className="font-display font-bold text-slate-800 text-base">{category}</h3>
            <p className="text-slate-400 text-xs mt-1">Specialized clinical rooms</p>
          </div>
        ))}
      </section>

      {/* 3. Detailed Services Accordions */}
      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-display font-bold text-2xl text-slate-900 text-center mb-8">
          Detailed Treatment Workflows
        </h2>

        <div className="space-y-4">
          {servicesData.map((item) => (
            <Accordion key={item.id} title={`${item.name} (${item.category})`}>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-xs uppercase text-slate-400">Duration:</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-semibold font-sans">
                      {item.duration}
                    </span>
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
          ))}
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="bg-primary-light border border-primary/10 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
        <h2 className="font-display font-bold text-2xl text-slate-800 max-w-md mx-auto">
          Need a Custom Quote or Diagnosis?
        </h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Dental health varies per individual. Schedule an initial clean or diagnostic scan and our expert dental staff will detail a custom payment and care package.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm transition-colors duration-300 shadow-md"
          >
            Start Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
