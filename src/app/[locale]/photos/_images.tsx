"use client";

import isImage from "@/lib/image-check";
import { ResponseType } from "@/lib/image-types";
import { useEffect, useState } from "react";
import ImagesMap from "./_images-map";

export default function Images() {
  const [images, setImages] = useState<ResponseType>([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/api").then((response) => response.json());
      setImages(response);
    }
    fetchImages();
  }, []);

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
  } else if (!images) {
    return (
      <div className="flex size-56 justify-center">
        <div className="my-auto text-center">
          Please come back later!
          <hr />
          <i>No photos to display</i>
        </div>
      </div>
    );
  } else if (isImage(images[0])) {
    return <ImagesMap images={images} />;
  }
}
