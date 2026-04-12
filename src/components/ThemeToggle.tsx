"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme-preference";

function getSystemTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  const colors =
    theme === "dark"
      ? {
          background: "#0a0a0a",
          foreground: "#ededed",
          surface: "#111827",
          surfaceStrong: "#0f172a",
          border: "#1f2937",
          muted: "#a1a1aa",
          mutedStrong: "#94a3b8",
        }
      : {
          background: "#ffffff",
          foreground: "#0f172a",
          surface: "#f8fafc",
          surfaceStrong: "#ffffff",
          border: "#e2e8f0",
          muted: "#475569",
          mutedStrong: "#64748b",
        };

  root.style.setProperty("--background", colors.background);
  root.style.setProperty("--foreground", colors.foreground);
  root.style.setProperty("--surface", colors.surface);
  root.style.setProperty("--surface-strong", colors.surfaceStrong);
  root.style.setProperty("--border", colors.border);
  root.style.setProperty("--muted", colors.muted);
  root.style.setProperty("--muted-strong", colors.mutedStrong);
  root.style.setProperty(
    "--icon-filter",
    theme === "dark" ? "invert(0)" : "invert(1)"
  );
  root.style.colorScheme = theme;
  root.dataset.theme = theme;
}

type ThemeToggleProps = {
  onToggle?: (nextTheme: "light" | "dark") => void;
};

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    const initial = saved ?? getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);
    setAnimationKey((key) => key + 1);

    const currentTheme = theme;
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    onToggle?.(currentTheme);

    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 820);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleTheme}
        className="rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition hover:border-[color:var(--foreground)] hover:text-[var(--foreground)]"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </>
  );
}
