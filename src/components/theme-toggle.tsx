"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-default)] cursor-pointer transition-colors duration-200 flex items-center"
      aria-label={theme === "dark" ? "Zum Light Mode wechseln" : "Zum Dark Mode wechseln"}
    >
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${
          theme === "dark"
            ? "left-0.5 bg-zinc-700"
            : "left-[calc(100%-1.625rem)] bg-white shadow-sm shadow-black/10"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-indigo-300" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        )}
      </span>
    </button>
  );
}
