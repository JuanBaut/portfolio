import Image from "next/image";
import { socialLinks } from "./config";
import { TextShimmer } from "./components/ui/text-shimmer";

export default function Page() {
  return (
    <section>
      <h2 className="text-2xl font-medium leading-none tracking-tighter">
        <TextShimmer>Software Developer & Open-Source Enthusiast</TextShimmer>
      </h2>
      <div className="pt-4 sm:pt-8">
        <ProfileImage />
        <p>
          Born and based in Colombia. I believe in designing things with passion
          to solve problems with usability and aesthetics in mind. I speak C1
          English and Native Spanish.
        </p>
        <br />
        <p>
          I am a Neovim fan, I love to work with TypeScript and Tailwind on the
          front-end, with Python or Go on the back-end and the terminal is my
          best friend.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          blanditiis eum dolores consectetur, vitae laborum nulla provident
          optio earum? Non et dolorem quibusdam voluptatibus ea dicta. Delectus
          corrupti nostrum itaque!
        </p>
      </div>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="mb-4 grid grid-cols-[1fr,auto,1fr] gap-2 sm:float-right sm:mb-0 sm:ml-2 sm:block">
      <div className="w-full bg-gradient-to-l from-accent" />

      <a href={socialLinks.github} target="_blank">
        <Image
          className="sm:p-2"
          alt="Profile photo"
          //unoptimized
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
