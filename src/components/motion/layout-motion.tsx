"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function LayoutMotion({ children, id, className }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-180px 0px -180px 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
