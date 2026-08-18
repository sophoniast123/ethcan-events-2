
"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ETHIOPIAN_CULINARY, type CulinaryItem } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

const TRANSITION_DURATION = 0.5;
const AUTO_PLAY_INTERVAL = 5000;

export default function EthiopianCulinary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const items = ETHIOPIAN_CULINARY;
  const itemCount = items.length;

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, itemCount]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % itemCount);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [itemCount]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
      setTouchStart(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const currentItem = items[currentIndex];

  return (
    <section
      id="ethiopian-culinary"
      className="relative overflow-hidden bg-gradient-to-br from-terra-50 via-cream to-gold-50 py-24"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Ambient warm glows */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-terra-300/30 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-gold-300/30 blur-3xl" />

      <div className="container-x relative">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="section-kicker !border-terra-400/50 !bg-terra-50 !text-terra-700">
            Taste of the Land of Origins
          </span>
          <h2 className="section-title">
            Ethiopian <span className="text-terra-600">Culinary</span> Heritage
          </h2>
          <p className="mt-5 text-lg text-ink/75 max-w-2xl mx-auto">
            Discover the rich flavors of Ethiopia — ancient grains, complex spice blends,
            communal dining traditions, and the birthplace of coffee itself.
          </p>
        </Reveal>

        {/* Carousel */}
        <div className="mt-16 relative" role="region" aria-label="Ethiopian Culinary carousel">
          {/* Main slide */}
          <motion.div
            className="relative rounded-3xl overflow-hidden bg-white shadow-2xl"
            style={{ aspectRatio: "4 / 3", maxWidth: "900px", margin: "0 auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: TRANSITION_DURATION }}
            key={currentItem.id}
          >
            {/* Image with subtle Ken Burns */}
            <motion.div
              className="relative h-full w-full"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, ease: "linear" }}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={currentItem.image}
                alt={currentItem.name}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                className="object-cover"
                loading="eager"
              />
            </motion.div>

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/70" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16">
              <motion.div
                className="max-w-4xl w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: TRANSITION_DURATION, delay: 0.2 }}
              >
                {/* Category badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-terra-500/20 border border-terra-500/30 px-4 py-1.5 text-sm font-bold text-terra-300 backdrop-blur">
                  {currentItem.category}
                </span>

                {/* Amharic name if available */}
                {currentItem.nameAmharic && (
                  <div className="mt-3 text-gold-300 text-lg font-display">
                    {currentItem.nameAmharic}
                  </div>
                )}

                {/* Title */}
                <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {currentItem.name}
                </h3>

                {/* Description */}
                <p className="mt-4 text-lg text-white/90 leading-relaxed max-w-xl">
                  {currentItem.description}
                </p>

                {/* Details expandable */}
                <motion.div
                  className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: TRANSITION_DURATION, delay: 0.4 }}
                >
                  <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-300">Key Ingredients</p>
                    <p className="mt-2 text-white/90 text-sm">{currentItem.ingredients}</p>
                  </div>
                  <div className="rounded-xl bg-white/10 backdrop-blur p-4 border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold-300">Cultural Note</p>
                    <p className="mt-2 text-white/90 text-sm">{currentItem.culturalNote}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Slide indicator dots */}
            <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between sm:justify-end">
              <div className="flex items-center gap-2">
                {items.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? "bg-terra-400 w-8"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to dish ${i + 1}`}
                    aria-current={i === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-terra-400"
            aria-label="Previous dish"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 p-3 rounded-full bg-white/10 backdrop-blur text-white hover:bg-white/20 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-terra-400"
            aria-label="Next dish"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-terra-400"
            style={{ width: `${((currentIndex + 1) / itemCount) * 100}%` }}
            animate={{ width: `${((currentIndex + 1) / itemCount) * 100}%` }}
            transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
          />
        </div>

        {/* All dishes grid (visible on larger screens) */}
        <Reveal delay={0.3} className="mt-16 hidden lg:block">
          <h3 className="font-display text-2xl font-bold text-center text-ink mb-8">
            All Featured Dishes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goToSlide(i)}
                className={`group relative rounded-2xl overflow-hidden p-4 text-left transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-terra-50 border-2 border-terra-400 shadow-lg shadow-terra-200/50"
                    : "bg-white border border-ink/10 hover:border-terra-300/50 hover:shadow-lg hover:-translate-y-1"
                }`}
                aria-current={i === currentIndex ? "true" : "false"}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={60}
                  className="absolute inset-0 object-cover opacity-15 group-hover:opacity-25 transition-opacity"
                  sizes="80px"
                />
                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-wider text-terra-600">{item.category}</div>
                  <h4 className="mt-1 font-display text-lg font-bold text-ink group-hover:text-terra-600 transition-colors">
                    {item.name}
                  </h4>
                  {item.nameAmharic && (
                    <p className="mt-0.5 text-xs text-gold-600 font-display">{item.nameAmharic}</p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}