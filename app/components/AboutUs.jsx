"use client";

import Footer from "./Footer";

export default function AboutUs() {
  return (
    <>
      <section className="relative z-[-1] -mt-[60px] w-full overflow-hidden bg-transparent md:-mt-[188px]">
        <img
          src="/about%20us/PAWPALS-ABOUTUS-BG.png"
          alt="Cat peeking"
          className="block h-auto w-full"
        />
      </section>

      <section
        aria-labelledby="who-we-are-heading"
        className="relative px-6 py-12 sm:px-8 md:py-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <img
            src="/home/ABOUTUS-DOG-1.png"
            alt="Golden retriever sitting"
            className="mx-auto block h-auto w-full max-w-[380px] md:max-w-[560px]"
          />

          <div className="max-w-xl">
            <h2
              id="who-we-are-heading"
              className="font-fredoka text-4xl font-bold text-[#3B2414] md:text-5xl"
            >
              Who We Are
            </h2>
            <p className="mt-6 font-fredoka text-lg leading-snug text-[#3B2414] md:text-xl">
              PawPals is a pet care service dedicated to helping pets stay
              clean, comfortable, and happy. Our goal is to provide dependable
              care in a safe and friendly space, giving pet owners peace of mind
              and pets an enjoyable experience every visit.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="our-mission-heading"
        className="relative px-6 pb-12 sm:px-8 md:pb-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="max-w-xl">
            <h2
              id="our-mission-heading"
              className="font-fredoka text-4xl font-bold text-[#3B2414] md:text-5xl"
            >
              Our Mission
            </h2>
            <p className="mt-6 font-fredoka text-lg leading-snug text-[#3B2414] md:text-xl">
              To provide professional grooming and pet care services that help
              pets stay clean, comfortable, healthy, and happy in a safe and
              caring environment.
            </p>
          </div>

          <img
            src="/home/ABOUTUS-DOG-2.png"
            alt="Beagle resting"
            className="mx-auto block h-auto w-full max-w-[380px] md:max-w-[560px]"
          />
        </div>
      </section>

      <section
        aria-labelledby="why-choose-heading"
        className="relative px-6 pb-12 sm:px-8 md:pb-16"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <img
            src="/home/ABOUTUS-CAT-1.png"
            alt="Orange kitten reaching up"
            className="mx-auto block h-auto w-full max-w-[380px] md:max-w-[560px]"
          />

          <div className="max-w-xl">
            <h2
              id="why-choose-heading"
              className="font-fredoka text-4xl font-bold text-[#3B2414] md:text-5xl"
            >
              Why Choose PawPals?
            </h2>
            <p className="mt-6 font-fredoka text-lg leading-snug text-[#3B2414] md:text-xl">
              Providing quality grooming services with care, comfort, and
              attention for every pet. We ensure a safe, clean, and stress-free
              grooming experience focused on your pet&apos;s health and
              happiness.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="crew-heading"
        className="relative px-6 pb-12 sm:px-8 md:pb-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="crew-heading"
            className="font-fredoka text-4xl font-bold text-[#3B2414] md:text-5xl"
          >
            Meet the PawPals Crew
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
}