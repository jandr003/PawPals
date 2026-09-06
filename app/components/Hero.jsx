"use client";

const PAW_POSITIONS = [
  { top: "10%", left: "60%", size: 30, rotate: -18, opacity: 0.45 },
  { top: "50%", left: "70%", size: 24, rotate: 10, opacity: 0.4 },
  { top: "28%", left: "8%", size: 26, rotate: -6, opacity: 0.4 },
  { top: "70%", left: "14%", size: 22, rotate: 14, opacity: 0.35 },
];

function Paw({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="#EFDFC6">
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <ellipse cx="14" cy="24" rx="7" ry="9" />
      <ellipse cx="30" cy="14" rx="7" ry="9" />
      <ellipse cx="48" cy="18" rx="6.5" ry="8.5" />
      <ellipse cx="54" cy="34" rx="6" ry="8" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pb-16">
      <div className="pointer-events-none absolute inset-0">
        {PAW_POSITIONS.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{ top: p.top, left: p.left, transform: `rotate(${p.rotate}deg)`, opacity: p.opacity }}
          >
            <Paw size={p.size} />
          </div>
        ))}
      </div>

      <div className="relative w-full pb-16 pt-22 pl-48 sm:pl-64">
        <div className="max-w-[720px]">
          <h1 className="font-fredoka text-[56px] font-semibold leading-[1.1] text-text sm:text-[64px] lg:text-[72px]">
            Every Paw Deserves Love and Care
          </h1>
          <p className="mt-6 max-w-[560px] font-fredoka text-2xl font-light leading-relaxed text-text/80">
            Adopt pets, book vet appointments, and give your companions the
            love and care they deserve.
          </p>
          <button className="mt-8 rounded-full bg-button px-12 py-5 font-fredoka text-xl font-medium text-white shadow-[0_10px_24px_-10px_rgba(199,125,74,0.6)] transition hover:brightness-95">
            Adopt Now
          </button>
        </div>
      </div>

      <img
        src="/home/HOME-PICTURE-1.png"
        alt="Happy pet"
        className="absolute right-56 -top-24 w-full max-w-[620px] object-contain"
      />

     
      <div className="relative mx-auto mt-32 max-w-2xl px-8 text-center">
        <h2 className="font-fredoka text-[28px] font-semibold text-text">
          Welcome to PawPals!
        </h2>
        <p className="mt-4 font-fredoka text-[15px] font-light leading-[1.75] text-text/80">
          PawPals is a caring space where pets find love, attention, and a
          second chance at happiness. We help connect animals in need with
          people who are ready to welcome them home, while also making sure
          every pet receives the care they deserve through trusted services
          and support.
        </p>
      </div>
    </section>
  );
}