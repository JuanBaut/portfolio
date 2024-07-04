import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import GridPattern from "../motion/grid-motion";
import LayoutMotion from "../motion/layout-motion";
import { Badge } from "../ui/badge";
import ContactButton from "./contact-button";

export default function Contact() {
  return (
    <LayoutMotion id="contact" className="w-full py-20 md:py-24 lg:py-32">
      <div className="flex gap-8 text-center flex-col items-center justify-center px-4">
        <Badge variant={"header"}>Contact</Badge>

        <div className="relative flex flex-col h-full w-full max-w-[624px] items-center justify-center overflow-hidden rounded-lg border bg-background p-12 md:shadow-xl">
          <GridPattern />
          <h2 className="z-10 text-3xl font-bold tracking-tighter sm:text-5xl">
            Talk to me
          </h2>
        </div>

        <p className="max-w-[624px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Feel free to reach out if you have any questions or would like to
          discuss a project. I&apos;ll get back to you as soon as possible.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <ContactButton
            href="https://www.linkedin.com/in/juanandresdev/"
            name="LinkedIn"
            icon={<LinkedinIcon />}
          />
          <ContactButton
            href="https://github.com/JuanBaut"
            name="Github"
            icon={<GithubIcon />}
          />
          <ContactButton
            href="mailto:juanb.perez96@gmail.com"
            name="Email"
            icon={<MailIcon />}
          />
          <ContactButton
            href="/ResumeJuanBautista.pdf"
            name="Resume"
            icon={<DownloadIcon />}
          />
        </div>
      </div>
    </LayoutMotion>
  );
}
