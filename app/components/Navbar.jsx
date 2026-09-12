"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
      <nav className="relative isolate overflow-visible mx-auto -mt-28 md:mt-0 w-full max-w-7xl pb-3 pt-2 pl-4 pr-6 font-fredoka sm:pl-6 sm:pr-8 md:pl-6 md:pr-6 lg:pl-6 lg:pr-10 lg:pt-0 xl:pl-0 xl:-mt-28 lg:-mt-28">
            <div className="flex items-center justify-between overflow-visible">
        
              <Link
                href="/"
                className="flex shrink-0 min-w-0 overflow-visible translate-y-1 items-center gap-2 md:translate-y-3 lg:ml-2 lg:translate-y-8 lg:translate-x-2 xl:-ml-16 xl:translate-y-9"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/PAWPALS-LOGO.png"
                  alt="PawPals Logo"
                  width={340}
                  height={100}
                  priority
                  className="h-auto w-48 sm:w-60 md:w-48 lg:w-64 xl:w-72 shrink-0"
                />
              </Link>

        <ul className="hidden items-center gap-10 text-lg font-medium text-text lg:flex lg:translate-y-6 lg:-translate-x-6 xl:translate-x-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-button transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 -translate-y-2 flex-col items-center justify-center gap-1.5 md:translate-y-0 lg:hidden"
        >
          <span className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-4 py-4 border-t border-gray-100 text-lg text-text font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)} className="block hover:text-button transition-colors">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}