import Image from "next/image";
import Link from "next/link";
import { Patrick_Hand } from "next/font/google";
import { PawPrint, Calendar, Venus, Mars, Check, X, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { pets } from "../../data/pets";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function TeddyPage() {
  const pet = pets.find((p) => p.slug === "teddy");
  const { name, breed, age, gender, status, description } = pet;

  const gallery = [
    "https://images.unsplash.com/photo-1613210595795-4a4681b35e68?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1613210553044-cf2e60055a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1613210587443-348d07e782c5?auto=format&fit=crop&w=1200&q=80",
  ];

  const loves = [
    "Following you from room to room",
    "Cuddling on the couch",
    "Gentle pets and belly rubs",
    "Short walks around the block",
    "Meeting new people",
  ];

  const dislikes = [
    "Being left alone for long periods",
    "Loud noises and sudden movements",
    "Rough play",
    "Long stretches without attention",
    "Cold weather without a sweater",
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="mx-auto max-w-[96rem] px-5 pb-12 pt-2 font-fredoka text-text sm:px-6 sm:pb-16 md:px-8 lg:px-10">
        <Link
          href="/adopt"
          className="group mb-5 mt-6 flex w-fit items-center gap-2 text-base font-semibold text-[#C97F4B] transition-colors duration-300 hover:text-[#B86F3E] sm:mt-0 sm:mb-6 sm:inline-flex sm:rounded-full sm:border sm:border-[#E5D5C3] sm:bg-white sm:px-5 sm:py-2.5 sm:text-sm sm:shadow-[0_2px_8px_rgba(201,127,75,0.12)] sm:transition-all sm:hover:border-[#C97F4B] sm:hover:bg-[#C97F4B] sm:hover:text-white sm:hover:shadow-[0_4px_14px_rgba(201,127,75,0.35)]"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 sm:h-4 sm:w-4" strokeWidth={2.5} />
          Back to all pets
        </Link>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr] md:gap-10">
          <div className="order-1 w-full min-w-0">
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl bg-[#F5E6D3] sm:h-[420px] md:h-auto md:aspect-[4/5]">
              {gallery[0] && (
                <Image
                  src={gallery[0]}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              )}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">
              {gallery.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative h-[130px] w-full overflow-hidden rounded-xl bg-[#F5E6D3] sm:h-[200px] md:h-auto md:aspect-[4/3]"
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

          <div className="order-2 min-w-0 md:pt-16">
            {status && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C9622A] px-4 py-1.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(201,98,42,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                {status}
              </span>
            )}

            <h1 className="mt-4 break-words text-5xl font-extrabold text-[#4A2E1E] md:text-7xl">
              {name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-lg text-[#5C4A3D] sm:justify-between sm:gap-x-0 sm:text-2xl">
              <span className="inline-flex items-center gap-2">
                <PawPrint className="h-6 w-6 text-[#B5541F] sm:h-7 sm:w-7" strokeWidth={2.5} />
                {breed}
              </span>
              {age && (
                <>
                  <span className="hidden text-[#C9BBAE] sm:inline">|</span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-[#B5541F] sm:h-7 sm:w-7" strokeWidth={2.5} />
                    {age}
                  </span>
                </>
              )}
              {gender && (
                <>
                  <span className="hidden text-[#C9BBAE] sm:inline">|</span>
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
              <p className="mt-5 text-lg italic text-[#5C4A3D] sm:text-xl">
                {description}
              </p>
            )}

            <div className="mt-6 rounded-xl border border-[#EFE0CE] bg-[#FBF6EE] p-5 sm:p-6">
              <h2 className="text-2xl font-bold text-[#4A2E1E] sm:text-3xl">
                About {name}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-[#5C4A3D] sm:text-lg">
                <p>
                  Teddy is a sweet and affectionate companion who loves being close to the people around him. He enjoys following his favorite person from room to room and is always happy to settle in for a cuddle or some gentle attention. His calm and loving nature makes him easy to appreciate and enjoy.
                </p>
                <p>
                  Teddy would be well suited to a quiet and comfortable home where he can receive plenty of companionship. He would thrive with an owner who has time to give him the attention and affection he enjoys. For someone looking for a gentle companion who simply loves being by their side, Teddy could be a wonderful addition to the family.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#D9E2CC] bg-[#EEF2E6] px-5 py-5 sm:px-7">
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

              <div className="rounded-xl border border-[#F3D9CB] bg-[#FBEEE6] px-5 py-5 sm:px-7">
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

            <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#C9622A] py-3.5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-[#B5541F] sm:py-4 sm:text-xl">
              Start Adoption Process →
            </button>

            <p
              className={`${patrickHand.className} mt-4 flex items-center justify-center gap-2 text-center text-lg text-[#4B5D3A] sm:text-xl`}
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