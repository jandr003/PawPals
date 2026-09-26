import Image from "next/image";
import Link from "next/link";

export default function PetCard({ pet }) {
  const { slug, name, breed, age, gender, status, image, description } = pet;

  return (
    <Link
      href={`/adopt/${slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full bg-[#F5E6D3]">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-fredoka text-sm text-[#3B2414]/40">
            No photo yet
          </div>
        )}

        {status && (
          <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#C97F4B] to-[#B8703D] px-3 py-1.5 font-fredoka text-xs font-semibold text-white shadow-md ring-1 ring-white/20">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            {status}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1.5 p-5">
        <h3 className="font-fredoka text-lg font-semibold text-[#3B2414]">
          {name}
        </h3>
        <p className="font-fredoka text-xs font-medium uppercase tracking-wide text-[#C97F4B]">
          {breed} {age ? `· ${age}` : ""} {gender ? `· ${gender}` : ""}
        </p>
        {description && (
          <p className="mt-1 line-clamp-2 font-fredoka text-sm leading-relaxed text-[#3B2414]/80">
            {description}
          </p>
        )}

        <span className="mt-3 inline-flex items-center gap-1 font-fredoka text-sm font-medium text-[#C97F4B] transition-transform group-hover:translate-x-0.5">
          Meet {name} →
        </span>
      </div>
    </Link>
  );
}