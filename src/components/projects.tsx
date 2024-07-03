import Link from "next/link";
import { Badge } from "./ui/badge";
import ImgContainer from "./img-container";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-primary/10 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant={"header"}>Featured Projects</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Recent Work
            </h2>
            <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I&apos;ve been working on recently.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <ImgContainer src="projects/expresstrack" />
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="text-muted">
                A modern web application built with React, Node.js, and MongoDB.
              </p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live Demo
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <ImgContainer src="projects/pixelstream" />
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-muted">
                A responsive e-commerce website built with Next.js and Tailwind
                CSS.
              </p>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Live Demo
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
