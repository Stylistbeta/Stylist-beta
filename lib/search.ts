import type { Professional, ProType } from "@/data/professionals";

export type AvailabilityFilter = "" | "today" | "week";
export type SearchFilters = {
  query: string;
  city: string;
  category: string;
  maxPrice: string;
  type: "" | ProType;
  availability: AvailabilityFilter;
};

export const emptyFilters: SearchFilters = {
  query: "",
  city: "",
  category: "",
  maxPrice: "",
  type: "",
  availability: "",
};

const normalize = (value: string) => value.trim().toLocaleLowerCase("fi");

export function filterProfessionals(
  items: Professional[],
  filters: SearchFilters,
) {
  return items.filter((professional) => {
    const searchText = normalize([
      professional.name,
      professional.category,
      professional.city,
      professional.area,
      professional.description,
      ...professional.services,
    ].join(" "));
    const matchesQuery = !filters.query || searchText.includes(normalize(filters.query));
    const matchesCity = !filters.city || normalize(professional.city).includes(normalize(filters.city));
    const matchesCategory = !filters.category || [professional.category, ...professional.services]
      .some((value) => normalize(value).includes(normalize(filters.category)));
    const matchesPrice = !filters.maxPrice || professional.priceFrom <= Number(filters.maxPrice);
    const matchesType = !filters.type || professional.type === filters.type;
    const matchesAvailability = !filters.availability || (
      filters.availability === "today"
        ? Boolean(professional.today)
        : professional.today || normalize(professional.availability).includes("viikolla")
    );

    return matchesQuery && matchesCity && matchesCategory && matchesPrice && matchesType && matchesAvailability;
  });
}

export function activeFilterCount(filters: SearchFilters) {
  return Object.values(filters).filter(Boolean).length;
}
