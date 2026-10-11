import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServiceCard />

      <section
        id="booking"
        aria-labelledby="booking-heading"
        className="mt-0 mb-[100px] w-full scroll-mt-24 px-6 pt-0 pb-0 font-fredoka text-[#3B2414] sm:px-8 md:mb-[130px]"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl md:mx-0 md:ml-[8%] xl:ml-[20%]">
            <h2 id="booking-heading" className="text-4xl font-bold md:text-5xl">
              Book an Appointment
            </h2>

            <h3 className="mt-10 text-xl font-bold md:text-2xl">How PawPals Works</h3>

            <ol className="mt-4 space-y-2 text-lg leading-snug">
              <li>Step 1: Choose a PawPals service</li>
              <li>Step 2: Select your preferred date and time</li>
              <li>Step 3: Fill out your pet and owner details</li>
              <li>Step 4: Confirm your booking and receive a confirmation message</li>
            </ol>

            <h3 className="mt-[50px] text-xl font-bold md:mt-[55px] md:text-2xl">Booking Form</h3>

            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}