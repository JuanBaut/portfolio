"use client";

import { CldImage } from "next-cloudinary";
import { MagicCard, MagicContainer } from "./motion/card-motion";
import { motion } from "framer-motion";

type Props = {
  src: string;
  priority?: boolean;
  loading: "eager" | "lazy";
  aspectRatio?: string;
  className?: string;
};

export default function HorizontalImage({
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

export function HeroImage({ src, loading, priority }: Props) {
  return (
    <>
      <div className="grid rounded gap-2 boder w-full grid-cols-[1fr,auto,1fr]">
        <motion.div
          className="w-full rounded bg-gradient-to-l from-secondary my-1"
          animate={{ opacity: [0, 100] }}
        />

        <MagicContainer>
          <MagicCard>
            <ImageContainer src={src} loading={loading} priority={priority} />
          </MagicCard>
        </MagicContainer>

        <motion.div
          className="w-full rounded bg-gradient-to-r from-secondary my-1"
          animate={{ opacity: [0, 100] }}
        />
      </div>
    </>
  );
}

function ImageContainer({ src, loading, priority }: Props) {
  return (
    <div className="relative overflow-hidden object-center rounded-sm size-[280px] xs:size-[380px]">
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
