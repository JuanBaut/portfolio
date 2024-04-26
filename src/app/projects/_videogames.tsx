import ProjectTitle from "@/components/projects/project-title";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function VideogamesApp() {
  return (
    <Card className="mb-4 border-primary p-2">
      <ProjectTitle
        name="Videogames App"
        repository="https://github.com/JuanBaut/videogames-pi"
      />

      <div className="pt-2 text-sm text-muted">
        Wiki / Pokedex styled website with a videogame thematic. The main
        dynamic is to look up, sort and filter videogames and interact with them
        as cards.
        <ul className="list-disc px-8 pt-2">
          <li>First React.js SPA</li>
          <li>Front-end and Back-end skills put together</li>
          <li>Following guidelines from client request</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-2 px-[10%] pt-2">
        <Badge>JS</Badge>
        <Badge>React</Badge>
        <Badge>Redux</Badge>

        <Badge variant={"secondary"}>PostgreSQL</Badge>
        <Badge variant={"secondary"}>Express.js</Badge>
        <Badge variant={"secondary"}>Sequalize</Badge>
      </div>
    </Card>
  );
}
