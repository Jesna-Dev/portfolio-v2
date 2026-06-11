"use client";

import Marquee from "./Marquee";
import { scrollToId } from "@/lib/scrollTo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink pb-10 text-cream">
      <div className="border-y border-cream/15 py-4">
        <Marquee
          items={[
            "Let's talk",
            "Available for work",
            "UI/UX Design",
            "Frontend Dev",
            "Kochi, India",
          ]}
          fast
          separator="✦"
          className="font-display text-xl font-semibold uppercase tracking-tight text-cream/90"
        />
      </div>

      {/* Giant clipped wordmark */}
      <div className="section mx-auto max-w-[1600px] pt-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-display text-2xl font-extrabold">
              Jesna<span className="text-coral">.</span>
            </div>
            <p className="mt-2 max-w-xs text-sm text-cream/55">
              UI/UX Designer &amp; Frontend Developer crafting interfaces people
              love.
            </p>
          </div>

          <button
            onClick={() => scrollToId("top")}
            className="group flex items-center gap-3 rounded-full border border-cream/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-cream hover:text-ink"
          >
            Back to top
            <span className="gh-up">↑</span>
          </button>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-10 select-none text-stroke-cream font-display text-[20vw] font-extrabold leading-[0.8] tracking-tightest opacity-30"
        >
          JESNA
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-cream/15 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Jesna K Elizabeth Jolly</span>
          <span>Designed &amp; built with care — Next.js, Tailwind &amp; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
