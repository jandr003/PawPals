import Navbar from "../components/Navbar";

export default function BlogPage() {
	return (
		<main>
			<Navbar />
			<section className="mx-auto max-w-7xl px-6 py-16 font-fredoka text-text">
				<h1 className="text-4xl font-semibold">Pet Care Blog</h1>
				<p className="mt-3 text-lg">Helpful tips for happier, healthier pets.</p>
			</section>
		</main>
	);
}
