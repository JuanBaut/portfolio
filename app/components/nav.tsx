"use client";

import Link from "next/link";
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
    <nav className="mb-12 py-5 lg:mb-16">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <HomeTitle />
        <div className="mt-6 flex flex-row items-center gap-4 md:ml-auto md:mt-0">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="relative flex align-middle transition-all hover:text-muted-foreground"
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

  return (
    <div className="flex items-center">
      <Link
        href="/"
        className="text-3xl font-medium tracking-tight transition hover:underline"
      >
        <TextScramble
          as="span"
          speed={0.02}
          trigger={isTriggered}
          onHoverStart={() => setIsTriggered(true)}
          onHoverEnd={() => setIsTriggered(false)}
        >
          {metaData.title}
        </TextScramble>
      </Link>
    </div>
  );
}
