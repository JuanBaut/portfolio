import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Dotfiles() {
  return (
    <Card className="mb-4 border-primary p-2">
      <div className="flex flex-col gap-2">
        <CardTitle>
          <a
            href="https://github.com/JuanBaut/dotfiles"
            target="_blank"
            rel="noreferrer"
            className="flex font-bold "
          >
            Dotfiles
            <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
          </a>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          <Badge>Neovim</Badge>
          <Badge>Shell</Badge>
        </div>
      </div>
      <p className="pt-2 text-sm text-muted">
        My personal configuration files used in my dev environment.
      </p>
    </Card>
  );
}
