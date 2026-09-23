import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WELLNESS_INCLUDES = [
  "Basic Grooming (Bath, Nail Trim, Ear Cleaning)",
  "General Health Checkup (Routine Vet Assessment & Weight Monitoring)",
  "Flea & Tick Prevention Advice (Tips for Keeping Your Pet Pest-Free)",
];

const ADOPTION_INCLUDES = [
  "Pet Adoption Assistance (Guidance throughout the adoption process)",
  "Initial Health Assessment (Basic wellness check before adoption)",
  "Pet Care Orientation (Tips on feeding, grooming, and daily care)",
  "Adoption Consultation (Help in finding the right pet for your lifestyle)",
];

const STAYPLAY_INCLUDES = [
  "Full-Day Daycare OR Overnight Boarding (Safe, cozy space with 24/7 supervision and care)",
  "Basic Grooming Session (Bath, brushing, and nail trim to keep your pet fresh and comfortable)",
  "Interactive Play & Exercise Time (Supervised playtime, toys, and socialization with other pets)",
];

const TRAINING_INCLUDES = [
  "Two Training Sessions (Basic commands, leash walking, socialization, and behavior correction)",
  "Behavioral Assessment (Trainer evaluation to address issues like barking, jumping, or anxiety)",
  "Health Check Consultation (Basic vet check to ensure no medical issues affect behavior)",
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <img
        src="/SERVICE-PAWPALS.png"
        alt="Our Services"
        className="block h-auto w-full"
      />

      <section className="mx-auto max-w-4xl px-6 pb-4 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="font-fredoka text-lg font-medium leading-snug text-[#3B2414] md:text-2xl">
          At PawPals, we believe every pet deserves personalized care in a safe,
          welcoming, and loving environment. Our team is dedicated to providing
          reliable services that support your pet&apos;s health, happiness, and
          overall well-being.
        </p>
      </section>

      <section
        aria-labelledby="pricing-heading"
        className="mx-auto max-w-6xl px-6 pt-12 font-fredoka text-[#3B2414] sm:px-8 sm:pt-16"
      >
        <h2
          id="pricing-heading"
          className="text-4xl font-bold md:text-5xl"
        >
          PawPals Services &amp; Pricing
        </h2>

        <h3 className="mt-8 text-2xl font-semibold md:text-3xl">
          PawPals Wellness Package &ndash; &#8369;799
        </h3>

        <p className="mt-4 text-lg leading-snug">
          Keep your pet happy, healthy, and well-groomed!
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-snug">
          Perfect for pet owners looking for a convenient and affordable way to
          maintain their pet&apos;s overall well-being. The PawPals Wellness
          Package combines essential grooming services with a routine health
          check to help your furry companion stay clean, comfortable, and
          healthy.
        </p>

        <ul className="mt-6 max-w-4xl list-disc space-y-2 pl-6 text-lg leading-snug">
          {WELLNESS_INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link
          href="/adopt"
          className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
        >
          Adopt Now
        </Link>

        <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
          PawPals Adoption Package &ndash; &#8369;999
        </h3>

        <p className="mt-4 text-lg leading-snug">
          Ready to welcome a new furry friend into your home?
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-snug">
          Designed for future pet owners who want a smooth and responsible
          adoption experience. This package helps ensure that both pets and
          adopters are prepared for a happy and lifelong companionship.
        </p>

        <ul className="mt-6 max-w-4xl list-disc space-y-2 pl-6 text-lg leading-snug">
          {ADOPTION_INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link
          href="/adopt"
          className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
        >
          Start Adoption
        </Link>

        <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
          PawPals Stay &amp; Play Care &ndash; &#8369;1200
        </h3>

        <p className="mt-4 text-lg leading-snug">
          Perfect for pets who need safe care, play, and comfort while you&apos;re away.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-snug">
          A safe and cozy stay where your pet can relax, play, and feel at home
          while you&apos;re away. PawPals provides attentive care, fun activities,
          and a comfortable environment for your furry friend.
        </p>

        <ul className="mt-6 max-w-4xl list-disc space-y-2 pl-6 text-lg leading-snug">
          {STAYPLAY_INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link
          href="/adopt"
          className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
        >
          Reserve a Spot
        </Link>

        <h3 className="mt-16 text-2xl font-semibold md:text-3xl">
          PawPals Training Care &ndash; &#8369;1500
        </h3>

        <p className="mt-4 text-lg leading-snug">
          Training that helps your pet behave better, gain confidence, and
          follow commands.
        </p>

        <p className="mt-4 max-w-4xl text-lg leading-snug">
          A guided training program designed to help your pet improve
          behavior, build confidence, and develop good habits through
          positive reinforcement.
        </p>

        <ul className="mt-6 max-w-4xl list-disc space-y-2 pl-6 text-lg leading-snug">
          {TRAINING_INCLUDES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link
          href="/adopt"
          className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
        >
          Book Training
        </Link>
      </section>

      <section
        aria-labelledby="booking-heading"
        className="mx-auto max-w-4xl px-6 py-16 font-fredoka text-[#3B2414] sm:px-8"
      >
        <h2 id="booking-heading" className="text-4xl font-bold md:text-5xl">
          Book an Appointment
        </h2>

        <h3 className="mt-10 text-xl font-bold md:text-2xl">
          How PawPals Works
        </h3>

        <ol className="mt-4 space-y-2 text-lg leading-snug">
          <li>Step 1: Choose a PawPals service</li>
          <li>Step 2: Select your preferred date and time</li>
          <li>Step 3: Fill out your pet and owner details</li>
          <li>Step 4: Confirm your booking and receive a confirmation message</li>
        </ol>

        <h3 className="mt-12 text-xl font-bold md:text-2xl">
          Booking Form
        </h3>

        <form className="mt-6 rounded-2xl border-2 border-dashed border-[#C97F4B] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(43,33,24,0.2)] sm:p-8">
          <div className="space-y-5 text-lg">
            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium sm:w-48 sm:flex-shrink-0">
                Owner&apos;s Name:
              </span>
              <input
                type="text"
                name="ownerName"
                className="flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium sm:w-48 sm:flex-shrink-0">
                Email:
              </span>
              <input
                type="email"
                name="email"
                className="flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium sm:w-48 sm:flex-shrink-0">
                Contact Number:
              </span>
              <input
                type="tel"
                name="contactNumber"
                className="flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium sm:w-48 sm:flex-shrink-0">
                Service:
              </span>
              <input
                type="text"
                name="service"
                className="flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium sm:w-48 sm:flex-shrink-0">
                Date &amp; Time:
              </span>
              <input
                type="text"
                name="dateTime"
                className="flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
              <span className="font-medium sm:w-48 sm:flex-shrink-0">
                Pet&apos;s Name &amp; Breed:
              </span>
              <input
                type="text"
                name="petNameBreed"
                className="flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="font-medium">Additional Notes</span>
              <textarea
                name="additionalNotes"
                rows={4}
                className="mt-1 rounded-lg border border-[#3B2414]/40 bg-white p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
          >
            Book Training
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}