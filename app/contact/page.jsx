import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { pets } from "../data/pets";

const SOCIALS = [
  { name: "Facebook", href: "https://www.facebook.com/pawpals" },
  { name: "Instagram", href: "https://www.instagram.com/pawpals" },
  { name: "X", href: "https://x.com/pawpals" },
  { name: "TikTok", href: "https://www.tiktok.com/@pawpals" },
  { name: "YouTube", href: "https://www.youtube.com/@pawpals" },
];

const ROW =
  "mt-[85px] flex flex-col items-center gap-10 md:grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-center md:gap-x-2 md:gap-y-0 lg:grid-cols-[minmax(0,520px)_minmax(0,720px)] lg:gap-x-[40px] lg:max-xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:max-xl:gap-x-0 lg:max-xl:pl-10 2xl:-mr-[100px]";

const H2 =
  "text-4xl font-bold leading-tight sm:text-5xl md:max-lg:text-4xl";

const BODY =
  "text-base leading-snug sm:text-lg md:max-lg:text-base";

const IMG =
  "h-auto w-full max-w-[560px] lg:max-w-none md:max-lg:!h-[340px] md:max-lg:max-w-none md:max-lg:object-contain";

const LINK_FOCUS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D4A] focus-visible:ring-offset-2 rounded-sm";

export default async function ContactPage({ searchParams }) {
  const params = (await searchParams) || {};
  const petSlug = typeof params.pet === "string" ? params.pet : null;
  const petName = petSlug ? pets.find((p) => p.slug === petSlug)?.name || "" : "";

  return (
    <main className="contact-page relative overflow-x-clip">
      <Navbar inset />

      <div className="contact-hero relative z-10 w-full overflow-x-clip bg-transparent -mt-16 md:z-[-1] md:-mt-[188px] md:max-xl:-mt-[94px] md:overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-24 bg-white md:hidden"
        />

        <img
          src="/Contact/CONTACT-PAWPALS.png"
          alt=""
          className="contact-banner-mobile pointer-events-none relative z-0 block h-auto max-w-none !mt-0 -translate-y-12 md:hidden"
          style={{ width: "200%", marginLeft: "-85%" }}
        />

        <img
          src="/Contact/CONTACT-PAWPALS.png"
          alt=""
          className="contact-banner pointer-events-none relative z-0 hidden h-auto w-full md:block md:max-xl:h-[355px] md:max-xl:object-cover md:max-xl:object-[right_bottom]"
        />

        <div className="relative z-10 mt-10 px-6 pb-0 pt-0 max-md:-top-20 max-md:px-0 md:absolute md:inset-0 md:mt-0 md:flex md:items-start md:px-0 md:pb-0 md:max-lg:pt-[clamp(126px,14vw,140px)] lg:max-xl:pt-[clamp(145px,15vw,188px)] xl:pt-[calc(188px_+_4vw)]">
          <div
            className="w-full pl-9 pr-5 text-left text-[#3B2414] md:pr-0 md:max-xl:pl-[clamp(4.75rem,8.5vw,6.5rem)] md:max-lg:pt-5 lg:max-xl:pt-[clamp(1.25rem,2.4vw,2rem)] xl:pl-[14.4%]"
            style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
          >
            <h1 className="text-[clamp(2.2rem,10.5vw,3.75rem)] font-extrabold leading-tight md:max-xl:text-[length:clamp(2.25rem,4vw,2.75rem)] md:max-xl:leading-[1.05] xl:text-6xl">
              Contact Us
            </h1>
            <p className="mt-2 max-w-[22ch] text-[clamp(1.1rem,5.2vw,1.8rem)] font-medium leading-snug sm:max-w-[30ch] md:mt-4 md:text-base md:max-xl:text-[length:clamp(0.9rem,1.55vw,1.05rem)] md:max-xl:leading-[1.25] md:max-xl:whitespace-nowrap xl:text-xl">
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

        <div className={ROW}>
          <div className="w-full">
            <h2 className={H2}>Our Location</h2>

            <address className={`mt-6 space-y-2 not-italic ${BODY}`}>
              <p>PawPals Pet Care Services</p>
              <p>San Miguel, Bulacan</p>
              <p>
                Call Us:{" "}
                <a
                  href="tel:+639923421134"
                  className={`inline-block py-1 hover:underline ${LINK_FOCUS}`}
                >
                  (+63) 9923 421 1134
                </a>
              </p>
              <p className="break-words">
                Email Us:{" "}
                <a
                  href="mailto:johnandrew@gmail.com"
                  className={`inline-block break-all py-1 underline hover:text-[#B86F3E] ${LINK_FOCUS}`}
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
            className={IMG}
          />
        </div>

        <div id="message" className={`${ROW} scroll-mt-24`}>
          <div className="w-full">
            <h2 className={H2}>Send Us a Message</h2>
            <p className={`mt-6 max-w-[560px] ${BODY}`}>
              Have a question about our services or need assistance? Send us a
              message, and our team will get back to you as soon as possible.
            </p>
            <ContactForm petName={petName} />
          </div>

          <img
            src="/Contact/ContactUS-CAT%26DOG1.png"
            alt="A husky and a cat cuddling together"
            loading="lazy"
            className={IMG}
          />
        </div>

        <div className={ROW}>
          <div className="w-full">
            <h2 className={H2}>Connect With Us</h2>
            <p className={`mt-6 max-w-[560px] ${BODY}`}>
              Follow PawPals on social media for updates, pet care tips, and
              community stories.
            </p>

            <p className={`mt-6 ${BODY}`}>Follow Us On:</p>
            <ul className={`mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 ${BODY} md:max-lg:text-sm`}>
              {SOCIALS.map((s, i) => (
                <li key={s.name} className="flex items-center gap-x-2">
                  {i > 0 && <span aria-hidden="true">|</span>}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} (opens in a new tab)`}
                    className={`inline-block py-2 hover:underline ${LINK_FOCUS}`}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className={`mt-6 ${BODY}`}>
              Ready to book a service for your pet?
              <br className="hidden sm:block" />{" "}
              Schedule your appointment with PawPals today.
            </p>

            <Link
              href="/service/book-appointment"
              className="mt-6 inline-block rounded-2xl bg-[#C77D4A] px-8 py-3 font-fredoka font-medium text-white shadow-sm transition duration-200 hover:shadow-md hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D4A] focus-visible:ring-offset-2 active:scale-[0.98] md:px-10 md:py-4"
            >
              Book Now
            </Link>
          </div>

          <img
            src="/Contact/ContactUS-CAT1.png"
            alt="A cat"
            loading="lazy"
            className={IMG}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}