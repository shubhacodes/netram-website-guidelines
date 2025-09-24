"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the theme configurations
const themeConfigs = {
  1: {
    colors: {
      primaryGreen: "#0f2e15",
      secondaryGreen: "#dae2cb",
      beige: "#fefae0",
    },
    fonts: {
      heading: "var(--font-playfair)",
      body: "var(--font-instrument)",
    },
  },
  // Other themes will be added later
  2: {
    colors: {
      primaryGreen: "#384933",
      secondaryGreen: "#d8d9bc",
      beige: "#fffcf2",
    },
    fonts: {
      heading: "var(--font-hedvig)",
      body: "var(--font-mulish)",
    },
  },
  3: {
    colors: {
      primaryGreen: "#39442b",
      secondaryGreen: "#e9ebdd",
      beige: "#fdfdf1",
    },
    fonts: {
      heading: "var(--font-libre)",
      body: "var(--font-inter)",
    },
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(1);

  // Update data-theme attribute when theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme.toString());
  }, [activeTheme]);

  const value = {
    activeTheme,
    setActiveTheme,
    currentTheme: themeConfigs[activeTheme],
    themes: themeConfigs,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
