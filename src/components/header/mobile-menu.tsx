"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "../ui/button";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="size-8 p-1" variant={"ghost"} size={"icon"} asChild>
          <Ellipsis />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby="">
        <SheetHeader>
          <SheetTitle className="font-bold text-xl">/a</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-8 pt-16">
          <SheetButton href="#">About me</SheetButton>
          <SheetButton href="#projects">Projects</SheetButton>
          <SheetButton href="#skills">Skills</SheetButton>
          <SheetButton href="#experience">Experience</SheetButton>
          <SheetButton href="#contact">Contact</SheetButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface Props {
  href: string;
  children: ReactNode;
}

function SheetButton({ href, children }: Props) {
  const router = useRouter();
  return (
    <SheetTrigger onClick={() => router.push(href)} className="text-start">
      <p className="text-lg font-medium underline-offset-4 focus:underline">
        {children}
      </p>
    </SheetTrigger>
  );
}
