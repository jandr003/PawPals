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
      <section className="about-hero relative z-10 w-full overflow-x-clip -mt-16 md:z-[-1] md:-mt-[188px] md:overflow-hidden md:bg-transparent">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-24 bg-white md:hidden"
        />

        <img
          src="/about%20us/PAWPALS-ABOUTUS-BG.png"
          alt=""
          className="pointer-events-none relative z-0 block h-auto max-w-none !mt-0 -translate-y-20 md:hidden"
          style={{ width: "200%", marginLeft: "-75%" }}
        />

        <img
          src="/about%20us/PAWPALS-ABOUTUS-BG.png"
          alt=""
          className="hidden h-auto w-full md:block md:max-xl:h-[355px] md:max-xl:object-cover md:max-xl:object-[right_bottom]"
        />

        <div className="about-hero-copy-wrap relative z-10 -top-32 md:top-0 md:absolute md:inset-0 md:flex md:items-start md:pt-[188px] md:max-xl:pt-[212px]">
          <div className="about-hero-copy w-full pl-3 pr-5 pb-10 pt-6 text-left font-fredoka text-[#3B2414] md:px-0 md:pb-0 md:pl-[14.4%] md:pt-[4vw]">
            <h1 className="about-hero-title text-[clamp(2.2rem,10.5vw,3.75rem)] font-extrabold leading-tight md:text-6xl">
              About Us
            </h1>
            <p className="about-hero-subtitle mt-2 max-w-[22ch] text-[clamp(1.1rem,5.2vw,1.8rem)] font-medium leading-snug sm:max-w-[30ch] md:mt-3 md:max-w-none md:text-xl">
              Helping Pets Stay Happy, Healthy, and Well-Groomed
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="who-we-are-heading"
        className="relative -mt-28 px-6 pt-[58px] pb-[150px] sm:px-8 md:mt-0 md:pt-[45px] md:pb-[40px] xl:pb-[50px]"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-y-6 md:grid-cols-2 md:gap-x-[25px] md:gap-y-0 xl:gap-x-12">
          <h2
            id="who-we-are-heading"
            className="-ml-3 text-left font-fredoka text-4xl font-bold text-[#3B2414] md:ml-0 md:col-start-2 md:row-start-1 md:self-end md:text-left md:text-5xl"
          >
            Who We Are
          </h2>

          <img
            src="/about%20us/ABOUTUS-DOG-1.png"
            alt="Golden retriever sitting"
            className="mx-auto block h-auto w-full max-w-[380px] md:col-start-1 md:row-span-2 md:row-start-1 md:max-w-[560px]"
          />

          <p className="mx-auto -mt-[10px] max-w-xl text-center font-fredoka text-lg leading-snug text-[#3B2414] md:col-start-2 md:row-start-2 md:mx-0 md:mt-[25px] md:self-start md:text-left md:text-xl xl:mt-[50px]">
            PawPals is a pet care service dedicated to helping pets stay clean,
            comfortable, and happy. Our goal is to provide dependable care in a
            safe and friendly space, giving pet owners peace of mind and pets an
            enjoyable experience every visit.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="our-mission-heading"
        className="relative px-6 pb-[150px] sm:px-8 md:pb-[40px] xl:pb-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-y-6 md:grid-cols-2 md:gap-x-[25px] md:gap-y-0 xl:gap-x-12">
          <h2
            id="our-mission-heading"
            className="-ml-3 text-left font-fredoka text-4xl font-bold text-[#3B2414] md:ml-0 md:col-start-1 md:row-start-1 md:self-end md:text-center md:text-5xl xl:text-left"
          >
            Our Mission
          </h2>

          <img
            src="/about%20us/ABOUTUS-DOG-2.png"
            alt="Beagle resting"
            className="mx-auto -mt-[30px] block h-auto w-full max-w-[380px] md:mt-0 md:col-start-2 md:row-span-2 md:row-start-1 md:-ml-6 md:w-[calc(100%+24px)] md:max-w-none xl:ml-auto xl:w-full xl:max-w-[560px]"
          />

          <p className="mx-auto -mt-[47px] max-w-xl text-center font-fredoka text-lg leading-snug text-[#3B2414] md:mt-[25px] md:col-start-1 md:row-start-2 md:mx-0 md:self-start md:text-center md:text-xl xl:mt-[50px] xl:text-left">
            To provide professional grooming and pet care services that help
            pets stay clean, comfortable, healthy, and happy in a safe and
            caring environment.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="why-choose-heading"
        className="relative px-6 pb-[160px] pt-0 sm:px-8 md:pb-[120px] md:pt-0 xl:pb-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-y-6 md:grid-cols-2 md:gap-x-12 md:gap-y-0">
          <h2
            id="why-choose-heading"
            className="-ml-3 text-left font-fredoka text-4xl font-bold text-[#3B2414] md:ml-0 md:col-start-2 md:row-start-1 md:self-end md:text-left md:text-5xl"
          >
            Why Choose PawPals?
          </h2>

          <img
            src="/about%20us/ABOUTUS-CAT-1.png"
            alt="Orange kitten reaching up"
            className="mx-auto block h-auto w-full max-w-[380px] md:col-start-1 md:row-span-2 md:row-start-1 md:max-w-[560px]"
          />

          <p className="mx-auto mt-[17px] max-w-xl text-center font-fredoka text-lg leading-snug text-[#3B2414] md:mt-6 md:col-start-2 md:row-start-2 md:mx-0 md:self-start md:text-left md:text-xl">
            Providing quality grooming services with care, comfort, and
            attention for every pet. We ensure a safe, clean, and stress-free
            grooming experience focused on your pet&apos;s health and
            happiness.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="crew-heading"
        className="relative px-4 pb-[100px] pt-0 sm:px-6 md:pb-[130px] md:pt-0 xl:pb-[120px] xl:pt-[150px]"
      >
        <div className="mx-auto max-w-[1400px]">
          <h2
            id="crew-heading"
            className="font-fredoka text-4xl font-bold text-[#3B2414] md:text-5xl"
          >
            Meet the PawPals Crew
          </h2>

          <div className="mt-[25px] grid grid-cols-1 gap-x-[25px] gap-y-[35px] md:mt-[25px] md:gap-y-12 md:grid-cols-4 md:gap-x-[25px] xl:-mt-[65px]">
            {crew.map((member) => (
              <div
                key={member.img}
                className="group mx-auto flex w-full min-w-0 max-w-[340px] cursor-pointer flex-col transition-transform duration-300 ease-out hover:-translate-y-3 md:max-w-none"
              >
                <div className="flex h-80 w-full items-end justify-center overflow-visible md:h-auto xl:h-[36rem]">
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