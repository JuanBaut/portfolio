"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const getCssVariableValue = (variable: string): string => {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue(variable).trim();
  };

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const bgColor = getCssVariableValue("--background");
    console.log(bgColor);
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", bgColor);
    }
  }, [theme]);

  const handleChangeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-8"
      onClick={handleChangeTheme}
    >
      <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
