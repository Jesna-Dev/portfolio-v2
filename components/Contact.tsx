import SplitText from "./SplitText";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

const EMAIL = "jesnakelizabethjolly@gmail.com";
const PHONE_DISPLAY = "+91 7560 9598 85";
const PHONE_HREF = "tel:+917560959885";

// NOTE: replace the LinkedIn / Instagram URLs below with Jesna's real handles.
const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/jesna-k-elizabeth-jolly",
  },
  { label: "Download CV", href: "/Jesna-K-Elizabeth-Jolly-CV.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-cream">
      <div className="section mx-auto max-w-[1600px] py-24 md:py-36">
        <Reveal>
          <div className="mono-label flex items-center gap-3 text-cream/40">
            <span>(05)</span>
            <span className="h-px w-10 bg-cream/30" />
            <span>Contact</span>
          </div>
        </Reveal>

        <h2 className="mt-8 font-display text-[clamp(2.6rem,9vw,8rem)] font-extrabold leading-[0.86] tracking-tightest">
          <span className="block overflow-hidden">
            <SplitText text="Let's make" inView stagger={0.04} />
          </span>
          <span className="block overflow-hidden text-coral">
            <SplitText
              text="something good."
              inView
              delay={0.1}
              stagger={0.04}
            />
          </span>
        </h2>

        <Reveal y={20}>
          <p className="mt-8 max-w-xl text-lg text-cream/70">
            Looking for a designer who can also build? I&apos;m open to product
            design roles and collaborations. The fastest way to reach me:
          </p>
        </Reveal>

        {/* Big email link */}
        <div className="mt-8">
          <MagneticButton
            href={`mailto:${EMAIL}`}
            className="group inline-flex max-w-full items-center break-all font-display text-[clamp(1.4rem,5vw,3.4rem)] font-bold tracking-tightest text-cream"
            strength={0.25}
          >
            <span className="gh-underline-accent">{EMAIL}</span>
            <span className="gh-x-lg ml-3 hidden md:inline">→</span>
          </MagneticButton>
        </div>

        {/* Details + socials */}
        <div className="mt-16 grid gap-10 border-t border-cream/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mono-label text-cream/40">Phone</div>
            <a
              href={PHONE_HREF}
              className="mt-2 block text-lg text-cream/90 transition-colors hover:text-coral"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <div>
            <div className="mono-label text-cream/40">Location</div>
            <p className="mt-2 text-lg text-cream/90">
              Kochi, Kerala, India
              <span className="block text-sm text-cream/50">
                Open to remote &amp; relocation
              </span>
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="mono-label text-cream/40">Elsewhere</div>
            <ul className="mt-3 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-2.5 text-sm font-medium text-cream transition-all hover:border-coral hover:bg-coral hover:text-cream"
                  >
                    {s.label}
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
