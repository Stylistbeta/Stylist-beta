import { CalendarClock, RotateCcw, SlidersHorizontal } from "lucide-react";
import type { SearchFilters } from "@/lib/search";
import { cities, serviceCategories } from "@/lib/options";

type FilterOption = { value: string; label: string };

export function SearchFiltersPanel({
  filters,
  update,
  clear,
  resultCount,
  onDone,
}: {
  filters: SearchFilters;
  update: <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => void;
  clear: () => void;
  resultCount: number;
  onDone?: () => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <b className="flex items-center gap-2 text-sm">
          <SlidersHorizontal className="size-4" />
          Rajaa hakua
        </b>
        <button
          type="button"
          onClick={clear}
          className="flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-xs font-bold text-[#6d4aff]"
        >
          <RotateCcw className="size-3" />
          Tyhjennä
        </button>
      </div>

      <div className="mt-5 space-y-5">
        <FilterSelect
          label="Kaupunki"
          value={filters.city}
          onChange={(value) => update("city", value)}
          options={[
            { value: "", label: "Kaikki kaupungit" },
            ...cities.map((city) => ({ value: city, label: city })),
          ]}
        />
        <FilterSelect
          label="Kategoria"
          value={filters.category}
          onChange={(value) => update("category", value)}
          options={[
            { value: "", label: "Kaikki kategoriat" },
            ...serviceCategories.map((category) => ({ value: category, label: category })),
          ]}
        />
        <FilterSelect
          label="Hinta alkaen enintään"
          value={filters.maxPrice}
          onChange={(value) => update("maxPrice", value)}
          options={[
            { value: "", label: "Ei hintarajaa" },
            { value: "20", label: "20 €" },
            { value: "30", label: "30 €" },
            { value: "40", label: "40 €" },
            { value: "50", label: "50 €" },
            { value: "60", label: "60 €" },
            { value: "70", label: "70 €" },
          ]}
        />
        <FilterSelect
          label="Tekijän tyyppi"
          value={filters.type}
          onChange={(value) => update("type", value as SearchFilters["type"])}
          options={[
            { value: "", label: "Kaikki tekijät" },
            { value: "business", label: "Yritys" },
            { value: "student", label: "Opiskelija" },
            { value: "hobbyist", label: "Harrastaja" },
          ]}
        />

        <fieldset>
          <legend className="text-xs font-bold">Saatavuus</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              { value: "", label: "Milloin vain" },
              { value: "today", label: "Tänään" },
            ].map((option) => (
              <button
                type="button"
                key={option.value}
                onClick={() => update("availability", option.value as SearchFilters["availability"])}
                className={`min-h-12 rounded-xl border px-3 py-3 text-xs font-bold transition ${
                  filters.availability === option.value
                    ? "border-[#6d4aff] bg-[#f0edff] text-[#5636cf]"
                    : "border-black/10 bg-white text-black/55"
                }`}
              >
                {option.value === "today" && <CalendarClock className="mr-1 inline size-3.5" />}
                {option.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {onDone && (
        <button
          type="button"
          onClick={onDone}
          className="mt-7 min-h-12 w-full rounded-xl bg-[#6d4aff] py-3.5 text-sm font-bold text-white"
        >
          Näytä {resultCount} tulosta
        </button>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring mt-2 min-h-12 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
