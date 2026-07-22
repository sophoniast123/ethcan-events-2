"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { sendEmail } from "@/lib/email";

const TABS = [
  { key: "attend", label: "Attend", icon: "🎟️" },
  { key: "exhibit", label: "Exhibit", icon: "🏢" },
  { key: "partner", label: "Partner / Sponsor", icon: "🤝" },
  { key: "contact", label: "General Enquiry", icon: "✉️" },
] as const;

type TabKey = (typeof TABS)[number]["key"];
type Status = "idle" | "sending" | "success" | "error";

const COUNTRIES_HINT = "e.g. Ethiopia, Kenya, USA…";

function useSubmit(formType: string) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(
      new FormData(e.currentTarget).entries()
    ) as Record<string, string>;
    try {
      await sendEmail({ form_type: formType, ...data });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return { status, error, onSubmit, reset: () => setStatus("idle") };
}

function SubmitButton({ status, label }: { status: Status; label: string }) {
  return (
    <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
      {status === "sending" ? "Sending…" : label}
    </button>
  );
}

function StatusNote({ status, error, reset }: { status: Status; error: string; reset: () => void }) {
  if (status === "success")
    return (
      <div className="rounded-2xl border border-emerald2-500/40 bg-emerald2-50 p-5 text-center">
        <p className="font-bold text-emerald2-700">✓ Submission received!</p>
        <p className="mt-1 text-sm text-emerald2-800/80">
          Thank you — the ETHCAN team will get back to you at the email you provided.
        </p>
        <button onClick={reset} className="mt-3 text-sm font-bold text-terra-600 underline">
          Send another
        </button>
      </div>
    );
  if (status === "error")
    return (
      <p className="rounded-xl border border-terra-500/40 bg-terra-50 p-3 text-sm font-semibold text-terra-700">
        {error}
      </p>
    );
  return null;
}

function CommonFields() {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Full Name *</label>
          <input name="full_name" required className="field" placeholder="Your full name" />
        </div>
        <div>
          <label className="field-label">Email *</label>
          <input name="email" type="email" required className="field" placeholder="you@example.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Phone / WhatsApp *</label>
          <input name="phone" required className="field" placeholder="+251 …" />
        </div>
        <div>
          <label className="field-label">Country *</label>
          <input name="country" required className="field" placeholder={COUNTRIES_HINT} />
        </div>
      </div>
    </>
  );
}

function AttendForm() {
  const s = useSubmit("Registration — Attend WTD 2026");
  if (s.status === "success") return <StatusNote {...s} />;
  return (
    <form onSubmit={s.onSubmit} className="space-y-4">
      <CommonFields />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Organization</label>
          <input name="organization" className="field" placeholder="Company / institution" />
        </div>
        <div>
          <label className="field-label">Participant Type *</label>
          <select name="participant_type" required className="field">
            <option>International Delegate</option>
            <option>Ethiopian Participant</option>
            <option>Diaspora</option>
            <option>Media / Press</option>
            <option>Student / Youth</option>
          </select>
        </div>
      </div>
      <div>
        <label className="field-label">Sessions of Interest</label>
        <select name="interest" className="field">
          <option>AI &amp; Smart Tourism Summit</option>
          <option>High-Level Policy Dialogues</option>
          <option>Tourism Investment Forum</option>
          <option>Destination &amp; Hospitality Exhibitions</option>
          <option>Diaspora Tourism &amp; Investment Forum</option>
          <option>Pan-African Cultural Programmes</option>
          <option>All Sessions</option>
        </select>
      </div>
      <StatusNote {...s} />
      <SubmitButton status={s.status} label="Register to Attend" />
    </form>
  );
}

function ExhibitForm() {
  const s = useSubmit("Registration — Exhibit at WTD 2026");
  if (s.status === "success") return <StatusNote {...s} />;
  return (
    <form onSubmit={s.onSubmit} className="space-y-4">
      <CommonFields />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Brand / Organization *</label>
          <input name="organization" required className="field" placeholder="Brand name" />
        </div>
        <div>
          <label className="field-label">Exhibition Category *</label>
          <select name="exhibit_category" required className="field">
            <option>Destination / Tourism Board</option>
            <option>Hotel &amp; Hospitality</option>
            <option>Airline / Travel Services</option>
            <option>Travel-Tech / AI Solutions</option>
            <option>Culture, Craft &amp; Creative</option>
            <option>Food &amp; Beverage</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="field-label">Preferred Booth Size</label>
        <select name="booth" className="field">
          <option>Standard Booth (3m × 3m)</option>
          <option>Premium Booth (6m × 3m)</option>
          <option>Pavilion (Custom)</option>
          <option>Not sure — please advise</option>
        </select>
      </div>
      <div>
        <label className="field-label">Tell us about your exhibition</label>
        <textarea name="message" rows={3} className="field" placeholder="Products, services or destination you plan to showcase…" />
      </div>
      <StatusNote {...s} />
      <SubmitButton status={s.status} label="Apply to Exhibit" />
    </form>
  );
}

function PartnerForm() {
  const s = useSubmit("Partnership / Sponsorship Enquiry");
  if (s.status === "success") return <StatusNote {...s} />;
  return (
    <form onSubmit={s.onSubmit} className="space-y-4">
      <CommonFields />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label">Organization *</label>
          <input name="organization" required className="field" placeholder="Company / institution" />
        </div>
        <div>
          <label className="field-label">Partnership Type *</label>
          <select name="partnership_type" required className="field">
            <option>Title / Platinum Sponsor</option>
            <option>Gold Sponsor</option>
            <option>Forum / Summit Partner</option>
            <option>Media Partner</option>
            <option>Institutional Partner</option>
            <option>In-kind / Service Partner</option>
          </select>
        </div>
      </div>
      <div>
        <label className="field-label">Message *</label>
        <textarea name="message" rows={4} required className="field" placeholder="Tell us about your partnership goals…" />
      </div>
      <StatusNote {...s} />
      <SubmitButton status={s.status} label="Send Partnership Enquiry" />
    </form>
  );
}

function ContactForm() {
  const s = useSubmit("General Enquiry");
  if (s.status === "success") return <StatusNote {...s} />;
  return (
    <form onSubmit={s.onSubmit} className="space-y-4">
      <CommonFields />
      <div>
        <label className="field-label">Subject *</label>
        <input name="subject" required className="field" placeholder="What is your enquiry about?" />
      </div>
      <div>
        <label className="field-label">Message *</label>
        <textarea name="message" rows={4} required className="field" placeholder="Write your message…" />
      </div>
      <StatusNote {...s} />
      <SubmitButton status={s.status} label="Send Message" />
    </form>
  );
}

export default function Registration() {
  const [tab, setTab] = useState<TabKey>("attend");

  return (
    <section id="register" className="relative overflow-hidden bg-white py-24">
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold-300/20 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-emerald2-500/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-kicker">Registration</span>
          <h2 className="section-title">
            Join <span className="text-terra-600">WTD 2026</span> in Addis Ababa
          </h2>
          <p className="mt-4 text-ink/70">
            Choose how you want to participate. All submissions go directly to the ETHCAN
            Events team.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-3xl">
          {/* Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex flex-col items-center gap-1 rounded-2xl border px-3 py-3.5 text-sm font-bold transition-all duration-300 ${
                  tab === t.key
                    ? "border-transparent bg-gradient-to-br from-emerald2-600 to-emerald2-800 text-white shadow-lg shadow-emerald2-600/25"
                    : "border-ink/15 bg-cream text-ink/70 hover:border-gold-500"
                }`}
              >
                <span className="text-xl">{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>

          {/* Active form */}
          <div className="mt-6 rounded-3xl border border-ink/10 bg-cream p-6 shadow-xl shadow-gold-400/10 sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
              >
                {tab === "attend" && <AttendForm />}
                {tab === "exhibit" && <ExhibitForm />}
                {tab === "partner" && <PartnerForm />}
                {tab === "contact" && <ContactForm />}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-4 text-center text-xs text-ink/50">
            Submissions are emailed securely to{" "}
            <a href="mailto:ethcanevents@gmail.com" className="font-bold text-emerald2-700 underline">
              ethcanevents@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
