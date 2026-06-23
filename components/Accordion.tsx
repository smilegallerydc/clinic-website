"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 bg-slate-50/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-base text-slate-800 group-hover:text-primary transition-colors">
          {title}
        </span>
        <span
          className={`bg-white shadow-sm p-1.5 rounded-lg border border-slate-100 text-slate-500 group-hover:text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] border-t border-slate-100/70" : "max-h-0"
        }`}
      >
        <div className="p-6 text-sm text-slate-600 leading-relaxed bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
