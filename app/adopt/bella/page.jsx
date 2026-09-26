import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { pets } from "../../data/pets";

export default function BellaPage() {
  const pet = pets.find((p) => p.slug === "bella");
  const { name, breed, age, gender, status, image, description } = pet;

  const gallery = [
    image,
    "https://images.unsplash.com/photo-1628685800701-39a8413d7555?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571955080362-262bed2e0bbc?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  ];

  const loves = [
    "Long walks and outdoor time",
    "Belly rubs and physical affection",
    "Playing fetch and active games",
    "Food and treats",
    "Being around people",
  ];

  const dislikes = [
    "Being left alone for long periods",
    "Loud noises and sudden movements",
    "Rough handling",
    "Not getting enough exercise",
    "Other pets (may be selective)",
  ];

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16 font-fredoka text-text">
        <Link
          href="/adopt"
          className="mb-8 inline-flex items-center gap-1 text-base font-medium text-[#C97F4B]"
        >
          ← Back to all pets
        </Link>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            {status && (
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-base font-semibold text-white shadow-sm">
                🐾 {status}
              </span>
            )}

            <h1 className="mt-5 text-6xl font-bold text-[#3B2414]">{name}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-lg text-[#3B2414]/70">
              <span className="inline-flex items-center gap-1.5">
                🐾 {breed}
              </span>
              {age && (
                <span className="inline-flex items-center gap-1.5">
                  ⏳ {age}
                </span>
              )}
              {gender && (
                <span className="inline-flex items-center gap-1.5">
                  ♀ {gender}
                </span>
              )}
            </div>

            {description && (
              <p className="mt-6 border-l-4 border-emerald-600/40 pl-4 text-xl italic text-[#3B2414]/80">
                {description}
              </p>
            )}

            <div className="mt-5 space-y-4 text-lg leading-relaxed text-[#3B2414]/80">
              <p>
                Bella is a warm, high-energy companion who thrives on attention and activity. Like most Labradors, she's eager to please, quick to learn, and happiest when she has a job to do — whether that's fetching a ball, greeting you at the door, or simply keeping you company on the couch after a long walk.
              </p>
              <p>
                She does well with an active household that can match her energy and give her regular exercise. Her friendly, food-motivated nature makes her easy to train, and she gets along well with people of all ages.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-600/10">
                <p className="flex items-center gap-2 text-lg font-semibold text-emerald-800">
                  💚 What She Loves
                </p>
                <ul className="mt-4 space-y-2.5 text-base text-[#3B2414]/80">
                  {loves.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-emerald-600">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-rose-50 p-6 ring-1 ring-rose-600/10">
                <p className="flex items-center gap-2 text-lg font-semibold text-rose-800">
                  🚫 What She Dislikes / Avoids
                </p>
                <ul className="mt-4 space-y-2.5 text-base text-[#3B2414]/80">
                  {dislikes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-rose-600">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F5E6D3]">
              {gallery[0] && (
                <Image
                  src={gallery[0]}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {gallery.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F5E6D3]"
                >
                  <Image
                    src={src}
                    alt={`${name} photo ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <button className="w-full rounded-full bg-[#C97F4B] px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#B8703D] sm:w-auto">
                🐾 Start Adoption Process →
              </button>
              <span className="inline-flex items-center gap-1.5 text-base text-emerald-700">
                🤍 Give {name} a forever home
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}