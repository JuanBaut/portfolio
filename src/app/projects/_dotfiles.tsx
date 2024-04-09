import { SquareArrowOutUpRight } from "lucide-react";

export default function Dotfiles() {
  return (
    <>
      <hr />
      <div className="border-primary py-3">
        <a
          href="https://github.com/JuanBaut/dotfiles"
          target="_blank"
          rel="noreferrer"
          className="flex font-bold "
        >
          Dotfiles
          <SquareArrowOutUpRight className="my-auto ml-2 size-4" />
        </a>
        <p className="pt-2 text-sm text-muted">
          My personal configuration files used in my dev environment.
        </p>
      </div>
    </>
  );
}
