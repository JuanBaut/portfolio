"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto w-[50%] flex ">
      <NavigationMenu className="mx-auto my-4">
        <NavigationMenuList>
          <Link href={"/"}>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              about
            </NavigationMenuItem>
          </Link>
          <Link href={"/projects"}>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              projects
            </NavigationMenuItem>
          </Link>
          <Link href={"/photos"}>
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              photos
            </NavigationMenuItem>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
