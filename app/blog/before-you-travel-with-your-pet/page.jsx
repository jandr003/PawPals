import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BeforeYouTravelPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Before You Travel With Your Pet
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <img
          src="https://images.unsplash.com/photo-1712681355846-f81302e7886f?auto=format&fit=crop&w=1200&h=700&q=80"
          alt="Dog sitting in the back of a car"
          className="mt-8 h-64 w-full rounded-2xl object-cover md:h-96"
        />

        <p className="mt-8 text-lg leading-relaxed">
          Traveling with your pet can be a great experience, but a little
          planning goes a long way. Here are the things to keep in mind so your
          pet stays safe and comfortable from the first mile to the last.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Visit the Vet First</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Schedule a checkup before a long trip. Make sure vaccinations are up
          to date, ask about motion sickness, and bring a copy of your
          pet&apos;s health records.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Get the Right Gear</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Use a secured carrier, crate, or a car harness so your pet can&apos;t
          move around while the vehicle is moving. Let them get used to it at
          home before the trip.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Update Their ID</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Check that your pet&apos;s collar tag has your current phone number.
          A microchip with updated details adds another layer of protection if
          they get lost.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Pack Their Essentials</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Food and fresh water, plus bowls</li>
          <li>Any medication they take</li>
          <li>Leash, waste bags, and a familiar blanket or toy</li>
          <li>Towels and a basic pet first aid kit</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">5. Plan Regular Breaks</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Stop every couple of hours so your pet can drink water, stretch, and
          go to the bathroom. Keep meals light before traveling to help avoid an
          upset stomach.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">6. Never Leave Them in a Parked Car</h2>
        <p className="mt-3 text-lg leading-relaxed">
          A parked car heats up very fast, even with the windows cracked, and it
          can be dangerous for pets within minutes. If you have to leave the
          vehicle, take your pet with you.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for a Smooth Trip</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Try a short practice drive first.</li>
          <li>Keep to their usual feeding and walking schedule.</li>
          <li>Confirm ahead that your hotel or destination is pet-friendly.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}