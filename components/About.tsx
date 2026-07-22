"use client";

import Image from "next/image";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { ABOUT_IMAGES, STATS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24">
      <div className="pattern-dots absolute inset-0 opacity-60" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        {/* Collage */}
        <Reveal className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_IMAGES.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-3xl shadow-lg ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <Image
                  src={src}
                  alt="ETHCAN Events moments"
                  width={560}
                  height={640}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald2-900/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="section-kicker">About ETHCAN Events</span>
            <h2 className="section-title">
              Ethiopia&apos;s Premium Stage for{" "}
              <span className="text-emerald2-600">World-Class Events</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink/75">
              ETHCAN Events is an Ethiopia-based premium events company organizing
              international conferences, business summits, tourism events and major
              national celebrations. From the diplomatic capital of Africa, we connect
              governments, industry leaders, investors and communities through
              unforgettable, world-standard experiences.
            </p>
            <p className="mt-4 text-ink/75">
              In September 2026, ETHCAN proudly hosts the{" "}
              <strong className="text-terra-600">World Tourism Day 2026 Celebration</strong>{" "}
              in Addis Ababa under the global theme{" "}
              <em>&ldquo;Digital Agenda and Artificial Intelligence to Redesign Tourism&rdquo;</em> —
              a landmark gathering placing Ethiopia at the centre of the world&apos;s
              conversation on the digital future of travel.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-gold-400/30 bg-white p-4 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                    className="font-display text-3xl font-black text-terra-600"
                  />
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-ink/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
