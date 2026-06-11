"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduce) {
      node.textContent = `${prefix}${to}${suffix}`;
      return;
    }
    if (!inView) return;

    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        node.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
