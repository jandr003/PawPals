import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { services } from "../../data/services";

const FIELDS = [
  { label: "Owner's Name:", name: "ownerName", type: "text" },
  { label: "Email:", name: "email", type: "email" },
  { label: "Contact Number:", name: "contactNumber", type: "tel" },
];

const FIELDS_AFTER = [
  { label: "Date & Time:", name: "dateTime", type: "text" },
  { label: "Pet's Name & Breed:", name: "petNameBreed", type: "text" },
];

const ROW = "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3";
const LABEL = "font-medium sm:w-48 sm:flex-shrink-0";
const LINE =
  "flex-1 border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none";

function Field({ label, name, type }) {
  return (
    <label className={ROW}>
      <span className={LABEL}>{label}</span>
      <input type={type} name={name} className={LINE} />
    </label>
  );
}

export default function BookAppointmentPage() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-4 font-fredoka text-[#3B2414] sm:px-8">
        <h1 className="text-4xl font-bold md:text-5xl">Book an Appointment</h1>

        <h2 className="mt-10 text-xl font-bold md:text-2xl">How PawPals Works</h2>
        <ol className="mt-4 space-y-2 text-lg leading-snug">
          <li>Step 1: Choose a PawPals service</li>
          <li>Step 2: Select your preferred date and time</li>
          <li>Step 3: Fill out your pet and owner details</li>
          <li>Step 4: Confirm your booking and receive a confirmation message</li>
        </ol>

        <h2 className="mt-12 text-xl font-bold md:text-2xl">Booking Form</h2>

        <form className="mt-6 rounded-2xl border-2 border-dashed border-[#C97F4B] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(43,33,24,0.2)] sm:p-8">
          <div className="space-y-5 text-lg">
            {FIELDS.map((f) => (
              <Field key={f.name} {...f} />
            ))}

            <label className={ROW}>
              <span className={LABEL}>Service:</span>
              <select name="service" defaultValue="" required className={LINE}>
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

            {FIELDS_AFTER.map((f) => (
              <Field key={f.name} {...f} />
            ))}

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
      </section>

      <Footer />
    </main>
  );
}