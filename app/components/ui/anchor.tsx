"use client";

export function Anchor({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline transition underline-offset-2 hover:border-foreground hover:text-foreground"
    >
      {children}
    </a>
  );
}
