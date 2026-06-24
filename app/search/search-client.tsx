"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { EmptySearchState } from "@/components/search/EmptySearchState";
import { SearchFiltersPanel } from "@/components/search/SearchFiltersPanel";
import type { Professional } from "@/data/professionals";
import { activeFilterCount, emptyFilters, filterProfessionals, type SearchFilters } from "@/lib/search";

type SortOption = "recommended" | "rating" | "price";

export function SearchClient({professionals}:{professionals:Professional[]}) {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState<SortOption>("recommended");
  const [filters, setFilters] = useState<SearchFilters>({
    city: params.get("city") || "",
    category: params.get("category") || "",
    maxPrice: params.get("price") || "",
    type: (params.get("type") as SearchFilters["type"]) || "",
    availability: (params.get("availability") as SearchFilters["availability"]) || "",
  });

  const results = useMemo(() => {
    const filtered = filterProfessionals(professionals, filters);
    return [...filtered].sort((a, b) => {
      if (sort === "price") return a.priceFrom - b.priceFrom;
      if (sort === "rating") return b.rating - a.rating || b.reviewCount - a.reviewCount;
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || b.rating - a.rating;
    });
  }, [filters, sort]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const query = new URLSearchParams();
      if (filters.city) query.set("city", filters.city);
      if (filters.category) query.set("category", filters.category);
      if (filters.maxPrice) query.set("price", filters.maxPrice);
      if (filters.type) query.set("type", filters.type);
      if (filters.availability) query.set("availability", filters.availability);
      const href = query.size ? `${pathname}?${query.toString()}` : pathname;
      router.replace(href, {scroll: false});
    }, 180);
    return () => window.clearTimeout(timeout);
  }, [filters, pathname, router]);

  const update = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => setFilters((current) => ({...current, [key]: value}));
  const clear = () => setFilters(emptyFilters);
  const activeCount = activeFilterCount(filters);

  return <>
    <section className="border-b border-black/7 bg-[#f8f7f3] py-11 md:py-14">
      <div className="container-page">
        <p className="eyebrow">Tekijähaku</p>
        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><h1 className="font-display text-4xl md:text-5xl">Löydä seuraava luottotekijäsi.</h1><p className="mt-4 max-w-xl text-sm leading-6 text-black/55">Vertaa yrityksiä, opiskelijoita ja harrastajatekijöitä läpinäkyvästi.</p></div><div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold shadow-sm"><span className="size-2 rounded-full bg-emerald-500"/>{professionals.filter((item) => item.today).length} tekijällä aikoja tänään</div></div>
      </div>
    </section>

    <section className="container-page py-8 md:py-10">
      <button onClick={() => setMobileFiltersOpen(true)} className="mb-5 flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-white py-3 text-sm font-bold shadow-sm lg:hidden"><SlidersHorizontal className="size-4"/>Suodattimet{activeCount > 0 && <span className="grid size-5 place-items-center rounded-full bg-[#6d4aff] text-[10px] text-white">{activeCount}</span>}</button>
      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        <aside className="hidden lg:block"><div className="sticky top-24 rounded-[22px] border border-black/8 bg-white p-5 shadow-sm"><SearchFiltersPanel filters={filters} update={update} clear={clear} resultCount={results.length}/></div></aside>
        <div>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div><p className="text-sm"><b>{results.length}</b> {results.length === 1 ? "tekijä" : "tekijää"} löytyi</p>{activeCount > 0 && <button onClick={clear} className="mt-1 text-xs font-bold text-[#6d4aff]">Poista {activeCount} aktiivista suodatinta</button>}</div>
            <label className="flex items-center gap-2 text-xs text-black/45"><span>Järjestä</span><select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="rounded-xl border border-black/10 bg-white px-3 py-2.5 text-xs font-bold text-black outline-none"><option value="recommended">Suositellut</option><option value="rating">Arvosana</option><option value="price">Edullisin ensin</option></select></label>
          </div>
          {results.length > 0 ? (
            <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
              {results.map((professional) => (
                <ProfessionalCard key={professional.id} pro={professional} />
              ))}
            </div>
          ) : (
            <EmptySearchState clear={clear} />
          )}
        </div>
      </div>
    </section>

    {mobileFiltersOpen && <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden" onMouseDown={(event) => event.target === event.currentTarget && setMobileFiltersOpen(false)}><div className="absolute inset-x-0 bottom-0 max-h-[92vh] overflow-y-auto rounded-t-[28px] bg-white p-6"><div className="mb-5 flex items-center justify-between"><p className="text-lg font-extrabold">Suodattimet</p><button onClick={() => setMobileFiltersOpen(false)} className="grid size-10 place-items-center rounded-full bg-black/5" aria-label="Sulje suodattimet"><X className="size-4"/></button></div><SearchFiltersPanel filters={filters} update={update} clear={clear} resultCount={results.length} onDone={() => setMobileFiltersOpen(false)}/></div></div>}
  </>;
}
