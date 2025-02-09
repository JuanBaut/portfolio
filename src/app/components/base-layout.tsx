import { ReactNode } from "react";
import Footer from "./footer";
import { Navbar } from "./nav";
import BackgroundSvg from "./background";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-2 mb-20 antialiased lg:mt-8 lg:mb-40">
      <main className="flex z-50 flex-col flex-auto px-6 mt-2 w-full min-w-0 sm:px-4 md:px-0 md:mt-6 max-w-(--breakpoint-sm)">
        <BackgroundSvg />
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
