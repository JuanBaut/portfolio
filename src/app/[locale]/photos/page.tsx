import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "@components/image-grid";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  const t = useTranslations();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {t("nav.photos")}
      </h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638509/photos/CAR-11_mm8p9x.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638505/photos/CAR-9_uthc8b.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638480/photos/CAR-7_fdjm7i.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638480/photos/CAR-8_fvzsko.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638472/photos/CAR-0_hjp68n.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638476/photos/CAR-1_nk86bx.png",
            alt: "Car",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638475/photos/CAR-4_u5rgey.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638473/photos/CAR-2_zxopps.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638473/photos/CAR-3_w8upxc.png",
            alt: "Car",
          },
          {
            src: "https://res.cloudinary.com/dh9rajm0q/image/upload/v1712638478/photos/CAR-6_cypeg7.png",
            alt: "Car",
          },
        ]}
      />
    </section>
  );
}
