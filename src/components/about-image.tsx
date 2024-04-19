"use client";

import { useAnimate, useInView } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function AboutImage() {
  const [loading, setLoading] = useState(true);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: [0, 1] }, { duration: 1 });
    }
  }, [isInView, scope, animate]);

  return (
    <div className="mx-auto mt-4 flex w-full overflow-hidden rounded">
      <div className="w-full rounded bg-gradient-to-l from-secondary max-[400px]:hidden" />
      <CldImage
        ref={scope}
        id="meBruv"
        onLoad={() => setLoading(false)}
        className={
          loading
            ? "hidden"
            : "mx-1 rounded max-[400px]:m-0 min-[400px]:w-[300px]"
        }
        width="900"
        height="900"
        zoom="0.9"
        crop="crop"
        src="portfolio/m34"
        alt="me"
        priority
      />
      {loading ? (
        <Skeleton className="mx-1 aspect-square size-full rounded bg-accent max-[400px]:m-0 min-[400px]:size-[300px]" />
      ) : null}
      <div className="w-full rounded bg-gradient-to-r from-secondary max-[400px]:hidden" />
    </div>
  );
}
