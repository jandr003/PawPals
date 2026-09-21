import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CaringForYourPetInExtremeWeatherPage() {
  return (
    <main>
      <Navbar />

      <article className="mx-auto max-w-3xl px-6 py-16 font-fredoka text-[#3B2414]">
        <Link href="/blog" className="text-sm font-medium hover:underline">← Back to Blog</Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Caring for Your Pet in Extreme Weather
        </h1>
        <p className="mt-3 text-sm">24 May 2026</p>

        <p className="mt-8 text-lg leading-relaxed">
          Extreme heat and cold can be dangerous for pets. A few simple habits
          can help keep them safe, comfortable, and healthy no matter the
          season.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Watch for Overheating</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Excessive panting, drooling, and lethargy are early signs of
          overheating. Always provide shade and fresh water, and avoid
          exercising your pet during the hottest hours of the day.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">2. Protect Their Paws</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Hot pavement can burn paw pads, while cold or icy ground can cause
          discomfort. Walk your pet on grass when possible, or use protective
          booties during extreme temperatures.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">3. Never Leave Them in a Parked Car</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Temperatures inside a parked car can rise quickly, even with the
          windows cracked. Leave your pet at home if you can&apos;t bring them
          inside with you.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">4. Keep Them Warm in Cold Weather</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Small, short-haired, or senior pets may need a sweater or jacket
          during cold weather. Provide a warm, draft-free sleeping area away
          from cold floors.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Adjust Their Routine</h2>
        <p className="mt-3 text-lg leading-relaxed">
          Shift walks to cooler or warmer parts of the day depending on the
          season, and keep sessions shorter when the weather is extreme.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Tips for Success</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed">
          <li>Always have fresh water available, indoors and outdoors.</li>
          <li>Check weather forecasts before planning outdoor activities.</li>
          <li>Know the signs of heatstroke and hypothermia in pets.</li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}