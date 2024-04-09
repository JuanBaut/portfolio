import { SquareArrowOutUpRight } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <div className="mx-auto w-[90%] px-2 sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
      <div className="border-primary py-3">
        <a
          href="https://app-guard-front.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex  font-bold"
        >
          AppGuard
          <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
        </a>
        <p className="pt-2 text-sm text-muted">
          Website / E-commerce built around selling event tickets in beaches of
          Argentina, like sports and cultural events.
          <ul className="list-disc px-8 pt-2">
            <li>It was my first deep dive in Git Flow</li>
            <li>Developing a project with multiple people</li>
            <li>Front-end leading role</li>
          </ul>
        </p>
      </div>
      <hr />
      <div className="border-primary py-3">
        <a
          href="https://github.com/JuanBaut/videogames-pi"
          target="_blank"
          rel="noreferrer"
          className="flex  font-bold"
        >
          Videogames App
          <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
        </a>
        <p className="pt-2 text-sm text-muted">
          Wiki / Pokedex styled website with a videogame thematic. The main
          dynamic is to look up, sort and filter videogames and interact with
          them as cards.
          <ul className="list-disc px-8 pt-2">
            <li>First React.js SPA</li>
            <li>Front-end and Back-end skills put together</li>
            <li>Following guidelines from client request</li>
          </ul>
        </p>
      </div>
      <hr />
      <div className="border-primary py-3">
        <a
          href="https://github.com/JuanBaut/dotfiles"
          target="_blank"
          rel="noreferrer"
          className="flex font-bold "
        >
          dotfiles
          <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
        </a>
        <p className="pt-2 text-sm text-muted">
          My personal configuration files used in my dev environment.
        </p>
      </div>
    </div>
  );
};

export default Projects;
