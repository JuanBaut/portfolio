import { starNorth } from "@lucide/lab";
import { Copyright, Icon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex w-full justify-between shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <span className="flex items-center gap-2 text-xs text-muted font-bold">
        <Copyright className="size-4" /> 2024 Juan Andres Bautista. All rights
        reserved.
      </span>
      <span className="flex items-center gap-2 text-xs text-muted font-bold">
        Fall six times, stand up seven.
        <Icon iconNode={starNorth} className="size-4" />
      </span>
    </footer>
  );
}
