import ProjectTitle from "@/components/projects/project-title";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Dotfiles() {
  return (
    <Card className="mb-4 border-primary p-2">
      <ProjectTitle
        name="Dotfiles"
        repository="https://github.com/JuanBaut/dotfiles"
      />

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
