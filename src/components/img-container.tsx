"use client";

import { CldImage } from "next-cloudinary";
import { MagicCard, MagicContainer } from "./motion/card-motion";

type Props = {
  src: string;
  priority?: boolean;
  loading: "eager" | "lazy";
  aspectRatio?: string;
};

export default function ImgContainer({
  src,
  loading,
  priority,
  aspectRatio = "aspect-video",
}: Props) {
  return (
    <MagicContainer>
      <MagicCard>
        <div
          className={`w-full relative mx-auto overflow-hidden rounded-sm object-center p-2 lg:order-last ${aspectRatio}`}
        >
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
