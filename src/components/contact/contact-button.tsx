import Link from "next/link";
import { cloneElement, ReactElement } from "react";
import { Button } from "../ui/button";

interface Props {
  href: string;
  name: string;
  target?: "_self" | "_blank";
  icon: ReactElement;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export default function ContactButton({
  href,
  name,
  icon,
  variant,
  className,
  target = "_blank",
}: Props) {
  return (
    <Link
      href={href}
      target={target}
      rel="nonreferrer"
      tabIndex={-1}
      prefetch={false}
    >
      <Button
        variant={variant ? variant : "default"}
        className={`flex justify-between items-center gap-2 ${className ? className : "w-36"}`}
      >
        {name}
        {cloneElement(icon, {
          className: "size-5",
        })}
      </Button>
    </Link>
  );
}
