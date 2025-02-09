import { Loader, MousePointerClick } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "./ui/credenza";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4;
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} my-4 gap-4`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {index === 0 && (
              <>
                <MousePointerClick className="absolute right-0 bottom-0 z-40 m-1 animate-ping stroke-[1.75] text-background/40" />
                <MousePointerClick className="absolute right-0 bottom-0 z-50 m-1 stroke-[1.75] text-background fill-foreground" />
              </>
            )}
            {image.href ? (
              <ImageCredenza alt={image.alt} src={image.src} />
            ) : (
              <ImageCredenza alt={image.alt} src={image.src} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

async function ImageCredenza({ alt, src }: { alt: string; src: string }) {
  const t = await getTranslations();

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Image
          className="object-cover z-30 rounded transition hover:opacity-70"
          sizes="(max-width: 768px) 50vw, 33vw"
          draggable={false}
          alt={alt}
          src={src}
          priority
          fill
        />
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader className="sr-only">
          <CredenzaTitle>{t("photos.item.title")}</CredenzaTitle>
          <CredenzaDescription>
            {t("photos.item.description")}
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <div className="overflow-hidden relative h-full aspect-square">
            <div className="flex absolute justify-center rounded animate-pulse bg-foreground/30 size-full">
              <Loader className="self-center m-auto opacity-70 animate-spin size-10" />
            </div>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded"
              draggable={false}
              loading="lazy"
              alt={alt}
              src={src}
              fill
            />
          </div>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
}
