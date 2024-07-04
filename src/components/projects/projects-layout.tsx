import Link from "next/link";
import ImgContainer from "../img-container";
import { ReactNode } from "react";

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
        {liveUrl ? (
          <Link
            href={liveUrl}
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Live Demo
          </Link>
        ) : null}
        {codeUrl ? (
          <Link
            href={codeUrl}
            className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            GitHub
          </Link>
        ) : null}
      </div>
    </div>
  );
}
