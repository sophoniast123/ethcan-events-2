"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SponsorshipPackages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const packages = [
    {
      id: "premium",
      title: "Premium Sponsor",
      image: "/sponsor/pkg1.jpg",
    },
    {
      id: "standard",
      title: "Standard Sponsor",
      image: "/sponsor/pg2.jpg",
    },
  ];

  const openImage = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && selectedImage) {
      closeImage();
    }
  };

  // Listen for Escape key globally
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }

  return (
    <section
      id="sponsorship-packages"
      className="relative overflow-hidden bg-cream py-24"
    >
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="container-x relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Investment Opportunities</span>
          <h2 className="section-title">
            Sponsorship <span className="text-emerald2-600">Packages</span>
          </h2>
          <p className="mt-5 text-lg text-ink/75 max-w-2xl mx-auto">
            ETHCAN Events offers tailored sponsorship packages for organizations looking to align
            with Africa's premier tourism celebration. Partner with us to showcase your brand to
            300,000+ attendees, 15,000+ delegates, and global media across 60+ countries.
          </p>
        </div>

        {/* Sponsorship Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer"
              onClick={() => openImage(pkg.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openImage(pkg.image);
                }
              }}
            >
              {/* Image container - uses natural aspect ratio with object-contain */}
              <div className="relative aspect-[3/2] bg-white">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
                {/* Subtle dark overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/40" />
              </div>

              {/* Title overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-4 py-1.5 text-sm font-bold text-white backdrop-blur">
                  {pkg.title}
                </span>
              </div>

              {/* Click hint */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink/80 backdrop-blur text-white text-xs font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View full image
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Sponsorship Inquiry Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#register"
            className="btn-primary w-full sm:w-auto min-w-[280px]"
          >
            Sponsorship Inquiry
          </a>
        </div>
      </div>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeImage}
            role="dialog"
            aria-modal="true"
            aria-label="Full sponsor image view"
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
              aria-label="Close full image view"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Full image - uncropped, preserves aspect ratio */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative max-w-[90vw] max-h-[85vh] p-4"
            >
              <Image
                src={selectedImage}
                alt="Full sponsor image"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                priority
              />
            </motion.div>

            {/* Keyboard hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center"
            >
              Press ESC or click outside to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}