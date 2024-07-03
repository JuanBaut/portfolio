import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
}

export default function SkillsTile({ title, icon }: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 aspect-square size-36">
      <div className="flex items-center justify-center size-20">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
