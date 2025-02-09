"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { metaData } from "../../config";
import LocaleSwitch from "./locale-switch";
import { ThemeSwitch } from "./theme-switch";
import { TextScramble } from "./ui/text-scramble";

export function Navbar() {
  const t = useTranslations();

  const navItems = {
    "/projects": { name: t("nav.projects") },
    "/blog": { name: t("nav.blog") },
    "/photos": { name: t("nav.photos") },
  };

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

          <div className="flex flex-row gap-2">
            <LocaleSwitch />
            <ThemeSwitch />
          </div>
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
      className="text-3xl font-medium hover:opacity-80 underline-offset-2"
      onMouseDown={() => router.push("/")}
    >
      <TextScramble
        as="div"
        speed={0.01}
        trigger={isTriggered}
        onHoverStart={() => setIsTriggered(true)}
        onHoverEnd={() => setIsTriggered(false)}
      >
        {metaData.title}
      </TextScramble>
    </div>
  );
}
