"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? GALLERY_IMAGES : GALLERY_IMAGES.slice(0, 12);

  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((cur) =>
        cur === null ? null : (cur + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  return (
    <section id="gallery" className="bg-cream py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Gallery</span>
          <h2 className="section-title">
            Moments from <span className="text-emerald2-600">Past Events</span>
          </h2>
          <p className="mt-4 text-ink/70">
            A glimpse of the energy, colour and connection ETHCAN brings to every stage.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {visible.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.05}>
              <button
                onClick={() => setLightbox(i)}
                className="group relative block h-44 w-full overflow-hidden rounded-2xl sm:h-52"
                aria-label={`Open gallery image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`ETHCAN event photo ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-terra-700/60 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl text-terra-600 shadow-lg">
                    ⊕
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {GALLERY_IMAGES.length > 12 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border-2 border-terra-500 px-8 py-3 font-bold text-terra-600 transition-all duration-300 hover:bg-terra-500 hover:text-white"
            >
              {showAll ? "Show Less" : `View All ${GALLERY_IMAGES.length} Photos`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-terra-500"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <button
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-gold-500 sm:left-6"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-gold-500 sm:right-6"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next"
            >
              ›
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightbox]}
                alt={`ETHCAN event photo ${lightbox + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white">
              {lightbox + 1} / {GALLERY_IMAGES.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
