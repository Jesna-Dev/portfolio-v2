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
    role: "UX/UI Designer · Kochi, India",
    blurb:
      "Designing modern interfaces for websites and apps, plus engaging visuals for marketing and branding — collaborating with clients on clean, intuitive, user-focused solutions.",
    current: true,
  },
  {
    year: "2025–26",
    company: "Freelance",
    role: "UX/UI Designer · Kochi, India",
    blurb:
      "Created design themes for websites, apps and marketing materials, plus digital graphics for client campaigns — partnering closely with clients on clean, user-focused UI.",
  },
  {
    year: "2024",
    company: "The Tower Ideas",
    role: "UI/UX Designer · Remote, UK",
    blurb:
      "A UK-based IT company specialising in software development, web and mobile applications, and digital transformation — where I worked on user-focused UI/UX design.",
  },
  {
    year: "2023–24",
    company: "Global Invisions",
    role: "Frontend Developer · Kochi, India",
    blurb:
      "Developed the Leaders of Change mobile app — engaging UAE volunteers in sustainability initiatives through training and interactive activities — working with the team to deliver a seamless product experience.",
  },
  {
    year: "2020–23",
    company: "Navalt",
    role: "Frontend Developer · Kochi, India",
    blurb:
      "Designed and developed multiple web apps for a Vessel Analytics Platform used across the marine industry — improving vessel performance monitoring with actionable operational insights.",
  },
];

export default function Experience() {
  return (
    <section className="section mx-auto max-w-[1600px] py-24 md:py-36">
      <Reveal>
        <div className="mono-label flex items-center gap-3 text-ink/45">
          <span>(04)</span>
          <span className="h-px w-10 bg-ink/25" />
          <span>Experience</span>
        </div>
      </Reveal>

      <Reveal>
        <h2 className="mt-8 max-w-3xl font-display text-[clamp(2rem,5.6vw,4.6rem)] font-extrabold leading-[0.98] tracking-tightest">
          Four years, two crafts.
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
              Bachelor&apos;s in Computer Science
            </h3>
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
