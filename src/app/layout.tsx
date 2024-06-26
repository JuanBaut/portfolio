import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";
import ContactMenu from "@/components/contact-menu";

const martian = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andres Bautista",
  description: "I like building stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          id="metaThemeColor"
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#05090a"
        />
        <meta
          id="metaThemeColor"
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f5f9fa"
        />
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
      </head>
      <body className={martian.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ContactMenu />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
