import { SquareArrowOutUpRight } from "lucide-react";

export default function Portfolio() {
  return (
    <>
      <hr />
      <div className="border-primary py-3">
        <a
          href="https://github.com/JuanBaut/portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex font-bold "
        >
          Portfolio
          <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
        </a>
        <p className="pt-2 text-sm text-muted">
          The website you are currently looking at.
        </p>
      </div>
    </>
  );
}
