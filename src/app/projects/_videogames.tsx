import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function VideogamesApp() {
  return (
    <Card className="mb-4 border-primary p-2">
      <div className="flex flex-col gap-2">
        <CardTitle className="flex items-center gap-2">
          <p className="mr-auto">Videogames App</p>
          <a
            href="https://github.com/JuanBaut/videogames-pi"
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
