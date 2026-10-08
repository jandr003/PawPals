import BackButton from "../components/BackButton";
import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";
import Footer from "../components/Footer";
import { pets } from "../data/pets";

export default function AdoptPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pt-10 pb-12 font-fredoka text-text sm:px-6 sm:pt-8 sm:pb-16">
        <BackButton />

        <div className="-mt-8 flex flex-col items-center justify-between gap-5 text-center sm:mt-0 sm:flex-row sm:items-end sm:gap-4 sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              Adoption
            </p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Meet the Pets</h1>
            <p className="mx-auto mt-3 max-w-sm text-base text-text/80 sm:mx-0 sm:max-w-none sm:text-lg">
              Every one of them is ready to go home with someone who&apos;ll love them back.
            </p>
          </div>
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[#C9622A] px-5 py-2.5 font-fredoka text-base font-semibold text-white shadow-[0_2px_8px_rgba(201,98,42,0.25)] sm:px-6 sm:py-3 sm:text-lg">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
            </span>
            {pets.length} pets available
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {pets.map((pet) => (
            <PetCard key={pet.slug} pet={pet} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}