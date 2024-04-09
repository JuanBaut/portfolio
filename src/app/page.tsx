import ModeToggle from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon, MoonIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto w-[90%] px-2 sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
      <div className="flex justify-between">
        <p className="mt-auto">
          Juan
          <b>
            <i> Andres </i>
          </b>
          Bautista
        </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/JuanBaut"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant={"ghost"} className="size-7 p-0">
              <Github className="m-0 size-5 p-0" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/juanandresdev/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant={"ghost"} className="size-7 p-0">
              <LinkedinIcon className="m-0 size-5 p-0" />
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
      <div className="pt-2">
        <p className="text-justify text-muted">
          I am a full-stack web developer, although I see myself as a designer.
          Born and based in Colombia. I believe in designing things with passion
          in order to solve problems correctly with usability and aesthetics in
          mind.
        </p>
      </div>
    </div>
  );
}
