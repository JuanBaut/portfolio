import ProjectTitle from "@/components/projects/project-title";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function AppGuard() {
  return (
    <Card className="mb-4 p-2">
      <ProjectTitle
        name="AppGuard"
        repository="https://github.com/AppGuardD"
        website="https://app-guard-front.vercel.app/"
      />

      <div className="pt-2 text-sm text-muted">
        Website / E-commerce built around selling event tickets in argentinian beaches, like sports and cultural events.
        <ul className="list-disc px-8 pt-2">
          <li>It was my first deep dive in Git Flow</li>
          <li>Developing a project with multiple people</li>
          <li>Front-end leading role</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-2 px-[10%] pt-2 max-[300px]:px-0">
        <Badge>TS</Badge>
        <Badge>React</Badge>
        <Badge>Redux</Badge>
        <Badge>Jotai</Badge>
        <Badge>Tailwind</Badge>
        <Badge>Shadcn/ui</Badge>

        <Badge variant={"secondary"}>PostgreSQL</Badge>
        <Badge variant={"secondary"}>Express.js</Badge>
        <Badge variant={"secondary"}>Sequalize</Badge>
      </div>
    </Card>
  );
}
