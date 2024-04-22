"use client";

import { ImageType } from "@/lib/image-types";
import { useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface PropsImages {
  images: ImageType[];
}

export default function ImagesMap(props: PropsImages) {
  const { images } = props;
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
            className="h-full rounded object-cover"
            height={item.height}
            width={item.width}
            src={item.url}
            alt="photo"
            priority
          />
        </div>
      ))}
    </div>
  );
}
