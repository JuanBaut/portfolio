import AppGuard from "./_appguard";
import Dotfiles from "./_dotfiles";
import Portfolio from "./_portfolio";
import VideogamesApp from "./_videogames";

export default function Projects() {
  return (
    <div className="mx-auto w-[90%] px-2 sm:w-[640px] md:w-[640px] lg:w-[640px] xl:w-[640px] 2xl:w-[640px]">
      <AppGuard />
      <VideogamesApp />
      <Portfolio />
      <Dotfiles />
    </div>
  );
}
