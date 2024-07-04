import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import LayoutMotion from "../motion/layout-motion";
import { Badge } from "../ui/badge";
import ContactButton from "./contact-button";

export default function Contact() {
  return (
    <LayoutMotion id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant={"header"}>Contact</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Talk to me
            </h2>
            <p className="max-w-[700px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feel free to reach out if you have any questions or would like to
              discuss a project. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
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
      </div>
    </LayoutMotion>
  );
}
