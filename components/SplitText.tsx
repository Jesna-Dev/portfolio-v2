"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, viewportOnce } from "@/lib/motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** animate when scrolled into view instead of on mount */
  inView?: boolean;
};

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.035,
  inView = false,
}: Props) {
  const reduce = useReducedMotion();

  // Reduced motion: render plain, fully-visible text.
  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const charVariant = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.8, ease: EASE } },
  };

  const activation = inView
    ? ({ whileInView: "show", viewport: viewportOnce } as const)
    : ({ animate: "show" } as const);

  return (
    <motion.span
      className={className}
      aria-label={text}
      variants={container}
      initial="hidden"
      {...activation}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block whitespace-nowrap"
          aria-hidden="true"
        >
          {Array.from(word).map((char, ci) => (
            <span
              key={ci}
              className="inline-block overflow-hidden align-bottom leading-[1.05]"
            >
              <motion.span className="inline-block" variants={charVariant}>
                {char}
              </motion.span>
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
