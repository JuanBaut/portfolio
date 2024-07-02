import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="fixed flex h-14 w-full items-center border-b border-b-muted px-4 backdrop-blur lg:px-6">
      <div className="flex gap-4 items-center justify-center">
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
    </header>
  );
}
