"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TransformationCase {
  id: number;
  title: string;
  category: string;
  src: string;
  desc: string;
}

const cases: TransformationCase[] = [
  {
    id: 1,
    title: "Smile Makeover with Implants",
    category: "Dental Implants",
    src: "/practo/practo-15.png",
    desc: "Complete restoration of missing teeth, restoring function and aesthetics.",
  },
  {
    id: 2,
    title: "Full Mouth Implant Rehabilitation",
    category: "Full Mouth Implants",
    src: "/practo/practo-16.png",
    desc: "Advanced implant placement to restore a complete, natural-looking set of teeth.",
  },
  {
    id: 3,
    title: "Aesthetic Smile Makeover",
    category: "Cosmetic Dentistry",
    src: "/practo/practo-14.png",
    desc: "Alignment and shape corrections for a balanced, bright, natural smile.",
  },
  {
    id: 4,
    title: "Full Mouth Denture Restoration",
    category: "Prosthodontics",
    src: "/practo/practo-13.png",
    desc: "Custom fitted dentures designed to restore facial volume and natural eating function.",
  },
];

export default function BeforeAfter() {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setActiveCaseIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveCaseIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (activeCaseIndex !== null) {
      setActiveCaseIndex((prev) => (prev !== null ? (prev + 1) % cases.length : 0));
    }
  }, [activeCaseIndex]);

  const handlePrev = useCallback(() => {
    if (activeCaseIndex !== null) {
      setActiveCaseIndex((prev) =>
        prev !== null ? (prev - 1 + cases.length) % cases.length : 0
      );
    }
  }, [activeCaseIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeCaseIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCaseIndex]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeCaseIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCaseIndex, closeLightbox, handleNext, handlePrev]);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-primary font-bold text-xs uppercase tracking-widest block">
            Smile Transformations
          </span>
          <h2 className="font-display font-bold text-3xl text-slate-900">
            Before & After Case Studies
          </h2>
          <p className="text-slate-500 text-sm">
            Inspect real cases treated by Dr. Hetal Chheda at Smile Gallery Clinic. Click on any image to view details.
          </p>
        </div>

        {/* Grid of cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-zoom-in flex flex-col"
            >
              {/* Image box */}
              <div className="relative w-full aspect-square sm:aspect-[1.1/1] overflow-hidden bg-slate-950">
                <Image
                  src={c.src}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-750 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-slate-800 text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Zoom Transformation View
                  </span>
                </div>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold text-primary shadow-sm tracking-wide">
                  {c.category}
                </span>
              </div>
              {/* Text box */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeCaseIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-40 cursor-pointer"
              aria-label="Previous Image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Modal Stage Container */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[85vh] aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={cases[activeCaseIndex].src}
                alt={cases[activeCaseIndex].title}
                fill
                priority
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent text-white text-center">
                <span className="px-2.5 py-0.5 bg-primary rounded-full text-[9px] font-bold tracking-wider inline-block mb-1.5">
                  {cases[activeCaseIndex].category}
                </span>
                <p className="text-base font-bold tracking-wide">
                  {cases[activeCaseIndex].title}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {cases[activeCaseIndex].desc}
                </p>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-40 cursor-pointer"
              aria-label="Next Image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
