"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&h=900&q=80`;

const GALLERY = [
  {
    src: img("1714068691210-073dc52c6c1d"),
    alt: "A brown and white dog eating food out of a bowl",
  },
  {
    src: img("1676193866128-03a926df76ef"),
    alt: "A bowl of dry dog food kibble in a blue ceramic bowl",
  },
  {
    src: img("1596854331442-3cf47265cefb"),
    alt: "An orange tabby cat eating from a black ceramic bowl",
  },
  {
    src: img("1632236568025-1256513514b7"),
    alt: "A brown and white dog sitting next to a bowl of food",
  },
];

const STEPS = [
  {
    title: "Check the Life Stage",
    text: "Puppies, kittens, adults, and seniors all have different nutritional needs. Choose a formula made for your pet's current life stage, not just their species.",
  },
  {
    title: "Read the Ingredient List",
    text: 'Look for a named animal protein, such as chicken or salmon, as one of the first ingredients. Avoid foods that rely heavily on fillers and vague terms like "meat by-product."',
  },
  {
    title: "Consider Size and Breed",
    text: "Larger breeds often need food formulated to support joint health, while smaller breeds may benefit from smaller kibble sizes and higher energy density.",
  },
  {
    title: "Watch for Allergies and Sensitivities",
    text: "If your pet has itchy skin, upset stomach, or other recurring issues, they may be sensitive to certain ingredients. A limited-ingredient diet can help narrow down the cause.",
  },
  {
    title: "Transition Slowly",
    text: "When switching foods, mix the new food with the old over 7 to 10 days. This helps prevent digestive upset and lets your pet adjust gradually.",
  },
];

const TIPS = [
  "Consult your vet before making major diet changes.",
  "Stick to consistent feeding times and portions.",
  "Always provide fresh water alongside meals.",
];

export default function ChoosingTheRightFoodForYourPetPage() {
  const [current, setCurrent] = useState(0);
  const total = GALLERY.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  const arrowClass =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#C97F4B] shadow-md transition-colors hover:bg-[#C97F4B] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]";

  return (
    <main>
      <Navbar inset />

      <article className="mx-auto max-w-4xl px-6 pb-16 pt-6 font-fredoka text-[#3B2A1F] sm:px-8 md:pt-2">
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
          Choosing the Right Food for Your Pet
        </h1>

        <p className="mt-6 text-xl italic leading-relaxed text-[#5C4A3D]">
          With so many options on the shelf, picking the right food can feel
          overwhelming. Here&apos;s what to actually look at when choosing what
          goes in your pet&apos;s bowl.
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