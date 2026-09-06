import Navbar from "../components/Navbar";

export default function ContactPage() {
	return (
		<main>
			<Navbar />
			<section className="mx-auto max-w-7xl px-6 py-16 font-fredoka text-text">
				<h1 className="text-4xl font-semibold">Contact Us</h1>
				<p className="mt-3 text-lg">We&apos;d love to hear from you and help with your pet journey.</p>
			</section>
		</main>
	);
}
