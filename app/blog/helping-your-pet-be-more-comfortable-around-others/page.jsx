import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function HelpingYourPetBeMoreComfortableAroundOthersPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Helping Your Pet Be More Comfortable Around Others
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Whether it&apos;s new people, other animals, or unfamiliar places,
          helping your pet feel at ease around others takes patience and the
          right approach.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Start with Short Exposures</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Introduce new people or animals in short, calm sessions rather than
          all at once. Gradually increasing the time together helps prevent
          your pet from feeling overwhelmed.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Let Them Approach First</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Forcing an interaction usually backfires. Give your pet the space to
          approach at their own pace, and let them retreat if they need to.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Use Positive Associations</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Pair new people or animals with treats, praise, or their favorite
          toy. This helps your pet start to associate unfamiliar faces with
          good things.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Watch for Stress Signals</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Lip licking, yawning, tucked tails, or hiding are signs your pet
          needs space. Step back and slow down whenever you notice these cues.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Practice Regularly</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Socialization isn&apos;t a one-time event. Regular, low-pressure
          exposure to new people, pets, and environments keeps your pet
          comfortable over time.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Never force an interaction your pet is clearly avoiding.</li>
          <li>Keep early sessions short and end on a positive note.</li>
          <li>Go at your pet&apos;s pace, not a fixed timeline.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}