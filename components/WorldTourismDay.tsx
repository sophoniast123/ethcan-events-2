"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { EVENT, WTD_IMAGES } from "@/lib/data";

const HIGHLIGHTS = [
  {
    icon: "🏛️",
    title: "High-Level Policy Dialogues",
    text: "Ministers, ambassadors and global tourism leaders shaping Africa's digital tourism policy agenda.",
  },
  {
    icon: "🤖",
    title: "AI & Smart Tourism Summit",
    text: "The flagship summit exploring how artificial intelligence and smart destinations are redesigning global travel.",
  },
  {
    icon: "💰",
    title: "Tourism Investment Forum",
    text: "Curated deal-rooms connecting investors with hospitality, aviation and destination-development opportunities.",
  },
  {
    icon: "🏨",
    title: "Destination & Hospitality Exhibitions",
    text: "Destinations, hotels, airlines and travel-tech pioneers exhibiting to thousands of trade and public visitors.",
  },
  {
    icon: "🥁",
    title: "Pan-African Cultural Programmes",
    text: "Music, cuisine, fashion and heritage showcases celebrating Ethiopia and the entire African continent.",
  },
  {
    icon: "🌐",
    title: "Diaspora Tourism & Investment Forum",
    text: "Engaging the global Ethiopian diaspora as investors, ambassadors and co-creators of tourism growth.",
  },
];

export default function WorldTourismDay() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="wtd2026"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-emerald2-900 via-emerald2-800 to-ink py-24 text-white"
    >
      {/* Ambient glows */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-terra-500/15 blur-3xl" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-kicker !border-gold-300/40 !bg-white/10 !text-gold-300">
            ★ Flagship Event · September 2026
          </span>
          <h2 className="section-title">
            World Tourism Day <span className="text-gold-300">2026</span> Celebration
          </h2>
          <p className="mt-5 text-lg text-white/80">
            {EVENT.dateLabel} · Addis Ababa, Ethiopia — a multi-day national and
            international programme under the global theme:
          </p>
          <p className="mt-4 font-display text-2xl font-bold italic text-gold-200 sm:text-3xl">
            &ldquo;{EVENT.theme}&rdquo;
          </p>
        </Reveal>

        {/* Parallax image strip */}
        <motion.div style={{ y: imgY }} className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {WTD_IMAGES.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <div className="group relative h-44 overflow-hidden rounded-2xl sm:h-56">
                <Image
                  src={src}
                  alt="World Tourism Day preview"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/60 to-transparent" />
              </div>
            </Reveal>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.07}>
              <TiltCard className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors duration-300 hover:border-gold-300/40 hover:bg-white/10">
                  <span className="text-4xl">{h.icon}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-gold-200">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{h.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a href="#register" className="btn-primary text-base">
            Be Part of History — Register for WTD 2026
          </a>
        </Reveal>
      </div>
    </section>
  );
}
