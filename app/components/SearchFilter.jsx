"use client";

export default function SearchFilter({
  query = "",
  onQueryChange = () => {},
  filters = [],
  activeFilter = "",
  onFilterChange = () => {},
  placeholder = "Search...",
  className = "",
}) {
  return (
    <div className={`flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between ${className}`}>
      <label className="relative block w-full md:max-w-md">
        <span className="sr-only">{placeholder}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#8A8A8A]"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-[#C77D4A]/40 bg-white py-3 pl-12 pr-4 font-fredoka text-base text-[#2B2118] placeholder:text-[#8A8A8A] focus:border-[#C77D4A] focus:outline-none focus:ring-2 focus:ring-[#C77D4A]/30"
        />
      </label>

      {filters.length > 0 && (
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filters">
          {filters.map((f) => {
            const active = f === activeFilter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => onFilterChange(f)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 font-fredoka text-sm font-medium transition md:text-base ${
                  active
                    ? "bg-[#C77D4A] text-white"
                    : "border border-[#C77D4A] text-[#2B2118] hover:bg-[#C77D4A]/10"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}