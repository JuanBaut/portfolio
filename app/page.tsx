import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <h2 className="text-2xl font-medium leading-none tracking-tighter">
        Software Developer & Open-Source Enthusiast
      </h2>
      <div className="pt-4 sm:pt-8">
        <ProfileImage />
        <div className="flex flex-col gap-2 leading-7">
          <p>
            Born and based in Colombia. I believe in designing things with
            passion to solve problems with usability and aesthetics in mind. I
            speak C1 English and Native Spanish
          </p>
          <p>
            I am a Neovim fan, I love to work with TypeScript and Tailwind on
            the front-end, with Python or Go on the back-end and the terminal is
            my best friend.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProfileImage() {
  return (
    <div className="mb-4 grid grid-cols-[1fr,auto,1fr] gap-2 sm:float-right sm:mb-0 sm:ml-8 sm:block">
      <div className="w-full bg-gradient-to-l from-blue-200" />

      <a href={socialLinks.github} target="_blank">
        <Image
          className="border-white/20 transition hover:border-white/40 sm:border sm:p-1"
          src="/me.jpeg"
          alt="Profile photo"
          //unoptimized
          width={230}
          height={230}
          priority
        />
      </a>

      <div className="w-full bg-gradient-to-r from-blue-200" />
    </div>
  );
}
