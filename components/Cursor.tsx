"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const CORAL = "#FB5A35";

export default function Cursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Trailing ring (soft, lagging)
  const ringX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.7 });
  // Snappy dot
  const dotX = useSpring(x, { stiffness: 1100, damping: 50 });
  const dotY = useSpring(y, { stiffness: 1100, damping: 50 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || reduce) return;

    setActive(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const labelled = t.closest("[data-cursor-label]") as HTMLElement | null;
      if (labelled) {
        setHovering(true);
        setLabel(labelled.getAttribute("data-cursor-label"));
      } else if (t.closest("a, button, [data-cursor]")) {
        setHovering(true);
        setLabel(null);
      }
    };
    const out = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor], [data-cursor-label]")) {
        setHovering(false);
        setLabel(null);
      }
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y, reduce]);

  if (!active || reduce) return null;

  const baseScale = label ? 1.9 : hovering ? 1.5 : 1;
  const scale = baseScale * (pressed ? 0.82 : 1);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
    >
      {/* Morphing ring / blob */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.div
          animate={{
            scale,
            backgroundColor: hovering ? CORAL : "rgba(251,90,53,0)",
            borderColor: hovering ? "rgba(251,90,53,0)" : CORAL,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          className="-ml-5 -mt-5 h-10 w-10 rounded-full border-[1.5px]"
        />
      </motion.div>

      {/* Label (e.g. "View") — kept un-scaled so text stays crisp */}
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.span
          animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
          transition={{ duration: 0.18 }}
          className="block -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-cream"
        >
          {label}
        </motion.span>
      </motion.div>

      {/* Snappy dot */}
      <motion.div style={{ x: dotX, y: dotY }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: hovering ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="-ml-1 -mt-1 h-2 w-2 rounded-full bg-coral"
        />
      </motion.div>
    </div>
  );
}
