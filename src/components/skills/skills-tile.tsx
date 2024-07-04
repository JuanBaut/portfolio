import { cloneElement, ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement;
}

export default function SkillsTile({ title, icon }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 aspect-square size-36">
      <div className="flex items-center justify-center size-20">
        {cloneElement(icon, {
          className: "fill-muted hover:fill-accent transition",
        })}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
