"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Scissors, Search, WalletCards } from "lucide-react";
import { cities, serviceCategories } from "@/lib/options";

export function HeroSearch() {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const search = () => {
    const query = new URLSearchParams();
    if (city) query.set("city", city);
    if (category) query.set("category", category);
    if (price) query.set("price", price);
    router.push(query.size ? `/search?${query.toString()}` : "/search");
  };

  return (
    <div className="soft-shadow mt-9 rounded-[24px] border border-black/7 bg-white p-2">
      <div className="grid md:grid-cols-[1fr_1fr_.8fr_auto]">
        <SearchField icon={MapPin} label="Kaupunki" bordered>
          <select value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="">Kaikki kaupungit</option>
            {cities.map((item) => <option key={item}>{item}</option>)}
          </select>
        </SearchField>
        <SearchField icon={Scissors} label="Palvelu" bordered>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">Kaikki palvelut</option>
            {serviceCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </SearchField>
        <SearchField icon={WalletCards} label="Hinta enintään">
          <select value={price} onChange={(event) => setPrice(event.target.value)}>
            <option value="">Ei rajaa</option>
            <option value="30">30 €</option>
            <option value="50">50 €</option>
            <option value="70">70 €</option>
          </select>
        </SearchField>
        <button
          type="button"
          onClick={search}
          className="flex min-h-14 items-center justify-center gap-2 rounded-[18px] bg-[#6d4aff] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#5734df]"
        >
          <Search className="size-4" />
          Etsi
        </button>
      </div>
    </div>
  );
}

function SearchField({
  icon: Icon,
  label,
  bordered = false,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  bordered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex min-h-14 items-center gap-3 border-b border-black/7 px-4 py-3 md:border-b-0 ${bordered ? "md:border-r" : ""}`}>
      <Icon className="size-5 shrink-0 text-[#6d4aff]" />
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-black/40">{label}</span>
        <span className="block [&>select]:w-full [&>select]:bg-transparent [&>select]:text-sm [&>select]:font-semibold [&>select]:outline-none">
          {children}
        </span>
      </span>
    </label>
  );
}
