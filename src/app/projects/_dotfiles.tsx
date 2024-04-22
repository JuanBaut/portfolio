import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function Dotfiles() {
  return (
    <Card className="mb-4 border-primary p-2">
      <div className="flex flex-col gap-2">
        <CardTitle className="flex items-center gap-2">
          <p className="mr-auto">Dotfiles</p>
          <a
            href="https://github.com/JuanBaut/dotfiles"
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Button size={"xs"} variant={"special_sm"}>
              Code
              <Code className="ml-2 size-4" />
            </Button>
          </a>
        </CardTitle>
        <hr />
      </div>

      <p className="pt-2 text-sm text-muted">
        My personal configuration files used in my dev environment.
      </p>

      <div className="flex flex-wrap justify-center gap-2 px-[10%] pt-2">
        <Badge>Neovim</Badge>
        <Badge>Shell</Badge>
      </div>
    </Card>
  );
}
