import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import React from "react";
import "./globals.css";
import MainLayout from "./main-layout";

const martian = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andres Bautista",
  description: "I like building stuff.",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }, { locale: "de" }];
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Readonly<Props>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta id="metaThemeColor" name="theme-color" media="(prefers-color-scheme: dark)" content="#05090a" />
        <meta id="metaThemeColor" name="theme-color" media="(prefers-color-scheme: light)" content="#f5f9fa" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={martian.className}>
        <MainLayout locale={locale}>{children}</MainLayout>
      </body>
    </html>
  );
}
