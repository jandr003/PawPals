import Link from "next/link";

const SOCIALS = [
  {
    name: "Instagram",
    handle: "@Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 2 .25 2.7.53a5.4 5.4 0 0 1 2 1.3 5.4 5.4 0 0 1 1.3 2c.28.7.47 1.5.53 2.7.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 2-.53 2.7a5.4 5.4 0 0 1-1.3 2 5.4 5.4 0 0 1-2 1.3c-.7.28-1.5.47-2.7.53-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-2-.25-2.7-.53a5.4 5.4 0 0 1-2-1.3 5.4 5.4 0 0 1-1.3-2c-.28-.7-.47-1.5-.53-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-2 .53-2.7a5.4 5.4 0 0 1 1.3-2 5.4 5.4 0 0 1 2-1.3c.7-.28 1.5-.47 2.7-.53C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.76.07-1 .05-1.5.2-1.85.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.3.86-.34 1.85C3.1 8.48 3.1 8.85 3.1 12s0 3.52.07 4.76c.05 1 .2 1.5.34 1.85.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.86.3 1.85.34 1.24.06 1.6.07 4.76.07s3.52 0 4.76-.07c1-.05 1.5-.2 1.85-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.86.34-1.85.06-1.24.07-1.6.07-4.76s0-3.52-.07-4.76c-.05-1-.2-1.5-.34-1.85a3.6 3.6 0 0 0-.75-1.15 3.6 3.6 0 0 0-1.15-.75c-.35-.14-.86-.3-1.85-.34C15.52 4 15.15 4 12 4zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm5.7-1.95a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "@Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M13.5 21v-8.1h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.28-.04-1.23-.13-2.34-.13-2.32 0-3.9 1.42-3.9 4v2.22H8v3.1h2.46V21h3.04z" />
      </svg>
    ),
  },
  {
    name: "X",
    handle: "@X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.9 2H22l-7.2 8.3L23.3 22h-6.6l-5.2-6.8L5.5 22H2.3l7.7-8.9L1.4 2H8.2l4.7 6.2L18.9 2zm-1.2 18h1.8L6.3 3.9H4.4L17.7 20z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    handle: "@TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M16.6 2c.3 2 1.6 3.6 3.6 3.9v2.7c-1.3 0-2.5-.4-3.6-1.1v6.9c0 3.3-2.7 6-6 6a6 6 0 0 1-1.9-11.7v2.9a3.2 3.2 0 1 0 2.2 3v-12.6h2.7z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.4a2.8 2.8 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.8 2.8 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.4a2.8 2.8 0 0 0 2-2c.5-1.8.5-5.6.5-5.6s0-3.8-.5-5.6zM9.8 15.5V8.5l6.4 3.5-6.4 3.5z" />
      </svg>
    ),
  },
];

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/adopt", label: "Adopt" },
  { href: "/service", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/legal", label: "Legal" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 sm:mt-60 [--raise:6.75rem]">
      <div className="sm:hidden">
        <svg viewBox="0 0 400 44" preserveAspectRatio="none" className="block h-10 w-full" aria-hidden="true">
          <path d="M0 44 V20 C60 -2 130 -4 200 14 S340 34 400 8 V44 Z" fill="#E9A85B" />
        </svg>

        <div className="bg-[#E9A85B] px-6 pb-10 pt-2">
          <h3 className="font-fredoka text-2xl font-bold text-[#3B2414]">Stay in the Loop</h3>
          <p className="mt-3 max-w-[300px] font-fredoka text-base leading-relaxed text-[#4A3220]">
            Get the latest pet care tips, treats, and PawPals updates in your inbox.
          </p>
          <button
            type="button"
            className="mt-4 rounded-lg bg-[#C97F4B] px-6 py-3 font-fredoka text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
          >
            Subscribe Now
          </button>
        </div>

        <div className="bg-[#401C05] px-6 pb-8 pt-8 text-white">
          <Link href="/" className="inline-block" aria-label="PawPals home">
            <img src="/PAWPALS-LOGO.png" alt="PawPals Logo" className="h-auto w-[130px] brightness-0 invert" />
          </Link>
          <p className="mt-3 max-w-[240px] font-fredoka text-xs leading-snug text-white/80">
            Where Pets Are Treated Like Family, and Every Visit Feels Safe, Gentle, and Full of Care They Truly Deserve.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
            <nav aria-label="Quick links">
              <h4 className="font-fredoka text-base font-bold">Quick links</h4>
              <ul className="mt-3 space-y-3 font-fredoka text-xs text-white/80">
                {QUICK_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="transition-colors hover:text-white">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="font-fredoka text-base font-bold">Get in touch</h4>
              <ul className="mt-3 space-y-4 font-fredoka text-xs text-white/80">
                <li>Address: San Miguel</li>
                <li>
                  Phone: <a href="tel:+639923421134" className="hover:text-white">(+63) 992 342 1134</a>
                </li>
                <li className="break-words">
                  Email: <a href="mailto:johnandrew@gmail.com" className="hover:text-white">johnandrew@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-fredoka text-base font-bold">Opening Hours</h4>
              <ul className="mt-3 space-y-4 font-fredoka text-xs text-white/80">
                <li>Monday - Friday: 8:00AM - 7:30PM</li>
                <li>Saturday - Sunday 7:00AM - 12:00NN</li>
              </ul>
            </div>

            <div>
              <h4 className="font-fredoka text-base font-bold">Follow us</h4>
              <ul className="mt-3 space-y-4 font-fredoka text-xs text-white/80">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit PawPals on ${s.name}`}
                      className="flex items-center gap-3 transition-colors hover:text-white"
                    >
                      <span className="[&>svg]:h-5 [&>svg]:w-5">{s.icon}</span>
                      {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 font-fredoka text-xs text-white/80">
            <p>© {year} PawPals. All Rights Reserved.</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-white">{label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden bg-cover bg-top bg-no-repeat sm:block lg:[background-size:100%_100%]"
        style={{
          top: "calc(var(--raise) * -1)",
          backgroundImage: "url('/home/FOOTER-BG-1.png')",
        }}
      />

      <div className="relative z-10 hidden px-6 pb-10 pt-16 text-white sm:block sm:px-8">
        <div
          className="absolute inset-x-0 px-6 sm:px-8"
          style={{ top: "calc(10rem - var(--raise))" }}
        >
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="relative -top-6 -left-2 sm:-left-8">
              <h3 className="font-fredoka text-3xl font-bold text-[#3B2414] sm:text-4xl">
                Stay in the Loop
              </h3>
              <p className="mt-4 max-w-md font-fredoka text-base leading-relaxed text-[#4A3220] sm:text-lg">
                Get the latest pet care tips, treats, and PawPals updates in
                your inbox.
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg bg-[#C97F4B] px-10 py-4 font-fredoka text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414] sm:text-lg"
            >
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="mx-auto mt-[11.25rem] grid max-w-6xl grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block" aria-label="PawPals home">
              <img
                src="/PAWPALS-LOGO.png"
                alt="PawPals Logo"
                className="h-auto w-60 brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-[240px] font-fredoka text-sm leading-relaxed text-white/70">
              Where pets are treated like family — every visit is safe, gentle,
              and full of the care they truly deserve.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h4 className="font-fredoka text-lg font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2 font-fredoka text-sm text-white/70">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-white focus:outline-none focus:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-fredoka text-lg font-bold">Get in Touch</h4>
            <ul className="mt-4 space-y-2 font-fredoka text-sm text-white/70">
              <li>
                <span className="text-white/50">Address:</span> San Miguel
              </li>
              <li>
                <a href="tel:+639923421134" className="hover:text-white">(+63) 992 342 1134</a>
              </li>
              <li>
                <a href="mailto:johnandrew@gmail.com" className="hover:text-white">johnandrew@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-fredoka text-lg font-bold">Opening Hours</h4>
            <ul className="mt-4 space-y-2 font-fredoka text-sm text-white/70">
              <li>Mon – Fri: 8:00 AM – 7:30 PM</li>
              <li>Sat – Sun: 7:00 AM – 12:00 NN</li>
            </ul>
          </div>

          <div>
            <h4 className="font-fredoka text-lg font-bold">Follow Us</h4>
            <ul className="mt-4 space-y-3 font-fredoka text-sm text-white/70">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit PawPals on ${s.name}`} className="flex items-center gap-2 transition-colors hover:text-white focus:outline-none focus:text-white">
                    {s.icon}
                    {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 font-fredoka text-sm text-white/60 sm:flex-row">
          <p>© {year} PawPals. All Rights Reserved.</p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}