"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import PetCard from "../components/PetCard";
import Footer from "../components/Footer";
import { pets } from "../data/pets";

export default function AdoptPage() {
  const router = useRouter();

  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-5 pt-6 pb-12 font-fredoka text-text sm:px-6 sm:pt-4 sm:pb-16">
        <button
          type="button"
          onClick={() => router.back()}
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5D5C3] bg-white px-5 py-2.5 text-sm font-semibold text-[#C97F4B] shadow-[0_2px_8px_rgba(201,127,75,0.12)] transition-all duration-300 hover:border-[#C97F4B] hover:bg-[#C97F4B] hover:text-white hover:shadow-[0_4px_14px_rgba(201,127,75,0.35)]"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            strokeWidth={2.5}
          />
          Back
        </button>

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end sm:gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
              Adoption
            </p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Meet the Pets</h1>
            <p className="mt-3 text-base text-text/80 sm:text-lg">
              Every one of them is ready to go home with someone who&apos;ll love them back.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#F5E6D3] px-5 py-2.5 font-fredoka text-base font-semibold text-[#3B2A1F] sm:px-6 sm:py-3 sm:text-lg">
            <span className="h-3 w-3 rounded-full bg-[#3B2A1F]" />
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