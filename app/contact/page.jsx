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

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="relative z-[-1] -mt-[60px] w-full overflow-hidden bg-transparent md:-mt-[250px]">
        <img
          src="/contact/CONTACT-PAWPALS.png"
          alt=""
          className="contact-banner block h-auto w-full"
        />

        <div className="absolute inset-0 flex items-start pt-[60px] md:pt-[250px]">
          <div
            className="w-full px-6 pt-6 text-[#3B2414] sm:px-8 md:pl-[14.4%] md:pr-0 md:pt-[4vw]"
            style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
          >
            <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-2 text-sm font-medium sm:text-lg md:mt-3 md:text-xl">
              Get in touch with the PawPals team.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-[100px] text-[#3B2414]"
        style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
      >
      <p className="text-lg leading-snug md:text-xl">
        We&apos;re always happy to help with your pet care needs.
        <br />
        Feel free to reach out to the PawPals team.
      </p>
      
        <div className="mt-[50px] flex flex-col items-center gap-[50px] lg:grid lg:grid-cols-[minmax(0,520px)_minmax(0,720px)] lg:gap-x-[40px] lg:gap-y-0 2xl:-mr-[100px]">
          <div className="w-full">
            <h2 className="text-5xl font-bold md:text-6xl">Our Location</h2>

            <address className="mt-8 space-y-2 text-xl not-italic leading-snug md:text-2xl">
              <p>PawPals Pet Care Services</p>
              <p>San Miguel, Bulacan</p>
              <p>
                Call Us: <a href="tel:+639923421134" className="hover:underline">(+63) 9923 421 1134</a>
              </p>
              <p>
                Email Us: <a href="mailto:johnandrew@gmail.com" className="underline hover:text-[#E8A857]">johnandrew@gmail.com</a>
              </p>
              <p>Business Hours</p>
              <p>Monday &ndash; Friday: 8:00 AM &ndash; 7:30 PM</p>
              <p>Saturday &ndash; Sunday: 7:00 AM &ndash; 12:00 NN</p>
            </address>
          </div>

          <img
            src="/Contact/ContactUS-DOG1.png"
            alt="A smiling woman hugging a puppy"
            className="h-auto w-full max-w-[560px] lg:max-w-none"
          />
        </div>

        <div className="mt-[50px] flex flex-col items-center gap-[50px] lg:grid lg:grid-cols-[minmax(0,520px)_minmax(0,720px)] lg:gap-x-[40px] lg:gap-y-0 2xl:-mr-[100px]">
          <div className="w-full">
            <h2 className="text-4xl font-bold md:text-5xl">Send Us a Message</h2>
            <p className="mt-4 max-w-[560px] text-lg leading-snug">
              Have a question about our services or need assistance? Send us a
              message, and our team will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          <img
            src="/Contact/ContactUS-CAT%26DOG1.png"
            alt="A husky and a cat cuddling together"
            className="h-auto w-full max-w-[560px] lg:max-w-none"
          />
        </div>

        <div className="mt-[50px] flex flex-col items-center gap-[50px] lg:grid lg:grid-cols-[minmax(0,520px)_minmax(0,720px)] lg:gap-x-[40px] lg:gap-y-0 2xl:-mr-[100px]">
          <div className="w-full">
            <h2 className="text-5xl font-bold md:text-6xl">Connect With Us</h2>
            <p className="mt-6 max-w-[560px] text-lg leading-snug">
              Follow PawPals on social media for updates, pet care tips, and
              community stories.
            </p>

            <p className="mt-8 text-lg leading-snug">Follow Us On:</p>
            <p className="text-lg leading-snug">
              {SOCIALS.map((s, i) => (
                <span key={s.name}>{i > 0 && " | "}<a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.name}</a></span>
              ))}
            </p>

            <p className="mt-8 text-lg leading-snug">
              Ready to book a service for your pet?
              <br />
              Schedule your appointment with PawPals today.
            </p>

            <Link
              href="/service/book-appointment"
              className="mt-6 inline-block rounded-xl bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#3B2414] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
            >
              Book Now
            </Link>
          </div>

          <img
            src="/Contact/ContactUS-CAT1.png"
            alt="A cat"
            className="h-auto w-full max-w-[560px] lg:max-w-none"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}