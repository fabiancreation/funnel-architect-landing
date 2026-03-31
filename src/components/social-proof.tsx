"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./animation";
import { GrowthChart } from "./graphs";

const testimonials = [
  {
    quote:
      "Ich habe drei Online-Kurse gekauft und keinen fertig gemacht. Mit Funnel Architect hatte ich nach 25 Minuten einen Angebotsplan, der besser war als alles, was ich in Monaten zusammengebastelt hatte.",
    name: "Sarah M.",
    role: "Business Coach",
    initial: "S",
    color: "bg-indigo-500",
  },
  {
    quote:
      "Der Vergleich zwischen meinem alten ChatGPT-Prompt und dem, was Funnel Architect daraus macht, ist absurd. Endlich Texte, die sich nicht wie jeder andere lesen.",
    name: "Thomas K.",
    role: "Online-Kurs-Ersteller",
    initial: "T",
    color: "bg-violet-500",
  },
  {
    quote:
      "Zum ersten Mal weiß ich nicht nur WAS ich tun soll, sondern WARUM. Das System erklärt jede Empfehlung. Man lernt beim Umsetzen.",
    name: "Lisa R.",
    role: "Freelance Beraterin",
    initial: "L",
    color: "bg-emerald-500",
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 2000;
          const start = performance.now();

          function animate(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 2400, suffix: "+", label: "Blueprints erstellt" },
  { value: 87, suffix: "%", label: "Workshop-Completion-Rate" },
  { value: 23, suffix: " Min.", label: "Durchschnitt zum Blueprint" },
];

export function SocialProof() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Solo-Unternehmer vertrauen auf{" "}
            <span className="gradient-text">Funnel Architect</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3 mb-16">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 h-full flex flex-col card-hover">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="font-body text-sm text-[var(--text-primary)] leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold text-white`}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-[var(--text-primary)]">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-[var(--text-muted)]">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Metrics + Growth Chart */}
        <FadeIn>
          <div className="grid gap-8 sm:grid-cols-3 max-w-3xl mx-auto mb-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-heading text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-2">
                  <CountUp target={m.value} suffix={m.suffix} />
                </p>
                <p className="font-body text-sm text-[var(--text-muted)]">{m.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 card-hover">
            <h4 className="font-heading text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest text-center mb-6">
              Wachstum nach Funnel-Launch
            </h4>
            <GrowthChart />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
