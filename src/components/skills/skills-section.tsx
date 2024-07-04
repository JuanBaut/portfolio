import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function SkillsSection({ title, children }: Props) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-2 gap-6 justify-items-center">
        {children}
      </div>
    </div>
  );
}
