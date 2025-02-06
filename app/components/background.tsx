"use client";

import { useTheme } from "next-themes";

export default function BackgroundSvg() {
  const { theme } = useTheme();

  return (
    <svg
      className="absolute inset-0 -z-10 w-full h-[40%]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop
            offset="0%"
            stopColor="currentColor"
            className="text-muted-foreground/30"
          />
          <stop offset={theme === "light" ? "60%" : "100%"} stopOpacity={0} />
        </linearGradient>

        <pattern
          id="a"
          width="50"
          height="33.333"
          patternTransform="scale(2)"
          patternUnits="userSpaceOnUse"
        >
          <rect width="100%" height="100%" fill="transparent" />
          <path
            fill="#fff"
            d="M25 .806v2.79h.8V.806Zm0 4.465v2.791h.8v-2.79Zm-2.043 3.902-2.32 1.55.444.665 2.32-1.55zm4.885 0-.444.665 2.32 1.55.445-.665zM-.4 10.61v2.79h.8v-2.79zm50 0v2.79h.8v-2.79zm-30.356 1.042-2.32 1.55.443.666 2.322-1.55-.444-.666zm12.311 0-.444.665 2.32 1.55.445-.664zm3.783 2.566-.444.666 2.321 1.55.444-.666zm-19.852.025-2.32 1.55.444.665 2.32-1.55zm-15.886.77v2.79h.8v-2.79Zm50 0v2.79h.8v-2.79zm-50 4.465v2.79h.8v-2.79zm50 0v2.79h.8v-2.79zM2.442 23.379l-.444.665 2.32 1.55.445-.665zm45.115 0-2.32 1.55.443.666 2.322-1.55zM6.155 25.86l-.444.665 2.32 1.55.445-.665zm37.69 0-2.322 1.55.444.665 2.321-1.55-.444-.666zM9.937 28.424l-.444.665 2.32 1.55.445-.665zm30.11.003-2.321 1.55.444.666 2.321-1.55zM25 29.737v2.79h.8v-2.79z"
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
