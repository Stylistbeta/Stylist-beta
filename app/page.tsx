import Link from "next/link";
import {
  ArrowRight, CalendarCheck, Eye, House, MapPin, Paintbrush,
  Scissors, Search, ShieldCheck, Sparkles, Star,
} from "lucide-react";
import { HeroSearch } from "@/components/HeroSearch";
import { FreeStartBanner, JoinBenefits } from "@/components/JoinBenefits";
import { ProfessionalCard } from "@/components/ProfessionalCard";
import { SectionHeading } from "@/components/SectionHeading";
import { professionalsRepository } from "@/lib/data";
import { cities } from "@/lib/options";

const categories = [
  { name: "Parturit", query: "Parturi", icon: Scissors },
  { name: "Kampaajat", query: "Kampaaja", icon: Sparkles },
  { name: "Kynnet", query: "Kynnet", icon: Paintbrush },
  { name: "Ripset", query: "Ripset", icon: Eye },
  { name: "Meikkaus", query: "Meikkaus", icon: Star },
  { name: "Kotitekijät", query: "Kotitekijä", icon: House },
];

export default async function Home() {
  const professionals = await professionalsRepository.list();
  const featured = professionals.filter((professional) => professional.featured);

  return <>
    <section className="relative overflow-hidden bg-[#f8f7f3] py-14 md:py-24">
      <div className="dot-grid absolute inset-y-0 right-0 w-1/2 opacity-45"/>
      <div className="absolute -right-20 top-12 size-72 rounded-full bg-[#d9d0ff] blur-3xl"/>
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6d4aff]/20 bg-white px-3 py-1.5 text-xs font-bold text-[#5a38e6]"><Sparkles className="size-3.5"/>Uusi tapa löytää tekijä</span>
          <h1 className="font-display mt-6 max-w-4xl text-[44px] leading-[.98] sm:text-6xl lg:text-7xl">Löydä tekijä, joka tuntuu <em className="text-[#6d4aff]">sinulta.</em></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">Stylist Beta on uusi suomalainen palvelu, jonka tavoitteena on auttaa asiakkaita löytämään partureita, kampaajia, kynsiteknikoita ja muita kauneusalan tekijöitä helposti.</p>
          <HeroSearch/>
          <div className="mt-5 flex flex-wrap items-center gap-3"><Link href="/search" className="rounded-full bg-[#17151d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6d4aff]">Etsi tekijöitä</Link><Link href="/join" className="flex items-center gap-2 px-2 py-3 text-sm font-bold">Lisää oma profiili<ArrowRight className="size-4"/></Link></div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-black/45"><span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-emerald-600"/>Selkeät tekijätyypit</span><span className="flex items-center gap-1.5"><Star className="size-4 fill-[#6d4aff] text-[#6d4aff]"/>Arvostelut ja hinnat</span><span className="flex items-center gap-1.5"><CalendarCheck className="size-4 text-[#6d4aff]"/>Näe saatavuus</span></div>
        </div>
        <div className="relative hidden min-h-[480px] lg:block" aria-hidden="true">
          <div className="absolute left-10 top-0 h-80 w-64 rotate-[-5deg] overflow-hidden rounded-[100px_100px_32px_32px] bg-gradient-to-br from-[#ffc6df] to-[#7c55ff] shadow-2xl"><div className="absolute -bottom-10 left-8 size-48 rounded-full border-[38px] border-white/25"/></div>
          <div className="absolute bottom-0 right-0 w-64 rotate-3 rounded-[28px] bg-white p-5 shadow-2xl"><div className="relative h-28 rounded-2xl bg-gradient-to-br from-[#21202a] to-[#8079a2]"><span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-black">Esimerkkiprofiili</span></div><div className="mt-4 flex items-center justify-between"><div><b className="text-sm">Nails by Nea</b><p className="text-xs text-black/45">Jyväskylä</p></div><span className="flex items-center gap-1 text-xs font-bold"><Star className="size-3 fill-[#6d4aff] text-[#6d4aff]"/>4.7</span></div></div>
          <div className="absolute right-4 top-16 rounded-2xl bg-[#17151d] px-4 py-3 text-white shadow-xl"><p className="text-[10px] text-white/50">Esimerkkiaika</p><p className="text-sm font-bold">Tänään klo 16.30</p></div>
        </div>
      </div>
    </section>

    <FreeStartBanner/>

    <section className="container-page py-16 md:py-20">
      <SectionHeading eyebrow="Löydä omasi" title="Suositut kategoriat" href="/search"/>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {categories.map(({name, query, icon: Icon}) => <Link key={name} href={`/search?category=${encodeURIComponent(query)}`} className="group rounded-[22px] border border-black/8 p-5 transition hover:-translate-y-1 hover:border-[#6d4aff]/30 hover:bg-[#f5f2ff]">
          <div className="grid size-11 place-items-center rounded-2xl bg-[#f0edff] text-[#6d4aff] transition group-hover:bg-[#6d4aff] group-hover:text-white"><Icon className="size-5"/></div><b className="mt-7 block text-sm">{name}</b><span className="mt-1 block text-xs text-black/40">Selaa esimerkkejä</span>
        </Link>)}
      </div>
    </section>

    <section className="bg-[#17151d] py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#ae99ff]">Lähelläsi</p><h2 className="font-display mt-3 text-4xl md:text-5xl">Kauneutta löytyy kaikkialta.</h2><p className="mt-5 max-w-md text-sm leading-6 text-white/55">Suuren kaupungin studiolta pienen paikkakunnan kotitekijälle — osaaminen ansaitsee tulla löydetyksi.</p></div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">{cities.map((city, index) => <Link key={city} href={`/search?city=${encodeURIComponent(city)}`} className={`flex min-h-14 items-center justify-between rounded-2xl border border-white/10 px-4 py-4 text-sm font-bold transition hover:bg-white hover:text-black ${index === 0 ? "border-transparent bg-[#6d4aff] sm:col-span-2" : ""}`}>{city}<MapPin className="size-4 opacity-50"/></Link>)}</div>
      </div>
    </section>

    <section className="container-page py-20 md:py-24">
      <SectionHeading eyebrow="Tarkkaan valittu" title="Suositellut tekijät" description="Poimintoja osaajista, joilla on viimeistelty profiili, vahvat arvostelut ja vapaita aikoja." href="/search" linkLabel="Selaa kaikkia"/>
      <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featured.map((professional) => <ProfessionalCard key={professional.id} pro={professional}/>)}</div>
    </section>

    <section className="bg-[#f8f7f3] py-20">
      <div className="container-page">
        <SectionHeading eyebrow="Näin helppoa se on" title="Kolme askelta hyvään fiilikseen" centered/>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[
          [Search, "Etsi tekijä", "Rajaa kaupunki, palvelu, tekijätyyppi ja oma budjettisi."],
          [ShieldCheck, "Tutustu rauhassa", "Vertaa hintoja, sijaintia, töitä ja arvosteluja yhdessä paikassa."],
          [CalendarCheck, "Varaa tai ota yhteyttä", "Valitse avoin aika tai avaa tekijän oma varauskanava."],
        ].map(([Icon, title, text], index) => <div key={title as string} className="rounded-[26px] bg-white p-7"><span className="text-xs font-bold text-black/25">0{index + 1}</span><div className="mt-8 grid size-12 place-items-center rounded-2xl bg-[#17151d] text-white"><Icon className="size-5"/></div><h3 className="mt-5 text-lg font-extrabold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-black/55">{text as string}</p></div>)}</div>
      </div>
    </section>

    <JoinBenefits/>

    <section className="container-page py-16 md:py-20">
      <div className="relative overflow-hidden rounded-[34px] bg-[#6d4aff] px-7 py-12 text-white md:px-14"><div className="absolute -right-16 -top-16 size-64 rounded-full border-[50px] border-white/10"/><div className="relative max-w-2xl"><span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">Kaikille tekijöille</span><h2 className="font-display mt-6 text-4xl md:text-5xl">Myös pienet tekijät ansaitsevat näkyvyyttä.</h2><p className="mt-5 leading-7 text-white/75">Stylist Betassa voivat näkyä myös aloittavat tekijät, opiskelijat ja harrastajat, kunhan profiilin tiedot ovat selkeät ja asiakas tietää, millaisesta tekijästä on kyse.</p><Link href="/join" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4b29d1]">Lisää oma profiili<ArrowRight className="size-4"/></Link></div></div>
    </section>
  </>;
}
