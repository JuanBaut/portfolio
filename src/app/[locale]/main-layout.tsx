import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function MainLayout({ children, locale }: Readonly<Props>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {/*<SubLayout params={{ locale }}>*/}
        {/*</SubLayout>*/}
        {children}
      </ThemeProvider>
      <SpeedInsights />
    </>
  );
}
