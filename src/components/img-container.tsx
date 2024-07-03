"use client";

import { CldImage } from "next-cloudinary";

type Props = {
  src: string;
};

export default function ImgContainer({ src }: Props) {
  return (
    <div className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-xl object-center p-2 lg:order-last">
      <CldImage
        src={src}
        alt="Image"
        className="object-cover"
        sizes="50vw"
        priority
        fill
      />
    </div>
  );
}
