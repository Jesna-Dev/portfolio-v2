"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so all Framer Motion animations respect the user's
 * `prefers-reduced-motion` setting (transform/scale animations are skipped).
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
