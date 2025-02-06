"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { metaData } from "../config";
import { ThemeSwitch } from "./theme-switch";
import { TextScramble } from "./ui/text-scramble";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="py-5 mb-12 lg:mb-16">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <HomeTitle />
        <div className="flex flex-row gap-4 items-center mt-6 md:mt-0 md:ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="flex relative align-middle transition-all hover:text-muted-foreground"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

function HomeTitle() {
  const [isTriggered, setIsTriggered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="text-3xl font-medium hover:underline underline-offset-2"
      onMouseDown={() => router.push("/")}
    >
      <TextScramble
        as="div"
        speed={0.02}
        trigger={isTriggered}
        onHoverStart={() => setIsTriggered(true)}
        onHoverEnd={() => setIsTriggered(false)}
      >
        {metaData.title}
      </TextScramble>
    </div>
  );
}
