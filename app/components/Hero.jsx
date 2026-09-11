"use client";

const PAW_POSITIONS = [
  { top: "10%", left: "60%", size: 30, rotate: -18, opacity: 0.45 },
  { top: "50%", left: "70%", size: 24, rotate: 10, opacity: 0.4 },
  { top: "28%", left: "8%", size: 26, rotate: -6, opacity: 0.4 },
  { top: "70%", left: "14%", size: 22, rotate: 14, opacity: 0.35 },
];

function Paw({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="#EFDFC6">
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <ellipse cx="14" cy="24" rx="7" ry="9" />
      <ellipse cx="30" cy="14" rx="7" ry="9" />
      <ellipse cx="48" cy="18" rx="6.5" ry="8.5" />
      <ellipse cx="54" cy="34" rx="6" ry="8" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pb-16">
      <div className="pointer-events-none absolute inset-0">
        {PAW_POSITIONS.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{ top: p.top, left: p.left, transform: `rotate(${p.rotate}deg)`, opacity: p.opacity }}
          >
            <Paw size={p.size} />
          </div>
        ))}
      </div>

<div className="relative w-full pb-16 pt-24 pl-48 sm:pl-10 md:pl-24 xl:pl-64">
        <div className="max-w-[720px] sm:max-w-[320px] md:max-w-[420px] xl:max-w-[720px]">
          <h1 className="font-fredoka font-semibold leading-[1.1] text-text text-[56px] sm:text-[36px] md:text-[44px] xl:text-[72px]">
            Every Paw Deserves Love and Care
          </h1>
          <p className="mt-6 font-fredoka font-light leading-relaxed text-text/80 max-w-[560px] sm:max-w-[300px] md:max-w-[380px] text-2xl sm:text-base md:text-lg xl:text-2xl xl:max-w-[560px]">
            Adopt pets, book vet appointments, and give your companions the
            love and care they deserve.
          </p>
          <button className="mt-8 rounded-full bg-button font-fredoka font-medium text-white shadow-[0_10px_24px_-10px_rgba(199,125,74,0.6)] transition hover:brightness-95 px-12 py-5 text-xl sm:px-8 sm:py-3 sm:text-base md:px-9 md:py-4 md:text-base xl:px-12 xl:py-5 xl:text-xl">
            Adopt Now
          </button>
        </div>
      </div>
      
      <img
        src="/home/HOME-PICTURE-1.png"
        alt="Happy pet"
        className="absolute w-full object-contain right-56 -top-24 max-w-[620px] sm:right-2 sm:top-4 sm:max-w-[180px] md:right-2 md:top-8 md:max-w-[420px] xl:right-56 xl:-top-24 xl:max-w-[620px]"
      />

      <div className="relative mx-auto mt-56 w-[700px] max-w-full px-8 text-center">
          <h2 className="font-fredoka text-[40px] font-bold text-[#2B2118] sm:text-[44px]">
            Welcome to PawPals!
          </h2>
          <p className="mx-auto mt-4 font-fredoka text-lg font-normal leading-[1.7] text-[#4A4A4A]">
            PawPals is a caring space where pets find love, attention, and a
            second chance at happiness. We help connect animals in need with
            people who are ready to welcome them home, while also making sure
            every pet receives the care they deserve through trusted services
            and support.
          </p>
      </div>

        <div className="relative mx-auto mt-48 max-w-6xl px-8 text-left">
          <h2 className="font-fredoka text-[32px] font-bold text-[#2B2118] sm:text-[40px]">
            Our Services
          </h2>
        </div>

        <div className="relative mx-auto mt-8 flex max-w-6xl flex-nowrap items-center gap-28 px-8">
          <img
            src="/home/HOME-PICTURE-2.png"
            alt="Our Services"
            className="w-full max-w-[450px] shrink-0 object-contain"
          />

          <div className="-ml-6 mt-8 flex shrink-0 flex-col gap-12">
            <div className="flex items-center gap-4">
              <img
                src="/home/OUR-SERVICES1.png"
                alt="Service 1"
                className="-ml-4 h-16 w-16 object-contain"
              />
              <div className="-ml-1 -mt-6">
                <h3 className="font-fredoka text-lg font-bold text-[#2B2118]">
                  Pet Grooming
                </h3>
                <p className="mt-1 font-fredoka text-sm text-[#4A4A4A]">
                  Professional grooming services including bathing, nail
                  trimming, and fur care.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="/home/OUR-SERVICES2.png"
                alt="Service 2"
                className="ml-12 h-16 w-16 object-contain"
              />
              <div className="-ml-1 -mt-6">
                <h3 className="font-fredoka text-lg font-bold text-[#2B2118]">
                  Pet Boarding &amp; Daycare
                </h3>
                <p className="mt-1 font-fredoka text-sm text-[#4A4A4A]">
                  Safe and comfortable care for pets during the day or
                  overnight.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="/home/OUR-SERVICES3.png"
                alt="Service 3"
                className="ml-12 mt-4 h-16 w-16 object-contain"
              />
              <div className="-ml-1 -mt-0">
                <h3 className="font-fredoka text-lg font-bold text-[#2B2118]">
                  Veterinary Care
                </h3>
                <p className="mt-1 font-fredoka text-sm text-[#4A4A4A]">
                  Veterinary care for checkups, vaccinations, and treatment.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img
                src="/home/OUR-SERVICES4.png"
                alt="Service 4"
                className="-ml-4 h-16 w-16 object-contain"
              />
              <div className="-ml-1 mt-0">
                <h3 className="font-fredoka text-lg font-bold text-[#2B2118]">
                  Pet Sitting
                </h3>
                <p className="mt-1 font-fredoka text-sm text-[#4A4A4A]">
                  Reliable care for your pets while you're away, including
                  feeding, playtime, and companionship.
                </p>
              </div>
            </div>

            <div className="mt-2 flex gap-4">
              <button className="rounded-full border border-[#C77D4A] px-6 py-3 font-fredoka text-sm font-medium text-[#2B2118] transition hover:bg-[#C77D4A]/10">
                Book Vet Appointment
              </button>
              <button className="rounded-full bg-[#C77D4A] px-6 py-3 font-fredoka text-sm font-medium text-white transition hover:brightness-95">
                Schedule Visit
              </button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-56 max-w-6xl px-8 text-left">
          <h2 className="font-fredoka text-[32px] font-bold text-[#2B2118] sm:text-[40px]">
            Happy Pet Parents of PawPals
          </h2>
        </div>

        <div className="relative mx-auto mt-32 max-w-6xl px-8">
            <div className="absolute left-1/2 top-1/2 z-0 h-[280px] w-full max-w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 shadow-[0_20px_50px_-20px_rgba(43,33,24,0.25)]">
                <div className="ml-auto max-w-[600px]">
                    <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                viewBox="0 0 20 20"
                                fill="#FACC15"
                                className="h-6 w-6"
                            >
                                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
                            </svg>
                        ))}
                    </div>

                    <p className="font-fredoka text-lg leading-relaxed text-[#2B2118]">
                        "I was a little nervous leaving my dog since he doesn't usually do well during grooming sessions, but the team at PawPals made the experience really comfortable for him. He looked adorable after, and even smelled amazing for days. Definitely coming back."
                    </p>

                    <p className="mt-6 font-fredoka text-xl font-semibold text-[#2B2118]">
                        Jasmine Lee
                    </p>
                </div>
            </div>
                <img
                    src="/home/HOME-OWNER-1.png"
                    alt="Happy pet parent"
                    className="relative z-10 w-full max-w-[400px] object-contain"
                />
        </div>  

        <div className="relative mx-auto mt-16 max-w-6xl px-8">
            <div className="absolute left-1/2 top-1/2 z-0 h-[280px] w-full max-w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 shadow-[0_20px_50px_-20px_rgba(43,33,24,0.25)]">
                <div className="ml-auto max-w-[600px]">
                    <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                viewBox="0 0 20 20"
                                fill="#FACC15"
                                className="h-6 w-6"
                            >
                                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
                            </svg>
                        ))}
                    </div>

                    <p className="font-fredoka text-lg leading-relaxed text-[#2B2118]">
                        "My cat usually gets nervous during grooming, but the staff at PawPals handled him really well. They were very patient and careful with him, and the grooming turned out great. He came home looking clean, fluffy, and relaxed after the session."
                    </p>

                    <p className="mt-6 font-fredoka text-xl font-semibold text-[#2B2118]">
                        Daniel Cruz
                    </p>
                </div>
            </div>
                <img
                    src="/home/HOME-OWNER-2.png"
                    alt="Happy pet parent"
                    className="relative z-10 w-full max-w-[400px] object-contain"
                />
        </div>

        <div className="relative mx-auto mt-16 max-w-6xl px-8">
            <div className="absolute left-1/2 top-1/2 z-0 h-[280px] w-full max-w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 shadow-[0_20px_50px_-20px_rgba(43,33,24,0.25)]">
                <div className="ml-auto max-w-[600px]">
                    <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                                key={i}
                                viewBox="0 0 20 20"
                                fill="#FACC15"
                                className="h-6 w-6"
                            >
                                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
                            </svg>
                        ))}
                    </div>

                    <p className="font-fredoka text-lg leading-relaxed text-[#2B2118]">
                        "I was honestly so happy with how my cat looked after her grooming session at PawPals. The staff were really gentle with her, and you could tell they genuinely care about the pets they handle. She came home looking clean, fluffy, and even more adorable than usual."
                    </p>

                    <p className="mt-6 font-fredoka text-xl font-semibold text-[#2B2118]">
                        Sophia Martinez
                    </p>
                </div>
            </div>
                <img
                    src="/home/HOME-OWNER-3.png"
                    alt="Happy pet parent"
                    className="relative z-10 w-full max-w-[400px] object-contain"
                />
        </div>
    </section>
  );
}