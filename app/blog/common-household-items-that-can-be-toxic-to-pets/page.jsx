import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CommonHouseholdItemsThatCanBeToxicToPetsPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Common Household Items That Can Be Toxic to Pets
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Many everyday items around the house look harmless but can be
          dangerous if your pet gets into them. Here&apos;s what to keep out
          of reach.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Certain Foods</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Chocolate, grapes, raisins, onions, garlic, and xylitol (found in
          sugar-free gum and some peanut butter) can be toxic to dogs and cats,
          even in small amounts.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Household Plants</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Lilies, aloe vera, pothos, and philodendron are common houseplants
          that can cause anything from mild irritation to serious poisoning,
          especially in cats.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Cleaning Products</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Bleach, disinfectants, and other cleaning chemicals can irritate or
          burn your pet&apos;s skin, eyes, and airways. Store them in closed
          cabinets, out of paw&apos;s reach.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Medications</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Human medications like painkillers, antidepressants, and vitamins can
          be extremely dangerous to pets. Keep all medications sealed and
          stored well out of reach.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Rodenticides and Pesticides</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Rat poison, insect baits, and garden pesticides are designed to be
          appealing to animals, which makes them especially risky to keep
          around pets.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Keep the number of a pet poison hotline saved for emergencies.</li>
          <li>Store chemicals and medications in high, closed cabinets.</li>
          <li>Research any new plant before bringing it into your home.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}