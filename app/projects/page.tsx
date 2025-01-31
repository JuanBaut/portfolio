import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Andres Bautista's Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="mb-5 flex flex-col space-y-1 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex w-full flex-col items-start justify-between space-y-1 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
              <h2>{project.title}</h2>
              <p className="tracking-tight text-muted-foreground">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
