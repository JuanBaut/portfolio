"use client";

import { getImages } from "@/lib/cloudinary";
import { ImagesType } from "@/lib/images-object-types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Images() {
  const [images, setImages] = useState<ImagesType>([]);

  useEffect(() => {
    async function fetchImages() {
      const data: ImagesType = await getImages();
      if (data.length !== 0) {
        setImages(data);
      }
    }
    fetchImages();
  });

  if (images.length === 0) {
    return (
      <div className="flex size-56 justify-center">
        <div className="my-auto text-center">
          Please come back later!
          <hr />
          <i>No photos to display</i>
        </div>
      </div>
    );
  }

  if (images === "Error fetching the images") {
    return (
      <div className="flex size-56 justify-center">
        <div className="my-auto text-center">
          Please come back later!
          <hr />
          <i>{images}</i>
        </div>
      </div>
    );
  }

  return (
    <>
      {images.map((image) => (
        <div
          key={image.id}
          className="aspect-square w-[380px] overflow-hidden rounded"
        >
          <Image
            className="h-full rounded object-cover"
            height={image.height}
            width={image.width}
            src={image.url}
            alt="photo"
            priority
          />
        </div>
      ))}
    </>
  );
}
