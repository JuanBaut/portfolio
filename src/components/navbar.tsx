"use client";

import NavbarMobile from "@/components/navbar-mobile";
import ModeToggle from "@/components/theme-switch";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <NavigationMenu className="mx-auto w-[90%] sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
        <NavigationMenuList className="flex justify-between">
          <div className="my-auto flex gap-2">
            <ModeToggle />
          </div>
          <div className="flex gap-2 max-[485px]:hidden">
            <Link href={"/"}>
              {pathname === "/" ? (
                <Badge className="text-sm font-normal" variant={"outline"}>
                  about
                </Badge>
              ) : (
                <Badge className="border-transparent text-sm font-normal" variant={"outline"}>
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
                <Badge className="border-transparent text-sm font-normal" variant={"outline"}>
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
                <Badge className="border-transparent text-sm font-normal" variant={"outline"}>
                  photos
                </Badge>
              )}
            </Link>
          </div>
          <div className="min-[485px]:hidden">
            <NavbarMobile />
          </div>
        </NavigationMenuList>
        <hr className="mt-2" />
      </NavigationMenu>
    </>
  );
}
