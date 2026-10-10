import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const SOCIALS = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "X", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "YouTube", href: "#" },
];

const ROW =
  "mt-10 flex flex-col items-center gap-10 md:mt-20 md:gap-10 lg:mt-[50px] lg:grid lg:grid-cols-[minmax(0,520px)_minmax(0,720px)] lg:gap-x-[40px] lg:gap-y-0 2xl:-mr-[100px]";

export default function ContactPage() {
  return (
    <main className="contact-page relative overflow-x-clip lg:-mt-28">
      <Navbar inset />

      <div className="contact-hero relative z-10 w-full overflow-x-clip bg-transparent max-md:-mt-28 md:z-[-1] md:-mt-[188px] md:overflow-hidden xl:-mt-[250px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-24 bg-white md:hidden"
        />

        <img
          src="/Contact/CONTACT-PAWPALS.png"
          alt=""
          className="contact-banner pointer-events-none relative z-0 block h-auto w-full max-md:min-h-[300px] max-md:-translate-y-20 max-md:object-cover max-md:object-right-top md:max-xl:h-[355px] md:max-xl:object-cover md:max-xl:object-[right_bottom]"
        />

        <div className="relative z-10 mt-10 px-6 pb-0 pt-0 max-md:-top-20 md:absolute md:inset-0 md:mt-0 md:flex md:items-start md:px-0 md:pb-0 md:max-lg:pt-[clamp(126px,14vw,140px)] lg:max-xl:pt-[clamp(145px,15vw,188px)] xl:pt-[250px]">
          <div
            className="w-full text-left text-[#3B2414] md:pr-0 md:max-xl:pl-[clamp(4.75rem,8.5vw,6.5rem)] md:max-lg:pt-3 lg:max-xl:pt-[clamp(1.25rem,2.4vw,2rem)] xl:pl-[14.4%] xl:pt-[4vw]"
            style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
          >
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:max-xl:text-[length:clamp(2.25rem,4vw,2.75rem)] md:max-xl:leading-[1.05] xl:text-6xl">
              Contact Us
            </h1>
            <p className="mt-2 text-base font-medium sm:text-lg md:mt-3 md:max-xl:text-[length:clamp(0.9rem,1.55vw,1.05rem)] md:max-xl:leading-[1.25] md:max-xl:whitespace-nowrap xl:text-xl">
              Get in touch with the PawPals team.
            </p>
          </div>
        </div>
      </div>

      <section
        className="relative z-10 mx-auto max-w-7xl px-5 pt-10 pb-1 text-[#3B2414] max-md:-mt-20 sm:px-6 md:pt-10 md:pb-[84px] lg:pt-16 lg:pb-[100px] lg:max-xl:pb-[84px]"
        style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
      >
        <p className="text-base leading-snug sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          We&apos;re always happy to help with your pet care needs.
          <br className="hidden sm:block" />{" "}
          Feel free to reach out to the PawPals team.
        </p>

        <div className={`${ROW} md:max-xl:mt-20`}>
          <div className="w-full">
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Our Location
            </h2>

            <address className="mt-6 space-y-2 text-lg not-italic leading-snug sm:text-xl md:mt-8 md:text-2xl">
              <p>PawPals Pet Care Services</p>
              <p>San Miguel, Bulacan</p>
              <p>
                Call Us:{" "}
                <a
                  href="tel:+639923421134"
                  className="inline-block py-1 hover:underline"
                >
                  (+63) 9923 421 1134
                </a>
              </p>
              <p className="break-words">
                Email Us:{" "}
                <a
                  href="mailto:johnandrew@gmail.com"
                  className="inline-block break-all py-1 underline hover:text-[#E8A857]"
                >
                  johnandrew@gmail.com
                </a>
              </p>
              <p className="pt-2 font-semibold">Business Hours</p>
              <p>Monday &ndash; Friday: 8:00 AM &ndash; 7:30 PM</p>
              <p>Saturday &ndash; Sunday: 7:00 AM &ndash; 12:00 NN</p>
            </address>
          </div>

          <img
            src="/Contact/ContactUS-DOG1.png"
            alt="A smiling woman hugging a puppy"
            loading="lazy"
            className="h-auto w-full max-w-[560px] lg:max-w-none"
          />
        </div>

        <div className={`${ROW} md:max-xl:mt-[100px]`}>
          <div className="w-full">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Send Us a Message
            </h2>
            <p className="mt-4 max-w-[560px] text-base leading-snug sm:text-lg">
              Have a question about our services or need assistance? Send us a
              message, and our team will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          <img
            src="/Contact/ContactUS-CAT%26DOG1.png"
            alt="A husky and a cat cuddling together"
            loading="lazy"
            className="h-auto w-full max-w-[560px] lg:max-w-none"
          />
        </div>

        <div className={`${ROW} md:max-xl:mt-[100px]`}>
          <div className="w-full">
            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Connect With Us
            </h2>
            <p className="mt-5 max-w-[560px] text-base leading-snug sm:text-lg md:mt-6">
              Follow PawPals on social media for updates, pet care tips, and
              community stories.
            </p>

            <p className="mt-6 text-base leading-snug sm:text-lg md:mt-8">
              Follow Us On:
            </p>
            <ul className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg">
              {SOCIALS.map((s, i) => (
                <li key={s.name} className="flex items-center gap-x-3">
                  {i > 0 && <span aria-hidden="true">|</span>}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-2 hover:underline"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-snug sm:text-lg md:mt-8">
              Ready to book a service for your pet?
              <br className="hidden sm:block" />{" "}
              Schedule your appointment with PawPals today.
            </p>

            <Link
              href="/service/book-appointment"
              className="mt-6 block w-full rounded-xl bg-[#C97F4B] px-8 py-3 text-center text-base font-medium text-[#3B2414] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414] sm:inline-block sm:w-auto"
            >
              Book Now
            </Link>
          </div>

          <img
            src="/Contact/ContactUS-CAT1.png"
            alt="A cat"
            loading="lazy"
            className="h-auto w-full max-w-[560px] lg:max-w-none"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}