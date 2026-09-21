import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ChoosingTheRightFoodForYourPetPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Choosing the Right Food for Your Pet
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          With so many options on the shelf, picking the right food can feel
          overwhelming. Here&apos;s what to actually look at when choosing what
          goes in your pet&apos;s bowl.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Check the Life Stage</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Puppies, kittens, adults, and seniors all have different nutritional
          needs. Choose a formula made for your pet&apos;s current life stage,
          not just their species.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Read the Ingredient List</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Look for a named animal protein, such as chicken or salmon, as one of
          the first ingredients. Avoid foods that rely heavily on fillers and
          vague terms like &quot;meat by-product.&quot;
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Consider Size and Breed</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Larger breeds often need food formulated to support joint health,
          while smaller breeds may benefit from smaller kibble sizes and
          higher energy density.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Watch for Allergies and Sensitivities</h2>
        <p className="mt-3 text-lg leading-relaxed">
          If your pet has itchy skin, upset stomach, or other recurring issues,
          they may be sensitive to certain ingredients. A limited-ingredient
          diet can help narrow down the cause.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Transition Slowly</h2>
        <p className="mt-3 text-lg leading-relaxed">
          When switching foods, mix the new food with the old over 7 to 10
          days. This helps prevent digestive upset and lets your pet adjust
          gradually.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Consult your vet before making major diet changes.</li>
          <li>Stick to consistent feeding times and portions.</li>
          <li>Always provide fresh water alongside meals.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}