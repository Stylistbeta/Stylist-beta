import Link from "next/link";
import { ArrowRight, BadgeCheck, ChartNoAxesCombined, ImagePlus, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  { icon: BadgeCheck, title: "Luotettava oma profiili", text: "Palvelut, hinnat, kuvat ja yhteydenottotavat yhdessä selkeässä näkymässä." },
  { icon: ChartNoAxesCombined, title: "Näkyvyys oikeissa hauissa", text: "Asiakkaat löytävät sinut kaupungin, kategorian, hinnan ja tekijätyypin perusteella." },
  { icon: ImagePlus, title: "Tilaa omalle tyylillesi", text: "Esittele osaamisesi ja kerro avoimesti, oletko yritys, opiskelija vai harrastaja." },
];

export function JoinBenefits() {
  return <section className="bg-[#f8f7f3] py-20 md:py-24">
    <div className="container-page">
      <div className="grid items-end gap-8 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Tekijöille" title="Miksi liittyä Stylist Betaan?" description="Hyvä työ ansaitsee tulla löydetyksi. Stylist Beta antaa selkeän kotipesän myös silloin, kun oma yritys tai verkkosivu on vasta syntymässä."/>
          <Link href="/join" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#17151d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6d4aff]">Rakenna oma profiili<ArrowRight className="size-4"/></Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {benefits.map(({icon: Icon, title, text}, index) => <article key={title} className="rounded-[24px] border border-black/7 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-[#f0edff] text-[#6d4aff]"><Icon className="size-5"/></span><span className="text-xs font-bold text-black/25">0{index + 1}</span></div>
            <h3 className="mt-7 text-base font-extrabold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-black/50">{text}</p>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
}

export function FreeStartBanner() {
  return <section className="container-page py-5 md:py-10">
    <div className="relative overflow-hidden rounded-[30px] bg-[#17151d] px-6 py-9 text-white md:px-10 md:py-10">
      <div className="absolute -right-16 -top-24 size-64 rounded-full bg-[#6d4aff] blur-3xl"/>
      <div className="absolute right-20 top-0 hidden h-full w-56 dot-grid opacity-20 md:block"/>
      <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <div className="flex gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#c9bbff]"><Sparkles className="size-5"/></span>
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#ae99ff]">Ilmainen aloitus</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">Ensimmäiset tekijät mukaan maksutta.</h2><p className="mt-2 max-w-xl text-sm leading-6 text-white/55">Luo profiili nyt. Maksutietoja ei tarvita, eikä demoversio sido mihinkään.</p></div>
        </div>
        <Link href="/join" className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17151d] md:w-auto">Aloita ilmaiseksi<ArrowRight className="size-4"/></Link>
      </div>
    </div>
  </section>;
}
