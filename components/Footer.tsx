import { EVENT, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="et-ribbon" />
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 via-terra-500 to-emerald2-600 font-display text-lg font-black">
              E
            </span>
            <span className="font-display text-xl font-bold">
              ETHCAN <span className="text-gold-300">Events</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Ethiopia&apos;s premium events company — international conferences, business
            summits, tourism events and major national celebrations from the heart of
            Addis Ababa.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-gold-300">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 transition hover:text-gold-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Event */}
        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-gold-300">
            WTD 2026
          </h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>📅 {EVENT.dateLabel}</li>
            <li>📍 {EVENT.city}</li>
            <li className="leading-relaxed">
              🎯 Theme: &ldquo;{EVENT.theme}&rdquo;
            </li>
            <li>
              <a href="#register" className="font-bold text-terra-400 transition hover:text-gold-300">
                Register Now →
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-gold-300">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              ✉️{" "}
              <a href={`mailto:${EVENT.email}`} className="transition hover:text-gold-300">
                {EVENT.email}
              </a>
            </li>
            <li>📞 {EVENT.phone}</li>
            <li>🏢 Addis Ababa, Ethiopia</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["𝕏", "f", "in", "▶"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={`ETHCAN social ${s}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold transition hover:bg-gradient-to-br hover:from-gold-500 hover:to-terra-500"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>© 2026 ETHCAN Events. All rights reserved.</p>
          <p>
            World Tourism Day 2026 · Addis Ababa ·{" "}
            <span className="text-gold-300">Land of Origins</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
