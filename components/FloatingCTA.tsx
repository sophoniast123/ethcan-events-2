"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const registerEl = document.getElementById("register");
      const nearRegister = registerEl
        ? registerEl.getBoundingClientRect().top < window.innerHeight
        : false;
      setVisible(window.scrollY > 600 && !nearRegister);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#register"
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-40 flex animate-float items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-terra-500 px-6 py-4 font-bold text-white shadow-2xl shadow-terra-500/40"
        >
          🎟️ Register for WTD 2026
        </motion.a>
      )}
    </AnimatePresence>
  );
}
