import { Github, LinkedinIcon, Mail, Paperclip } from "lucide-react";
import ButtonHorizontal from "./button-horizontal";
import ButtonVertical from "./button-vertical";

const iconStyles = "m-0 p-0 size-5 text-primary"

const resume = "/ResumeJuanBautista.pdf"
const github = "https://github.com/JuanBaut"
const email = "mailto:juanb.perez96@gmail.com"
const linkedin = "https://www.linkedin.com/in/juanandresdev/"

export default function ContactButtons() {
  return (
    <div className="pt-4 mx-auto">
      <hr />
      <div className="flex justify-center gap-2 w-[300px] max-[520px]:hidden mx-auto pt-2">
        <ButtonHorizontal href={github} text="Github" icon={<Github className={iconStyles} />} />
        <ButtonHorizontal href={resume} text="Resume" icon={<Paperclip className={iconStyles} />} />
        <ButtonHorizontal href={email} text="Email" icon={<Mail className={iconStyles} />} />
        <ButtonHorizontal href={linkedin} text="LinkedIn" icon={<LinkedinIcon className={iconStyles} />} />
      </div>
      <div className="flex flex-col justify-center gap-2 w-[300px] min-[520px]:hidden mx-auto pt-2">
        <ButtonVertical href={github} text="Github" icon={<Github className={iconStyles} />} />
        <ButtonVertical href={resume} text="Resume" icon={<Paperclip className={iconStyles} />} />
        <ButtonVertical href={email} text="Email" icon={<Mail className={iconStyles} />} />
        <ButtonVertical href={linkedin} text="LinkedIn" icon={<LinkedinIcon className={iconStyles} />} />
      </div>
    </div>
  );
}
