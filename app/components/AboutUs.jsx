"use client";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white pb-0 pt-24">
      <div className="relative mx-auto max-w-6xl px-8">
        <h2 className="font-fredoka text-[44px] font-bold text-text sm:text-[52px]">
          About Us
        </h2>
        <p className="mt-4 max-w-[520px] font-fredoka text-lg font-normal text-text/80">
          Helping Pets Stay Happy, Healthy, and Well-Groomed
        </p>
        <p className="mt-6 max-w-[520px] font-fredoka text-base font-light leading-relaxed text-text/70">
          PawPals started with a simple belief: every pet deserves a loving home
          and every pet owner deserves a trusted partner in their care. From
          adoption to grooming, vet visits to daily wellness, we bring together
          everything pets and their families need in one caring space. Our team
          works closely with local shelters and licensed vets to make sure every
          animal we connect you with is healthy, safe, and ready to be loved.
        </p>
      </div>

      <img
        src="/about%20us/ABOUT-PAWPALS.png"
        alt="Cat peeking"
        className="absolute right-16 bottom-0 w-full max-w-[460px] object-contain"
      />

      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block h-[100px] w-full"
      >
        <path
          fill="#ffffff"
          d="M0,60 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}