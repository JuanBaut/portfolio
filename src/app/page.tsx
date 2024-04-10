"use client";

import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <div className="mx-auto w-[95%] px-2 min-[640px]:w-[640px]">
      <div className="mx-auto mt-4 flex w-full overflow-hidden rounded p-1 ">
        <div className="w-full bg-primary" />
        <CldImage
          className="aspect-square rounded object-cover min-[400px]:w-[300px]"
          priority={true}
          width="900"
          height="900"
          zoom="0.9"
          crop={"crop"}
          src="portfolio/m34"
          alt="me"
        />
        <div className="w-full bg-accent" />
      </div>
      <div className="mt-4 flex justify-between">
        <p className="my-auto text-xl">
          Juan <b>Andres</b> Bautista
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
        </div>
      </div>
      <div className="pt-2">
        <p className="text-justify text-muted">
          I am a full-stack web developer. Born and based in Colombia. I believe
          in designing things with passion in order to solve problems correctly
          with usability and aesthetics in mind.
        </p>
      </div>
    </div>
  );
}
