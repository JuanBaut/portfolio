"use client";

import { animate, motion, useMotionValue } from "motion/react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { Badge } from "./ui/badge";

interface Props {
  technologies: string[];
}

export default function Marquee({ technologies }: Props) {
  const [containerRef, { width: containerWidth }] = useMeasure();
  const [contentRef, { width: contentWidth }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const shouldAnimate =
    contentWidth > containerWidth && containerWidth > 0 && contentWidth > 0;

  useEffect(() => {
    if (!shouldAnimate) return;

    const finalPosition = -contentWidth / 2;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => {
      controls.stop();
    };
  }, [xTranslation, containerWidth, contentWidth, shouldAnimate]);

  return (
    <div className="overflow-hidden mb-4 h-6" ref={containerRef}>
      <motion.div
        className="flex gap-2 w-max"
        style={{ x: xTranslation }}
        ref={contentRef}
      >
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="font-medium text-nowrap"
          >
            {tech}
          </Badge>
        ))}
        {shouldAnimate &&
          technologies.map((tech, index) => (
            <Badge
              aria-hidden
              variant="secondary"
              key={index + technologies.length}
              className="font-medium text-nowrap"
            >
              {tech}
            </Badge>
          ))}
      </motion.div>
    </div>
  );
}
