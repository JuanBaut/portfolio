"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import React, { useEffect } from "react";
import { FaCircleHalfStroke } from "react-icons/fa6";

// Key to store user preference in localStorage
const storageKey = "theme-preference";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">(
    "light",
  );

  // Reflects preference based on system or manual choice
  const reflectPreference = React.useCallback(
    (newTheme: "light" | "dark") => {
      document.documentElement.classList.remove("bg-light", "bg-dark");
      document.documentElement.classList.add(`bg-${newTheme}`);
      setCurrentTheme(newTheme);
      setTheme(newTheme);
    },
    [setTheme],
  );

  // Determine initial theme preference
  useEffect(() => {
    const storedPreference = localStorage.getItem(storageKey) as
      | "light"
      | "dark"
      | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const initialTheme = storedPreference || systemPreference;
    reflectPreference(initialTheme);

    // Watch for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const newTheme = mediaQuery.matches ? "dark" : "light";
      if (!storedPreference) reflectPreference(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [reflectPreference]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  return (
    <button
      id="theme-toggle"
      aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
      onClick={toggleTheme}
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke
        className={`h-[14px] w-[14px] ${currentTheme === "dark" ? "text-[#D4D4D4]" : "text-[#1c1c1c]"}`}
      />
    </button>
  );
}
