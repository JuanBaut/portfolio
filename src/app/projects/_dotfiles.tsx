import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Dotfiles() {
  return (
    <>
      <div className="border-primary pb-4">
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/JuanBaut/dotfiles"
            target="_blank"
            rel="noreferrer"
            className="flex font-bold "
          >
            Dotfiles
            <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
          </a>
          <div className="flex flex-wrap gap-2">
            <Badge variant={"default"}>Neovim</Badge>
            <Badge variant={"default"}>Shell</Badge>
          </div>
        </div>
        <p className="pt-2 text-sm text-muted">
          My personal configuration files used in my dev environment.
        </p>
      </div>
    </>
  );
}
