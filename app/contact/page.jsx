import Image from "next/image";
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

      <section className="mx-auto max-w-7xl px-6 py-16 font-fredoka text-text">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="mt-3 text-lg">We&apos;d love to hear from you and help with your pet journey.</p>
      </section>
      <Footer />
    </main>
  );
}