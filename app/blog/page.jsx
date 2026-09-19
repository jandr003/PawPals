import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

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
      <BlogCard />
      <Footer />
    </main>
  );
}