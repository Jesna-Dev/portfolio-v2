import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFFFF",
        ink: "#17130F",
        coral: "#FB5A35", // primary pop — kept
        pine: "#1E4A42", // deep, refined secondary (replaces blue)
        clay: "#C16A4B", // muted terracotta
        ochre: "#CE9347", // muted mustard
        sage: "#97A684", // muted green-grey
        sand: "#E8DBC7", // warm neutral panel
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "12rem",
        "12xl": "14rem",
      },
      letterSpacing: {
        tightest: "-0.06em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        floatX: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(14px,-10px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "marquee-fast": "marquee 18s linear infinite",
        spinSlow: "spinSlow 22s linear infinite",
        float: "float 8s ease-in-out infinite",
        floatX: "floatX 11s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
