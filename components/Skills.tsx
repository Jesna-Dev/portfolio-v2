"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

const DESIGN = [
  "Product Design",
  "UI Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "User Flow",
  "Visual Design",
  "Interaction Design",
  "UX Writing",
  "Usability Testing",
  "Responsive UI",
  "Figma",
  "Adobe XD",
];

const DEV = [
  "React",
  "Next.js",
  "React Native",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

// Frontend stack, shown as a fallback for HR considering frontend roles.
const FRONTEND = [
  "React",
  "Next.js",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
];

const CARDS = [
  {
    n: "01",
    title: "UX & Product Design",
    blurb:
      "Research-informed flows, wireframes and prototypes that solve the right problem before a pixel is drawn.",
    tools: ["User Flows", "Wireframing", "Prototyping", "Figma"],
    dot: "bg-coral",
    accent: "gh-card-coral",
  },
  {
    n: "02",
    title: "UI & Design Systems",
    blurb:
      "Pixel-perfect, accessible interfaces and scalable design systems with reusable components and tokens.",
    tools: ["Design Systems", "Components", "Accessibility", "Figma"],
    dot: "bg-clay",
    accent: "gh-card-clay",
  },
  {
    n: "03",
    title: "Frontend Engineering",
    blurb:
      "I build what I design: production-grade React, Next.js and React Native with clean, maintainable code.",
    tools: ["React", "Next.js", "React Native", "TypeScript", "Tailwind"],
    dot: "bg-pine",
    accent: "gh-card-pine",
  },
  {
    n: "04",
    title: "Brand & Social",
    blurb:
      "Brand identities, marketing collateral and social content, the kind that lifted client engagement 30%.",
    tools: ["Branding", "Posters", "LinkedIn", "Instagram"],
    dot: "bg-ochre",
    accent: "gh-card-ochre",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36">
      <div className="section mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mono-label flex items-center gap-3 text-ink/45">
            <span>(03)</span>
            <span className="h-px w-10 bg-ink/25" />
            <span>Capabilities</span>
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2rem,5.6vw,4.6rem)] font-extrabold leading-[0.98] tracking-tightest">
            A rare overlap of <span className="text-coral">design</span> and{" "}
            <span className="text-pine">engineering</span>.
          </h2>
        </Reveal>
      </div>

      {/* Marquee bands */}
      <div className="mt-14 space-y-3 border-y border-ink/15 py-6 md:mt-20">
        <Marquee
          items={DESIGN}
          className="font-display text-[clamp(2rem,6vw,5rem)] font-extrabold uppercase tracking-tightest"
        />
        <Marquee
          reverse
          items={DEV}
          separator="◆"
          className="font-display text-[clamp(2rem,6vw,5rem)] font-extrabold uppercase tracking-tightest text-stroke"
        />
      </div>

      {/* Capability cards */}
      <div className="section mx-auto mt-16 max-w-[1600px] md:mt-24">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CARDS.map((c) => (
            <motion.div
              key={c.n}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`group gh-card ${c.accent} flex flex-col rounded-3xl border border-ink/15 bg-cream p-7`}
            >
              <div className="flex items-center justify-between">
                <span className="mono-label text-ink/40">{c.n}</span>
                <span className={`h-3 w-3 rounded-full ${c.dot}`} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                {c.blurb}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Frontend shown as a fallback for HR considering frontend roles */}
      <div className="section mx-auto mt-6 max-w-[1600px]">
        <Reveal y={20}>
          <div className="flex flex-col gap-6 rounded-3xl border border-ink/15 bg-ink/[0.03] p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <div className="mono-label text-ink/45">
                Also open to frontend roles
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight md:text-3xl">
                I also ship production code
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 md:text-base">
                With 3+ years building React and React Native apps, I&apos;m
                happy to be considered for frontend or frontend-leaning product
                roles too.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
              {FRONTEND.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-ink/20 px-3.5 py-1.5 text-xs font-medium text-ink/70"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
