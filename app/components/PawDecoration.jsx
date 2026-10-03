const DEFAULT_PAWS = [
  { top: "2%", left: "78%", size: 26, rotate: 14, opacity: 0.45 },
  { top: "4%", left: "6%", size: 24, rotate: -12, opacity: 0.4 },
  { top: "8%", left: "88%", size: 22, rotate: -8, opacity: 0.4 },
  { top: "10%", left: "24%", size: 24, rotate: 16, opacity: 0.4 },
  { top: "18%", left: "62%", size: 30, rotate: -18, opacity: 0.45 },
  { top: "28%", left: "8%", size: 26, rotate: -6, opacity: 0.4 },
  { top: "38%", left: "84%", size: 24, rotate: 12, opacity: 0.4 },
  { top: "50%", left: "70%", size: 24, rotate: 10, opacity: 0.4 },
  { top: "60%", left: "10%", size: 28, rotate: -14, opacity: 0.35 },
  { top: "70%", left: "14%", size: 22, rotate: 14, opacity: 0.35 },
  { top: "80%", left: "80%", size: 26, rotate: -10, opacity: 0.4 },
  { top: "92%", left: "30%", size: 24, rotate: 8, opacity: 0.35 },
];

function Paw({ size = 28, color = "#EFDFC6" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill={color} aria-hidden="true">
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <ellipse cx="14" cy="24" rx="7" ry="9" />
      <ellipse cx="30" cy="14" rx="7" ry="9" />
      <ellipse cx="48" cy="18" rx="6.5" ry="8.5" />
      <ellipse cx="54" cy="34" rx="6" ry="8" />
    </svg>
  );
}

export default function PawDecoration({ paws = DEFAULT_PAWS, color = "#EFDFC6", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {paws.map((p, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: p.top,
            left: p.left,
            transform: `rotate(${p.rotate}deg)`,
            opacity: p.opacity,
          }}
        >
          <Paw size={p.size} color={color} />
        </div>
      ))}
    </div>
  );
}