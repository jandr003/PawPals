"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ href, label }) {
  const pathname = usePathname();
  const fromBlog = pathname?.startsWith("/blog");

  const backHref = href ?? (fromBlog ? "/blog" : "/service");
  const backLabel = label ?? (fromBlog ? "Back to Blog" : "Back to Services");

  return (
    <Link
      href={backHref}
      className="group relative z-40 mt-8 mb-0 flex w-fit items-center gap-2 text-base font-semibold text-[#C97F4B] transition-colors duration-300 hover:text-[#B86F3E] sm:mt-0 sm:mb-6 sm:text-sm"
    >
      <ArrowLeft
        className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 sm:h-4 sm:w-4"
        strokeWidth={2.5}
      />
      {backLabel}
    </Link>
  );
}