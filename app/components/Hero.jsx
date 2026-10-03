"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const PAW_POSITIONS = [
  { top: "10%", left: "60%", size: 30, rotate: -18, opacity: 0.45 },
  { top: "50%", left: "70%", size: 24, rotate: 10, opacity: 0.4 },
  { top: "28%", left: "8%", size: 26, rotate: -6, opacity: 0.4 },
  { top: "70%", left: "14%", size: 22, rotate: 14, opacity: 0.35 },
];

const PHONE_TOP_PAWS = [
  { top: "-60px", left: "78%", size: 26, rotate: 14, opacity: 0.45 },
  { top: "-20px", left: "6%", size: 24, rotate: -12, opacity: 0.4 },
  { top: "20px", left: "88%", size: 22, rotate: -8, opacity: 0.4 },
  { top: "50px", left: "24%", size: 24, rotate: 16, opacity: 0.4 },
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

function Stars() {
  return (
    <div className="mb-4 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="#FACC15" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L1.3 7.7l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

function TrimmedImg({ src, alt, className }) {
  const [trim, setTrim] = useState(null);
  const [mob, setMob] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const f = () => setMob(mq.matches);
    f();
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  useEffect(() => {
    const im = new window.Image();
    im.onload = () => {
      try {
        const c = document.createElement("canvas");
        c.width = im.naturalWidth;
        c.height = im.naturalHeight;
        const ctx = c.getContext("2d");
        ctx.drawImage(im, 0, 0);
        const { data, width, height } = ctx.getImageData(0, 0, c.width, c.height);
        let x0 = width, y0 = height, x1 = 0, y1 = 0;
        for (let y = 0; y < height; y++) {
          for (let x = 0; x < width; x++) {
            if (data[(y * width + x) * 4 + 3] > 20) {
              if (x < x0) x0 = x;
              if (x > x1) x1 = x;
              if (y < y0) y0 = y;
              if (y > y1) y1 = y;
            }
          }
        }
        if (x1 <= x0 || y1 <= y0) return;
        const t = document.createElement("canvas");
        t.width = x1 - x0 + 1;
        t.height = y1 - y0 + 1;
        t.getContext("2d").drawImage(c, x0, y0, t.width, t.height, 0, 0, t.width, t.height);
        setTrim(t.toDataURL("image/png"));
      } catch (e) {}
    };
    im.src = src;
  }, [src]);
  return <img src={mob && trim ? trim : src} alt={alt} className={className} />;
}

const TESTIMONIALS = [
  {
    img: "/home/HOME-OWNER-1.png",
    text: "I was a little nervous leaving my dog since he doesn't usually do well during grooming sessions, but the team at PawPals made the experience really comfortable for him. He looked adorable after, and even smelled amazing for days. Definitely coming back.",
    name: "Jasmine Lee",
  },
  {
    img: "/home/HOME-OWNER-2.png",
    text: "My cat usually gets nervous during grooming, but the staff at PawPals handled him really well. They were very patient and careful with him, and the grooming turned out great. He came home looking clean, fluffy, and relaxed after the session.",
    name: "Daniel Cruz",
  },
  {
    img: "/home/HOME-OWNER-3.png",
    text: "I was honestly so happy with how my cat looked after her grooming session at PawPals. The staff were really gentle with her, and you could tell they genuinely care about the pets they handle. She came home looking clean, fluffy, and even more adorable than usual.",
    name: "Sophia Martinez",
  },
];

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1741230713152-244939ffbd75?fm=jpg&q=80&w=800&auto=format&fit=crop",
    title: "The Secret to a Healthy Pet Smile",
    text: "Keep your pet's teeth clean and healthy with simple dental care tips for a brighter smile.",
  },
  {
    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?fm=jpg&q=80&w=800&auto=format&fit=crop",
    title: "Is Your Pet Trying to Tell You Something?",
    text: "Spot early signs of illness before it turns into a serious problem.",
  },
  {
    img: "https://images.unsplash.com/photo-1745252752503-2c5eb22167b6?fm=jpg&q=80&w=800&auto=format&fit=crop",
    title: "Common Household Items That Can Be Toxic to Pets",
    text: "Some foods and plants at home can harm pets. Learn what to avoid and what to do.",
  },
];

const IMG = "block w-full rounded-2xl object-cover shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip pb-[100px]">
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
        {PHONE_TOP_PAWS.map((p, i) => (
          <div
            key={`pt-${i}`}
            className="absolute md:hidden"
            style={{ top: p.top, left: p.left, transform: `rotate(${p.rotate}deg)`, opacity: p.opacity }}
          >
            <Paw size={p.size} />
          </div>
        ))}
      </div>

      <div className="relative flex w-full flex-col-reverse items-center gap-8 px-6 pt-0 md:flex-row md:items-center md:justify-between md:gap-4 md:px-10 md:pt-16 lg:items-start lg:gap-0 lg:pl-24 lg:pr-16 lg:pt-24 xl:pl-80 xl:pr-48">
        <div className="w-full md:max-w-[400px] lg:max-w-[460px] xl:max-w-[720px]">
          <h1 className="font-fredoka font-semibold leading-[1.1] text-text text-[36px] md:text-[40px] lg:text-[48px] xl:text-[72px]">
            Every Paw Deserves Love and Care
          </h1>
          <p className="mt-4 max-w-full font-fredoka font-light leading-relaxed text-text/80 text-base md:mt-6 md:max-w-[380px] md:text-lg lg:max-w-[420px] xl:max-w-[560px] xl:text-2xl">
            Adopt pets, book vet appointments, and give your companions the
            love and care they deserve.
          </p>
          <button className="mt-6 rounded-full bg-button font-fredoka font-medium text-white shadow-[0_10px_24px_-10px_rgba(199,125,74,0.6)] transition hover:brightness-95 px-8 py-3 text-base md:mt-8 md:px-9 md:py-4 xl:px-12 xl:py-5 xl:text-xl">
            Adopt Now
          </button>
        </div>

        <img
          src="/home/HOME-PICTURE-1.png"
          alt="Happy pet"
          className="w-[80%] max-w-[300px] object-contain md:w-[42%] md:max-w-[340px] md:shrink-0 lg:w-full lg:-mt-16 lg:max-w-[460px] xl:-mt-52 xl:max-w-[700px]"
        />
      </div>

      <div className="relative mx-auto mt-10 w-[700px] max-w-full px-6 text-center md:mt-[100px] md:px-8">
        <h2 className="font-fredoka text-[30px] font-bold text-[#2B2118] md:text-[36px] xl:text-[44px]">
          Welcome to PawPals!
        </h2>
        <p className="mx-auto mt-4 font-fredoka text-base font-normal leading-[1.7] text-[#4A4A4A] lg:text-lg">
          PawPals is a caring space where pets find love, attention, and a
          second chance at happiness. We help connect animals in need with
          people who are ready to welcome them home, while also making sure
          every pet receives the care they deserve through trusted services
          and support.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-6 text-left md:mt-24 md:px-8 lg:mt-[195px]">
        <h2 className="font-fredoka text-[28px] font-bold text-[#2B2118] md:text-[32px] lg:text-[40px]">
          Our Services
        </h2>
      </div>

      <div className="relative mx-auto mt-0 flex max-w-6xl flex-col items-center gap-8 px-6 md:mt-8 md:flex-row md:flex-nowrap md:items-center md:gap-6 lg:gap-20 xl:gap-28 xl:px-8">
        <img
          src="/home/HOME-PICTURE-2.png"
          alt="Our Services"
          className="-mt-14 w-full max-w-[280px] shrink-0 object-contain md:mt-0 md:max-w-[280px] lg:max-w-[420px] xl:max-w-[450px]"
        />

        <div className="flex w-full min-w-0 flex-col gap-6 md:-ml-6 md:mt-8 md:max-w-[340px] md:gap-8 lg:ml-0 lg:max-w-[420px] lg:gap-10 xl:-ml-6 xl:max-w-none xl:gap-12">
          <div className="flex items-center gap-4">
            <img src="/home/OUR-SERVICES1.png" alt="Service 1" className="h-14 w-14 shrink-0 object-contain md:-ml-4 md:h-16 md:w-16" />
            <div className="min-w-0 flex-1 md:-ml-1 md:-mt-6">
              <h3 className="font-fredoka text-base font-bold text-[#2B2118] lg:text-lg">Pet Grooming</h3>
              <p className="mt-1 font-fredoka text-sm text-[#4A4A4A] lg:text-xl">
                Professional grooming services including bathing, nail trimming, and fur care.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src="/home/OUR-SERVICES2.png" alt="Service 2" className="h-14 w-14 shrink-0 object-contain md:ml-12 md:h-16 md:w-16" />
            <div className="min-w-0 flex-1 md:-ml-1 md:-mt-6">
              <h3 className="font-fredoka text-base font-bold text-[#2B2118] lg:text-lg">Pet Boarding &amp; Daycare</h3>
              <p className="mt-1 font-fredoka text-sm text-[#4A4A4A] lg:text-xl">
                Safe and comfortable care for pets during the day or overnight.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src="/home/OUR-SERVICES3.png" alt="Service 3" className="h-14 w-14 shrink-0 object-contain md:ml-12 md:mt-4 md:h-16 md:w-16" />
            <div className="min-w-0 flex-1 md:-ml-1">
              <h3 className="font-fredoka text-base font-bold text-[#2B2118] lg:text-lg">Veterinary Care</h3>
              <p className="mt-1 font-fredoka text-sm text-[#4A4A4A] lg:text-xl">
                Veterinary care for checkups, vaccinations, and treatment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src="/home/OUR-SERVICES4.png" alt="Service 4" className="h-14 w-14 shrink-0 object-contain md:-ml-4 md:h-16 md:w-16" />
            <div className="min-w-0 flex-1 md:-ml-1">
              <h3 className="font-fredoka text-base font-bold text-[#2B2118] lg:text-lg">Pet Sitting</h3>
              <p className="mt-1 font-fredoka text-sm text-[#4A4A4A] lg:text-xl">
                Reliable care for your pets while you're away, including feeding, playtime, and companionship.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-2 flex w-full flex-wrap items-center justify-center gap-3 md:mt-6 md:flex-nowrap md:gap-4 lg:gap-8">
            <button className="whitespace-nowrap rounded-2xl border border-[#C77D4A] px-5 py-3 text-sm font-fredoka font-medium leading-none text-[#2B2118] transition hover:bg-[#C77D4A]/10 md:px-5 md:py-3.5 lg:px-8 lg:py-4 lg:text-base xl:px-14 xl:py-6 xl:text-lg">
              Book Vet Appointment
            </button>
            <button className="whitespace-nowrap rounded-2xl bg-[#C77D4A] px-5 py-3 text-sm font-fredoka font-medium leading-none text-white transition hover:brightness-95 md:px-5 md:py-3.5 lg:px-8 lg:py-4 lg:text-base xl:px-14 xl:py-6 xl:text-lg">
              Schedule Visit
            </button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-6 text-left md:mt-32 md:px-8 lg:mt-[280px]">
        <h2 className="font-fredoka text-[28px] font-bold text-[#2B2118] md:text-[32px] lg:text-[40px]">
          Happy Pet Parents of PawPals
        </h2>
      </div>

      {TESTIMONIALS.map((t, i) => (
        <div
          key={t.name}
          className={`relative mx-auto flex max-w-6xl flex-col-reverse items-center px-6 md:block md:px-10 ${
            i === 0 ? "mt-10 md:mt-[55px]" : "mt-10 md:mt-[120px]"
          }`}
        >
          <div className="relative w-full rounded-3xl bg-white p-6 pt-16 shadow-[0_20px_50px_-20px_rgba(43,33,24,0.25)] md:p-8 md:pl-[240px] lg:p-10 lg:pl-[440px]">
            <Stars />
            <p className="font-fredoka text-base leading-relaxed text-[#2B2118] md:text-xl lg:max-w-[600px] lg:text-2xl">
              "{t.text}"
            </p>
            <p className="mt-4 font-fredoka text-xl font-semibold text-[#2B2118] md:mt-6 md:text-2xl lg:text-3xl">
              {t.name}
            </p>
          </div>

          <TrimmedImg
            src={t.img}
            alt="Happy pet parent"
            className="relative z-10 -mb-9 h-auto w-[88%] object-contain md:absolute md:left-16 md:top-1/2 md:mb-0 md:w-[280px] md:-translate-y-1/2 lg:left-12 lg:w-[420px] xl:w-[400px]"
          />
        </div>
      ))}

      <div className="relative mx-auto mt-20 max-w-6xl px-6 text-left md:mt-32 md:px-8 lg:mt-[200px]">
        <h2 className="font-fredoka text-[28px] font-bold text-[#2B2118] md:text-[32px] lg:text-[40px]">
          Our Pet Care Gallery
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 overflow-hidden md:mt-8 md:gap-4 sm:grid-cols-4">
          <div className="flex flex-col gap-3 md:gap-4">
            <img src="https://images.unsplash.com/photo-1516310789627-2ff305829fbb?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Cat portrait" className={`${IMG} h-[210px] sm:h-[420px]`} />
            <img src="https://images.unsplash.com/photo-1636105146585-65a51b472c7e?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Gray cat sleeping" className={`${IMG} h-[158px] sm:h-[316px]`} />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <img src="https://images.unsplash.com/photo-1728230293543-3d6097917f75?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Two cats playing in grass" className={`${IMG} h-[115px] sm:h-[230px]`} />
            <img src="https://images.unsplash.com/photo-1683051149142-9ca23718cb6c?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Dog with ball on grass" className={`${IMG} h-[115px] sm:h-[230px]`} />
            <img src="https://images.unsplash.com/photo-1711127169047-12f68297c88e?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Black cat" className={`${IMG} h-[130px] sm:h-[260px]`} />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <img src="https://images.unsplash.com/photo-1725409796872-8b41e8eca929?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Kitten vet checkup" className={`${IMG} h-[210px] sm:h-[420px]`} />
            <img src="https://images.unsplash.com/photo-1648854947054-432af7faca56?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Dog bath time" className={`${IMG} h-[158px] sm:h-[316px]`} />
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <img src="https://images.unsplash.com/photo-1570402383251-9f8a173630da?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Puppy beside pet bowl" className={`${IMG} h-[110px] sm:h-[220px]`} />
            <img src="https://images.unsplash.com/photo-1625794084867-8ddd239946b1?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Golden retriever puppy" className={`${IMG} h-[120px] sm:h-[240px]`} />
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?fm=jpg&q=80&w=800&auto=format&fit=crop" alt="Tabby cat closeup" className={`${IMG} h-[130px] sm:h-[260px]`} />
          </div>
        </div>

        <div className="mt-8 flex justify-start md:mt-10">
          <button className="rounded-2xl bg-[#C77D4A] px-8 py-3 font-fredoka font-medium text-white transition hover:brightness-95 md:px-10 md:py-4">
            View Gallery
          </button>
        </div>

        <div className="relative mx-auto mt-24 max-w-6xl text-left md:mt-56">
          <h2 className="font-fredoka text-[30px] font-bold text-[#2B2118] md:text-[40px] xl:text-[44px]">
            Pet Care Stories
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <div
                key={p.title}
                className="w-full overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <img src={p.img} alt={p.title} width={800} height={533} className="block h-56 w-full object-cover md:h-64" />
                <div className="p-5">
                  <h3 className="font-fredoka text-xl font-bold text-[#2B2118]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#4A4A4A]">{p.text}</p>
                  <p className="mt-3 text-xs text-[#8A8A8A]">24 May 2026</p>
                  <Link href="/blog" className="mt-2 inline-block font-fredoka font-semibold text-[#2B2118] transition-colors hover:text-button">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-start md:mt-10">
            <Link href="/blog" className="inline-block rounded-2xl bg-[#C77D4A] px-8 py-3 font-fredoka font-medium text-white transition hover:brightness-95 md:px-10 md:py-4">
              Explore Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}