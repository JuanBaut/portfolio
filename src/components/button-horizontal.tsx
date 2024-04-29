import NoKbdLink from "./no-kbd-link";
import { Button } from "./ui/button";

interface ButtonProps {
  text: string;
  href: string;
  icon: JSX.Element;
}

export default function ButtonHorizontal({ text, href, icon }: ButtonProps) {
  return (
    <NoKbdLink href={`${href}`}>
      <Button variant={"ghost_outline"} className="text-md flex gap-2 rounded-full px-4">
        <p className="gradient element-to-rotate inline-block bg-gradient-to-tr from-foreground to-accent bg-clip-text text-transparent">
          {text}
        </p>
        {icon}
      </Button>
    </NoKbdLink>
  );
}
