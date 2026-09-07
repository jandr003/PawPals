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
    <nav className="w-full pl-4 pr-6 md:pl-0 md:pr-10 -mt-28 pb-3 font-fredoka max-w-7xl mx-auto relative">
      <div className="flex items-center justify-between">
  
        <Link href="/" className="flex items-center gap-2 shrink-0 md:-ml-16 md:translate-y-4" onClick={() => setOpen(false)}>
          <Image
            src="/PAWPALS-LOGO.png"
            alt="PawPals Logo"
            width={340}
            height={100}
            priority
            className="w-40 sm:w-52 md:w-72 h-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-lg text-text font-medium md:translate-y-4">
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
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 shrink-0"
        >
          <span className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-text transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
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