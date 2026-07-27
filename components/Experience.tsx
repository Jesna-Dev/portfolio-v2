"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

type Role = {
  year: string;
  company: string;
  role: string;
  blurb: string;
  current?: boolean;
};

const TIMELINE: Role[] = [
  {
    year: "2026",
    company: "Fegno Technologies",
    role: "UX/UI Designer · Kochi, Kerala",
    blurb:
      "Designed modern interfaces for websites and applications while creating engaging digital visuals for marketing and branding. Collaborated with clients to deliver clean, intuitive, and user-focused design solutions.",
    current: true,
  },
  {
    year: "2025",
    company: "Freelance",
    role: "UX/UI Designer · Kochi, Kerala",
    blurb:
      "Created modern design themes for websites, apps, and marketing materials. Designed digital graphics and promotional visuals for client campaigns while closely collaborating with clients to deliver clean, user-focused UI designs.",
  },
  {
    year: "2024",
    company: "Tower Ideas",
    role: "Product Designer · Dubai, UAE",
    blurb:
      "Created intuitive web and app interfaces with modern design systems. Collaborated with teams to produce user-focused layouts and interactive prototypes. Improved usability by refining flows based on client feedback.",
  },
  {
    year: "2023–24",
    company: "Global Invisions",
    role: "Frontend Developer · Kochi, Kerala",
    blurb:
      "Developed the Leaders of Change mobile application to engage UAE volunteers in sustainability initiatives through training and interactive activities. Collaborated with the team to deliver a high-quality, seamless product experience.",
  },
  {
    year: "2020–23",
    company: "Navalt",
    role: "Frontend Developer · Kochi, Kerala",
    blurb:
      "Developed and designed multiple web applications for a Vessel Analytics Platform used across the marine industry. Built solutions that improved vessel performance monitoring and provided actionable operational insights.",
  },
];

export default function Experience() {
  return (
    <section className="section mx-auto max-w-[1600px] py-24 md:py-36">
      <Reveal>
        <div className="mono-label flex items-center gap-3 text-ink/45">
          <span>(05)</span>
          <span className="h-px w-10 bg-ink/25" />
          <span>Experience</span>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 max-w-3xl font-display text-[clamp(2rem,5.6vw,4.6rem)] font-extrabold leading-[0.98] tracking-tightest">
          Five years, two crafts.
        </h2>
      </Reveal>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12"
      >
        {TIMELINE.map((r, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="group grid grid-cols-1 gap-3 border-t border-ink/15 py-7 transition-colors duration-300 hover:bg-ink/[0.03] md:grid-cols-12 md:gap-6 md:py-8"
          >
            <div className="flex items-center gap-3 md:col-span-4">
              {r.current ? (
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
                </span>
              ) : (
                <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              )}
              <span className="mono-label w-20 text-ink/55">{r.year}</span>
              <h3
                className={`font-display text-xl font-bold leading-tight md:text-2xl ${
                  r.current ? "text-coral" : ""
                }`}
              >
                {r.company}
              </h3>
            </div>
            <div className="md:col-span-8 md:pl-2">
              <div className="font-medium text-ink/90">{r.role}</div>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink/65 md:text-base">
                {r.blurb}
              </p>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-ink/15" />
      </motion.div>

      {/* Education */}
      <Reveal y={24} className="mt-12">
        <div className="flex flex-col justify-between gap-4 rounded-3xl bg-ink p-8 text-cream md:flex-row md:items-center md:p-10">
          <div>
            <div className="mono-label text-cream/50">Education</div>
            <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
              Bachelor of Computer Applications (BCA)
            </h3>
            <div className="mono-label mt-2 text-cream/50">2017–2020</div>
          </div>
          <p className="text-cream/70 md:text-right">
            Mahatma Gandhi University
            <br />
            Kerala, India
          </p>
        </div>
      </Reveal>
    </section>
  );
}
