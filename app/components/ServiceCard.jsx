import Link from "next/link";
import { services } from "../data/services";

const LAYOUT = {
  wellness: {
    row: "mt-8 md:gap-x-[50px] md:grid-cols-[1.4fr_1fr]",
    imageFirst: false,
    image: "/service-dog1.png",
    imageAlt: "Dog enjoying the PawPals Wellness Package",
    imageClass: "md:scale-[1.15]",
    textClass: "",
    cta: { label: "Book Now", href: "#booking" },
  },
  adoption: {
    row: "mt-16 md:gap-x-[150px] md:grid-cols-[1fr_1.4fr]",
    imageFirst: true,
    image: "/service-cat1.png",
    imageAlt: "Cat ready for adoption with PawPals",
    imageClass: "md:order-1 md:translate-y-12 md:scale-[1.15]",
    textClass: "md:order-2 md:pt-[180px]",
    cta: { label: "Start Adoption", href: "/adopt" },
  },
  stayplay: {
    row: "mt-16 md:gap-x-[70px] md:grid-cols-[1.4fr_1fr]",
    imageFirst: false,
    image: "/service-dog2.png",
    imageAlt: "Pet enjoying PawPals Stay & Play Care",
    imageClass: "md:translate-x-10 md:translate-y-12 md:scale-[1.15]",
    textClass: "md:pt-[180px]",
    cta: { label: "Reserve a Spot", href: "#booking" },
  },
  training: {
    row: "mt-24 md:gap-x-[50px] md:grid-cols-[1fr_1.4fr]",
    imageFirst: true,
    image: "/service-cat2.png",
    imageAlt: "Pet training with PawPals",
    imageClass: "md:order-1 md:-translate-x-10 md:translate-y-12 md:scale-[1.15]",
    textClass: "md:order-2 md:pt-[180px]",
    cta: { label: "Book Training", href: "#booking" },
  },
};

export default function ServiceCard() {
  return (
    <>
      <section className="relative z-[-1] -mt-[60px] w-full overflow-hidden bg-transparent md:-mt-[188px]">
        <img src="/SERVICE-PAWPALS.png" alt="" className="block h-auto w-full" />

        <div className="absolute inset-0 flex items-start pt-[60px] md:pt-[188px]">
          <div className="w-full px-6 pt-6 font-fredoka text-[#3B2414] sm:px-8 md:pl-[14.4%] md:pr-0 md:pt-[4vw]">
            <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl">Our Service</h1>
            <p className="mt-2 text-sm font-medium sm:text-lg md:mt-3 md:text-xl">
              Your Guide to Better Pet Care!
            </p>
          </div>
        </div>
      </section>

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
        <h2 id="pricing-heading" className="text-4xl font-bold md:text-5xl">
          PawPals Services &amp; Pricing
        </h2>

        {services.map((s) => {
          const l = LAYOUT[s.id];
          if (!l) return null;

          const image = (
            <img
              src={l.image}
              alt={l.imageAlt}
              className={`mx-auto h-auto w-full max-w-lg md:max-w-none ${l.imageClass}`}
            />
          );

          const text = (
            <div className={l.textClass}>
              <h3 className="text-2xl font-semibold md:text-3xl">
                {s.name} &ndash; &#8369;{s.price}
              </h3>

              <p className="mt-4 text-lg leading-snug">{s.tagline}</p>
              <p className="mt-4 text-lg leading-snug">{s.description}</p>

              <ul className="mt-6 list-disc space-y-2 pl-6 text-lg leading-snug">
                {s.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Link
                href={l.cta.href}
                className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
              >
                {l.cta.label}
              </Link>
            </div>
          );

          return (
            <div key={s.id} className={`grid items-center gap-8 md:items-center ${l.row}`}>
              {l.imageFirst ? (
                <>
                  {image}
                  {text}
                </>
              ) : (
                <>
                  {text}
                  {image}
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}