# Funnel Architect -- Design System

## Asthetische Richtung: "Confident Clarity"

Nicht das typische SaaS-Blau-Weiss, nicht das ueberladene Marketing-Orange. Stattdessen: eine dunkle, selbstbewusste Grundstimmung mit praezisen Akzenten -- wie ein erfahrener Berater, der den Raum betritt und sofort Vertrauen ausstrahlt.

---

## Farbpalette

| Token | Hex | Tailwind | Verwendung |
|-------|-----|----------|------------|
| Background | `#09090B` | `zinc-950` | Seiten-Hintergrund |
| Surface | `#18181B` | `zinc-900` | Cards, Sections |
| Surface erhoht | `#27272A` | `zinc-800` | Hover-States, erhabene Elemente |
| Border | `#3F3F46` | `zinc-700` | Card-Borders, Trennlinien |
| Primary | `#6366F1` | `indigo-500` | Akzentfarbe, Links, Highlights |
| Primary Glow | `#818CF8` | `indigo-400` | Hover, Gradients |
| CTA | `#10B981` | `emerald-500` | Call-to-Action Buttons |
| CTA Hover | `#34D399` | `emerald-400` | CTA Hover-State |
| Text primaer | `#FAFAFA` | `zinc-50` | Headlines, Body Text |
| Text sekundaer | `#A1A1AA` | `zinc-400` | Untertitel, Beschreibungen |
| Text muted | `#71717A` | `zinc-500` | Labels, Hinweise |

**Akzent-Gradient:** `linear-gradient(135deg, #6366F1, #8B5CF6, #A78BFA)` -- Indigo zu Violet, fuer Hero-Elemente und Eyebrows.

---

## Warum Dark Mode

- Differenziert sofort von 90% der SaaS-Landing-Pages
- Wirkt premium und technisch kompetent (Linear, Vercel, Raycast Aesthetik)
- Laesst farbige Akzente und Glow-Effekte deutlich staerker wirken
- Passt zur Zielgruppe: Solo-Unternehmer die Tools wie Notion, Figma, VS Code nutzen

---

## Typografie

| Rolle | Font | Groesse | Weight | Spacing |
|-------|------|---------|--------|---------|
| Hero-Headline | Satoshi | 64-80px | 700 | -0.03em |
| Section-Headlines | Satoshi | 40-48px | 600 | -0.02em |
| Card-Headlines | Satoshi | 24-28px | 600 | -0.01em |
| Body | Inter | 18px | 400 | normal |
| Body small | Inter | 16px | 400 | normal |
| Labels/Badges | Inter | 14px | 500 | 0.05em |
| Code/Frameworks | JetBrains Mono | 14px | 400 | normal |

- Line-height Body: 1.7
- Line-height Headlines: 1.1
- Max Zeilenlaenge Body: 65-75 Zeichen

---

## Effekte & Mikrointeraktionen

### Grain-Overlay
CSS noise texture auf dem Background, opacity 0.03 -- gibt dem dunklen Hintergrund subtile Textur.

### Glow-Effekte
- Hero: Grosser radial-gradient Glow hinter dem Hauptelement (Indigo/Violet, blur 120px)
- CTA-Buttons: `box-shadow: 0 0 20px rgba(16,185,129,0.3)`
- Pricing "Popular" Card: Indigo-Glow am oberen Rand

### Cards
- `border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm`
- Hover: `border-zinc-700` + subtiler Glow-Shift
- Transition: `transition-all duration-200 ease-out`

### Scroll-Animationen (Framer Motion)
- `fadeInUp`: translateY(20px) + opacity 0 zu translateY(0) + opacity 1
- Staggered delay: 150ms zwischen Elementen
- Duration: 500ms, ease-out
- Trigger: `whileInView` mit `viewport={{ once: true, amount: 0.3 }}`

### Stat-Counter
- Count-up Animation beim Einscrollen
- Duration: 2s, ease-out

### Reduced Motion
- Alle Animationen respektieren `prefers-reduced-motion: reduce`
- Fallback: Sofortige Anzeige ohne Animation

---

## Layout-Prinzipien

| Element | Wert |
|---------|------|
| Content max-width | `max-w-6xl` (1152px) |
| Full sections | `max-w-7xl` (1280px) |
| Section padding | 96-120px vertikal |
| Card gap | 24-32px |
| Navbar | Floating, `bg-zinc-950/80 backdrop-blur-xl`, `top-4 left-4 right-4` |
| Breakpoints | 375px, 768px, 1024px, 1440px |

### Bento Grid (Features)
- Desktop: 3 Spalten, variable Hoehen
- Tablet: 2 Spalten
- Mobile: 1 Spalte, gestapelt

---

## Icons

Lucide React -- konsistente Linienstilrke, 24x24 viewBox, `w-5 h-5` oder `w-6 h-6`.

Keine Emojis als Icons. Niemals.

---

## Accessibility

- Farbkontraste WCAG AA (4.5:1 minimum)
- Visible Focus-States auf allen interaktiven Elementen
- Tastatur-Navigation: Tab-Order folgt visueller Reihenfolge
- `aria-label` auf Icon-only Buttons
- Touch-Targets mindestens 44x44px
