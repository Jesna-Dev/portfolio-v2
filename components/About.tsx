"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const STATS = [
  { to: 5, suffix: "+", label: "Years in tech" },
  { to: 15, suffix: "+", label: "Products shipped" },
  { to: 1, suffix: "", label: "App live on the App Store" },
  { to: 30, prefix: "+", suffix: "%", label: "Client engagement lift" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section relative mx-auto max-w-[1600px] py-24 md:py-36"
    >
      <Reveal>
        <div className="mono-label flex items-center gap-3 text-ink/45">
          <span>(01)</span>
          <span className="h-px w-10 bg-ink/25" />
          <span>About</span>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="display text-[clamp(2rem,5.6vw,4.6rem)] leading-[0.98]">
              I design with a{" "}
              <span className="text-pine">developer&apos;s brain</span> and a{" "}
              <span className="text-coral">designer&apos;s heart</span>.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-ink/75 md:text-lg lg:col-span-4">
          <Reveal y={22}>
            <p>
              For 3+ years I shipped data-intensive React and React Native
              apps like vessel-tracking dashboards, ERP systems, an AI chat
              product, and a volunteering app that&apos;s live on the App Store.
              Designing those interfaces is what pulled me toward UX.
            </p>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <p>
              Today, with 2+ years in UI/UX and product design, I&apos;m based
              in{" "}
              <span className="font-semibold text-ink">Kochi, Kerala</span>. I
              bridge design and engineering. I can run discovery, ship a Figma
              system, then build it in production. Fewer handoff gaps, and
              interfaces that feel the way they looked in the mockup.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/[0.07] md:mt-24 md:grid-cols-4"
      >
        {STATS.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="bg-cream p-7 md:p-9">
            <div className="display text-[clamp(2.6rem,6vw,4.2rem)] font-extrabold leading-none text-pine">
              <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm text-ink/60 md:text-base">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
