import ExpressjsIcon from "@/icons/expressjs-icon";
import GitIcon from "@/icons/git-icon";
import LinuxIcon from "@/icons/linux-icon";
import MongodbIcon from "@/icons/mongodb-icon";
import NeovimIcon from "@/icons/neovim-icon";
import NextjsIcon from "@/icons/nextjs-icon";
import NodejsIcon from "@/icons/nodejs-icon";
import PsqlIcon from "@/icons/psql-icon";
import PythonIcon from "@/icons/python-icon";
import ReactIcon from "@/icons/react-icon";
import TailwindIcon from "@/icons/tailwind-icon";
import TypescriptIcon from "@/icons/ts-icon";
import LayoutMotion from "../motion/layout-motion";
import { Badge } from "../ui/badge";
import SkillsSection from "./skills-section";
import SkillsTile from "./skills-tile";

export default function Skills() {
  return (
    <LayoutMotion id="skills" className="w-full py-20 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
        <div className="space-y-3">
          <Badge variant={"header"}>Skills</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Tech Stack
          </h2>
          <p className="mx-auto max-w-[700px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A versatile collection of tools and technologies that power my web
            development projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <SkillsSection title="Frontend">
            <SkillsTile icon={<ReactIcon />} title="React" />
            <SkillsTile icon={<NextjsIcon />} title="Next.js" />
            <SkillsTile icon={<TypescriptIcon />} title="TypeScript" />
            <SkillsTile icon={<TailwindIcon />} title="Tailwind CSS" />
          </SkillsSection>
          <SkillsSection title="Backend">
            <SkillsTile icon={<NodejsIcon />} title="Node.js" />
            <SkillsTile icon={<ExpressjsIcon />} title="Express.js" />
            <SkillsTile icon={<MongodbIcon />} title="MongoDB" />
            <SkillsTile icon={<PsqlIcon />} title="PostgreSQL" />
          </SkillsSection>
          <SkillsSection title="Other">
            <SkillsTile icon={<GitIcon />} title="Git" />
            <SkillsTile icon={<LinuxIcon />} title="Linux" />
            <SkillsTile icon={<PythonIcon />} title="Python" />
            <SkillsTile icon={<NeovimIcon />} title="Neovim" />
          </SkillsSection>
        </div>
      </div>
    </LayoutMotion>
  );
}
