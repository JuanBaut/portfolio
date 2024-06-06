"use client";

import { Languages } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useChangeLocale } from "@/locales/client";

export default function LocaleSwitch() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="size-7 p-0">
          <Languages className="size-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Emoji lang="es" name="Español" emoji="&#127464;&#127476;" />
        <Emoji lang="en" name="English" emoji="&#127482;&#127480;" />
        <Emoji lang="de" name="Deutsch" emoji="&#127465;&#127466;" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type Props = {
  name: string;
  emoji: string;
  lang: "en" | "es" | "de";
};

function Emoji({ name, emoji, lang }: Props) {
  const changeLocale = useChangeLocale();
  return (
    <>
      <DropdownMenuItem
        className="flex justify-between"
        onClick={() => changeLocale(lang)}
      >
        {name}
        <span
          role="img"
          aria-label="flag: Germany"
          className="text-xl leading-none"
        >
          {emoji}
        </span>
      </DropdownMenuItem>
    </>
  );
}
