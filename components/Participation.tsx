"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { AUDIENCES } from "@/lib/data";

export default function Participation() {
  return (
    <section id="participation" className="bg-white py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Participation</span>
          <h2 className="section-title">
            Who Should <span className="text-terra-600">Attend</span>
          </h2>
          <p className="mt-4 text-ink/70">
            World Tourism Day 2026 gathers the full ecosystem of tourism, technology,
            investment and culture — from heads of institutions to young innovators.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {AUDIENCES.map((a, i) => (
            <motion.span
              key={a}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              whileHover={{ scale: 1.07, y: -3 }}
              className="cursor-default rounded-full border border-emerald2-600/25 bg-emerald2-50 px-5 py-2.5 text-sm font-semibold text-emerald2-800 shadow-sm transition-colors hover:border-gold-500 hover:bg-gold-50 hover:text-terra-700"
            >
              {a}
            </motion.span>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <a href="#register" className="btn-primary">
            Secure Your Place
          </a>
        </Reveal>
      </div>
    </section>
  );
}
