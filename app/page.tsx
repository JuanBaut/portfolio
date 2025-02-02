import Image from "next/image";
import { Anchor } from "./components/ui/anchor";
import { TextShimmer } from "./components/ui/text-shimmer";
import { links } from "./config";

const x = <Anchor href={links.x}>X</Anchor>;
const go = <Anchor href={links.go}>Go</Anchor>;
const py = <Anchor href={links.python}>Python</Anchor>;
const tw = <Anchor href={links.tailwind}>Tailwind</Anchor>;
const li = <Anchor href={links.linkedin}>LinkedIn</Anchor>;
const ts = <Anchor href={links.typescript}>TypeScript</Anchor>;
const sc = <Anchor href={links.soundcloud}>SoundCloud</Anchor>;

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-medium leading-none tracking-tighter text-foreground">
        <TextShimmer>Software Developer</TextShimmer>
        <span> &amp; Open-Source Enthusiast</span>
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
          Feel free to reach out to me via {x} or {li} if you wish to
          collaborate or talk!
        </p>
      </div>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="mb-4 grid grid-cols-[1fr,auto,1fr] gap-2 sm:float-right sm:mb-0 sm:ml-2 sm:block">
      <div className="w-full bg-gradient-to-l from-accent" />

      <a href={links.github} target="_blank" rel="noopener noreferrer">
        <Image
          className="sm:p-2"
          alt="Profile photo"
          src="/me.jpeg"
          width={230}
          height={230}
          priority
        />
      </a>

      <div className="w-full bg-gradient-to-r from-accent" />
    </div>
  );
}

