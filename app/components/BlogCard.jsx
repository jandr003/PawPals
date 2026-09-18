"use client";

import Link from "next/link";

export default function BlogCard({ posts = [] }) {
  return (
    <>
      <section className="relative z-10 px-6 py-12 sm:px-8 md:py-16">
        <p className="mx-auto max-w-4xl text-center font-fredoka text-lg font-medium leading-snug text-[#3B2414] md:text-2xl">
          Welcome to the PawPals Blog! Explore useful articles, practical pet
          care tips, training ideas, and everyday advice to help you take better
          care of your furry companions. Discover new ways to support their
          health, happiness, and well-being.
        </p>
      </section>

      <section className="relative z-10 px-6 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-[#E8A857]/40 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="font-fredoka text-xl font-semibold leading-snug text-[#3B2414]">
                {post.title}
              </h2>
              <span className="mt-6 font-fredoka font-medium text-[#E8A857] group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}