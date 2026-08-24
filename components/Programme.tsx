"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { PROGRAMME, PROGRAMME_FILTERS } from "@/lib/data";

export default function Programme() {
  const [filter, setFilter] = useState<(typeof PROGRAMME_FILTERS)[number]>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = PROGRAMME.filter((p) => filter === "All" || p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="programme" className="relative bg-cream py-24">
      <div className="pattern-dots absolute inset-0 opacity-50" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Programme</span>
          <h2 className="section-title">
            Activities &amp; <span className="text-emerald2-600">Forums</span>
          </h2>
          <p className="mt-4 text-ink/70">
            Three days of summits, exhibitions, ceremonies and cultural celebration across
            Addis Ababa.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2.5">
          {PROGRAMME_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                filter === f
                  ? "bg-gradient-to-r from-gold-500 to-terra-500 text-white shadow-lg shadow-terra-500/25"
                  : "border border-ink/15 bg-white text-ink/70 hover:border-gold-500 hover:text-terra-600"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Cards */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-gold-400/15"
              >
                {p.image ? (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                      {p.day}
                    </span>
                  </div>
                ) : (
                  <div className="flex h-24 items-end bg-gradient-to-br from-emerald2-700 to-emerald2-900 p-4">
                    <span className="rounded-full bg-gold-500 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                      {p.day}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-terra-500">
                    {p.category} & {p.alternateCategory}
                  </span>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
                  {p.morning && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">Morning Session: <b>{p.morning}</b></p>
                  )}
                  {p.afternoon && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">Afternoon Session: <b>{p.afternoon}</b></p>
                  )}
                  {p.night && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">Night Session: <b>{p.night}</b></p>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="rounded-full border-2 border-emerald2-600 px-8 py-3 font-bold text-emerald2-700 transition-all duration-300 hover:bg-emerald2-600 hover:text-white"
            >
              {showAll ? "Show Less" : `Show All ${filtered.length} Activities`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
