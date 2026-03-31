import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading text-lg font-bold text-[var(--text-primary)]">
              Funnel Architect
            </p>
            <p className="font-body text-sm text-[var(--text-muted)] mt-1">
              Marketing ist kein Talent. Es ist ein System.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-body text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#"
              className="font-body text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              AGB
            </a>
          </nav>
        </div>

        <Separator className="my-8 bg-[var(--border-subtle)]" />

        <p className="font-body text-xs text-[var(--text-muted)] text-center">
          Made with Strategie
        </p>
      </div>
    </footer>
  );
}
