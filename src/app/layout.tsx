import { cn } from "@lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metaData } from "config";
import { routing } from "i18n/routing";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Golos_Text, JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import { ReactNode } from "react";
import BaseLayout from "@components/base-layout";
import { ThemeProvider } from "@components/theme-switch";
import "./global.css";
import notFound from "./not-found";

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

export default async function RootLayout({
  children,
  params: { locale },
}: { children: ReactNode; params: { locale: string } }) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
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
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            disableTransitionOnChange
            defaultTheme="system"
            attribute="class"
            enableSystem
          >
            <BaseLayout>{children}</BaseLayout>

            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
