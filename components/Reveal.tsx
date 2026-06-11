"use client";

import { motion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
};

export default function Reveal({
  children,
  className,
  y = 26,
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
