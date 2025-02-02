"use client";

export function Anchor({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 transition hover:border-foreground hover:text-foreground"
    >
      {children}
    </a>
  );
}
