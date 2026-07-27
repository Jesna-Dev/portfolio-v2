"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

type Tool = {
  n: string;
  name: string;
  role: string;
  blurb: string;
  tags: string[];
  dot: string;
  accent: string;
};

const TOOLS: Tool[] = [
  {
    n: "01",
    name: "Claude + Figma MCP",
    role: "Design ↔ Code bridge",
    blurb:
      "I pipe Figma frames straight into Claude via the MCP server. It reads the design, generates production-ready React with the right tokens, and syncs edits back to Figma. Handoff becomes a conversation, not a document.",
    tags: ["MCP", "Figma", "Claude Code", "Design-to-Code"],
    dot: "bg-coral",
    accent: "gh-card-coral",
  },
  {
    n: "02",
    name: "Google Stitch",
    role: "Prompt-to-UI concepting",
    blurb:
      "For zero-to-one screens I generate multiple UI directions with Stitch, then pull the best layouts into Figma to refine. Cuts the blank-canvas phase from days to an afternoon.",
    tags: ["Ideation", "Wireframes", "Fast Iteration"],
    dot: "bg-pine",
    accent: "gh-card-pine",
  },
  {
    n: "03",
    name: "Figma Make & AI Agents",
    role: "In-canvas co-pilot",
    blurb:
      "First Draft, Make and the newer Figma agents handle the grunt work: variant generation, auto-layout cleanup, copy alternates, component naming. I keep the taste, they keep the pace.",
    tags: ["Figma Make", "First Draft", "Auto-Layout"],
    dot: "bg-ochre",
    accent: "gh-card-ochre",
  },
  {
    n: "04",
    name: "v0 & Cursor",
    role: "Prompt-to-prototype",
    blurb:
      "v0 for high-fidelity React prototypes from a screenshot or spec. Cursor for pairing on the frontend build. Together they collapse the mockup → clickable prototype loop.",
    tags: ["v0", "Cursor", "Prototyping"],
    dot: "bg-clay",
    accent: "gh-card-clay",
  },
  {
    n: "05",
    name: "Galileo & Uizard",
    role: "Rapid layout exploration",
    blurb:
      "When a client needs three directions by tomorrow, Galileo and Uizard let me spin up structured screens fast, then push them into a proper Figma system for the real work.",
    tags: ["Galileo", "Uizard", "Concepts"],
    dot: "bg-sage",
    accent: "gh-card-pine",
  },
  {
    n: "06",
    name: "Midjourney & Firefly",
    role: "Visual + brand assets",
    blurb:
      "Moodboards, hero imagery, illustration exploration and brand-adjacent visuals. Used as raw material, not final output; every asset goes through a design pass before it ships.",
    tags: ["Midjourney", "Firefly", "Moodboards"],
    dot: "bg-coral",
    accent: "gh-card-coral",
  },
];

const STAGES = [
  {
    step: "01",
    name: "Discovery",
    ai: "Claude for competitor teardowns, user-interview synthesis, JTBD framing.",
  },
  {
    step: "02",
    name: "Ideation",
    ai: "Google Stitch + Galileo for five directions in an hour.",
  },
  {
    step: "03",
    name: "Wireframe",
    ai: "Figma First Draft & Make to block layouts, then hand-refine.",
  },
  {
    step: "04",
    name: "Hi-Fi UI",
    ai: "Figma agents for variants, Claude for microcopy and a11y checks.",
  },
  {
    step: "05",
    name: "Prototype",
    ai: "v0 & Cursor to turn frames into clickable React.",
  },
  {
    step: "06",
    name: "Handoff",
    ai: "Figma MCP → Claude Code writes the production component.",
  },
];

const AI_MARQUEE = [
  "Claude",
  "Figma MCP",
  "Google Stitch",
  "Figma Make",
  "First Draft",
  "v0",
  "Cursor",
  "Galileo AI",
  "Uizard",
  "Midjourney",
  "Adobe Firefly",
  "ChatGPT",
];

export default function AIWorkflow() {
  return (
    <section
      id="ai"
      className="section relative mx-auto max-w-[1600px] py-24 md:py-36"
    >
      <Reveal>
        <div className="mono-label flex items-center gap-3 text-ink/45">
          <span>(04)</span>
          <span className="h-px w-10 bg-ink/25" />
          <span>AI-Driven UI/UX</span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5.6vw,4.6rem)] font-extrabold leading-[0.98] tracking-tightest">
              I design <span className="text-coral">with</span> AI, not{" "}
              <span className="text-pine">around</span> it.
            </h2>
          </Reveal>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink/75 md:text-lg lg:col-span-4">
          <Reveal y={22}>
            <p>
              AI is now part of the design toolchain, the same way Figma was in
              2018. I&apos;ve rebuilt my workflow around it, so I can ship
              faster, explore wider, and spend the saved hours on the parts that
              actually need taste and judgment.
            </p>
          </Reveal>
          <Reveal y={22} delay={0.08}>
            <p>
              The rule stays the same: AI drafts, I decide. Every screen still
              gets a human pass for hierarchy, accessibility and brand voice
              before it ships.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Tool grid */}
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TOOLS.map((t) => (
          <motion.div
            key={t.n}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className={`group gh-card ${t.accent} flex flex-col rounded-3xl border border-ink/15 bg-cream p-7`}
          >
            <div className="flex items-center justify-between">
              <span className="mono-label text-ink/40">{t.n}</span>
              <span className={`h-3 w-3 rounded-full ${t.dot}`} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold leading-tight">
              {t.name}
            </h3>
            <div className="mono-label mt-2 text-ink/50">{t.role}</div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
              {t.blurb}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Workflow stages */}
      <div className="mt-16 rounded-3xl border border-ink/15 bg-ink p-8 text-cream md:mt-24 md:p-12">
        <Reveal>
          <div className="mono-label text-cream/50">
            The workflow, stage by stage
          </div>
        </Reveal>
        <Reveal>
          <h3 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-4xl">
            Where AI plugs into the design process.
          </h3>
        </Reveal>

        <motion.ol
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {STAGES.map((s) => (
            <motion.li
              key={s.step}
              variants={fadeUp}
              className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-6 transition-colors duration-300 hover:border-coral/60 hover:bg-cream/[0.07]"
            >
              <div className="flex items-center gap-3">
                <span className="mono-label text-cream/45">{s.step}</span>
                <span className="h-px flex-1 bg-cream/15" />
              </div>
              <div className="mt-4 font-display text-xl font-bold text-cream">
                {s.name}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                {s.ai}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {/* Marquee band */}
      <div className="mt-14 border-y border-ink/15 py-6 md:mt-20">
        <Marquee
          items={AI_MARQUEE}
          separator="◇"
          className="font-display text-[clamp(1.8rem,5vw,4rem)] font-extrabold uppercase tracking-tightest text-stroke"
        />
      </div>
    </section>
  );
}
