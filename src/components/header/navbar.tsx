import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <header className="fixed z-50 flex w-full justify-center p-4">
      <div className="flex h-12 w-full max-w-[420px] rounded-lg items-center border bg-secondary/40 backdrop-blur-lg px-4">
        <div className="flex gap-2 items-center justify-center">
          <Link href="#" prefetch={false}>
            <span className="font-bold text-2xl">/a</span>
            <span className="sr-only">Juan Andres Bautista</span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="ml-auto hidden sm:block">
          <nav className="flex gap-4">
            <Link
              href="#projects"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="ml-auto block sm:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
