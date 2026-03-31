"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./animation";

const steps = [
  {
    number: "01",
    title: "Beantworte 7 Fragen",
    description:
      "Wer ist dein Kunde? Was verkaufst du? Was hat er schon versucht? Keine Technik, keine Vorkenntnisse nötig.",
    detail: "~20 Minuten",
  },
  {
    number: "02",
    title: "Das System analysiert",
    description:
      "Die AI identifiziert False Beliefs, blinde Flecken und die stärksten Hebel für dein Marketing. Basierend auf 100+ Frameworks, nicht auf Zufall.",
    detail: "AI-generiert",
  },
  {
    number: "03",
    title: "Setze um \u2014 mit oder ohne uns",
    description:
      "Nutze die Copy Engine für fertige Texte. Oder exportiere dein Blueprint als Briefing für ChatGPT, einen Freelancer oder dich selbst.",
    detail: "Markdown, PDF, Teilen-Link",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
            In 20 Minuten zum ersten Blueprint
          </h2>
        </FadeIn>

        {/* Connector line spanning all 3 columns */}
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-8 left-[8%] right-[8%] h-px bg-[var(--border-default)] z-0" />

          <StaggerContainer className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center md:text-left">
                  <div className="relative z-10">
                    {/* Number with background to "cut through" the line */}
                    <span className="inline-block font-heading text-5xl font-bold text-[var(--surface-elevated)] mb-4 bg-background pr-4">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <span className="inline-block font-body text-xs text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1">
                      {step.detail}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
