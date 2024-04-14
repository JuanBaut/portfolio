"use client";

import ContactButton from "../components/contact";
import { CldImage } from "next-cloudinary";

export default function Home() {
  return (
    <div className="mx-auto w-[95%] px-2 min-[640px]:w-[640px]">
      <div className="mx-auto mt-4 flex w-full overflow-hidden rounded">
        <div className="w-full rounded bg-gradient-to-l from-secondary" />
        <CldImage
          className="mx-1 aspect-square rounded object-cover max-[400px]:m-0 min-[400px]:w-[300px]"
          priority={true}
          width="900"
          height="900"
          zoom="0.9"
          crop={"crop"}
          src="portfolio/m34"
          alt="me"
        />
        <div className="w-full rounded bg-gradient-to-r from-secondary" />
      </div>
      <p className="pt-4 text-xl">
        Juan <b>Andres</b> Bautista
      </p>
      <p className="pt-1 text-justify text-muted">
        I am a full-stack web developer. Born and based in Colombia. I believe
        in designing things with passion in order to solve problems correctly
        with usability and aesthetics in mind.
      </p>
      <div className="flex justify-center pt-4">
        <ContactButton />
      </div>
    </div>
  );
}
