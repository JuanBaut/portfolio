import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon, MoonIcon } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="mx-auto w-[90%] px-2 sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
      <div className="flex justify-between">
        <p>
          Juan
          <b>
            <i> Andres </i>
          </b>
          Bautista
        </p>
        <div className="flex gap-2">
          <Button variant={"ghost"} className="size-7 p-0">
            <Github className="m-0 size-5 p-0" />
          </Button>
          <Button variant={"ghost"} className="size-7 p-0">
            <LinkedinIcon className="m-0 size-5 p-0" />
          </Button>
          <Button variant={"ghost"} className="size-7 p-0">
            <MoonIcon className="m-0 size-5 p-0" />
          </Button>
        </div>
      </div>
      <div className="pt-4">
        <p className="text-justify">
          I am a full-stack web developer, but more importantly I am a creative.
          Born and based in Colombia. I believe in designing things with passion
          in order to solve problems correctly with usability and aesthetics in
          mind.
        </p>
      </div>
    </div>
  );
};

export default About;