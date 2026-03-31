"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "./animation";

const faqs = [
  {
    question: "Ist Funnel Architect ein Page Builder?",
    answer:
      "Nein. Wir liefern den Bauplan und die Texte \u2014 nicht das Gebäude. Du setzt die Ergebnisse in deinem eigenen Tool um: WordPress, Squarespace, Carrd, oder was immer du nutzt. Wir sind der Architekt, nicht der Bauunternehmer.",
  },
  {
    question: "Kann ich das nicht einfach mit ChatGPT machen?",
    answer:
      "Klar. Du kannst auch ein Haus ohne Architekten bauen. Der Unterschied: ChatGPT hat keinen strategischen Unterbau. Es kennt keine Awareness Levels, keine Value Equation, keine bewährten Seitenstrukturen. Funnel Architect gibt der AI den Kontext, den sie braucht, um Texte zu liefern, die wirklich konvertieren.",
  },
  {
    question: "Für wen ist Funnel Architect?",
    answer:
      "Für Solo-Unternehmer, Coaches, Berater, Kursersteller und Dienstleister, die ihr eigenes Marketing machen. Wenn du ein gutes Produkt hast, aber Schwierigkeiten damit, es systematisch zu verkaufen \u2014 dann ist das für dich.",
  },
  {
    question: "Wie unterscheidet sich das von einem Online-Kurs?",
    answer:
      "Ein Kurs erklärt dir die Theorie. Funnel Architect lässt dich umsetzen. Du lernst die Prinzipien, während du sie anwendest \u2014 nicht davor. Nach 20 Minuten hast du ein fertiges Offer Blueprint, nicht ein Notizbuch voller Theorien.",
  },
  {
    question: "Welche Frameworks nutzt ihr?",
    answer:
      "Über 100 Frameworks aus 12 Standardwerken. Darunter Schwartz (Awareness Levels), Hormozi (Value Equation, Offer Stacking), Brunson (Value Ladder, Funnels), Cialdini (Persuasion), Kennedy (Sales Letters) und mehr. Die AI wendet das passende Framework für deine spezifische Situation an.",
  },
  {
    question: "Kann ich jederzeit kündigen?",
    answer:
      "Ja. Monatlich kündbar, keine Mindestlaufzeit. Deine Projekte und Daten bleiben 30 Tage nach Kündigung erhalten.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer:
      "Deine Projekte gehören dir. Du kannst sie jederzeit exportieren (Markdown, PDF). Wir nutzen deine Daten nicht zum Training und teilen sie nicht mit Dritten.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Häufige Fragen
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] px-6 data-[state=open]:border-[var(--border-default)]"
              >
                <AccordionTrigger className="font-heading text-base font-semibold text-[var(--text-primary)] hover:text-[var(--text-primary)] py-5 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-[var(--text-secondary)] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
