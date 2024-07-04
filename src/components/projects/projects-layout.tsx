import { Github, Globe } from "lucide-react";
import { ReactNode } from "react";
import ContactButton from "../contact/contact-button";
import ImgContainer from "../img-container";
import { MagicCard, MagicContainer } from "../motion/card-motion";

interface Props {
  title: string;
  children: ReactNode;
  imgSrc: string;
  codeUrl?: string;
  liveUrl?: string;
}

export default function ProjectLayout({
  title,
  codeUrl,
  liveUrl,
  children,
  imgSrc,
}: Props) {
  return (
    <div className="space-y-2">
      <ImgContainer src={imgSrc} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted">{children}</p>
      <div className="flex gap-2">
        {codeUrl ? (
          <ContactButton
            href={codeUrl}
            name="GitHub"
            icon={<Github className="size-5" />}
            className="h-8"
            variant="secondary"
          />
        ) : null}
        {liveUrl ? (
          <ContactButton
            href={liveUrl}
            name="Live Demo"
            icon={<Globe className="size-5" />}
            className="h-8"
          />
        ) : null}
      </div>
    </div>
  );
}
