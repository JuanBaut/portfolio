import { Badge } from "@/components/ui/badge";
import LayoutMotion from "../motion/layout-motion";
import ExperienceCard from "./experience-card";
import Link from "next/link";

export default function Experience() {
  return (
    <LayoutMotion
      id="experience"
      className="w-full bg-muted/10 py-20 md:py-24 lg:py-32"
    >
      <div className="w-full grid gap-8 max-w-[700px] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <Badge variant={"header"}>Experience</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Overview of all my work
          </h2>
        </div>

        <div className="grid gap-10 px-4">
          <ExperienceCard
            title="Pixel Stream"
            type="Business Website"
            kind="Freelance"
            date="Mar 2024 - Ongoing"
            description={
              <span>
                Contact solutions for startup modeling agency. Made page layout
                and aesthetics from scratch as per client request.
                <ul className="list-disc pl-4">
                  <li>
                    Heavy effort into aesthetics and responsiveness. Making eye
                    catching UI with Framer Motion and Shadcn/ui.
                  </li>
                  <li>
                    Focused on call to action sections. Custom form and emailing
                    system with EmailJS.
                  </li>
                  <li>Currently maintaining.</li>
                </ul>
              </span>
            }
          >
            <Badge>TS</Badge>
            <Badge>Next.js</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Shadcn/ui</Badge>
          </ExperienceCard>
          <ExperienceCard
            title="ExpressTrack"
            type="WebApp"
            kind="Apprenticeship"
            date="Mar 2024 - Jun 2024"
            description={
              <span>
                Fullstack app for prototyping and scheming a delivery app,
                client needed to handle maps, coordinates and users.
                <ul className="list-disc pl-4">
                  <li>
                    Storing routes, users and delivery vehicles with custom
                    backend in MongoAtlas.
                  </li>
                  <li>
                    Deep dive using APIs for geolocation, addresses and
                    coordinates.
                  </li>
                  <li>Rendering maps and routes with Leaflet.</li>
                </ul>
              </span>
            }
          >
            <Badge>TS</Badge>
            <Badge>Next.js</Badge>
            <Badge>Tailwind</Badge>
            <Badge>Leaflet.js</Badge>

            <Badge variant={"secondary"}>MongoDB</Badge>
            <Badge variant={"secondary"}>Express.js</Badge>
          </ExperienceCard>

          <ExperienceCard
            title="AppGuard"
            type="E-commerce"
            kind="Academic"
            date="Jan 2024 - Feb 2024"
            description={
              <span>
                Built around selling event tickets in argentinian beaches, like
                sports and cultural events.
                <ul className="list-disc pl-4">
                  <li>Developing a project with multiple people.</li>
                  <li>It was my first deep dive in Git Flow.</li>
                  <li>Front-end leading role.</li>
                </ul>
              </span>
            }
          >
            <Badge>TS</Badge>
            <Badge>React</Badge>
            <Badge>Redux</Badge>
            <Badge>Tailwind</Badge>
            <Badge variant={"secondary"}>PostgreSQL</Badge>
            <Badge variant={"secondary"}>Express.js</Badge>
          </ExperienceCard>

          <ExperienceCard
            title="Videogames App"
            type="Wiki Website"
            kind="Academic"
            date="Nov 2023 - Dev 2023"
            description={
              <span>
                The main dynamic is to look up, sort and filter videogames and
                interact with them as cards.
                <ul className="list-disc pl-4">
                  <li>Frontend and Backend skills put together.</li>
                  <li>First React.js SPA.</li>
                </ul>
              </span>
            }
          >
            <Badge>JS</Badge>
            <Badge>React</Badge>
            <Badge>Redux</Badge>
            <Badge variant={"secondary"}>PostgreSQL</Badge>
            <Badge variant={"secondary"}>Express.js</Badge>
          </ExperienceCard>

          <ExperienceCard
            title="Portfolio"
            kind="Personal"
            description={
              <span>
                You are currently looking at v2. Checkout v1{" "}
                <Link href={"https://v1.andres.contact"} className="underline">
                  here.
                </Link>
              </span>
            }
          >
            <Badge>TS</Badge>
            <Badge>Next.js</Badge>
            <Badge>Shadcn/ui</Badge>
            <Badge>Framer Motion</Badge>
          </ExperienceCard>
          <ExperienceCard
            title="Dotfiles"
            kind="Personal"
            description={
              <span>
                My personal configuration files and scripts used in my dev
                environment.
              </span>
            }
          >
            <Badge>Bash</Badge>
            <Badge>Linux</Badge>
            <Badge>Neovim</Badge>
          </ExperienceCard>
        </div>
      </div>
    </LayoutMotion>
  );
}
