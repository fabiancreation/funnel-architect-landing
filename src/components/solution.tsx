"use client";

import { ArrowDown } from "lucide-react";
import { FadeIn } from "./animation";
import { BeforeAfterBars } from "./graphs";

export function Solution() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-[var(--text-primary)]">
            Framework-basierte AI{" "}
            <span className="gradient-text">statt generischer Prompts</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Seit über 100 Jahren entwickeln die besten Copywriter und Marketing-Strategen
            Frameworks, die nachweislich funktionieren. Schwartz&apos; Awareness Levels.
            Hormozis Value Equation. Brunsons Funnel-Architektur. Cialdinis
            Persuasion-Prinzipien. Funnel Architect nutzt 100+ dieser bewährten Frameworks
            als Wissensbasis für die AI.
          </p>
        </FadeIn>

        {/* Comparison */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Generic */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full">
              <div className="inline-block rounded-full bg-[var(--badge-muted-bg)] px-3 py-1 text-xs font-medium font-body text-[var(--badge-muted-text)] mb-6">
                Generischer Prompt
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-[var(--code-bg)] p-4">
                  <p className="font-code text-sm text-[var(--text-secondary)]">
                    &quot;Schreib mir eine Sales Page für mein Coaching&quot;
                  </p>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-[var(--text-muted)]" />
                </div>
                <div className="rounded-lg bg-[var(--code-bg)] p-4">
                  <p className="font-body text-sm text-[var(--text-muted)]">
                    Generischer Output, der auf jedes Coaching passt. Keine
                    Differenzierung, keine Strategie, keine Conversion.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Framework-based */}
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-indigo-500/30 bg-[var(--card-bg)] p-8 h-full glow-indigo-sm">
              <div className="inline-block gradient-text rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold font-body mb-6">
                Framework + Kontext
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-indigo-500/5 border border-indigo-500/10 p-4">
                  <p className="font-code text-sm text-[var(--text-primary)]">
                    Awareness Level 3 + Value Equation + Problem-Solution Lead + deine
                    spezifischen False Beliefs + Prompt
                  </p>
                </div>
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="rounded-lg bg-indigo-500/5 border border-indigo-500/10 p-4">
                  <p className="font-body text-sm text-[var(--text-primary)]">
                    Strategisch fundierter Text, der{" "}
                    <span className="text-indigo-500 dark:text-indigo-300 font-medium">DEINEN</span> Kunden
                    anspricht und nachweislich konvertiert.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Before/After metrics */}
        <FadeIn delay={0.3} className="mt-16">
          <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] text-center mb-8">
            Der Unterschied mit strategischem Unterbau
          </h3>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterBars />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
