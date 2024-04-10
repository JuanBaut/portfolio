import AppGuard from "./_appguard";
import Dotfiles from "./_dotfiles";
import Portfolio from "./_portfolio";
import VideogamesApp from "./_videogames";

export default function Projects() {
  return (
    <div className="mx-auto w-[90%] px-2 min-[640px]:w-[640px]">
      <AppGuard />
      <VideogamesApp />
      <Portfolio />
      <Dotfiles />
    </div>
  );
}
