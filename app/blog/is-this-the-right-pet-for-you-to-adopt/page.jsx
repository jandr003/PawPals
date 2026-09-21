import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function IsThisTheRightPetForYouToAdoptPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Is This the Right Pet for You to Adopt?
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Adopting a pet is a big decision. Before bringing one home, here are
          a few things worth thinking through.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Consider Your Lifestyle</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Think about your daily schedule, activity level, and how much time
          you can realistically dedicate to a pet. Some animals need much more
          attention and exercise than others.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Check Your Living Space</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A large dog may struggle in a small apartment, while some pets do
          fine with limited space. Make sure your home fits the needs of the
          pet you&apos;re considering.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Factor in the Costs</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Food, vet visits, grooming, and supplies add up over time. Make sure
          you&apos;re prepared for the ongoing costs of pet ownership, not just
          the adoption fee.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Think About Long-Term Commitment</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Pets can live anywhere from several years to over a decade. Consider
          whether your future plans can accommodate a long-term companion.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Match Energy and Personality</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A calm, laid-back pet might suit a quiet household, while an active
          pet might be happier with someone who enjoys the outdoors. Choosing
          a good match sets you both up for success.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Talk to shelter staff about a pet&apos;s personality and needs.</li>
          <li>Ask about a trial period if you&apos;re unsure.</li>
          <li>Make sure everyone in the household is on board.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}