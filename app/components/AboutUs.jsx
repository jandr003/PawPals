"use client";

import Footer from "./Footer";

const crew = [
  {
    name: "Mika Santos",
    role: "Certified Dog Trainer",
    img: "/about%20us/pawpals-team1.png",
  },
  {
    name: "Kenji Cruz",
    role: "Pet Activities Coordinator",
    img: "/about%20us/pawpals-team2.png",
  },
  {
    name: "Dr. Aiko Reyes",
    role: "Caring for pets with over 10 years of experience",
    img: "/about%20us/pawpals-team3.png",
  },
  {
    name: "Daniel Tan",
    role: "Pet Grooming Specialist & Animal Care Expert",
    img: "/about%20us/pawpals-team4.png",
  },
];

export default function AboutUs() {
  return (
    <>
    <section className="pointer-events-none block h-auto max-w-none -translate-y-20 drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] md:hidden">
    <img
      src="/about%20us/PAWPALS-ABOUTUS-BG.png"
      alt=""
      className="pointer-events-none block h-auto max-w-none -translate-y-10 md:hidden"
      style={{ width: "200%", marginLeft: "-75%" }}
    />

      <img
        src="/about%20us/PAWPALS-ABOUTUS-BG.png"
        alt=""
        className="hidden h-auto w-full md:block"
      />

      <div className="relative z-10 md:absolute md:inset-0 md:flex md:items-start md:pt-[188px]">
        <div className="w-full px-5 pb-10 pt-6 text-left font-fredoka text-[#3B2414] md:px-0 md:pb-0 md:pl-[14.4%] md:pt-[4vw]">
          <h1 className="text-[clamp(2.2rem,10.5vw,3.75rem)] font-extrabold leading-tight md:text-6xl">
            About Us
          </h1>
          <p className="mt-2 max-w-[22ch] text-[clamp(1.1rem,5.2vw,1.8rem)] font-medium leading-snug sm:max-w-[30ch] md:mt-3 md:max-w-none md:text-xl">
            Helping Pets Stay Happy, Healthy, and Well-Groomed
          </p>
        </div>
      </div>
      </section>

      <section
        aria-labelledby="who-we-are-heading"
        className="relative px-6 py-16 sm:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <img
            src="/home/ABOUTUS-DOG-1.png"
            alt="Golden retriever sitting"
            className="mx-auto block h-auto w-full max-w-[380px] md:max-w-[560px]"
          />

          <div className="mx-auto max-w-xl text-center md:text-left">
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
        className="relative px-6 pb-16 sm:px-8 md:pb-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="mx-auto max-w-xl text-center md:text-left">
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
        className="relative px-6 pb-16 sm:px-8 md:pb-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-12">
          <img
            src="/home/ABOUTUS-CAT-1.png"
            alt="Orange kitten reaching up"
            className="mx-auto block h-auto w-full max-w-[380px] md:max-w-[560px]"
          />

          <div className="mx-auto max-w-xl text-center md:text-left">
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
        className="relative px-4 pb-[120px] pt-[150px] sm:px-6 md:pb-[120px]"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2
            id="crew-heading"
            className="font-fredoka text-4xl font-bold text-[#3B2414] md:text-5xl"
          >
            Meet the PawPals Crew
          </h2>

          <div className="mt-2 grid grid-cols-2 gap-x-[25px] gap-y-12 md:-mt-[65px] md:grid-cols-4 md:gap-x-[25px]">
            {crew.map((member) => (
              <div key={member.img} className="group flex min-w-0 cursor-pointer flex-col transition-transform duration-300 ease-out hover:-translate-y-3">
                <div className="flex h-80 w-full items-end justify-center overflow-visible sm:h-[26rem] md:h-[36rem]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="h-full w-full max-w-full origin-bottom transform-gpu object-contain object-bottom [backface-visibility:hidden] transition-transform duration-300 ease-out group-hover:scale-105"
                    decoding="sync"
                  />
                </div>

                <div className="relative z-10 mt-4 flex flex-1 flex-col items-center text-center font-fredoka text-[#3B2414]">
                  <p className="text-base font-semibold md:text-xl">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm leading-snug md:text-base">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}