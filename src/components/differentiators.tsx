"use client";

import { Brain, Link2, Cpu, DatabaseZap } from "lucide-react";
import { FadeIn } from "./animation";
import { motion } from "framer-motion";

const contextSteps = [
  "Dein Kunde",
  "Dein Angebot",
  "Deine Positionierung",
  "Sales Page",
  "Email-Sequenz",
  "Ad Copy",
];

export function Differentiators() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
            Was uns von ChatGPT{" "}
            <span className="gradient-text">wirklich unterscheidet</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Nicht nur bessere Prompts. Ein fundamental anderer Ansatz.
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: Best AI Models */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full">
              <div className="rounded-xl bg-[var(--surface-elevated)] p-3 inline-block mb-6">
                <Brain className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
                Die besten AI-Modelle arbeiten für dich
              </h3>

              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Du musst nicht wissen, welches Modell für welche Aufgabe am besten
                ist. Funnel Architect wählt automatisch das optimale Modell für jede
                Aufgabe -- Analyse, Copywriting, Strategieplanung. Das Ergebnis: bessere
                Outputs als du mit einem einzelnen Modell je erreichen könntest.
              </p>

              {/* Model badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Claude", "GPT-4o", "Gemini"].map((model) => (
                  <span
                    key={model}
                    className="inline-flex items-center gap-1.5 font-body text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-500 dark:text-indigo-300 border border-indigo-500/20"
                  >
                    <Cpu className="w-3 h-3" />
                    {model}
                  </span>
                ))}
              </div>

              {/* Comparison: each tool limited to its own model */}
              <div className="space-y-2.5">
                {[
                  { name: "ChatGPT", width: "40%", label: "nur GPT", delay: 0.3 },
                  { name: "Claude", width: "42%", label: "nur Claude", delay: 0.4 },
                  { name: "Gemini", width: "38%", label: "nur Gemini", delay: 0.5 },
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3">
                    <span className="font-body text-xs text-[var(--text-muted)] w-20 flex-shrink-0">{tool.name}</span>
                    <div className="flex-1 h-2 bg-[var(--surface-elevated)] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-zinc-500/30"
                        initial={{ width: 0 }}
                        whileInView={{ width: tool.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: tool.delay }}
                      />
                    </div>
                    <span className="font-body text-xs text-[var(--text-muted)] w-20 text-right flex-shrink-0">{tool.label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-body text-xs text-emerald-500 font-medium w-20 flex-shrink-0">Funnel Architect</span>
                  <div className="flex-1 h-2.5 bg-[var(--surface-elevated)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-emerald-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />
                  </div>
                  <span className="font-body text-xs text-emerald-500 font-medium w-20 text-right flex-shrink-0">alle kombiniert</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Context never lost */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full">
              <div className="rounded-xl bg-[var(--surface-elevated)] p-3 inline-block mb-6">
                <DatabaseZap className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
                Dein Kontext geht nie verloren
              </h3>

              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Bei ChatGPT startest du jeden Tag von vorn. Neuer Chat, neuer Kontext,
                neues Ergebnis. Funnel Architect speichert dein strategisches Fundament
                und nutzt es bei jedem Output. Deine Sales Page kennt dein
                Offer Blueprint. Deine Emails kennen deine Sales Page. Alles hängt
                zusammen.
              </p>

              {/* Context chain visualization */}
              <div className="space-y-0">
                {contextSteps.map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    {/* Vertical connector */}
                    <div className="flex flex-col items-center w-6">
                      {i > 0 && (
                        <div className="w-px h-3 bg-indigo-500/30" />
                      )}
                      <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        i < 3
                          ? "bg-indigo-500/20 border border-indigo-500/40"
                          : "bg-emerald-500/20 border border-emerald-500/40"
                      }`}>
                        <div className={`w-full h-full rounded-full flex items-center justify-center`}>
                          <Link2 className={`w-2 h-2 ${i < 3 ? "text-indigo-400" : "text-emerald-400"}`} />
                        </div>
                      </div>
                      {i < contextSteps.length - 1 && (
                        <div className="w-px h-3 bg-indigo-500/30" />
                      )}
                    </div>

                    <span className={`font-body text-sm ${
                      i < 3 ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)] font-medium"
                    }`}>
                      {step}
                      {i < 3 && (
                        <span className="text-[var(--text-muted)] text-xs ml-1.5">gespeichert</span>
                      )}
                      {i >= 3 && (
                        <span className="text-emerald-500 dark:text-emerald-400 text-xs ml-1.5">kennt alles davor</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
