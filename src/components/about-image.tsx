"use client";

import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function AboutImage() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="mx-auto mt-4 flex w-full overflow-hidden rounded">
      <div className="w-full rounded bg-gradient-to-l from-secondary max-[400px]:hidden" />
      <CldImage
        className={
          loading
            ? "duration-1500 hidden opacity-0 transition-opacity ease-in"
            : "duration-1500 mx-1 block aspect-square rounded opacity-100 transition-opacity ease-in max-[400px]:m-0 min-[400px]:w-[300px]"
        }
        width="900"
        height="900"
        zoom="0.9"
        crop="crop"
        src="portfolio/m34"
        alt="me"
        priority
        onLoad={() => setLoading(false)}
      />
      {loading ? (
        <Skeleton className="mx-1 aspect-square size-full rounded bg-accent max-[400px]:m-0 min-[400px]:size-[300px]" />
      ) : null}
      <div className="w-full rounded bg-gradient-to-r from-secondary max-[400px]:hidden" />
    </div>
  );
}
