"use client";

import ImageSkeleton from "@/components/skelly-image";
import { ImageType } from "@/lib/image-types";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PropsImages {
  images: ImageType[];
}

export default function ImagesMap(props: PropsImages) {
  const { images } = props;
  const [loading, setLoading] = useState(true);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: [0, 1] }, { duration: 1 });
      return;
    }
  }, [images, isInView, scope, animate]);

  return (
    <div ref={scope} className="flex size-full flex-wrap justify-center gap-4">
      {images.map((item) => (
        <div
          key={item.id}
          className="aspect-square w-[380px] overflow-hidden rounded"
        >
          <Image
            className={
              loading
                ? "hidden"
                : "h-full rounded-lg object-cover"
            }
            height={item.height}
            width={item.width}
            src={item.url}
            alt="photo"
            onLoad={() => setLoading(false)}
            priority
          />
          {loading ? (<ImageSkeleton size={500} />) : null}
        </div>
      ))}
    </div>
  );
}
