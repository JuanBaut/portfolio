import LayoutMotion from "../motion/layout-motion";
import { Badge } from "../ui/badge";
import ProjectLayout from "./projects-layout";

export default function Projects() {
  return (
    <LayoutMotion
      id="projects"
      className="w-full bg-primary/10 py-20 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant={"header"}>Featured Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Recent Work
            </h2>
            <p className="max-w-[624px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I&apos;ve been working on recently.
              From newest to oldest.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <ProjectLayout
            codeUrl="https://github.com/JuanBaut/mud-api"
            imgSrc="projects/expresstrack1"
            title="ExpressTrack"
          >
            A modern web application built with Next.js, Tailwind CSS, Node.js,
            and MongoDB.
          </ProjectLayout>
          <ProjectLayout
            liveUrl="https://www.pixelstream.com.co/"
            imgSrc="projects/pixelstream1"
            title="Pixel Stream"
          >
            A responsive single-page website built with Next.js and Tailwind
            CSS.
          </ProjectLayout>
          <ProjectLayout
            liveUrl="https://app-guard-front.vercel.app/"
            codeUrl="https://github.com/AppGuardD/AppGuard-Front"
            imgSrc="projects/appguard1"
            title="AppGuard"
          >
            An e-commerce website built with React, Tailwind CSS, Node.js and
            PostgreSQL.
          </ProjectLayout>
          <ProjectLayout
            codeUrl="https://github.com/JuanBaut/videogames-pi"
            imgSrc="projects/videogames"
            title="Videogames App"
          >
            Wiki fullstack app made with React, Vite, Express.js and PostgreSQL.
          </ProjectLayout>
        </div>
      </div>
    </LayoutMotion>
  );
}
