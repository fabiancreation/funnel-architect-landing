"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Animated conversion funnel graph
 */
export function ConversionFunnel() {
  const stages = [
    { label: "Besucher", width: 100, value: "10.000", color: "#6366F1" },
    { label: "Leads", width: 72, value: "3.200", color: "#818CF8" },
    { label: "Qualifiziert", width: 48, value: "1.400", color: "#8B5CF6" },
    { label: "Kunden", width: 28, value: "480", color: "#10B981" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="space-y-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="flex items-center gap-3"
            style={{ originX: 0 }}
          >
            <div
              className="h-9 rounded-lg flex items-center justify-end px-3"
              style={{
                width: `${stage.width}%`,
                backgroundColor: stage.color,
              }}
            >
              <span className="text-white text-xs font-bold font-body whitespace-nowrap">
                {stage.value}
              </span>
            </div>
            <span className="text-xs font-body text-[var(--text-muted)] whitespace-nowrap">
              {stage.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Animated growth line chart using canvas for reliable animation
 */
export function GrowthChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    // Growth curve data points (x: 0-1, y: 0-1 where 1 is top)
    const dataPoints = [
      { x: 0, y: 0.05 }, { x: 0.08, y: 0.08 }, { x: 0.15, y: 0.12 },
      { x: 0.25, y: 0.18 }, { x: 0.35, y: 0.28 }, { x: 0.45, y: 0.4 },
      { x: 0.55, y: 0.52 }, { x: 0.65, y: 0.62 }, { x: 0.75, y: 0.72 },
      { x: 0.85, y: 0.8 }, { x: 0.92, y: 0.86 }, { x: 1, y: 0.92 },
    ];

    const pad = { top: 20, right: 20, bottom: 30, left: 10 };
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    function toX(v: number) { return pad.left + v * chartW; }
    function toY(v: number) { return pad.top + chartH - v * chartH; }

    const duration = 1500;
    const start = performance.now();

    function draw(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      ctx!.clearRect(0, 0, w, h);

      // Grid lines
      ctx!.strokeStyle = "var(--border-subtle)";
      ctx!.lineWidth = 0.5;
      ctx!.setLineDash([4, 4]);
      for (let i = 0; i <= 4; i++) {
        const y = toY(i / 4);
        ctx!.beginPath();
        ctx!.moveTo(pad.left, y);
        ctx!.lineTo(w - pad.right, y);
        ctx!.stroke();
      }
      ctx!.setLineDash([]);

      // Determine how many points to draw based on progress
      const totalLen = dataPoints.length - 1;
      const currentLen = eased * totalLen;
      const fullSegments = Math.floor(currentLen);
      const partialT = currentLen - fullSegments;

      // Build path up to current progress
      const visiblePoints: { x: number; y: number }[] = [];
      for (let i = 0; i <= fullSegments && i < dataPoints.length; i++) {
        visiblePoints.push({ x: toX(dataPoints[i].x), y: toY(dataPoints[i].y) });
      }
      if (fullSegments < totalLen) {
        const a = dataPoints[fullSegments];
        const b = dataPoints[fullSegments + 1];
        visiblePoints.push({
          x: toX(a.x + (b.x - a.x) * partialT),
          y: toY(a.y + (b.y - a.y) * partialT),
        });
      }

      if (visiblePoints.length < 2) {
        if (progress < 1) requestAnimationFrame(draw);
        return;
      }

      // Area fill
      ctx!.beginPath();
      ctx!.moveTo(visiblePoints[0].x, toY(0));
      for (const p of visiblePoints) ctx!.lineTo(p.x, p.y);
      ctx!.lineTo(visiblePoints[visiblePoints.length - 1].x, toY(0));
      ctx!.closePath();
      const gradient = ctx!.createLinearGradient(0, pad.top, 0, h - pad.bottom);
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.15)");
      gradient.addColorStop(1, "rgba(99, 102, 241, 0)");
      ctx!.fillStyle = gradient;
      ctx!.fill();

      // Line
      ctx!.beginPath();
      ctx!.moveTo(visiblePoints[0].x, visiblePoints[0].y);
      for (let i = 1; i < visiblePoints.length; i++) {
        ctx!.lineTo(visiblePoints[i].x, visiblePoints[i].y);
      }
      ctx!.strokeStyle = "#6366F1";
      ctx!.lineWidth = 2.5;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";
      ctx!.stroke();

      // End dot
      const lastP = visiblePoints[visiblePoints.length - 1];
      if (progress > 0.9) {
        const dotOpacity = (progress - 0.9) / 0.1;
        ctx!.beginPath();
        ctx!.arc(lastP.x, lastP.y, 5, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(16, 185, 129, ${dotOpacity})`;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.arc(lastP.x, lastP.y, 3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(16, 185, 129, ${dotOpacity})`;
        ctx!.fill();
      }

      // Labels
      ctx!.font = "11px var(--font-inter), system-ui, sans-serif";
      ctx!.fillStyle = "var(--text-muted)";
      ctx!.textAlign = "left";
      ctx!.fillText("Woche 1", pad.left, h - 8);
      ctx!.textAlign = "right";
      ctx!.fillText("Woche 8", w - pad.right, h - 8);

      if (progress < 1) requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }, [visible]);

  return (
    <div ref={containerRef} className="w-full">
      <canvas
        ref={canvasRef}
        className="w-full h-[200px]"
        aria-label="Wachstumskurve nach Funnel-Launch"
      />
    </div>
  );
}

/**
 * Framework coverage radar
 */
export function FrameworkRadar() {
  const axes = [
    { label: "Strategie", value: 0.95 },
    { label: "Copy", value: 0.88 },
    { label: "Funnel", value: 0.82 },
    { label: "Traffic", value: 0.75 },
    { label: "Analyse", value: 0.9 },
    { label: "Launch", value: 0.78 },
  ];
  const cx = 50, cy = 46, r = 34;
  const n = axes.length;

  function polarToXY(index: number, value: number) {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2;
    return {
      x: cx + r * value * Math.cos(angle),
      y: cy + r * value * Math.sin(angle),
    };
  }

  const dataPoints = axes.map((a, i) => polarToXY(i, a.value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[360px] mx-auto"
    >
      <svg viewBox="0 0 100 96" className="w-full h-auto" style={{ minHeight: "280px" }}>
        {/* Grid rings */}
        {[0.33, 0.66, 1].map((scale) => {
          const ringPoints = Array.from({ length: n }, (_, i) => polarToXY(i, scale));
          const ringPath = ringPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
          return (
            <path
              key={scale}
              d={ringPath}
              fill="none"
              stroke="var(--border-subtle)"
              strokeWidth="0.3"
            />
          );
        })}

        {/* Axis lines */}
        {axes.map((_, i) => {
          const end = polarToXY(i, 1);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={end.x}
              y2={end.y}
              stroke="var(--border-subtle)"
              strokeWidth="0.2"
            />
          );
        })}

        {/* Data shape with gradient fill */}
        <motion.path
          d={dataPath}
          fill="url(#radarFill)"
          stroke="#6366F1"
          strokeWidth="1.2"
          strokeLinejoin="round"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Data points with glow */}
        {dataPoints.map((p, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="3"
              fill="#6366F1"
              fillOpacity="0.25"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08 }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="1.6"
              fill="#6366F1"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
            />
          </motion.g>
        ))}

        {/* Labels */}
        {axes.map((a, i) => {
          const pos = polarToXY(i, 1.25);
          return (
            <text
              key={a.label}
              x={pos.x}
              y={pos.y + 1.2}
              textAnchor="middle"
              fill="var(--text-secondary)"
              fontSize="3.5"
              fontWeight="600"
              fontFamily="var(--font-inter), system-ui"
            >
              {a.label}
            </text>
          );
        })}

        {/* Percentage labels on data points */}
        {axes.map((a, i) => {
          const pos = polarToXY(i, a.value - 0.14);
          return (
            <text
              key={`val-${a.label}`}
              x={pos.x}
              y={pos.y + 1}
              textAnchor="middle"
              fill="#818CF8"
              fontSize="2.8"
              fontWeight="700"
              fontFamily="var(--font-inter), system-ui"
            >
              {Math.round(a.value * 100)}%
            </text>
          );
        })}

        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.05" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

/**
 * Before/After bar comparison
 */
export function BeforeAfterBars() {
  const metrics = [
    { label: "Conversion Rate", before: 1.2, after: 4.8, unit: "%" },
    { label: "Time to Launch", before: 8, after: 2, unit: " Wochen", invert: true },
    { label: "Copy Qualität", before: 35, after: 87, unit: "/100" },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {metrics.map((m, i) => {
        const maxVal = m.invert ? m.before : m.after;
        const beforePct = (m.before / maxVal) * 100;
        const afterPct = (m.after / maxVal) * 100;

        return (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <p className="font-body text-xs font-medium text-[var(--text-secondary)] mb-2">{m.label}</p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-body text-[var(--text-muted)] w-12">Vorher</span>
                <div className="flex-1 h-5 bg-[var(--surface-elevated)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-zinc-500/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${beforePct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                  />
                </div>
                <span className="text-xs font-bold font-body text-[var(--text-muted)] w-20 text-right">
                  {m.before}{m.unit}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-body text-emerald-500 font-medium w-12">Nachher</span>
                <div className="flex-1 h-5 bg-[var(--surface-elevated)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.invert ? (1 - m.after / maxVal) * 100 : afterPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                  />
                </div>
                <span className="text-xs font-bold font-body text-emerald-500 w-20 text-right">
                  {m.after}{m.unit}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
