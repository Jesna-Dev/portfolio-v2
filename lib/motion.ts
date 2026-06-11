import type { Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Single element fade + rise. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/** Container that staggers its direct motion children. */
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Standard viewport config for scroll-in reveals. */
export const viewportOnce = { once: true, margin: "-10% 0px" } as const;
