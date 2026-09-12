import Navbar from "../components/Navbar";

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="w-full">
        <img
          src="/blog/BLOG-PAWPALS.png"
          alt="Pet Care Blog"
          className="block w-full object-cover"
        />
      </section>
    </main>
  );
}