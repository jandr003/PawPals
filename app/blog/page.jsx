import fs from "fs";
import path from "path";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

function getPosts() {
  const candidates = [
    path.join(process.cwd(), "app", "blog"),
    path.join(process.cwd(), "src", "app", "blog"),
  ];
  const blogDir = candidates.find((p) => fs.existsSync(p));
  if (!blogDir) return [];

  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() &&
        fs.readdirSync(path.join(blogDir, d.name)).some((f) => f.startsWith("page."))
    )
    .map((d) => ({
      slug: d.name,
      title: d.name
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
    }));
}

export default function BlogPage() {
  const posts = getPosts();

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
      <BlogCard posts={posts} />
      <Footer />
    </main>
  );
}