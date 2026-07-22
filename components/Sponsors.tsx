"use client";

import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import { PARTNER_TIERS } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function Sponsors() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-gradient-to-b from-ink to-emerald2-900 py-24 text-white"
    >
      <div className="absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker !border-gold-300/40 !bg-white/10 !text-gold-300">
            Sponsors &amp; Partners
          </span>
          <h2 className="section-title">
            Powered by <span className="text-gold-300">Visionary Partners</span>
          </h2>
          <p className="mt-4 text-white/75">
            World Tourism Day 2026 is delivered with national institutions, global brands
            and the champions of Ethiopian tourism.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {PARTNER_TIERS.map((tier, ti) => (
            <Reveal key={tier.tier} delay={ti * 0.06}>
              <div className="mb-5 flex items-center gap-4">
                <h3 className="shrink-0 text-sm font-black uppercase tracking-[0.25em] text-gold-300">
                  {tier.tier}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-gold-400/50 to-transparent" />
              </div>
              <div
                className={`grid gap-5 ${
                  tier.partners.length === 1
                    ? "mx-auto max-w-md"
                    : "sm:grid-cols-2 lg:grid-cols-4"
                }`}
              >
                {tier.partners.map((p) => (
                  <TiltCard key={p.name} maxTilt={6}>
                    <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-gold-300/50 hover:bg-white/10 hover:shadow-lg hover:shadow-gold-500/10">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-terra-500 font-display text-lg font-black text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {initials(p.name)}
                      </span>
                      <span>
                        <span className="block font-bold text-white group-hover:text-gold-200">
                          {p.name}
                        </span>
                        <span className="block text-xs text-white/60">{p.tag}</span>
                      </span>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 rounded-3xl border border-gold-300/30 bg-white/5 p-8 text-center backdrop-blur sm:p-10">
          <h3 className="font-display text-2xl font-bold text-gold-200">
            Become a Sponsor or Partner
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">
            Position your brand before thousands of global delegates, ministers, investors
            and media at Africa&apos;s premier tourism celebration.
          </p>
          <a href="#register" className="btn-primary mt-6">
            Request Partnership Deck
          </a>
        </Reveal>
      </div>
    </section>
  );
}
