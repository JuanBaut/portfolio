import ContactMenu from "@/components/contact-menu";
import Navbar from "@/components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import SubLayout from "./[locale]/client/layout";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export default function MainLayout({ children, locale }: Readonly<Props>) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <SubLayout params={{ locale }}>
          <Navbar />
        </SubLayout>
        {children}
        <ContactMenu />
      </ThemeProvider>
      <SpeedInsights />
    </>
  );
}
