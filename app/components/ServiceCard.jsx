import Link from "next/link";
import { services } from "../data/services";

const LAYOUT = {
  wellness: {
    row: "mt-8 md:grid-cols-2 md:gap-x-10 xl:gap-x-[50px] xl:grid-cols-[1.4fr_1fr]",
    imageFirst: false,
    image: "/service-dog1.png",
    imageAlt: "Dog enjoying the PawPals Wellness Package",
    imageClass: "xl:scale-[1.15]",
    mobileClass: "-translate-x-5 scale-110",
    textClass: "",
    cta: { label: "Book Now", href: "#booking" },
  },
  adoption: {
    row: "mt-[100px] md:mt-[130px] xl:mt-[150px] md:grid-cols-2 md:gap-x-10 xl:gap-x-[150px] xl:grid-cols-[1fr_1.4fr]",
    imageFirst: true,
    image: "/service-cat1.png",
    imageAlt: "Cat ready for adoption with PawPals",
    imageClass: "md:order-1 xl:translate-y-12 xl:scale-[1.15]",
    mobileClass: "-translate-x-1 scale-100",
    textClass: "md:order-2 xl:pt-[180px]",
    cta: { label: "Start Adoption", href: "/adopt" },
  },
  stayplay: {
    row: "mt-[100px] md:mt-[130px] xl:mt-[150px] md:grid-cols-2 md:gap-x-10 xl:gap-x-[70px] xl:grid-cols-[1.4fr_1fr]",
    imageFirst: false,
    image: "/service-dog2.png",
    imageAlt: "Pet enjoying PawPals Stay & Play Care",
    imageClass: "xl:translate-x-10 xl:translate-y-12 xl:scale-[1.15]",
    mobileClass: "translate-x-5 scale-110",
    textClass: "xl:pt-[180px]",
    cta: { label: "Reserve a Spot", href: "#booking" },
  },
  training: {
    row: "mt-[100px] md:mt-[130px] xl:mt-[150px] md:grid-cols-2 md:gap-x-10 xl:gap-x-[50px] xl:grid-cols-[1fr_1.4fr]",
    imageFirst: true,
    image: "/service-cat2.png",
    imageAlt: "Pet training with PawPals",
    imageClass: "md:order-1 xl:-translate-x-10 xl:translate-y-12 xl:scale-[1.15]",
    mobileClass: "-translate-x-1 scale-100",
    textClass: "md:order-2 xl:pt-[180px]",
    cta: { label: "Book Training", href: "#booking" },
  },
};

export default function ServiceCard() {
  return (
    <>
      <section className="relative z-[-1] -mt-[160px] w-full overflow-hidden bg-transparent md:-mt-[188px]">
        <img
          src="/SERVICE-PAWPALS.png"
          alt=""
          className="pointer-events-none block h-auto max-w-none md:hidden"
          style={{ width: "200%", marginLeft: "-95%", marginTop: "-60px" }}
        />

        <img
          src="/SERVICE-PAWPALS.png"
          alt=""
          className="hidden h-auto w-full md:block md:max-lg:!m-0 md:max-lg:!w-full md:max-xl:h-[355px] md:max-xl:object-cover md:max-xl:object-[right_bottom]"
        />

        <div className="md:hidden">
          <div className="w-full px-6 pt-6 font-fredoka text-[#3B2414] sm:px-8">
            <h1 className="text-3xl font-extrabold sm:text-5xl">Our Services</h1>
            <p className="mt-2 text-sm font-medium sm:text-lg">
              Your Guide to Better Pet Care!
            </p>
          </div>
        </div>

        <header className="absolute inset-x-0 top-0 hidden font-fredoka text-[#3B2414] md:block">
          <div className="md:max-lg:pt-[calc(clamp(126px,14vw,140px)_+_0.75rem)] lg:max-xl:pt-[calc(clamp(145px,15vw,188px)_+_clamp(1.25rem,2.4vw,2rem))] xl:pt-[calc(188px_+_4vw)] md:max-xl:pl-[clamp(4.75rem,8.5vw,6.5rem)] xl:pl-[14.4%]">
            <h1 className="text-6xl font-extrabold md:max-xl:text-[length:clamp(2.25rem,4vw,2.75rem)] md:max-xl:leading-[1.05]">
              Our Service
            </h1>
            <p className="mt-3 text-xl font-medium md:max-xl:text-[length:clamp(0.9rem,1.55vw,1.05rem)] md:max-xl:leading-[1.25] md:max-xl:whitespace-nowrap">
              Your Guide to Better Pet Care!
            </p>
          </div>
        </header>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-0 pt-10 text-center sm:px-8 md:pt-10 xl:pt-[70px]">
        <p className="font-fredoka text-lg font-medium leading-snug text-[#3B2414] md:text-2xl">
          At PawPals, we believe every pet deserves personalized care in a safe,
          welcoming, and loving environment. Our team is dedicated to providing
          reliable services that support your pet&apos;s health, happiness, and
          overall well-being.
        </p>
      </section>

      <section
        aria-labelledby="pricing-heading"
        className="mx-auto max-w-6xl px-6 pb-[100px] pt-[100px] font-fredoka text-[#3B2414] sm:px-8 md:pb-[130px] md:pt-[130px] xl:pb-[150px] xl:pt-[150px]"
      >
        <h2 id="pricing-heading" className="text-4xl font-bold md:text-5xl">
          PawPals Services &amp; Pricing
        </h2>

        {services.map((s) => {
          const l = LAYOUT[s.id];
          if (!l) return null;

          const title = (
            <h3 className="text-2xl font-semibold xl:text-3xl">
              {s.name} &ndash; &#8369;{s.price}
            </h3>
          );

          const image = (
            <img
              src={l.image}
              alt={l.imageAlt}
              className={`mx-auto block h-auto w-full max-w-lg object-contain md:max-w-none md:translate-x-0 md:scale-100 ${l.mobileClass} ${
                l.imageFirst ? "" : "order-2 md:order-none"
              } ${l.imageClass}`}
            />
          );

          const text = (
            <div className={`${l.imageFirst ? "" : "order-3 md:order-none"} ${l.textClass}`}>
              <div className="hidden md:block">{title}</div>

              <p className="mt-0 text-lg leading-snug md:mt-4">{s.tagline}</p>
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
              <div className="md:hidden">{title}</div>
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