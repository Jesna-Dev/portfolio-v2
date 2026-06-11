// Deprecated: Lenis smooth-scroll was removed in favour of native scrolling.
// Kept as an inert passthrough (this mount does not allow file deletion).
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
