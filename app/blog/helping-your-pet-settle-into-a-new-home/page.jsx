import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function HelpingYourPetSettleIntoANewHomePage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Helping Your Pet Settle into a New Home
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          A new home can be overwhelming for a pet. A little preparation and
          patience goes a long way in helping them feel safe and settled.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Set Up a Safe Space First</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Before letting your pet explore the whole house, set up a quiet room
          with their bed, food, water, and familiar items. This gives them a
          secure base to return to.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Stick to a Routine</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Feed, walk, and play at consistent times from day one. A predictable
          schedule helps your pet feel more secure in an unfamiliar
          environment.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Introduce New Spaces Gradually</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Let your pet explore one room at a time instead of the whole house
          at once. Expanding their space slowly keeps them from feeling
          overwhelmed.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Keep Familiar Items Around</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Their old bed, blanket, or a favorite toy can carry familiar scents
          that make the new environment feel less foreign.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Be Patient with Adjustment</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Some pets settle in within days, others take weeks. Give them time
          to adjust at their own pace, and avoid overwhelming them with too
          much too soon.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Keep the first few days low-key with minimal visitors.</li>
          <li>Watch for signs of stress and give them space when needed.</li>
          <li>Celebrate small wins as they grow more comfortable.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}