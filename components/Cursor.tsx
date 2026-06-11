"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

/**
 * Big collaborative-UI style cursor: a chunky pointer with a coral (primary)
 * outline, plus a coral "name tag" that appears over project cards — like a
 * live multiplayer cursor. Desktop / fine-pointer only; respects reduced motion.
 */
export default function Cursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [pressed, setPressed] = useState(false);
  const reduce = useReducedMotion();

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  // Tight follow with a touch of smoothing (feels "live").
  const sx = useSpring(x, { stiffness: 900, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 900, damping: 40, mass: 0.5 });

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

  const scale = (hovering ? 1.12 : 1) * (pressed ? 0.85 : 1);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
    >
      <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          style={{ originX: 0, originY: 0 }}
        >
          {/* Big pointer with coral outline */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              marginLeft: -7,
              marginTop: -7,
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.25))",
            }}
          >
            <path
              d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
              fill="#FFFFFF"
              stroke="#FB5A35"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>

          {/* Collaborative-style name tag */}
          <motion.div
            animate={{
              opacity: label ? 1 : 0,
              scale: label ? 1 : 0.7,
              y: label ? 0 : -4,
            }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[18px] top-[22px] whitespace-nowrap rounded-full rounded-tl-sm bg-coral px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-cream shadow-[0_4px_10px_-2px_rgba(251,90,53,0.5)]"
          >
            {label}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
