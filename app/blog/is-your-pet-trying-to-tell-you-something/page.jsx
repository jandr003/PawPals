import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function IsYourPetTryingToTellYouSomethingPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Is Your Pet Trying to Tell You Something?
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Pets can&apos;t talk, but they&apos;re always communicating. Learning
          to read their signals helps you catch what they actually need.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Changes in Vocalization</h2>
        <p className="mt-3 text-lg leading-relaxed">
          More barking, meowing, or whining than usual can signal anything from
          hunger and boredom to pain. Pay attention to when and why the change
          started.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Body Posture</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A lowered body, tucked tail, or pinned ears often means fear or
          discomfort, while a relaxed, loose posture usually means your pet
          feels safe.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Sudden Behavior Changes</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Hiding, aggression, or withdrawal that&apos;s out of character can be
          a sign of stress, illness, or pain. These shifts are worth watching
          closely.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Changes in Appetite or Thirst</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Eating or drinking noticeably more or less than usual can point to
          underlying health issues and is worth mentioning to your vet.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Repetitive Actions</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Excessive licking, pacing, or scratching in the same spot can be a
          sign of anxiety, boredom, or a physical issue that needs attention.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Trust your instincts if something feels off.</li>
          <li>Keep track of when unusual behaviors start.</li>
          <li>When in doubt, consult your vet.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}