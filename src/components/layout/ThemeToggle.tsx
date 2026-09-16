"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This avoids hydration mismatch while keeping the theme toggle client-safe.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle colour theme"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-white/90 text-navy shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-cream"
      >
        <SunMedium className="h-4 w-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-navy/10 bg-white/90 text-navy shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-cream"
    >
      <span
        className={`absolute inset-0 transition-transform duration-300 ${isDark ? "translate-y-0" : "-translate-y-full"}`}
        aria-hidden="true"
      />
      {isDark ? <SunMedium className="relative z-10 h-4 w-4" /> : <Moon className="relative z-10 h-4 w-4" />}
    </button>
  );
}
