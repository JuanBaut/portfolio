import { MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">John Doe</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Skills
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
