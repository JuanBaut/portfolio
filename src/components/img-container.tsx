"use client";

import { CldImage } from "next-cloudinary";
import { MagicCard, MagicContainer } from "./motion/card-motion";

type Props = {
  src: string;
  priority?: boolean;
  loading: "eager" | "lazy";
  aspectRatio?: string;
  className?: string;
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
          className={`w-full relative mx-auto overflow-hidden rounded-sm object-center p-2 ${aspectRatio}`}
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

export function SqrImgContainer({ src, loading, priority }: Props) {
  return (
    <MagicContainer>
      <MagicCard>
        <ImageDiv src={src} loading={loading} priority={priority} />
      </MagicCard>
    </MagicContainer>
  );
}

function ImageDiv({ src, loading, priority }: Props) {
  return (
    <div className="relative h-96 overflow-hidden rounded-sm object-center p-2">
      <CldImage
        className="object-cover"
        src={src}
        alt="Image"
        sizes="50vw"
        loading={loading}
        priority={priority}
        fill
      />
    </div>
  );
}
