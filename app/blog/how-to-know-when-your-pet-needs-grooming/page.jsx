import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function HowToKnowWhenYourPetNeedsGroomingPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          How to Know When Your Pet Needs Grooming
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Regular grooming keeps your pet comfortable and healthy. Here are
          the signs that it&apos;s time to book that grooming session.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Matted or Tangled Fur</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Mats can pull on the skin and even trap moisture, leading to
          irritation. If brushing at home isn&apos;t keeping up, it&apos;s
          time for a professional trim.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Overgrown Nails</h2>
        <p className="mt-3 text-lg leading-relaxed">
          If you hear clicking on the floor when your pet walks, their nails
          are too long. Overgrown nails can affect their gait and even cause
          pain.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Strong Odor</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A noticeably strong smell, even after regular care, can mean it&apos;s
          time for a bath or a check on their skin and ears.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Excessive Shedding</h2>
        <p className="mt-3 text-lg leading-relaxed">
          While shedding is normal, sudden or heavy shedding can be a sign
          they need more frequent brushing or a grooming session to remove
          loose fur.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Dirty Ears or Eyes</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Buildup, discharge, or redness around the ears and eyes may need
          gentle cleaning as part of a grooming routine, or a vet visit if it
          persists.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Brush regularly between grooming sessions to prevent mats.</li>
          <li>Trim nails every few weeks, or as needed.</li>
          <li>Ask your groomer about the right schedule for your pet&apos;s coat type.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}