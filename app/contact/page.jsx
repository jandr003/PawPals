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

      <img
        src="/contact/CONTACT-PAWPALS.png"
        alt="Pets banner"
        className="contact-banner block h-auto w-full"
        style={{ marginTop: "-250px" }}
      />

      <section
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 text-[#3B2414]"
        style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
      >
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="mt-3 text-lg leading-snug">
          We&apos;re always happy to help with your pet care needs.
          <br />
          Feel free to reach out to the PawPals team.
        </p>

        <h2 className="mt-16 text-4xl font-bold md:text-5xl">Our Location</h2>

        <address className="mt-8 space-y-1 text-lg not-italic leading-snug">
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

        <h2 className="mt-16 text-4xl font-bold md:text-5xl">Send Us a Message</h2>
        <p className="mt-4 max-w-3xl text-lg leading-snug">
          Have a question about our services or need assistance? Send us a
          message, and our team will get back to you as soon as possible.
        </p>
        <ContactForm />

        <h2 className="mt-16 text-4xl font-bold md:text-5xl">Connect With Us</h2>
        <p className="mt-4 max-w-3xl text-lg leading-snug">
          Follow PawPals on social media for updates, pet care tips, and
          community stories.
        </p>

        <p className="mt-6 text-lg leading-snug">Follow Us On:</p>
        <p className="mt-1 text-lg leading-snug">
          {SOCIALS.map((s, i) => (
            <span key={s.name}>{i > 0 && " | "}<a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:underline">{s.name}</a></span>
          ))}
        </p>

        <p className="mt-6 text-lg leading-snug">
          Ready to book a service for your pet?
          <br />
          Schedule your appointment with PawPals today.
        </p>

        <Link
          href="/service/book-appointment"
          className="mt-6 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
        >
          Book Now
        </Link>
      </section>

      <Footer />
    </main>
  );
}