"use client";

import { MessageSquareWarning, BookOpen, Paintbrush } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animation";

const problems = [
  {
    icon: MessageSquareWarning,
    title: "ChatGPT spuckt generische Texte aus, die sich lesen wie jeder andere.",
    description:
      "Du gibst \"Schreib mir eine Sales Page\" ein und bekommst 500 Wörter, die auf jedes Produkt passen könnten. Kein strategischer Unterbau, keine Zielgruppen-Analyse, keine bewährte Struktur.",
  },
  {
    icon: BookOpen,
    title: "Der Online-Kurs liegt seit Monaten halb geschaut in deinem Account.",
    description:
      "40 Stunden Theorie, bevor du die erste Zeile schreibst. Du weißt jetzt was ein Funnel ist \u2014 aber du hast immer noch keinen.",
  },
  {
    icon: Paintbrush,
    title: "Die Agentur hat eine schöne Seite gebaut \u2014 aber niemand kauft.",
    description:
      "2.000 Euro für ein Design ohne strategisches Fundament. Die Seite sieht gut aus, aber sie spricht nicht die Sprache deines Kunden.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
            Kommt dir das bekannt vor?
          </h2>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full transition-all duration-200 hover:border-[var(--border-default)] cursor-default">
                <problem.icon className="w-6 h-6 text-[var(--text-muted)] mb-5" />
                <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] mb-3 leading-snug">
                  {problem.title}
                </h3>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="text-center mt-16">
          <p className="font-body text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Das Problem ist nicht, dass du es nicht kannst.{" "}
            <span className="text-[var(--text-primary)] font-medium">
              Das Problem ist, dass dir der strategische Unterbau fehlt.
            </span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
