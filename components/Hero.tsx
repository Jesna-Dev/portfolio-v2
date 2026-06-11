"use client";

import { motion } from "framer-motion";
import SplitText from "./SplitText";
import Marquee from "./Marquee";
import MagneticButton from "./MagneticButton";
import { scrollToId } from "@/lib/scrollTo";
import { EASE } from "@/lib/motion";

const MARQUEE = [
  "Open to work",
  "Product Design",
  "Design Systems",
  "React / Next.js",
  "Figma",
  "Prototyping",
  "Mobile Apps",
  "Data Viz",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-6 pt-28 md:pt-32"
    >
      {/* Lightweight, non-canvas background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-[6%] h-[34vmax] w-[34vmax] rounded-full bg-coral/20 blur-[90px] animate-floatX" />
        <div className="absolute -right-[8%] bottom-0 h-[30vmax] w-[30vmax] rounded-full bg-pine/12 blur-[90px] animate-float" />
        <div className="absolute left-[12%] top-[32%] hidden h-16 w-16 rounded-2xl bg-ochre/70 animate-float [animation-delay:-2s] sm:block" />
        <div className="absolute right-[15%] top-[26%] hidden h-20 w-20 rounded-full border-2 border-pine/40 animate-floatX [animation-delay:-4s] sm:block" />
        <div className="absolute right-[27%] bottom-[22%] hidden h-9 w-9 rounded-full bg-coral animate-float [animation-delay:-1s] md:block" />
        <div className="absolute left-[20%] bottom-[15%] hidden h-12 w-12 rotate-12 rounded-xl bg-sage/70 animate-spinSlow lg:block" />
      </div>

      {/* Top eyebrow row */}
      <motion.div
        {...fade(0.1)}
        className="section mx-auto flex w-full max-w-[1600px] items-center justify-between"
      >
        <span className="mono-label text-ink/55">✦ Portfolio 2026</span>
        <span className="mono-label hidden text-ink/55 sm:block">
          Based in Kochi, India
        </span>
      </motion.div>

      {/* Center content */}
      <div className="section relative z-10 mx-auto w-full max-w-[1600px]">
        <motion.span
          {...fade(0.2)}
          className="chip mb-7 gap-2.5 border-ink/20 bg-cream/60 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
          </span>
          Open to new opportunities
        </motion.span>

        <motion.p
          {...fade(0.3)}
          className="display mb-1 text-[clamp(1.4rem,4vw,2.6rem)] font-semibold text-ink/50"
        >
          Hey, I&apos;m
        </motion.p>

        <h1 className="display text-[clamp(4.2rem,21vw,17rem)] leading-[0.82]">
          <SplitText text="Jesna" delay={0.35} stagger={0.05} />
          <span className="text-coral">.</span>
        </h1>

        <motion.p
          {...fade(0.5)}
          className="mt-5 max-w-3xl font-display text-[clamp(1.4rem,4.2vw,3rem)] font-bold leading-[1.02] tracking-tightest"
        >
          A <span className="text-coral">UI/UX Designer</span> &amp;{" "}
          <span className="text-pine">Frontend Developer</span>
        </motion.p>

        <motion.p
          {...fade(0.6)}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          I spent 4 years building data-heavy React apps — vessel dashboards, an
          App-Store-published mobile app, AI chat — before moving into design.
          Now I craft interfaces with a builder&apos;s eye for what actually
          ships.
        </motion.p>

        <motion.div
          {...fade(0.7)}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollToId("work")}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-cream transition-colors hover:bg-coral"
          >
            View my work
            <span className="gh-x">→</span>
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToId("contact")}
            className="rounded-full border border-ink/25 px-7 py-4 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Get in touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <motion.div
        {...fade(0.8)}
        className="relative z-10 mt-10 border-y border-ink/15 bg-cream/40 py-3 backdrop-blur-sm"
      >
        <Marquee
          items={MARQUEE}
          className="font-display text-lg font-semibold uppercase tracking-tight"
        />
      </motion.div>
    </section>
  );
}
