"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  aspect: string;
  type: "landscape" | "portrait";
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/gallery/gallery-1.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Dr. Hetal Chheda next to the in-house digital OPG panoramic X-Ray scanner" },
  { id: 2, src: "/gallery/gallery-2.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Modern dental operatory chair with medical diagnostic equipment" },
  { id: 3, src: "/gallery/gallery-3.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Smile Gallery reception lobby with orthodontic treatment displays" },
  { id: 4, src: "/gallery/gallery-4.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Reception area showing case transformations and sterilization room background" },
  { id: 5, src: "/gallery/gallery-5.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Clinic workstation showing a digital panoramic teeth X-ray" },
  { id: 6, src: "/gallery/gallery-6.jpg", aspect: "aspect-[9/16]", type: "portrait", alt: "Dr. Hetal Chheda at her consultation desk with clinical assistants" },
  { id: 7, src: "/gallery/gallery-7.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Dr. Hetal Chheda reviewing diagnostic scans at her desk with assistants" },
  { id: 8, src: "/gallery/gallery-8.jpg", aspect: "aspect-[4/3]", type: "landscape", alt: "Dr. Hetal Chheda next to qualifications board listing BDS and implant certifications" },
  { id: 9, src: "/gallery/gallery-9.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Dr. Hetal Chheda outside the entrance with her clinic team" },
  { id: 10, src: "/gallery/gallery-10.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Street-view entrance signs and direction banners for the Borivali West clinic" },
  { id: 11, src: "/gallery/gallery-11.jpg", aspect: "aspect-[16/9]", type: "landscape", alt: "Reception desk showing PhonePe QR code payment stand and jaw models" },
  { id: 12, src: "/gallery/gallery-12.jpg", aspect: "aspect-[9/16]", type: "portrait", alt: "Dr. Hetal Chheda in clinical coat standing by the reception counter" },
  { id: 13, src: "/gallery/gallery-13.jpg", aspect: "aspect-[9/16]", type: "portrait", alt: "Dr. Hetal Chheda sitting at her desk in front of branding (hands clasped)" },
  { id: 14, src: "/gallery/gallery-14.jpg", aspect: "aspect-[21/9]", type: "landscape", alt: "Dr. Hetal Chheda at her desk next to the computer showing the clinic founding date (2011)" },
  { id: 15, src: "/gallery/gallery-15.jpg", aspect: "aspect-[21/9]", type: "landscape", alt: "Team group photo of Dr. Hetal Chheda, associate dentist, and assistants by the testimonial wall" },
];

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setActiveImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0));
    }
  }, [activeImageIndex]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) =>
        prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
      );
    }
  }, [activeImageIndex]);

  // Handle body scroll locking
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, closeLightbox, handleNext, handlePrev]);

  // Split images into 3 columns dynamically to balance height and prevent layout gaps
  const col1 = galleryImages.filter((_, idx) => idx % 3 === 0);
  const col2 = galleryImages.filter((_, idx) => idx % 3 === 1);
  const col3 = galleryImages.filter((_, idx) => idx % 3 === 2);

  const GalleryCard = ({ img, index }: { img: GalleryImage; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      onClick={() => openLightbox(index)}
      className="rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-zoom-in group bg-slate-50 flex flex-col justify-start relative"
    >
      <div className={`relative w-full ${img.aspect} overflow-hidden`}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-750 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-slate-800 text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Zoom View
          </span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-10">
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-primary font-bold text-xs uppercase tracking-widest block">
          Visual Tour
        </span>
        <h2 className="font-display font-bold text-3xl text-slate-900">
          Inside Smile Gallery Clinic
        </h2>
        <p className="text-slate-500 text-sm">
          Explore actual photos of our state-of-the-art diagnostic equipment, sterile clinical rooms, and patient consultation spaces in Borivali West.
        </p>
      </div>

      {/* Balanced Masonry Grid using flex columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {col1.map((img, idx) => (
            <GalleryCard key={img.id} img={img} index={idx * 3} />
          ))}
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {col2.map((img, idx) => (
            <GalleryCard key={img.id} img={img} index={idx * 3 + 1} />
          ))}
        </div>
        {/* Column 3 (will merge with col2 on sm, or stack columns appropriately) */}
        <div className="flex flex-col gap-6 sm:hidden lg:flex">
          {col3.map((img, idx) => (
            <GalleryCard key={img.id} img={img} index={idx * 3 + 2} />
          ))}
        </div>
        
        {/* Column 3 for sm screen viewports (rendered as sibling grid layout items to avoid empty tablet column spaces) */}
        <div className="hidden sm:flex lg:hidden flex-col gap-6">
          {col3.map((img, idx) => (
            <GalleryCard key={img.id} img={img} index={idx * 3 + 2} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Prev Controller */}
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

            {/* Lightbox Image Stage */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full max-h-[80vh] aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].alt}
                fill
                priority
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="text-xs text-slate-300 text-center font-medium">
                  Image {activeImageIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Right Next Controller */}
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
    </div>
  );
}
