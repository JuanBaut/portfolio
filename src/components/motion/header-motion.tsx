"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function HeaderMotion() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-210px 0px -210px 0px",
  });

  const words = "Juan Andres Bautista";
  const letters = words.split("");

  const variants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="flex justify-start">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          ref={ref}
          custom={i}
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
