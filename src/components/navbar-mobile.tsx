"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import { Menu } from "lucide-react";

export default function NavbarMobile() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="m-0 size-5 p-0" />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <div className="mt-4 flex justify-center gap-2">
          <Link href={"/"}>
            {pathname === "/" ? (
              <Badge className="text-sm font-normal" variant={"outline"}>
                about
              </Badge>
            ) : (
              <Badge
                className="border-transparent text-sm font-normal"
                variant={"outline"}
              >
                about
              </Badge>
            )}
          </Link>

          <Link href={"/projects"}>
            {pathname === "/projects" ? (
              <Badge className="text-sm font-normal" variant={"outline"}>
                projects
              </Badge>
            ) : (
              <Badge
                className="border-transparent text-sm font-normal"
                variant={"outline"}
              >
                projects
              </Badge>
            )}
          </Link>

          <Link href={"/photos"}>
            {pathname === "/photos" ? (
              <Badge className="text-sm font-normal" variant={"outline"}>
                photos
              </Badge>
            ) : (
              <Badge
                className="border-transparent text-sm font-normal"
                variant={"outline"}
              >
                photos
              </Badge>
            )}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
