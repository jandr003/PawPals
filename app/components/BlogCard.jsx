"use client";

import Link from "next/link";
import { blogPosts } from "../data/blogPosts";

export default function BlogCard() {
  return (
    <>
      <section className="blog-hero relative z-10 w-full overflow-x-clip -mt-16 md:z-[-1] md:-mt-[188px] md:overflow-hidden md:bg-transparent">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-24 z-0 h-24 bg-white md:hidden"
        />

        <img
          src="/blog/BLOG-PAWPALS.png"
          alt=""
          className="pointer-events-none relative z-0 block h-auto max-w-none !mt-0 -translate-y-20 md:hidden"
          style={{ width: "200%", marginLeft: "-100%" }}
        />

        <img
          src="/blog/BLOG-PAWPALS.png"
          alt=""
          className="pointer-events-none hidden h-auto w-full md:block md:max-lg:!m-0 md:max-lg:!w-full md:max-xl:h-[355px] md:max-xl:object-cover md:max-xl:object-[right_bottom]"
        />

        <div className="blog-hero-copy-wrap relative z-10 -top-32 md:hidden">
          <div className="blog-hero-copy w-full pl-3 pr-5 pb-0 pt-6 text-left font-fredoka text-[#3B2414]">
            <h1 className="text-[clamp(2.2rem,10.5vw,3.75rem)] font-extrabold leading-tight">
              Blogs
            </h1>
            <p className="mt-2 max-w-[22ch] text-[clamp(1.1rem,5.2vw,1.8rem)] font-medium leading-snug sm:max-w-[30ch]">
              Helpful Pet Care Tips, Stories, and Advice
            </p>
          </div>
        </div>

        <header className="absolute inset-x-0 top-0 hidden font-fredoka text-[#3B2414] md:block">
          <div className="md:max-lg:pt-[calc(clamp(126px,14vw,140px)_+_0.75rem)] lg:max-xl:pt-[calc(clamp(145px,15vw,188px)_+_clamp(1.25rem,2.4vw,2rem))] xl:pt-[calc(188px_+_4vw)] md:max-xl:pl-[clamp(4.75rem,8.5vw,6.5rem)] xl:pl-[14.4%]">
            <h1 className="text-6xl font-extrabold md:max-xl:text-[length:clamp(2.25rem,4vw,2.75rem)] md:max-xl:leading-[1.05]">
              <span className="xl:hidden">Blogs</span>
              <span className="hidden xl:inline">Blog</span>
            </h1>
            <p className="mt-3 text-xl font-medium md:max-xl:text-[length:clamp(0.9rem,1.55vw,1.05rem)] md:max-xl:leading-[1.25] md:max-xl:max-w-[34%]">
              <span className="xl:hidden">Helpful Pet Care Tips, Stories, and Advice</span>
              <span className="hidden xl:inline">Tips and Stories for Happy, Healthy Pets</span>
            </p>
          </div>
        </header>
      </section>

      <section className="relative z-10 -mt-[83px] px-6 pb-[45px] pt-0 sm:px-8 md:mt-0 md:pb-16 md:pt-[45px] xl:pt-[70px]">
        <p className="mx-auto max-w-4xl text-center font-fredoka text-lg font-medium leading-snug text-[#3B2414] md:text-2xl">
          Welcome to the PawPals Blog! Explore useful articles, practical pet
          care tips, training ideas, and everyday advice to help you take better
          care of your furry companions. Discover new ways to support their
          health, happiness, and well-being.
        </p>
      </section>

      <section className="relative z-10 px-6 pb-[100px] pt-0 sm:px-8 md:pb-16 md:pt-0">
        <div className="mx-auto grid max-w-6xl gap-[15px] sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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