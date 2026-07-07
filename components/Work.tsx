"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

type Project = {
  n: string;
  title: string;
  client: string;
  year: string;
  category: string;
  blurb: string;
  tags: string[];
  bg: string; // accent tile background (e.g. "bg-pine")
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Milaha Analytics Platform",
    client: "Navalt Electric Boats",
    year: "2022",
    category: "Data Platform",
    blurb:
      "A deck-management, weather-prediction and data-visualization platform for the shipping domain. It was the most successful product I shipped, used to plan and monitor live vessel operations.",
    tags: ["React", "Redux", "Data Viz", "Dashboards"],
    bg: "bg-pine",
    featured: true,
  },
  {
    n: "02",
    title: "Leaders of Change",
    client: "Emirates Nature · Global Invisions",
    year: "2023",
    category: "Mobile App",
    blurb:
      "A cross-platform volunteering app for Emirates Nature, live on the Apple App Store, built from UX mockups into polished iOS & Android experiences.",
    tags: ["React Native", "iOS", "Android", "UX"],
    bg: "bg-ochre",
  },
  {
    n: "03",
    title: "Sentiment Chat",
    client: "Tower Ideas · Cosmic DNA",
    year: "2024",
    category: "AI Web App",
    blurb:
      "Frontend for an AI-backed chat product, delivered with a remote UK team using Next.js and ShadCN. Fast, accessible and component-driven.",
    tags: ["Next.js", "ShadCN", "AI", "UI"],
    bg: "bg-clay",
  },
  {
    n: "04",
    title: "ERP & Doorstep Delivery",
    client: "Global Invisions",
    year: "2023",
    category: "Product Suite",
    blurb:
      "Solo-built the frontend for multiple ERP tools and doorstep-delivery apps, translating wireframes into responsive, interactive products end to end.",
    tags: ["React", "Tailwind", "Ant Design"],
    bg: "bg-sage",
  },
  {
    n: "05",
    title: "Maa Gold Brand System",
    client: "Maa Gold LLC",
    year: "2024",
    category: "Branding",
    blurb:
      "Brand identity, infographics and marketing collateral for a Dubai gold firm, work that lifted client engagement and understanding by 30%.",
    tags: ["Branding", "Figma", "Social", "Print"],
    bg: "bg-coral",
  },
  {
    n: "06",
    title: "Vessel Tracking Dashboards",
    client: "Navalt Electric Boats",
    year: "2020–23",
    category: "Dashboards",
    blurb:
      "8+ data-intensive dashboards for real-time shipping and vessel management, with dense information designed to stay legible and fast.",
    tags: ["React", "Data Viz", "Realtime"],
    bg: "bg-pine",
  },
];

const DOT_TEXTURE = {
  backgroundImage:
    "radial-gradient(rgba(244,238,228,0.22) 1.3px, transparent 1.3px)",
  backgroundSize: "16px 16px",
};

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative overflow-hidden rounded-3xl border border-ink/15 bg-cream transition-shadow duration-500 hover:shadow-[0_24px_60px_-26px_rgba(0,0,0,0.28)] ${
        p.featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Bold accent tile */}
      <div
        className={`relative aspect-[16/10] overflow-hidden ${p.bg} ${
          p.featured ? "lg:aspect-auto lg:h-full" : ""
        }`}
      >
        {/* dotted texture */}
        <div className="absolute inset-0" style={DOT_TEXTURE} />
        {/* subtle sheen for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream/10 via-transparent to-ink/25" />
        {/* window chrome */}
        <div className="absolute left-5 top-5 z-10 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-cream/70" />
          <span className="h-3 w-3 rounded-full bg-cream/45" />
          <span className="h-3 w-3 rounded-full bg-cream/25" />
        </div>
        {/* floating cream "UI" card */}
        <div className="gh-shape absolute -bottom-10 -right-10 h-44 w-44 rounded-[2.5rem] bg-cream/90 shadow-[0_14px_40px_-12px_rgba(0,0,0,0.35)]" />
        {/* orb ring */}
        <div className="gh-orb absolute right-10 top-1/2 h-16 w-16 rounded-full border-2 border-cream/40" />
        {/* watermark number */}
        <span className="absolute bottom-4 left-6 z-10 font-display text-7xl font-extrabold text-cream/30">
          {p.n}
        </span>
        {/* category pill */}
        <span className="mono-label absolute right-5 top-5 z-10 rounded-full bg-cream/95 px-3 py-1 text-ink/80">
          {p.category}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col p-7 md:p-9">
        <div className="mono-label flex items-center justify-between text-ink/45">
          <span>{p.client}</span>
          <span>{p.year}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
          <span className="gh-underline">{p.title}</span>
        </h3>
        <p className="mt-3 max-w-2xl flex-1 text-sm leading-relaxed text-ink/70 md:text-base">
          {p.blurb}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink/70"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="section mx-auto max-w-[1600px] py-24 md:py-36">
      <Reveal>
        <div className="mono-label flex items-center gap-3 text-ink/45">
          <span>(02)</span>
          <span className="h-px w-10 bg-ink/25" />
          <span>Selected Work</span>
        </div>
      </Reveal>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[clamp(2rem,5.6vw,4.6rem)] font-extrabold leading-[0.98] tracking-tightest">
            Things I&apos;ve <span className="text-coral">designed</span> &amp;{" "}
            <span className="text-pine">built</span>.
          </h2>
        </Reveal>
        <Reveal y={18}>
          <p className="max-w-xs text-sm text-ink/55">
            Visuals are representative. Real case-study screenshots can drop
            straight into these frames.
          </p>
        </Reveal>
      </div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {PROJECTS.map((p) => (
          <Card key={p.n} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
