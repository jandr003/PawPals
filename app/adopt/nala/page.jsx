import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Patrick_Hand } from "next/font/google";
import { PawPrint, Calendar, Venus, Mars, Check, X, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { pets } from "../../data/pets";

const patrickHand = Patrick_Hand({ subsets: ["latin"], weight: "400" });

export default function NalaPage() {
  const pet = pets.find((p) => p.slug === "nala");
  if (!pet) notFound();

  const { name, breed, age, gender, status, description } = pet;

  const gallery = [
    "https://images.unsplash.com/photo-1568627848766-bd2050f16ff5?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516289241-15c27bf04f14?fm=jpg&q=60&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?fm=jpg&q=60&w=1200&auto=format&fit=crop",
  ];

  const loves = [
    "Long, gentle brushing sessions",
    "Soft blankets and sunny window perches",
    "Chirpy chats with her favorite people",
    "Feather wands and slow-motion stalking",
    "Being carried around like a queen",
  ];

  const dislikes = [
    "Loud, chaotic households",
    "Being rushed or picked up suddenly",
    "Skipped grooming days",
    "Closed doors and being shut out",
    "Bath time",
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section className="mx-auto max-w-[96rem] px-5 pb-12 pt-2 font-fredoka text-text sm:px-6 sm:pb-16 md:px-8 lg:px-10">
        <Link
          href="/adopt"
          className="group mb-5 mt-6 flex w-fit items-center gap-2 rounded-2xl text-base font-semibold text-[#3B2414] transition duration-200 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D4A] focus-visible:ring-offset-2 sm:mb-6 sm:mt-0 sm:inline-flex sm:border sm:border-[#C77D4A] sm:px-5 sm:py-2.5 sm:text-sm sm:hover:bg-[#C77D4A]/10 sm:hover:no-underline"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 sm:h-4 sm:w-4" strokeWidth={2.5} aria-hidden="true" />
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
              <span className="inline-flex items-center gap-2 rounded-full bg-[#C77D4A]/15 px-4 py-1.5 text-sm font-semibold text-[#2B1B12]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C77D4A] opacity-75 motion-reduce:animate-none"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C77D4A]"></span>
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
                  Nala is a young Maine Coon with a beautiful soft tabby coat, distinctive tufted ears, and expressive amber eyes. She has a gentle and affectionate personality and enjoys spending time with people. Nala especially enjoys being groomed and brushed, and she is happiest when she can stay close to those around her.
                </p>
                <p>
                  She would thrive in a calm and quiet home where she can gradually adjust to her new surroundings. Nala enjoys relaxing in cozy spaces, following her favorite people around the home, and playing with feather toys. With her sweet and gentle nature, she would make a wonderful companion for a loving family or individual looking for a devoted feline friend.
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

            <Link
              href={`/contact?pet=${pet.slug}`}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#C77D4A] py-3.5 text-lg font-semibold text-white shadow-sm transition duration-200 hover:bg-[#B86F3E] hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D4A] focus-visible:ring-offset-2 sm:py-4 sm:text-xl"
            >
              Start Adoption Process
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            </Link>

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