import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MakingHealthyTreatsForYourPetPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Making Healthy Treats for Your Pet
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Homemade treats let you control exactly what goes into your
          pet&apos;s snacks. Here&apos;s how to keep them simple, safe, and
          healthy.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Stick to Pet-Safe Ingredients</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Plain cooked chicken, pumpkin, carrots, and oats are safe bases for
          most pets. Avoid anything with added sugar, salt, or artificial
          sweeteners like xylitol.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Keep Portions Small</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Treats should make up a small part of your pet&apos;s daily intake.
          Cut homemade treats into small, bite-sized pieces to avoid
          overfeeding.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Simple No-Bake Options</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Mashed pumpkin or sweet potato frozen into small silicone molds makes
          an easy, refreshing treat, especially during warmer months.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Baked Treats</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A simple mix of oat flour, mashed banana, and a bit of peanut butter
          (xylitol-free) can be rolled, cut into shapes, and baked until firm.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Store Them Properly</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Keep homemade treats in an airtight container in the fridge, and use
          them within about a week to keep them fresh.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Double-check every ingredient is safe for your specific pet.</li>
          <li>Introduce new treats slowly to watch for reactions.</li>
          <li>Ask your vet before adding any new ingredient to their diet.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}