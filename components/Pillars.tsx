"use client";

import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { PILLARS } from "@/lib/data";

export default function Pillars() {
  return (
    <section id="pillars" className="relative overflow-hidden bg-white py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Our Key Focus Areas</span>
          <h2 className="section-title">
            Five Pillars of <span className="text-terra-600">ETHCAN</span>
          </h2>
          <p className="mt-4 text-ink/70">
            Every ETHCAN event is built on five pillars that connect Ethiopia&apos;s
            heritage with the continent&apos;s digital future.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream p-6 transition-all duration-300 hover:border-gold-400/60 hover:shadow-xl hover:shadow-gold-400/20">
                  <span className="absolute -right-3 -top-4 font-display text-7xl font-black text-gold-400/15 transition-colors group-hover:text-gold-400/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-bold text-emerald2-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
                  <span className="mt-auto pt-4">
                    <span className="block h-1 w-10 rounded-full bg-gradient-to-r from-gold-400 to-terra-500 transition-all duration-500 group-hover:w-full" />
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
