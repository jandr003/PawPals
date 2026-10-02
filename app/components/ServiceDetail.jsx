import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ServiceDetail({ service, image, ctaHref, ctaLabel }) {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-4 font-fredoka text-[#3B2414] sm:px-8">
        <Link
          href="/service"
          className="inline-block text-sm font-semibold text-[#C97F4B] hover:underline"
        >
          &larr; Back to Services
        </Link>

        <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.2fr_1fr] md:gap-x-[50px]">
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">{service.name}</h1>
            <p className="mt-3 text-3xl font-semibold text-[#C97F4B]">
              &#8369;{service.price}
            </p>

            <p className="mt-6 text-xl font-medium leading-snug">{service.tagline}</p>
            <p className="mt-4 text-lg leading-snug">{service.description}</p>

            <h2 className="mt-8 text-2xl font-semibold">What&apos;s Included</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-snug">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link
              href={ctaHref}
              className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
            >
              {ctaLabel}
            </Link>
          </div>

          <img
            src={image}
            alt={service.name}
            className="mx-auto h-auto w-full max-w-lg md:max-w-none"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}