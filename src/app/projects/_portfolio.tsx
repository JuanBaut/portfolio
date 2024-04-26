import ProjectTitle from "@/components/projects/project-title";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Portfolio() {
  return (
    <Card className="mb-4 border-primary p-2">
      <ProjectTitle
        name="Portfolio"
        repository="https://github.com/JuanBaut/portfolio"
      />

      <p className="pt-2 text-sm text-muted">
        The website you are currently looking at.
      </p>

      <div className="flex flex-wrap justify-center gap-2 px-[10%] pt-2">
        <Badge>TS</Badge>
        <Badge>Next.js</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Shadcn/ui</Badge>
        <Badge>Framer motion</Badge>
      </div>
    </Card>
  );
}
