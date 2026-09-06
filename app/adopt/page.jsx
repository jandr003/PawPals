import Navbar from "../components/Navbar";

export default function AdoptPage() {
	return (
		<main>
			<Navbar />
			<section className="mx-auto max-w-7xl px-6 py-16 font-fredoka text-text">
				<h1 className="text-4xl font-semibold">Adopt a Pet</h1>
				<p className="mt-3 text-lg">Find a loving companion waiting for a home.</p>
			</section>
		</main>
	);
}
