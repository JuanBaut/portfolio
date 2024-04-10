import { getImages } from "@/lib/cloudinary";
import Image from "next/image";

export default async function Photos() {
  const images = await getImages();
  console.log(images);

  return (
    <div className="mx-auto w-full px-2">
      <p className="text-center">Photos taken with my Nikon D3400 for fun.</p>
      <div className="m-4 mx-auto flex flex-wrap items-baseline justify-center gap-4">
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
      </div>
    </div>
  );
}
