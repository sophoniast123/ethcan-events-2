"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EVENT, EVENT_SCHEDULE, HERO_IMAGES, TICKER_WORDS } from "@/lib/data";

function useCountdown(target: string) {
  const calc = () => {
    const diff = Math.max(0, new Date(target).getTime() - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor(diff / 3_600_000) % 24,
      minutes: Math.floor(diff / 60_000) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  };
  const [t, setT] = useState<ReturnType<typeof calc> | null>(null);
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return t;
}

export default function Hero() {
  const countdown = useCountdown(EVENT.targetDate);
  const [slide, setSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: background moves slower than the scroll.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const units = countdown
    ? ([
        ["Days", countdown.days],
        ["Hours", countdown.hours],
        ["Minutes", countdown.minutes],
        ["Seconds", countdown.seconds],
      ] as const)
    : null;

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Rotating parallax backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -bottom-32">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[slide]}
              alt="ETHCAN event highlight"
              fill
              priority={slide === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald2-900/40 via-transparent to-terra-700/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative z-10 flex flex-1 flex-col items-center justify-center pb-24 pt-36 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-200 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
          World Tourism Day 2026 · {EVENT.city}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-5xl font-display text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Digital Agenda &amp;{" "}
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-terra-400 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>{" "}
          to Redesign Tourism
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Join ETHCAN Events for a multi-day global celebration of tourism, technology and
          culture — {EVENT.dateLabel}, Starting from 9:00 AM – 5:00 PM Daily at Science Museum, Addis Ababa, Ethiopia.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 grid grid-cols-4 gap-3 sm:gap-5"
        >
          {(units ?? ([["Days", 0], ["Hours", 0], ["Minutes", 0], ["Seconds", 0]] as const)).map(
            ([label, value]) => (
              <div
                key={label}
                className="w-[74px] rounded-2xl border border-white/15 bg-white/10 px-2 py-4 backdrop-blur-md sm:w-24"
              >
                <div className="font-display text-3xl font-black text-gold-300 sm:text-4xl tabular-nums">
                  {countdown ? String(value).padStart(2, "0") : "--"}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-white/70 sm:text-xs">
                  {label}
                </div>
              </div>
            )
          )}
        </motion.div>

        {/* Event Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-10 w-full max-w-5xl flex flex-col lg:flex-row gap-6 items-start"
        >
          {/* Event Schedule */}
          <div className="flex-1 lg:max-w-2xl w-full"/>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-6 backdrop-blur-md h-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-white/90">
                <svg className="w-5 h-5 text-gold-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-sm sm:text-base">Event Schedule</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300/80 whitespace-nowrap">
                {EVENT.timezoneLabel} · {EVENT.timezone}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {EVENT_SCHEDULE.map((s, i) => (
                <div
                  key={s.day}
                  className="relative rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center transition-all duration-300 hover:border-gold-300/40 hover:bg-white/10"
                >
                  <div className="font-display text-lg font-bold text-white sm:text-xl">
                    {s.day.split(",")[0]}
                  </div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider mt-0.5">
                    {s.day.split(",").slice(1).join(",").trim()}
                  </div>
                  <div className="mt-2 font-semibold text-gold-300 text-sm sm:text-base">
                    {s.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Show Location Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href={EVENT.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-terra-500 px-8 py-4 font-bold text-white shadow-lg shadow-terra-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-terra-500/40 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-ink"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Show Location
          </a>
        </motion.div>

      </motion.div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-t border-white/10 bg-ink/70 py-3.5 backdrop-blur">
        <div className="flex overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee items-center gap-10 whitespace-nowrap px-5">
            {[...TICKER_WORDS, ...TICKER_WORDS].map((w, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-sm font-bold uppercase tracking-[0.2em] text-gold-300/90"
              >
                {w}
                <span className="text-terra-400">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
