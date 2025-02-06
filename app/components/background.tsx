"use client";

import { useTheme } from "next-themes";

export default function BackgroundSvg() {
  const { theme } = useTheme();

  return (
    <svg
      className="absolute inset-0 -z-10 w-full h-[50%]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop
            offset="0%"
            stopColor="currentColor"
            className="text-muted-foreground/35"
          />
          <stop offset={theme === "light" ? "60%" : "100%"} stopOpacity={0} />
        </linearGradient>

        <pattern
          id="a"
          width="69.141"
          height="40"
          patternTransform="scale(2)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="transparent" />
          <path
            stroke="#fff"
            strokeWidth={theme === "light" ? 0.3 : 0.5}
            d="M69.212 40H46.118L34.57 20 46.118 0h23.094l11.547 20zM57.665 60H34.57L23.023 40 34.57 20h23.095l11.547 20zm0-40H34.57L23.023 0 34.57-20h23.095L69.212 0zM34.57 60H11.476L-.07 40l11.547-20h23.095l11.547 20zm0-40H11.476L-.07 0l11.547-20h23.095L46.118 0zM23.023 40H-.07l-11.547-20L-.07 0h23.094L34.57 20z"
          />
        </pattern>

        <mask id="patternMask">
          <rect width="100%" height="100%" fill="url(#a)" />
        </mask>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#gradient)"
        mask="url(#patternMask)"
      />
    </svg>
  );
}
