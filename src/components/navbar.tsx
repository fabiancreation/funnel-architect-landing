"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
        scrolled
          ? "border-[var(--border-default)] bg-[var(--nav-bg)] backdrop-blur-xl shadow-lg shadow-black/10"
          : "border-transparent bg-[var(--nav-bg)] backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#" className="font-heading text-lg font-bold tracking-tight text-[var(--text-primary)]">
          Funnel Architect
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 glow-emerald-sm"
          >
            Kostenlos starten
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer p-1"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border-default)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-body text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm w-full py-2 rounded-lg cursor-pointer"
          >
            Kostenlos starten
          </a>
        </div>
      )}
    </nav>
  );
}
