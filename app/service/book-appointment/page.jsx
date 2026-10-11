import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingForm from "../../components/BookingForm";

export default function BookAppointmentPage() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-12 font-fredoka md:pt-4 text-[#3B2414] sm:px-8">
        <h1 className="text-4xl font-bold md:text-5xl">Book an Appointment</h1>

        <h2 className="mt-10 text-xl font-bold md:text-2xl">How PawPals Works</h2>
        <ol className="mt-4 space-y-2 text-lg leading-snug">
          <li>Step 1: Choose a PawPals service</li>
          <li>Step 2: Select your preferred date and time</li>
          <li>Step 3: Fill out your pet and owner details</li>
          <li>Step 4: Confirm your booking and receive a confirmation message</li>
        </ol>

        <h2 className="mt-12 text-xl font-bold md:text-2xl">Booking Form</h2>

        <BookingForm />
      </section>

      <Footer />
    </main>
  );
}