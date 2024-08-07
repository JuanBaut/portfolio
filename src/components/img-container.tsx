"use client";

import { CldImage } from "next-cloudinary";
import { MagicCard, MagicContainer } from "./motion/card-motion";

type Props = {
  src: string;
  priority?: boolean;
  loading: "eager" | "lazy";
};

export default function ImgContainer({ src, loading, priority }: Props) {
  return (
    <MagicContainer>
      <MagicCard>
        <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-sm object-center p-2 lg:order-last">
          <CldImage
            src={src}
            alt="Image"
            className="object-cover"
            sizes="50vw"
            loading={loading}
            priority={priority}
            fill
          />
        </div>
      </MagicCard>
    </MagicContainer>
  );
}
