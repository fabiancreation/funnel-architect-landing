"use client";

import { Target, PenTool, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer, StaggerItem } from "./animation";
import { FrameworkRadar, ConversionFunnel } from "./graphs";

const pillars = [
  {
    icon: Target,
    badge: "Kostenlos",
    badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    title: "Offer Workshop",
    subtitle: "Finde heraus, was dein Markt wirklich will",
    description:
      "Ein geführter Prozess in vier Schritten. Du beantwortest Fragen, das System liefert strategische Erkenntnisse, die du allein nicht ableiten könntest.",
    steps: [
      "Dein Kunde \u2014 Wer kauft und warum?",
      "Dein Angebot \u2014 Was macht es unwiderstehlich?",
      "Deine Stufen \u2014 Wie führst du zum Kauf?",
      "Deine Positionierung \u2014 Warum du und nicht die anderen?",
    ],
    output: "Offer Blueprint mit AI-Analyse, False Beliefs, blinde Flecken und konkretem Aktionsplan.",
    span: "md:col-span-2",
  },
  {
    icon: PenTool,
    badge: "29\u20AC/mo",
    badgeClass: "text-[var(--text-muted)] border-[var(--border-default)]",
    title: "Copy Engine",
    subtitle: "Texte, die auf Strategie basieren",
    description:
      "Sales Pages, Email-Sequenzen, Ads, Prompt-Pakete \u2014 Section für Section geführt. Jede Empfehlung mit Erklärung, warum sie funktioniert.",
    bullets: [
      "Sales Pages (Short & Long-Form)",
      "Email-Sequenzen (Launch, Nurture, Cart)",
      "Ad Copy (Facebook, Instagram, Google)",
      "Prompt-Pakete für externe AI-Tools",
    ],
    span: "md:col-span-1",
  },
  {
    icon: Rocket,
    badge: "99\u20AC/mo",
    badgeClass: "text-[var(--text-muted)] border-[var(--border-default)]",
    title: "Campaign Planner",
    subtitle: "Vom Plan zum Launch",
    description:
      "Das System empfiehlt den passenden Funnel-Typ, erstellt die Launch-Sequenz und gibt dir einen personalisierten Wochenplan.",
    bullets: [
      "Funnel-Typ-Empfehlung mit Begründung",
      "Tag-für-Tag Launch-Sequenz",
      "Traffic-Strategie & Budget-Allokation",
      "KPIs & Diagnose-Baum zur Optimierung",
    ],
    span: "md:col-span-1",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
            Drei Säulen.{" "}
            <span className="gradient-text">Ein durchgängiger Prozess.</span>
          </h2>
          <p className="font-body text-lg text-[var(--text-secondary)]">
            Von der Strategie über den Text bis zur fertigen Kampagne.
          </p>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title} className={pillar.span}>
              <div className="group relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full card-hover">
                <div className="flex items-start justify-between mb-6">
                  <div className="rounded-xl bg-[var(--surface-elevated)] p-3">
                    <pillar.icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`font-body ${pillar.badgeClass}`}
                  >
                    {pillar.badge}
                  </Badge>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1">
                  {pillar.title}
                </h3>
                <p className="font-body text-sm text-indigo-500 dark:text-indigo-300 mb-4">
                  {pillar.subtitle}
                </p>
                <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {pillar.steps && (
                  <div className="space-y-3 mb-6">
                    {pillar.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xs font-bold text-indigo-500 dark:text-indigo-400 font-body">
                          {i + 1}
                        </span>
                        <span className="font-body text-sm text-[var(--text-primary)]">{step}</span>
                      </div>
                    ))}
                  </div>
                )}

                {pillar.bullets && (
                  <ul className="space-y-2">
                    {pillar.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="font-body text-sm text-[var(--text-primary)] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {pillar.output && (
                  <div className="mt-4 rounded-lg bg-[var(--code-bg)] border border-[var(--border-subtle)] p-4">
                    <p className="font-body text-xs text-[var(--text-muted)] uppercase tracking-wide mb-1">
                      Output
                    </p>
                    <p className="font-body text-sm text-[var(--text-primary)]">{pillar.output}</p>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Visual graphs row -- same grid as feature cards */}
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full flex flex-col items-center justify-center card-hover">
              <h4 className="font-heading text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest text-center mb-8">
                Framework-Abdeckung
              </h4>
              <FrameworkRadar />
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full flex flex-col justify-center card-hover">
              <h4 className="font-heading text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest text-center mb-8">
                Typischer Funnel-Durchlauf
              </h4>
              <ConversionFunnel />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
