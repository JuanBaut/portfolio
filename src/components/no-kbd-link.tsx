import { cn } from "@/lib/utils";

interface NoKbdLinkProps {
  href: string;
  children: JSX.Element;
  className?: string;
}

export default function NoKbdLink({
  href,
  children,
  className,
}: NoKbdLinkProps) {
  return (
    <a
      className={cn("inline-flex", className)}
      rel="noreferrer"
      target="_blank"
      tabIndex={-1}
      href={href}
    >
      {children}
    </a>
  );
}
