import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function GettingToKnowYourPetBetterPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Getting to Know Your Pet Better
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Every pet has their own personality, habits, and way of communicating.
          Taking the time to really understand yours makes for a happier home
          and a stronger bond.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Learn Their Body Language</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A wagging tail, flattened ears, or a raised back can all mean
          different things depending on the animal. Spend time observing how
          your pet reacts in different situations to understand their cues.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Notice Their Preferences</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Some pets love belly rubs, others don&apos;t. Some prefer quiet
          corners, others want to be in the middle of everything. Paying
          attention to these small preferences helps you care for them better.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Track Their Routine</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Notice their normal eating, sleeping, and bathroom patterns. Knowing
          what&apos;s typical for your pet makes it easier to spot when
          something&apos;s off.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Spend One-on-One Time</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Playtime, grooming, and quiet moments together help build trust.
          The more time you spend with your pet, the more you&apos;ll pick up
          on the little things that make them who they are.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Respect Their Boundaries</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Not every pet wants to be picked up, hugged, or approached the same
          way. Learning what makes your pet comfortable helps prevent stress
          and builds mutual trust.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Keep a simple journal of habits and changes over time.</li>
          <li>Watch how they react to new people, sounds, and environments.</li>
          <li>Let your pet set the pace for bonding and trust-building.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}