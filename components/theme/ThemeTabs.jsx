"use client";

import { useTheme } from "@/app/contexts/ThemeContext";

export default function ThemeTabs() {
  const { activeTheme, setActiveTheme, themes } = useTheme();

  return (
    <div className="hidden sm:flex items-center gap-2 bg-white/70 backdrop-blur rounded-lg p-1 border border-theme-dark/20">
      {Object.keys(themes).map((themeId) => (
        <button
          key={themeId}
          onClick={() => setActiveTheme(Number(themeId))}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 theme-body ${
            activeTheme === Number(themeId)
              ? "bg-theme-primary text-theme-on-dark"
              : "text-theme-on-light hover:bg-theme-primary/10"
          }`}
        >
          BG {themeId}
        </button>
      ))}
    </div>
  );
}
