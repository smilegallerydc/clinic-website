"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  treatment: string;
  text: string;
  avatarBg: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Durga Prasad",
    role: "Google Reviewer",
    rating: 5,
    treatment: "Dental Implants",
    text: "I visited Dr. Hetal for my missing teeth; she advised me on multiple dental implants. I underwent the procedure, and the entire process was extremely smooth. The clinic is clean, hygienic, and Dr. Hetal's expertise is outstanding.",
    avatarBg: "bg-teal-100 text-teal-800",
  },
  {
    id: 2,
    name: "Nidhi Shah",
    role: "Google Reviewer",
    rating: 5,
    treatment: "Smile Designing",
    text: "I visited Smile Gallery for my smile design and teeth whitening because I had a weird alignment of teeth which I wanted to correct. The results are amazing, and the entire consultation was very professional.",
    avatarBg: "bg-amber-100 text-amber-800",
  },
  {
    id: 3,
    name: "Manohar Lal",
    role: "Google Reviewer",
    rating: 5,
    treatment: "Full Mouth Rehab (FMR)",
    text: "Smile Gallery Dental Clinic provides professional, gentle, and reliable dental care with modern facilities and a supportive team. They explained every detail and made the treatment completely comfortable.",
    avatarBg: "bg-indigo-100 text-indigo-800",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="font-sans">
      {/* Grid for Larger Viewports */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {testimonialsData.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-[box-shadow,border-color] duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                &quot;{t.text}&quot;
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-slate-200/60 pt-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.avatarBg}`}>
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h5 className="font-display font-semibold text-slate-800 text-sm flex items-center gap-1.5">
                  {t.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-primary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h5>
                <p className="text-slate-400 text-xs flex gap-2">
                  <span>{t.role}</span>
                  <span>•</span>
                  <span className="text-primary/80 font-medium">{t.treatment}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Slider for Mobile/Tablet Viewports */}
      <div className="block lg:hidden relative bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 overflow-hidden min-h-[300px]">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic min-h-[100px]">
            &quot;{testimonialsData[activeIndex].text}&quot;
          </p>

          <div className="flex items-center justify-between border-t border-slate-200/60 pt-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonialsData[activeIndex].avatarBg}`}>
                {testimonialsData[activeIndex].name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h5 className="font-display font-semibold text-slate-800 text-sm flex items-center gap-1.5">
                  {testimonialsData[activeIndex].name}
                </h5>
                <p className="text-slate-400 text-xs">
                  {testimonialsData[activeIndex].treatment}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-white rounded-lg border border-slate-100 hover:bg-slate-100 text-slate-600 transition-colors"
                aria-label="Previous review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-white rounded-lg border border-slate-100 hover:bg-slate-100 text-slate-600 transition-colors"
                aria-label="Next review"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
