import Image from "next/image";
import Link from "next/link";
import { Patrick_Hand } from "next/font/google";
import { PawPrint, Calendar, Venus, Mars, Check, X, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { pets } from "../../data/pets";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function OreoPage() {
  const pet = pets.find((p) => p.slug === "oreo");
  const { name, breed, age, gender, status, description } = pet;

 const gallery = [
  "https://images.unsplash.com/photo-1759150277860-9a3fde500882?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629359055811-3b4e9bdf1657?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1625256237737-49d1d98c81b9?fm=jpg&q=60&w=1200&auto=format&fit=crop",
 ];

  const loves = [
    "Games of fetch that never end",
    "Agility courses and learning new tricks",
    "Long runs and off-leash play in a safe yard",
    "Treats as rewards for a job well done",
    "Staying close to his people",
  ];

  const dislikes = [
    "Being bored or under-exercised",
    "Long hours home alone",
    "Skipped walks and playtime",
    "Loud fireworks and sudden noises",
    "Bath time",
  ];

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-[96rem] px-4 pb-16 pt-2 font-fredoka text-text sm:px-6 md:px-8 lg:px-10">
        <Link
          href="/adopt"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5D5C3] bg-white px-5 py-2.5 text-sm font-semibold text-[#C97F4B] shadow-[0_2px_8px_rgba(201,127,75,0.12)] transition-all duration-300 hover:border-[#C97F4B] hover:bg-[#C97F4B] hover:text-white hover:shadow-[0_4px_14px_rgba(201,127,75,0.35)]"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.5} />
          Back to all pets
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#F5E6D3]">
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
          </div>

          <div className="order-2 md:pt-16">
            {status && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C9622A] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(201,98,42,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                {status}
              </span>
            )}

            <h1 className="mt-4 text-7xl font-extrabold text-[#4A2E1E]">
              {name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-y-2 text-xl text-[#5C4A3D] sm:text-2xl">
              <span className="inline-flex items-center gap-2">
                <PawPrint className="h-6 w-6 text-[#B5541F] sm:h-7 sm:w-7" strokeWidth={2.5} />
                {breed}
              </span>
              {age && (
                <>
                  <span className="text-[#C9BBAE]">|</span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-[#B5541F] sm:h-7 sm:w-7" strokeWidth={2.5} />
                    {age}
                  </span>
                </>
              )}
              {gender && (
                <>
                  <span className="text-[#C9BBAE]">|</span>
                  <span className="inline-flex items-center gap-2">
                    {gender.toLowerCase() === "male" ? (
                      <Mars className="h-6 w-6 text-[#B5541F] sm:h-7 sm:w-7" strokeWidth={2.5} />
                    ) : (
                      <Venus className="h-6 w-6 text-[#B5541F] sm:h-7 sm:w-7" strokeWidth={2.5} />
                    )}
                    {gender}
                  </span>
                </>
              )}
            </div>

            {description && (
              <p className="mt-5 text-xl italic text-[#5C4A3D]">
                {description}
              </p>
            )}

            <div className="mt-6 rounded-xl border border-[#EFE0CE] bg-[#FBF6EE] p-6">
              <h2 className="text-3xl font-bold text-[#4A2E1E]">
                About {name}
              </h2>
              <div className="mt-3 space-y-3 text-lg leading-relaxed text-[#5C4A3D]">
                <p>
				         Oreo is a young Border Collie mix with a glossy black-and-white coat and a friendly, energetic temperament. He is intelligent, responsive to training, and quick to learn new commands. Oreo enjoys playing fetch, participating in agility activities, and spending time with people.
                </p>
                <p>
				         Oreo would be well suited to an active household that can provide consistent exercise, training, and daily interaction. He benefits from regular physical and mental stimulation, as well as a secure outdoor space or supervised leash walks. With his intelligence, loyalty, and playful nature, Oreo would make a wonderful companion for a responsible owner or family who can provide him with a loving and active home.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#D9E2CC] bg-[#EEF2E6] px-7 py-5">
                <p className="mb-4 flex items-center gap-3 text-xl font-bold text-[#4B5D3A]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4B5D3A] text-white">
                    <Check className="h-5 w-5" strokeWidth={3} />
                  </span>
                  Loves
                </p>
                <ul className="space-y-3 text-base text-[#4A3C31]">
                  {loves.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4B5D3A] text-white">
                        <Check className="h-4 w-4" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-[#F3D9CB] bg-[#FBEEE6] px-7 py-5">
                <p className="mb-4 flex items-center gap-3 text-xl font-bold text-[#C9622A]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C9622A] text-white">
                    <X className="h-4 w-4" strokeWidth={3} />
                  </span>
                  Avoids
                </p>
                <ul className="space-y-3 text-base text-[#4A3C31]">
                  {dislikes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#C9622A] text-white">
                        <X className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#C9622A] py-4 text-xl font-semibold text-white shadow-sm transition-colors hover:bg-[#B5541F]">
              Start Adoption Process →
            </button>

            <p
              className={`${patrickHand.className} mt-4 flex items-center justify-center gap-2 text-center text-xl text-[#4B5D3A]`}
            >
              <span>—</span> 🤍 Give {name} a forever home <span>—</span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}