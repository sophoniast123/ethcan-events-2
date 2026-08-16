"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="et-ribbon" />

      <div
        className={`container-x flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link href="#home" className="group flex items-center gap-3">
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-wide text-white">
              ETHCAN <span className="text-gold-300">Events</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
              Tourism · Culture · Business
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-gold-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#register"
            className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex"
          >
            Register Now
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ink/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10 hover:text-gold-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              <li className="pt-2">
                <a
                  href="#register"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Register Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}