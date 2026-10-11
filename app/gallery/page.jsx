import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      <section
        className="w-full px-3 pb-20 pt-12 font-fredoka text-[#3B2414] sm:px-4 md:px-6 md:pt-8"
        style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
      >
        <header className="mb-6 md:mb-8">
          <h1 className="inline-block border-b-4 border-[#3B2414] pb-2 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
            Our Pet Care Gallery
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-snug md:text-lg">
            A peek at the happy, healthy pets who visit PawPals. Tap any photo to
            see it bigger.
          </p>
        </header>

        <GalleryGrid />
      </section>

      <Footer />
    </main>
  );
}