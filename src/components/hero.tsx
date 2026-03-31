"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { HeroParticles } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Animated particles background */}
      <HeroParticles />

      {/* Background glow */}
      <div className="absolute inset-0 glow-indigo pointer-events-none" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--glow-primary) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block gradient-text text-sm font-semibold font-body tracking-wide uppercase mb-6">
            100+ bewährte Marketing-Frameworks. Ein System.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.08] mb-6 text-[var(--text-primary)]"
        >
          Dein Marketing braucht
          <br />
          keinen Guru.{" "}
          <span className="gradient-text">Es braucht ein System.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Funnel Architect verbindet die Strategien hinter Milliarden-Umsätzen mit AI
          und macht sie für dein Business anwendbar. Kein Kurs. Kein Freelancer. Ein
          geführter Prozess von der Strategie bis zum fertigen Text.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 py-4 rounded-xl cursor-pointer transition-all duration-200 glow-emerald-sm"
          >
            Kostenlosen Workshop starten
          </a>
          <a
            href="#problem"
            className="inline-flex items-center justify-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-body text-base px-6 py-4 cursor-pointer group transition-colors"
          >
            So funktioniert&apos;s
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-2">
            {[
              "bg-indigo-500",
              "bg-violet-500",
              "bg-emerald-500",
              "bg-amber-500",
            ].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${color} border-2 border-background flex items-center justify-center text-xs font-bold text-white`}
              >
                {["S", "M", "T", "L"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm font-body text-[var(--text-muted)]">
            Bereits <span className="text-[var(--text-secondary)] font-medium">2.400+</span> Strategien
            erstellt
          </p>
        </motion.div>
      </div>
    </section>
  );
}
