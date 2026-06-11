/**
 * Floating design-tool "stickers" that orbit the hero headline — Figma,
 * cursor, pen tool, bézier path, swatches, frame, and a MacBook.
 * Pure SVG + CSS transforms (no canvas). Positioned relative to the name and
 * sized down on mobile; a curated subset shows per breakpoint so they stay
 * tight around the word without crowding small screens.
 */

function FigmaIcon() {
  return (
    <svg width="19" height="28" viewBox="0 0 38 57" aria-hidden="true">
      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#CE9347" />
      <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#97A684" />
      <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#C16A4B" />
      <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#FB5A35" />
      <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#1E4A42" />
    </svg>
  );
}

function CursorIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
        fill="#17130F"
        stroke="#F4EEE4"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PenToolIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#1E4A42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function SplineIcon() {
  return (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#C16A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 17A12 12 0 0 1 17 5" />
      <rect x="3" y="15" width="4" height="4" rx="0.6" fill="#C16A4B" />
      <rect x="17" y="3" width="4" height="4" rx="0.6" fill="#C16A4B" />
    </svg>
  );
}

function FrameIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#17130F" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}

function SwatchIcon() {
  return (
    <svg width="25" height="23" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="9" width="5.5" height="12" rx="1.5" fill="#FB5A35" />
      <rect x="9.25" y="6" width="5.5" height="15" rx="1.5" fill="#1E4A42" />
      <rect x="16" y="3" width="5.5" height="18" rx="1.5" fill="#CE9347" />
    </svg>
  );
}

function MacbookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="6" y="7" width="12" height="7" rx="0.6" fill="#FB5A35" fillOpacity="0.16" />
      <path
        d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
        fill="none"
        stroke="#17130F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Doodle = {
  icon: React.ReactNode;
  pos: string;
  anim: string;
  tilt: number;
  vis: string;
};

// Positions are relative to the headline so the stickers hug the word closely.
// vis controls which breakpoints each one appears on.
const DOODLES: Doodle[] = [
  { icon: <MacbookIcon />, pos: "top-[20%] right-[22%]", anim: "animate-float", tilt: -7, vis: "block" },
  { icon: <FigmaIcon />, pos: "top-[-16%] right-[30%]", anim: "animate-floatX [animation-delay:-2s]", tilt: 8, vis: "block" },
  { icon: <CursorIcon />, pos: "top-[62%] right-[24%]", anim: "animate-float [animation-delay:-1.5s]", tilt: 10, vis: "block" },
  { icon: <PenToolIcon />, pos: "top-[-6%] right-[46%]", anim: "animate-floatX [animation-delay:-3s]", tilt: -10, vis: "hidden sm:block" },
  { icon: <SwatchIcon />, pos: "top-[40%] right-[11%]", anim: "animate-float [animation-delay:-4s]", tilt: 7, vis: "hidden lg:block" },
  { icon: <FrameIcon />, pos: "top-[-22%] right-[16%]", anim: "animate-floatX [animation-delay:-2.5s]", tilt: -6, vis: "hidden xl:block" },
  { icon: <SplineIcon />, pos: "top-[-10%] right-[57%]", anim: "animate-float [animation-delay:-1s]", tilt: 9, vis: "hidden xl:block" },
];

export default function HeroDecor() {
  return (
    <>
      {DOODLES.map((d, i) => (
        <div key={i} className={`pointer-events-none absolute ${d.vis} ${d.pos} ${d.anim}`}>
          <div
            className="grid h-11 w-11 place-items-center rounded-xl border border-ink/10 bg-cream/90 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.32)] backdrop-blur-sm lg:h-14 lg:w-14 lg:rounded-2xl"
            style={{ transform: `rotate(${d.tilt}deg)` }}
          >
            {d.icon}
          </div>
        </div>
      ))}
    </>
  );
}
