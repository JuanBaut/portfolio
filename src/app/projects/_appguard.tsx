import { SquareArrowOutUpRight } from "lucide-react";

export default function AppGuard() {
  return (
    <>
      <div className="border-primary py-3">
        <a
          href="https://app-guard-front.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex  font-bold"
        >
          AppGuard
          <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
        </a>
        <div className="pt-2 text-sm text-muted">
          Website / E-commerce built around selling event tickets in beaches of
          Argentina, like sports and cultural events.
          <ul className="list-disc px-8 pt-2">
            <li>It was my first deep dive in Git Flow</li>
            <li>Developing a project with multiple people</li>
            <li>Front-end leading role</li>
          </ul>
        </div>
      </div>
    </>
  );
}
