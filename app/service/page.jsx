import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SERVICES = [
  {
    icon: "/home/OUR-SERVICES1.png",
    title: "Pet Grooming",
    description:
      "Professional grooming services including bathing, nail trimming, ear cleaning, and fur care to keep your pet fresh and comfortable.",
  },
  {
    icon: "/home/OUR-SERVICES2.png",
    title: "Pet Boarding & Daycare",
    description:
      "Safe and comfortable care for pets during the day or overnight, with a cozy space to play, rest, and feel at home while you're away.",
  },
  {
    icon: "/home/OUR-SERVICES3.png",
    title: "Veterinary Care",
    description:
      "Trusted veterinary care for checkups, vaccinations, and treatment, delivered by a team that treats every visit with patience and care.",
  },
  {
    icon: "/home/OUR-SERVICES4.png",
    title: "Pet Sitting",
    description:
      "Reliable care for your pets while you're away, including feeding, playtime, and companionship so they're never short on love.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <img
        src="/SERVICE-PAWPALS.png"
        alt="Our Services"
        className="block h-auto w-full"
      />

      <section className="mx-auto max-w-4xl px-6 pb-4 pt-16 text-center sm:px-8 sm:pt-24">
        <p className="font-fredoka text-lg font-medium leading-snug text-[#3B2414] md:text-2xl">
          At PawPals, we believe every pet deserves personalized care in a safe,
          welcoming, and loving environment. Our team is dedicated to providing
          reliable services that support your pet&apos;s health, happiness, and
          overall well-being.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-3xl border border-[#EFDFC6] bg-white p-8 shadow-[0_16px_40px_-24px_rgba(43,33,24,0.25)] transition hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(43,33,24,0.3)]"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-16 w-16 object-contain"
              />
              <h3 className="font-fredoka text-xl font-bold text-[#2B2118]">
                {service.title}
              </h3>
              <p className="font-fredoka text-sm leading-relaxed text-[#4A4A4A]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}