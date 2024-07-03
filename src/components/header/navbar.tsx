import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="fixed flex w-full justify-center p-4">
      <div className="flex h-12 min-w-[320px] rounded-lg items-center border bg-secondary/20 backdrop-blur-lg px-4">
        <div className="flex gap-2 items-center justify-center">
          <Link href="#" prefetch={false}>
            <span className="font-bold text-2xl">/a</span>
            <span className="sr-only">Juan Andres Bautista</span>
          </Link>
          <ThemeToggle />
        </div>

        <nav className="ml-auto flex gap-4 sm:gap-6">
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
            href="#contact"
            className="text-sm font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
