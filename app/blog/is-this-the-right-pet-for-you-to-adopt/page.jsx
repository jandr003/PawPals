"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const img = (id) => `https://unsplash.com/photos/${id}/download?force=true&w=1600`;

const GALLERY = [
  {
    src: img("ISg37AI2A-s"),
    alt: "A person hugging a happy tan dog outdoors",
  },
  {
    src: img("Ey2Wv-nbBUM"),
    alt: "A man sitting on a mountain with his dog",
  },
  {
    src: img("UKYwI2LAyAM"),
    alt: "Silhouette of a man and his dog during a sunset hike",
  },
  {
    src: img("Rcg4Z9UFLuM"),
    alt: "A man hiking up a hill with his dog",
  },
];

const STEPS = [
  {
    title: "Consider Your Lifestyle",
    text: "Think about your daily schedule, activity level, and how much time you can realistically dedicate to a pet. Some animals need much more attention and exercise than others.",
  },
  {
    title: "Check Your Living Space",
    text: "A large dog may struggle in a small apartment, while some pets do fine with limited space. Make sure your home fits the needs of the pet you're considering.",
  },
  {
    title: "Factor in the Costs",
    text: "Food, vet visits, grooming, and supplies add up over time. Make sure you're prepared for the ongoing costs of pet ownership, not just the adoption fee.",
  },
  {
    title: "Think About Long-Term Commitment",
    text: "Pets can live anywhere from several years to over a decade. Consider whether your future plans can accommodate a long-term companion.",
  },
  {
    title: "Match Energy and Personality",
    text: "A calm, laid-back pet might suit a quiet household, while an active pet might be happier with someone who enjoys the outdoors. Choosing a good match sets you both up for success.",
  },
];

const TIPS = [
  "Talk to shelter staff about a pet's personality and needs.",
  "Ask about a trial period if you're unsure.",
  "Make sure everyone in the household is on board.",
];

export default function IsThisTheRightPetForYouToAdoptPage() {
  const [current, setCurrent] = useState(0);
  const total = GALLERY.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  const arrowClass =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#C97F4B] shadow-md transition-colors hover:bg-[#C97F4B] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]";

  return (
    <main>
      <Navbar inset />

      <article className="mx-auto max-w-4xl px-6 pb-16 pt-6 font-fredoka text-[#3B2414] sm:px-8 md:pt-2">
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
          Is This the Right Pet for You to Adopt?
        </h1>

        <p className="mt-6 text-xl italic leading-relaxed text-[#5C4A3D]">
          Adopting a pet is a big decision. Before bringing one home, here are
          a few things worth thinking through.
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