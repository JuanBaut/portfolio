import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./config";
import "./global.css";
import { cn } from "./lib/utils";
import Head from "next/head";
import BackgroundSvg from "./components/background";

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const fontSans = Golos_Text({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-sans",
});

const fontMono = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <Head>
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
      </Head>
      <body className="flex flex-col justify-center items-center mx-auto mt-2 mb-20 antialiased lg:mt-8 lg:mb-40">
        <ThemeProvider>
          <main className="flex z-50 flex-col flex-auto px-6 mt-2 w-full min-w-0 sm:px-4 md:px-0 md:mt-6 max-w-(--breakpoint-sm)">
            <BackgroundSvg />
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
