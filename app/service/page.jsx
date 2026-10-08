import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import { services } from "../data/services";

const FIELD =
  "flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none";
const ROW = "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3";
const LABEL = "font-medium sm:w-48 sm:flex-shrink-0";

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

            <form className="mt-6 rounded-2xl border-2 border-dashed border-[#C97F4B] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(43,33,24,0.2)] sm:p-8">
              <div className="space-y-5 text-lg">
                <label className={ROW}>
                  <span className={LABEL}>Owner&apos;s Name:</span>
                  <input type="text" name="ownerName" className={FIELD} />
                </label>

                <label className={ROW}>
                  <span className={LABEL}>Email:</span>
                  <input type="email" name="email" className={FIELD} />
                </label>

                <label className={ROW}>
                  <span className={LABEL}>Contact Number:</span>
                  <input type="tel" name="contactNumber" className={FIELD} />
                </label>

                <label className={ROW}>
                  <span className={LABEL}>Service:</span>
                  <select name="service" defaultValue="" required className={FIELD}>
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {services.map((s) => (
                      <option key={s.id}>
                        {s.shortName} (&#8369;{s.price})
                      </option>
                    ))}
                  </select>
                </label>

                <label className={ROW}>
                  <span className={LABEL}>Date &amp; Time:</span>
                  <input type="text" name="dateTime" className={FIELD} />
                </label>

                <label className={ROW}>
                  <span className={LABEL}>Pet&apos;s Name &amp; Breed:</span>
                  <input type="text" name="petNameBreed" className={FIELD} />
                </label>

                <label className="flex flex-col gap-1">
                  <span className="font-medium">Additional Notes</span>
                  <textarea
                    name="additionalNotes"
                    rows={4}
                    className="mt-1 rounded-lg border border-[#3B2414]/40 bg-white p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-8 inline-block rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}