"use client";

import { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scrollTo";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "ai", label: "AI" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    // allow the overlay to start closing before we scroll
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav className="section mx-auto flex max-w-[1600px] items-center justify-between">
          <button
            onClick={() => go("top")}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream gh-spin">
              <span className="font-display text-sm font-extrabold">J</span>
            </span>
            <span className="font-display text-base font-extrabold tracking-tightest">
              Jesna<span className="text-coral">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div
            className={`hidden items-center gap-1 rounded-full border border-ink/10 bg-cream/70 p-1.5 backdrop-blur-md transition-all duration-500 md:flex ${
              scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : ""
            }`}
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink hover:text-cream"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => go("contact")}
              className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform duration-300 ease-spring hover:scale-105 md:block"
            >
              Let&apos;s talk
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-ink/15 bg-cream/70 backdrop-blur-md md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-coral px-8 transition-[clip-path] duration-700 ease-out-expo md:hidden ${
          open
            ? "[clip-path:circle(150%_at_90%_5%)]"
            : "pointer-events-none [clip-path:circle(0%_at_90%_5%)]"
        }`}
      >
        <ul className="space-y-2">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-display text-6xl font-extrabold tracking-tightest text-ink"
              >
                <span className="mono-label mr-3 align-top text-ink/40">
                  0{i + 1}
                </span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => go("contact")}
          className="mt-12 w-fit rounded-full bg-ink px-7 py-4 text-lg font-semibold text-cream"
        >
          Let&apos;s talk →
        </button>
      </div>
    </>
  );
}
