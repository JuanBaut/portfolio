import { getImages } from "@/lib/cloudinary";
import Image from "next/image";

export default async function Photos() {
  const images = await getImages();
  console.log(images);

  return (
    <div className="mx-auto w-full px-2">
      <p className="text-center">Photos taken with my Nikon D3400 for fun.</p>
      <div className="flex flex-wrap gap-4 mx-auto justify-center m-4 items-baseline">
        {images.map((image) => (
          <div
            key={image.id}
            className="aspect-square w-[380px] overflow-hidden rounded"
          >
            <Image
              className="object-cover rounded h-full"
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
