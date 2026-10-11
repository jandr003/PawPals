"use client";

import { useEffect, useState } from "react";
import { services } from "../data/services";

const ROW = "flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3";
const LABEL = "font-medium sm:w-48 sm:flex-shrink-0";

const FIELD_OK =
  "w-full border-b border-dashed border-[#3B2414]/50 bg-transparent py-1 focus:border-solid focus:outline-none";
const FIELD_BAD =
  "w-full border-b border-solid border-[#B3261E] bg-transparent py-1 focus:outline-none";

const PHONE_LENGTH = 11;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = {
  ownerName: "",
  email: "",
  contactNumber: "",
  service: "",
  dateTime: "",
  petNameBreed: "",
  additionalNotes: "",
};

const HOURS_HINT = "Open Mon–Fri 8:00 AM–7:30 PM, Sat–Sun 7:00 AM–12:00 NN";

function pad(n) {
  return String(n).padStart(2, "0");
}

function nowForInput() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

function checkSchedule(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "Please pick a valid date and time.";
  if (d.getTime() < Date.now())
    return "Please choose a date and time that has not passed yet.";

  const weekend = d.getDay() === 0 || d.getDay() === 6;
  const mins = d.getHours() * 60 + d.getMinutes();
  const open = weekend ? 7 * 60 : 8 * 60;
  const close = weekend ? 12 * 60 : 19 * 60 + 30;

  if (mins < open || mins > close)
    return "Please choose a time within our business hours.";
  return "";
}

function validate(v) {
  const e = {};

  if (!v.ownerName.trim()) e.ownerName = "Please enter your name.";

  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_PATTERN.test(v.email.trim()))
    e.email = "Please enter a valid email address.";

  if (!v.contactNumber) e.contactNumber = "Please enter your contact number.";
  else if (v.contactNumber.length !== PHONE_LENGTH || !v.contactNumber.startsWith("09"))
    e.contactNumber = `Enter a valid ${PHONE_LENGTH}-digit mobile number starting with 09.`;

  if (!v.service) e.service = "Please choose a service.";

  if (!v.dateTime) e.dateTime = "Please choose your preferred date and time.";
  else {
    const problem = checkSchedule(v.dateTime);
    if (problem) e.dateTime = problem;
  }

  if (!v.petNameBreed.trim())
    e.petNameBreed = "Please enter your pet's name and breed.";

  if (!v.additionalNotes.trim())
    e.additionalNotes = "Please add a note (write \"None\" if you have nothing to add).";

  return e;
}

function Row({ label, error, hint, children }) {
  return (
    <label className={ROW}>
      <span className={LABEL}>{label}</span>
      <div className="min-w-0 flex-1">
        {children}
        {error ? (
          <p className="mt-1 text-sm text-[#B3261E]" role="alert">
            {error}
          </p>
        ) : (
          hint && <p className="mt-1 text-sm text-[#3B2414]/60">{hint}</p>
        )}
      </div>
    </label>
  );
}

export default function BookingForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [tried, setTried] = useState(false);
  const [done, setDone] = useState(false);
  const [minDateTime, setMinDateTime] = useState("");

  useEffect(() => {
    setMinDateTime(nowForInput());
  }, []);

  const selected = services.find((s) => s.id === values.service);
  const buttonText = selected ? `Book ${selected.shortName}` : "Book Appointment";

  const setField = (name, value) => {
    setDone(false);
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const onText = (e) => setField(e.target.name, e.target.value);

  const onNumber = (e) =>
    setField("contactNumber", e.target.value.replace(/\D/g, "").slice(0, PHONE_LENGTH));

  const onNumberKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length === 1 && !/\d/.test(e.key)) e.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTried(true);

    if (Object.keys(found).length > 0) {
      setDone(false);
      return;
    }

    // TODO: send `values` to your backend / email service here.
    setDone(true);
    setTried(false);
    setValues(EMPTY);
  };

  const fieldClass = (name) => (errors[name] ? FIELD_BAD : FIELD_OK);
  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="mt-6 rounded-2xl border-2 border-dashed border-[#C97F4B] bg-white p-6 shadow-[0_16px_40px_-24px_rgba(43,33,24,0.2)] sm:p-8"
    >
      {tried && hasErrors && (
        <div
          role="alert"
          className="mb-6 rounded-lg border border-[#B3261E] bg-[#B3261E]/10 px-4 py-3 text-base font-medium text-[#B3261E]"
        >
          Please complete all fields before booking your appointment.
        </div>
      )}

      <div className="space-y-5 text-lg">
        <Row label="Owner's Name:" error={errors.ownerName}>
          <input
            type="text"
            name="ownerName"
            value={values.ownerName}
            onChange={onText}
            autoComplete="name"
            aria-invalid={!!errors.ownerName}
            className={fieldClass("ownerName")}
          />
        </Row>

        <Row label="Email:" error={errors.email}>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onText}
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={fieldClass("email")}
          />
        </Row>

        <Row
          label="Contact Number:"
          error={errors.contactNumber}
          hint="Numbers only, e.g. 09123456789"
        >
          <input
            type="tel"
            name="contactNumber"
            value={values.contactNumber}
            onChange={onNumber}
            onKeyDown={onNumberKeyDown}
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="tel"
            placeholder="09XXXXXXXXX"
            maxLength={PHONE_LENGTH}
            aria-invalid={!!errors.contactNumber}
            className={fieldClass("contactNumber")}
          />
        </Row>

        <Row label="Service:" error={errors.service}>
          <select
            name="service"
            value={values.service}
            onChange={onText}
            aria-invalid={!!errors.service}
            className={fieldClass("service")}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.shortName} (&#8369;{s.price})
              </option>
            ))}
          </select>
        </Row>

        <Row label="Date & Time:" error={errors.dateTime} hint={HOURS_HINT}>
          <input
            type="datetime-local"
            name="dateTime"
            value={values.dateTime}
            onChange={onText}
            min={minDateTime || undefined}
            step={900}
            aria-invalid={!!errors.dateTime}
            className={fieldClass("dateTime")}
          />
        </Row>

        <Row label="Pet's Name & Breed:" error={errors.petNameBreed}>
          <input
            type="text"
            name="petNameBreed"
            value={values.petNameBreed}
            onChange={onText}
            aria-invalid={!!errors.petNameBreed}
            className={fieldClass("petNameBreed")}
          />
        </Row>

        <label className="flex flex-col gap-1">
          <span className="font-medium">Additional Notes</span>
          <textarea
            name="additionalNotes"
            rows={4}
            value={values.additionalNotes}
            onChange={onText}
            aria-invalid={!!errors.additionalNotes}
            className={`mt-1 rounded-lg border bg-white p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414] ${
              errors.additionalNotes ? "border-[#B3261E]" : "border-[#3B2414]/40"
            }`}
          />
          {errors.additionalNotes && (
            <p className="text-sm text-[#B3261E]" role="alert">
              {errors.additionalNotes}
            </p>
          )}
        </label>
      </div>

      {done && (
        <div
          role="status"
          className="mt-6 flex items-center gap-3 rounded-lg border border-[#C97F4B] bg-[#C97F4B]/10 px-4 py-3 text-base font-medium"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C97F4B]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBEEDD"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
          <span>Thank you! Your appointment request was submitted.</span>
        </div>
      )}

      <button
        type="submit"
        className="mt-8 block w-full rounded-lg bg-[#C97F4B] px-8 py-3 text-center text-base font-medium sm:inline-block sm:w-auto text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]"
      >
        {buttonText}
      </button>
    </form>
  );
}