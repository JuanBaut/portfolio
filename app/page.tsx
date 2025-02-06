import Image from "next/image";
import { Anchor } from "./components/ui/anchor";
import { TextShimmer } from "./components/ui/text-shimmer";
import { links } from "./config";

const go = <Anchor href={links.go}>Go</Anchor>;
const py = <Anchor href={links.python}>Python</Anchor>;
const tt = <Anchor href={links.twitter}>Twitter</Anchor>;
const tw = <Anchor href={links.tailwind}>Tailwind</Anchor>;
const li = <Anchor href={links.linkedin}>LinkedIn</Anchor>;
const ts = <Anchor href={links.typescript}>TypeScript</Anchor>;
const sc = <Anchor href={links.soundcloud}>SoundCloud</Anchor>;

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-medium tracking-tighter leading-none text-foreground">
        <TextShimmer>
          <span>Software Developer</span>
          <span>Open-Source Enthusiast</span>
          <span>Full-Stack Engineer</span>
          <span>Neovim user</span>
        </TextShimmer>
      </h1>
      <div className="pt-4 sm:pt-8">
        <ProfileImage />
        <p>
          Born and based in Colombia. I believe in designing things with passion
          to solve problems with usability and aesthetics in mind. I speak C1
          English and native Spanish.
        </p>
        <br />
        <p>
          I am a Neovim fan; I love to work with {ts} and {tw} on the front end,
          with {py} or {go} on the back end, and the terminal is my best friend.
        </p>
        <br />
        <p>
          Computers have always been my main interest, from customizing them to
          building them. There is something about having artistic control over a
          computer that I enjoy a lot. I also make music for fun and post it on
          my {sc}. These days, I try to keep myself active by skateboarding,
          because to no one's surprise, as a developer I spend too much time in
          a chair.
        </p>
        <br />
        <p>
          Feel free to reach out to me via {tt} or {li} if you wish to
          collaborate or talk!
        </p>
      </div>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="grid gap-2 mb-4 sm:block sm:float-right sm:mb-0 sm:ml-2 grid-cols-[1fr_auto_1fr]">
      <div className="w-full rounded from-primary/15 bg-linear-to-l" />

      <a href={links.github} target="_blank" rel="noopener noreferrer">
        <Image
          className="rounded sm:mt-2.5"
          alt="Profile photo"
          src="/me.jpeg"
          width={230}
          height={230}
          priority
        />
      </a>

      <div className="w-full rounded from-primary/15 bg-linear-to-r" />
    </div>
  );
}
