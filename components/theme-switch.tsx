"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      data-cursor="interactive"
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-[var(--deep-navy)]/15 bg-[var(--surface)]/90 text-[var(--text-primary)] shadow-2xl shadow-black/10 backdrop-blur-[0.5rem] transition-all hover:scale-[1.12] active:scale-105 dark:border-white/15"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
