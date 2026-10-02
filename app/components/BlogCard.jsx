"use client";

import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

export default function BlogCard() {
  return (
    <>
      <section className="relative z-[-1] -mt-[60px] w-full overflow-hidden bg-transparent md:-mt-[188px]">
        <img
          src="/blog/BLOG-PAWPALS.png"
          alt=""
          className="block h-auto w-full"
        />

        <div className="absolute inset-0 flex items-start pt-[60px] md:pt-[188px]">
          <div className="w-full px-6 pt-6 font-fredoka text-[#3B2414] sm:px-8 md:pl-[14.4%] md:pr-0 md:pt-[4vw]">
            <h1 className="text-3xl font-extrabold sm:text-5xl md:text-6xl">
              Blog
            </h1>
            <p className="mt-2 text-sm font-medium sm:text-lg md:mt-3 md:text-xl">
              Tips and Stories for Happy, Healthy Pets
            </p>
          </div>
        </div>
      </section>

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
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-56 w-full object-cover md:h-60"
              />

              <div className="flex flex-1 flex-col p-5 font-fredoka text-[#3B2414]">
                <h2 className="text-xl font-medium leading-snug">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed">{post.excerpt}</p>
                <p className="mt-4 text-xs">{post.date}</p>
                <span className="mt-3 text-sm font-medium group-hover:underline">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}