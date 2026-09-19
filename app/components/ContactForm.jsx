"use client";

const FIELDS = [
  { name: "name", label: "Your Name:", type: "text" },
  { name: "email", label: "Your Email:", type: "email" },
  { name: "phone", label: "Contact Number:", type: "tel" },
];

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `PawPals inquiry from ${f.get("name")}`;
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nContact Number: ${f.get("phone")}\n\nMessage:\n${f.get("message")}`;
    window.location.href = `mailto:johnandrew@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-3xl">
      <div className="space-y-4 rounded-md border border-[#E8A857]/60 bg-white/60 p-6">
        {FIELDS.map((field) => (
          <div key={field.name} className="flex items-end gap-3">
            <label htmlFor={field.name} className="w-36 shrink-0 text-right text-base">{field.label}</label>
            <input id={field.name} name={field.name} type={field.type} required={field.name !== "phone"} className="min-w-0 flex-1 border-0 border-b border-dashed border-[#3B2414]/60 bg-transparent px-1 py-1 text-base outline-none focus:border-[#C97F4B]" />
          </div>
        ))}

        <div className="flex items-start gap-3">
          <label htmlFor="message" className="w-36 shrink-0 pt-1 text-right text-base">Message:</label>
          <textarea id="message" name="message" required rows={5} className="min-w-0 flex-1 rounded-md border border-[#3B2414]/70 bg-white px-3 py-2 text-base outline-none focus:border-[#C97F4B]" />
        </div>
      </div>

      <button type="submit" className="mt-6 rounded-lg bg-[#C97F4B] px-8 py-3 text-base font-medium text-[#FBEEDD] transition-colors hover:bg-[#B86F3E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B2414]">
        Send Message
      </button>
    </form>
  );
}