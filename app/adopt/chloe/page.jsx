import Image from "next/image";
import Link from "next/link";
import { Patrick_Hand } from "next/font/google";
import { PawPrint, Calendar, Venus, Mars, Check, X, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { pets } from "../../data/pets";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function ChloePage() {
  const pet = pets.find((p) => p.slug === "chloe");
  const { name, breed, age, gender, status, description } = pet;

  const gallery = [
    "https://images.unsplash.com/photo-1615349491181-9aabceb06ddd?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604675223954-b1aabd668078?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586369730051-51b4f2ad9ca8?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  ];

  const loves = [
    "Napping on sunny windowsills",
    "Gentle head scratches",
    "Watching birds from indoors",
    "Cozy blankets and soft beds",
    "Quiet, calm environments",
  ];

  const dislikes = [
    "Loud noises and sudden movements",
    "Being picked up unexpectedly",
    "Crowded or busy rooms",
    "Sudden changes in routine",
    "Water (baths especially)",
  ];

  return (
    <main>
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
          <div className="order-1 w-full">
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

            <h1 className="mt-4 text-5xl font-extrabold text-[#4A2E1E] md:text-7xl">
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
                  Chloe is a gentle and curious cat with a calm personality and a love for quiet, cozy moments. She enjoys lounging by sunny windows, curling up on a soft blanket, and keeping you company while you go about your day. She may be a little shy when meeting someone new, but once she feels safe and comfortable, she gradually opens up and shows her sweet, affectionate side. Give her a little time, and you may find her happily settling beside you or greeting you with a soft purr.
                </p>
                <p>
                  Chloe would be happiest in a peaceful home with someone who understands that trust takes time. She does not need much to be content, just a safe space, gentle care, and a person willing to let her settle in at her own pace. If you are looking for a quiet companion who will grow closer to you over time, Chloe would love the chance to find her forever home and become part of your family.
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