import { CodeXml } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed flex h-14 w-full items-center border-b border-b-muted px-4 backdrop-blur lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <CodeXml className="size-6" />
        <span className="sr-only">Juan Andres Bautista</span>
      </Link>
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
