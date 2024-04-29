import { Github, LinkedinIcon, Mail, Paperclip } from "lucide-react";
import ButtonHorizontal from "./button-horizontal";
import ButtonVertical from "./button-vertical";

const iconStyles = "m-0 p-0 size-5 text-primary";

const resume = "/ResumeJuanBautista.pdf";
const github = "https://github.com/JuanBaut";
const email = "mailto:juanb.perez96@gmail.com";
const linkedin = "https://www.linkedin.com/in/juanandresdev/";

export default function ContactMenu() {
  return (
    <div className="mx-auto w-[90%] py-10 sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
      <hr />
      <div>
        <div className="mx-auto flex w-[300px] justify-center gap-2 pt-2 max-[520px]:hidden">
          <ButtonHorizontal href={github} text="Github" icon={<Github className={iconStyles} />} />
          <ButtonHorizontal href={resume} text="Resume" icon={<Paperclip className={iconStyles} />} />
          <ButtonHorizontal href={email} text="Email" icon={<Mail className={iconStyles} />} />
          <ButtonHorizontal href={linkedin} text="LinkedIn" icon={<LinkedinIcon className={iconStyles} />} />
        </div>
        <div className="m-auto flex flex-col justify-center gap-2 px-[10%] py-4 min-[350px]:px-[20%] min-[520px]:hidden">
          <ButtonVertical href={github} text="Github" icon={<Github className={iconStyles} />} />
          <ButtonVertical href={resume} text="Resume" icon={<Paperclip className={iconStyles} />} />
          <ButtonVertical href={email} text="Email" icon={<Mail className={iconStyles} />} />
          <ButtonVertical href={linkedin} text="LinkedIn" icon={<LinkedinIcon className={iconStyles} />} />
        </div>
      </div>
      <p className="pt-2 text-center text-sm text-muted">All rights reserved · 2024</p>
    </div>
  );
}
