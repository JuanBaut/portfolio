import { ReactElement, ReactNode } from "react";

interface Props {
  date: string;
  type: string;
  kind: string;
  title: string;
  children: ReactNode;
  description: ReactElement;
}

export default function ExperienceCard({
  type,
  date,
  kind,
  title,
  children,
  description,
}: Props) {
  return (
    <div className="space-y-2 text-justify">
      <div className="flex items-center justify-between font-bold">
        <span>{title}</span>
        <span>{date}</span>
      </div>
      <span className="text-primary font-bold">
        {kind} · {type}:
      </span>
      <span className="text-muted"> {description}</span>
      <div className="flex flex-wrap gap-2 justify-center">{children}</div>
    </div>
  );
}
