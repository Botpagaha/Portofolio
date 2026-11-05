import { useId } from "react";

type Kind = "cube" | "pyramid" | "gem";

// Setiap sisi: [titik polygon, opasitas isi]. Opasitas berbeda per sisi
// memberi kesan pantulan cahaya pada kristal kaca.
const shapes: Record<Kind, [string, number][]> = {
  cube: [
    ["50,6 92,28 50,50 8,28", 0.5],
    ["8,28 50,50 50,94 8,72", 0.16],
    ["92,28 50,50 50,94 92,72", 0.3],
  ],
  pyramid: [
    ["50,8 6,88 50,64", 0.42],
    ["50,8 94,88 50,64", 0.2],
    ["6,88 94,88 50,64", 0.1],
  ],
  gem: [
    ["50,4 8,38 50,38", 0.52],
    ["50,4 92,38 50,38", 0.3],
    ["8,38 50,96 50,38", 0.14],
    ["92,38 50,96 50,38", 0.24],
  ],
};

export default function Crystal({
  kind = "cube",
  className = "",
  rotate = 0,
}: {
  kind?: Kind;
  className?: string;
  rotate?: number;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={`overflow-visible drop-shadow-[0_0_22px_rgba(45,226,230,0.45)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8fbff" />
          <stop offset="45%" stopColor="#2de2e6" />
          <stop offset="100%" stopColor="#1d6fd6" />
        </linearGradient>
      </defs>
      {shapes[kind].map(([points, op], i) => (
        <polygon
          key={i}
          points={points}
          fill={`url(#${id})`}
          fillOpacity={op}
          stroke="rgba(210,255,255,0.6)"
          strokeWidth="0.9"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}
