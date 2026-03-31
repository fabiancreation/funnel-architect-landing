"use client";

import { FadeIn } from "./animation";

export function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--glow-primary) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[var(--text-primary)]">
            Dein erster Funnel-Plan{" "}
            <span className="gradient-text">in 20 Minuten.</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
            Kein Kurs. Keine Kreditkarte. Starte jetzt mit dem kostenlosen Offer
            Workshop.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-10 py-4 rounded-xl cursor-pointer transition-all duration-200 glow-emerald-sm"
          >
            Kostenlosen Workshop starten
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
