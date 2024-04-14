import { Github, LinkedinIcon, Mail, Paperclip, Send } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContactButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"special"} className="my-auto h-min">
            Contact Me
            <Send className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[300px] max-[400px]:w-[100%]">
          <DialogHeader>
            <DialogTitle className="pb-2 text-center text-2xl">
              Contact Me
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col justify-center gap-2 align-middle">
            <a
              href="https://github.com/JuanBaut"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant={"link"}
                className="flex w-full justify-between px-4 text-2xl"
              >
                Github
                <Github className="m-0 p-0" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/juanandresdev/"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant={"link"}
                className="flex w-full justify-between px-4 text-2xl"
              >
                LinkedIn
                <LinkedinIcon className="m-0 p-0" />
              </Button>
            </a>
            <a
              href="mailto:juanb.perez96@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant={"link"}
                className="flex w-full justify-between px-4 text-2xl"
              >
                Email Me
                <Mail className="m-0 p-0" />
              </Button>
            </a>
            <a href="/ResumeJuanBautista.pdf" target="_blank" rel="noreferrer">
              <Button
                variant={"link"}
                className="flex w-full justify-between px-4 text-2xl"
              >
                Resume
                <Paperclip className="m-0 p-0" />
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
