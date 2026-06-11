import type { Metadata, Viewport } from "next";
// Self-hosted fonts (no external requests at build or runtime).
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

// Canonical site URL — used to build absolute OpenGraph / Twitter image URLs.
// Override with NEXT_PUBLIC_SITE_URL if the domain ever changes.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://jeselizabeth.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jesna K Elizabeth Jolly — UI/UX Designer & Frontend Developer",
  description:
    "Portfolio of Jesna K Elizabeth Jolly, a UI/UX designer and frontend developer based in Kochi, India. 4 years turning complex, data-heavy products into interfaces people love.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Figma",
    "Kochi",
    "Portfolio",
  ],
  authors: [{ name: "Jesna K Elizabeth Jolly" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jesna K Elizabeth Jolly — UI/UX Designer & Frontend Developer",
    description:
      "4 years turning complex, data-heavy products into interfaces people love.",
    url: "/",
    siteName: "Jesna K Elizabeth Jolly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesna K Elizabeth Jolly — UI/UX Designer & Frontend Developer",
    description:
      "4 years turning complex, data-heavy products into interfaces people love.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EEE4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        <MotionProvider>
          <Cursor />
          <Nav />
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
