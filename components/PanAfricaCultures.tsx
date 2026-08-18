"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { PANAFRICA_CULTURES } from "@/lib/data";
import Reveal from "@/components/motion/Reveal";

const TRANSITION_DURATION = 0.3;
const AUTO_PLAY_INTERVAL = 5000;

export default function PanAfricaCultures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const items = PANAFRICA_CULTURES;
  const itemCount = items.length;
  const currentItem = items[currentIndex];

  // Auto-play logic - runs continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itemCount);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [itemCount]);

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

  return (
    <section
      id="pan-africa-cultures"
      className="relative overflow-hidden bg-cream py-24"
    >
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="container-x relative">
        {/* Header */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="section-kicker">Celebrating the Continent</span>
          <h2 className="section-title">
            PanAfrica <span className="text-emerald2-600">Cultures</span>
          </h2>
          <p className="mt-5 text-lg text-ink/75 max-w-2xl mx-auto">
            A journey through the vibrant diversity of Africa — from ancient traditions
            to contemporary creativity, spanning five regions and countless stories.
          </p>
        </Reveal>

        {/* Carousel */}
        <div
          className="relative mx-auto mt-16"
          role="region"
          aria-label="PanAfrica Cultures carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main slide */}
          <motion.div
            className="relative rounded-3xl overflow-hidden bg-ink"
            style={{ aspectRatio: "4 / 3", maxWidth: "900px", margin: "0 auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: TRANSITION_DURATION }}
            key={currentItem.id}
          >
            {/* Background image with Ken Burns effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 12, ease: "linear" }}
              style={{ overflow: "hidden" }}
            >
              <Image
                src={currentItem.image}
                alt={currentItem.name}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover"
                loading="eager"
              />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16">
              <motion.div
                className="max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: TRANSITION_DURATION, delay: 0.2 }}
              >
                {/* Category badge */}
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/20 border border-gold-500/30 px-4 py-1.5 text-sm font-bold text-gold-300 backdrop-blur">
                  {currentItem.category}
                </span>

                {/* Region & Country */}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5">
                    <span className="relative top-[1px] w-2 h-2 rounded-full bg-gold-400" />
                    {currentItem.region}
                  </span>
                  <span className="text-white/40">•</span>
                  <span>{currentItem.country}</span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {currentItem.name}
                </h3>

                {/* Description */}
                <p className="mt-4 text-lg text-white/90 leading-relaxed max-w-xl">
                  {currentItem.description}
                </p>
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
                        ? "bg-gold-400 w-8"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation arrows - visible and clickable */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-[calc(50%-48px)] -translate-y-1/2 p-3 rounded-full bg-ink/80 backdrop-blur text-white hover:bg-gold-400 hover:text-ink transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-xl"
            aria-label="Previous culture"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-[calc(50%-48px)] -translate-y-1/2 p-3 rounded-full bg-ink/80 backdrop-blur text-white hover:bg-gold-400 hover:text-ink transition-all duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-xl"
            aria-label="Next culture"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gold-400"
            style={{ width: `${((currentIndex + 1) / itemCount) * 100}%` }}
            animate={{ width: `${((currentIndex + 1) / itemCount) * 100}%` }}
            transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
          />
        </div>

        {/* All cultures grid (visible on larger screens as reference) */}
        <Reveal delay={0.3} className="mt-16 hidden lg:block">
          <h3 className="font-display text-2xl font-bold text-center text-ink mb-8">
            All Featured Cultures
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {items.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goToSlide(i)}
                className={`group relative rounded-2xl overflow-hidden p-4 text-left transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-gold-50 border-2 border-gold-400"
                    : "bg-white/60 hover:bg-white border border-ink/10"
                }`}
              >
                <div className="aspect-square mb-3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="160px"
                  />
                </div>
                <h4 className="font-bold text-ink group:text-gold-600">{item.name}</h4>
                <p className="text-sm text-ink/60 mt-1">{item.country}</p>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}