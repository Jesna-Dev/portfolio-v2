import React from "react";

type Props = {
  items: React.ReactNode[];
  reverse?: boolean;
  className?: string;
  fast?: boolean;
  separator?: React.ReactNode;
};

export default function Marquee({
  items,
  reverse = false,
  className = "",
  fast = false,
  separator = "✦",
}: Props) {
  const Group = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6">{item}</span>
          <span className="text-coral">{separator}</span>
        </span>
      ))}
    </div>
  );

  const animClass = reverse
    ? "animate-marquee-reverse"
    : fast
    ? "animate-marquee-fast"
    : "animate-marquee";

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div className={`flex w-max ${animClass}`}>
        {Group}
        {Group}
      </div>
    </div>
  );
}
