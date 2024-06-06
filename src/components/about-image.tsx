"use client";

import getBlurImage from "@/lib/cld-get-image";
import { motion, useAnimate, useInView } from "framer-motion";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

export default function AboutImage() {
  const [scope, animate] = useAnimate();
  const [blurImage, setBlurImage] = useState("");
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: [0, 1] }, { duration: 1 });
    }
    async function fetchBlurImage() {
      const data = await getBlurImage();
      console.log(data);
      setBlurImage(data);
    }
    fetchBlurImage();
  }, [isInView, scope, animate]);

  return (
    <div className="mx-auto mt-4 flex w-full overflow-hidden rounded">
      <motion.div
        className="w-full rounded bg-gradient-to-l from-secondary max-[400px]:hidden"
        animate={{ opacity: [0, 100] }}
      />
      <CldImage
        className="mx-1 rounded max-[400px]:m-0 min-[400px]:w-[300px]"
        alt="This is the owner of this porfolio"
        src="portfolio/m34"
        ref={scope}
        width="900"
        height="900"
        zoom="0.9"
        crop="crop"
        priority
        blurDataURL={blurImage}
      />
      <motion.div
        className="w-full rounded bg-gradient-to-r from-secondary max-[400px]:hidden"
        animate={{ opacity: [0, 100] }}
      />
    </div>
  );
}
