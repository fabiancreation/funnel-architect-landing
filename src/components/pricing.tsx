"use client";

import { useState } from "react";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "./animation";

const plans = [
  {
    name: "Free",
    subtitle: "Offer Workshop",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "1 Projekt",
      "5 AI-Anfragen pro Tag",
      "Offer Workshop (alle 4 Schritte)",
      "Offer Blueprint mit AI-Analyse",
      "Export: Markdown, PDF",
    ],
    cta: "Kostenlos starten",
    highlighted: false,
  },
  {
    name: "Builder",
    subtitle: "Am beliebtesten",
    monthlyPrice: 39,
    yearlyPrice: 390,
    features: [
      "10 Projekte",
      "Unbegrenzte AI-Anfragen",
      "Alles aus Free",
      "Copy Engine (Sales Pages, Emails, Ads)",
      "Prompt-Pakete für externe Tools",
      "Warum-Layer: Lerne beim Umsetzen",
    ],
    cta: "Builder starten",
    highlighted: true,
  },
  {
    name: "Strategist",
    subtitle: "Für ambitionierte Unternehmer",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    features: [
      "Unbegrenzte Projekte",
      "Alles aus Builder",
      "Campaign Planner",
      "Personalisierter Execution Plan",
      "Copy Scoring gegen 58+ Checklisten",
      "Monatlicher AI Strategy Review",
    ],
    cta: "Strategist starten",
    highlighted: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
            Wähle deinen Plan
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)] mb-8">
            Starte kostenlos. Upgrade, wenn du bereit bist.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm font-body font-medium transition-all cursor-pointer ${
                !yearly
                  ? "bg-[var(--surface-elevated)] text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-sm font-body font-medium transition-all cursor-pointer flex items-center gap-2 ${
                yearly
                  ? "bg-[var(--surface-elevated)] text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
              }`}
            >
              Jährlich
              <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 text-xs">
                2 Monate gratis
              </Badge>
            </button>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={`relative rounded-2xl border p-8 h-full flex flex-col transition-all duration-200 ${
                  plan.highlighted
                    ? "border-indigo-500/40 bg-[var(--card-bg)] glow-indigo-sm"
                    : "border-[var(--border-subtle)] bg-[var(--card-bg)] hover:border-[var(--border-default)]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-indigo-500 text-white font-body text-xs px-3">
                      Empfohlen
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-xl font-bold text-[var(--text-primary)]">
                    {plan.name}
                  </h3>
                  <p className="font-body text-sm text-[var(--text-muted)]">{plan.subtitle}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-[var(--text-primary)]">
                      ${yearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="font-body text-sm text-[var(--text-muted)]">/Monat</span>
                    )}
                  </div>
                  {yearly && plan.yearlyPrice > 0 && (
                    <p className="font-body text-xs text-[var(--text-muted)] mt-1">
                      ${plan.yearlyPrice}/Jahr abgerechnet
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-sm text-[var(--text-primary)]"
                    >
                      <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full cursor-pointer font-semibold text-sm py-5 ${
                    plan.highlighted
                      ? "bg-emerald-500 hover:bg-emerald-400 text-white glow-emerald-sm"
                      : "bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] border border-[var(--border-default)]"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Guarantee */}
        <FadeIn delay={0.3} className="mt-12 text-center">
          <div className="inline-flex items-start gap-3 max-w-2xl text-left rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] px-6 py-5">
            <Shield className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
            <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="text-[var(--text-primary)] font-medium">Geld-zurück-Garantie:</span>{" "}
              Arbeite den kompletten Offer Workshop durch. Wenn dein Blueprint nicht
              besser ist als alles, was du bisher allein oder mit ChatGPT erstellt hast,
              bekommst du dein Geld zurück.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
