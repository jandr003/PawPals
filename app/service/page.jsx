import Navbar from "../components/Navbar";

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
        <h1 className="font-fredoka text-[32px] font-bold text-[#2B2118] sm:text-[40px] lg:text-[48px]">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-[560px] font-fredoka text-base leading-relaxed text-[#4A4A4A] sm:text-lg">
          Care and support for every stage of your pet's life — from grooming
          and boarding to checkups and companionship.
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

      <section className="mx-auto mb-16 max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#2B2118] px-8 py-12 text-center sm:py-16">
          <h2 className="font-fredoka text-2xl font-bold text-white sm:text-3xl">
            Ready to give your pet the care they deserve?
          </h2>
          <p className="max-w-[480px] font-fredoka text-base leading-relaxed text-white/80">
            Book an appointment or reach out to our team to find the right
            service for your companion.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button className="w-full rounded-full bg-[#C77D4A] px-8 py-3 text-center font-fredoka text-sm font-medium text-white transition hover:brightness-95 sm:w-auto">
              Book Vet Appointment
            </button>
            <button className="w-full rounded-full border border-white/40 px-8 py-3 text-center font-fredoka text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}