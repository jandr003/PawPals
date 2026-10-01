"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const img = (id) => `https://unsplash.com/photos/${id}/download?force=true&w=1600`;

const GALLERY = [
  {
    src: img("Hen3PrsTGsM"),
    alt: "A woman in a blue t-shirt hugging a white dog",
  },
  {
    src: img("6LS14DBENBQ"),
    alt: "A happy white dog walking between two people",
  },
  {
    src: img("XB5d-wHKOaw"),
    alt: "A dog sitting calmly on a leash next to a person",
  },
  {
    src: img("LsgcgT_kPh8"),
    alt: "A woman holding a small dog in her arms",
  },
];

const STEPS = [
  {
    title: "Start with Short Exposures",
    text: "Introduce new people or animals in short, calm sessions rather than all at once. Gradually increasing the time together helps prevent your pet from feeling overwhelmed.",
  },
  {
    title: "Let Them Approach First",
    text: "Forcing an interaction usually backfires. Give your pet the space to approach at their own pace, and let them retreat if they need to.",
  },
  {
    title: "Use Positive Associations",
    text: "Pair new people or animals with treats, praise, or their favorite toy. This helps your pet start to associate unfamiliar faces with good things.",
  },
  {
    title: "Watch for Stress Signals",
    text: "Lip licking, yawning, tucked tails, or hiding are signs your pet needs space. Step back and slow down whenever you notice these cues.",
  },
  {
    title: "Practice Regularly",
    text: "Socialization isn't a one-time event. Regular, low-pressure exposure to new people, pets, and environments keeps your pet comfortable over time.",
  },
];

const TIPS = [
  "Never force an interaction your pet is clearly avoiding.",
  "Keep early sessions short and end on a positive note.",
  "Go at your pet's pace, not a fixed timeline.",
];

export default function HelpingYourPetBeMoreComfortableAroundOthersPage() {
  const [current, setCurrent] = useState(0);
  const total = GALLERY.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  const arrowClass =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#C97F4B] shadow-md transition-colors hover:bg-[#C97F4B] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]";

  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 pb-16 pt-2 font-fredoka text-[#3B2414] sm:px-8">
        <Link
          href="/blog"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5D5C3] bg-white px-5 py-2.5 text-sm font-semibold text-[#C97F4B] shadow-[0_2px_8px_rgba(201,127,75,0.12)] transition-all duration-300 hover:border-[#C97F4B] hover:bg-[#C97F4B] hover:text-white hover:shadow-[0_4px_14px_rgba(201,127,75,0.35)]"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={2.5}
          />
          Back to Blog
        </Link>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#F5E6D3]">
          {GALLERY.map((photo, i) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className={`${arrowClass} left-3`}
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className={`${arrowClass} right-3`}
              >
                <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/30 px-3 py-1.5">
                {GALLERY.map((photo, i) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Show photo ${i + 1}`}
                    aria-current={i === current}
                    className={`h-2.5 rounded-full transition-all ${
                      i === current ? "w-6 bg-white" : "w-2.5 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F5E6D3] px-4 py-1.5 text-sm font-semibold text-[#3B2A1F]">
          <CalendarDays className="h-4 w-4 text-[#B5541F]" strokeWidth={2.5} />
          24 May 2026
        </span>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#4A2E1E] md:text-6xl">
          Helping Your Pet Be More Comfortable Around Others
        </h1>

        <p className="mt-6 text-xl italic leading-relaxed text-[#5C4A3D]">
          Whether it&apos;s new people, other animals, or unfamiliar places,
          helping your pet feel at ease around others takes patience and the
          right approach.
        </p>

        <div className="mt-10 space-y-4">
          {STEPS.map((step, i) => (
            <section
              key={step.title}
              className="flex gap-5 rounded-xl border border-[#EFE0CE] bg-[#FBF6EE] p-6"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#C9622A] text-lg font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="text-2xl font-bold text-[#4A2E1E]">
                  {step.title}
                </h2>
                <p className="mt-2 text-lg leading-relaxed text-[#5C4A3D]">
                  {step.text}
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-6 rounded-xl border border-[#D9E2CC] bg-[#EEF2E6] px-7 py-6">
          <h2 className="text-2xl font-bold text-[#4B5D3A]">Tips for Success</h2>
          <ul className="mt-4 space-y-3 text-lg text-[#4A3C31]">
            {TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4B5D3A] text-white">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full bg-[#C9622A] px-8 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#B5541F]"
          >
            Read more articles
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}