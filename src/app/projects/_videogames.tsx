import { Badge } from "@/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

export default function VideogamesApp() {
  return (
    <>
      <hr />
      <div className="border-primary py-3">
        <div className="flex flex-col gap-2">
          <a
            href="https://github.com/JuanBaut/videogames-pi"
            target="_blank"
            rel="noreferrer"
            className="flex  font-bold"
          >
            Videogames App
            <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
          </a>
          <div className="flex flex-wrap gap-2">
            <Badge variant={"outline"}>JS</Badge>
            <Badge variant={"outline"}>React</Badge>
            <Badge variant={"outline"}>Redux</Badge>
          </div>
        </div>
        <div className="pt-2 text-sm text-muted">
          Wiki / Pokedex styled website with a videogame thematic. The main
          dynamic is to look up, sort and filter videogames and interact with
          them as cards.
          <ul className="list-disc px-8 pt-2">
            <li>First React.js SPA</li>
            <li>Front-end and Back-end skills put together</li>
            <li>Following guidelines from client request</li>
          </ul>
        </div>
      </div>
    </>
  );
}
