"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EVENT, HERO_IMAGES, TICKER_WORDS } from "@/lib/data";

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
          culture — {EVENT.dateLabel}, in the diplomatic capital of Africa.
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#register" className="btn-primary">
            Register Now
            <span aria-hidden>→</span>
          </a>
          <a href="#wtd2026" className="btn-outline">
            Explore WTD 2026
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
