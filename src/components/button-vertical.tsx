import NoKbdLink from "./no-kbd-link";
import { Button } from "./ui/button";

interface ButtonProps {
  text: string;
  href: string;
  icon: JSX.Element;
}

export default function ButtonVertical({ text, href, icon }: ButtonProps) {
  return (
    <NoKbdLink href={`${href}`}>
      <Button
        variant={"ghost_outline"}
        className="mx-auto flex w-full justify-between px-4 text-lg"
      >
        <p className="gradient element-to-rotate inline-block bg-gradient-to-tr from-foreground to-accent bg-clip-text text-transparent">
          {text}
        </p>
        {icon}
      </Button>
    </NoKbdLink>
  );
}
