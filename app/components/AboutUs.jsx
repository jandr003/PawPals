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
        <div className="mx-auto max-w-6xl">
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

      <Footer />
    </>
  );
}