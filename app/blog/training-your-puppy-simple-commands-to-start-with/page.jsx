import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TrainingYourPuppyPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Training Your Puppy: Simple Commands to Start With
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Simple commands help your puppy behave better, stay safe, and build a
          stronger bond with you. Keep sessions short (5 to 10 minutes), use
          small treats, and always end on a good note.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Sit</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Hold a treat close to your puppy&apos;s nose, then slowly move it up
          over their head. As their head goes up, their bottom goes down. The
          moment they sit, say &quot;Sit,&quot; give the treat, and praise them.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Come</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Start in a quiet room. Crouch down, say &quot;Come&quot; in a happy
          voice, and reward your puppy when they reach you. Never call them to
          you for something unpleasant, so coming always feels like a good thing.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Stay</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Ask your puppy to sit, show your open palm, and say &quot;Stay.&quot;
          Take one step back, then return and reward. Slowly increase the
          distance and time as they get comfortable.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Down</h2>
        <p className="mt-3 text-lg leading-relaxed">
          From a sit, lower a treat to the floor between their front paws. When
          they lie down to follow it, say &quot;Down,&quot; then reward and
          praise.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Leave It</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Hold a treat in a closed fist. When your puppy stops sniffing and
          backs off, say &quot;Leave it&quot; and reward them with a different
          treat from your other hand. This helps keep them safe from things they
          shouldn&apos;t pick up.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Be consistent with the words and hand signals you use.</li>
          <li>Reward right away so your puppy connects the treat to the action.</li>
          <li>Stay patient. Every puppy learns at their own pace.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}