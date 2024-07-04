import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Sublayout } from "./sublayout";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andres Bautista",
  description: "Web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="" />
      </head>
      <body className={font.className}>
        <Sublayout
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </Sublayout>
      </body>
    </html>
  );
}
