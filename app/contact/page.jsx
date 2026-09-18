import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      </section>

      <Footer />
    </main>
  );
}