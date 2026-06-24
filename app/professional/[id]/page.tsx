import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Info, MapPin, Quote, Sparkles, Star } from "lucide-react";
import { TypeBadge } from "@/components/Badge";
import { ProfileBookingCard } from "@/components/profile/ProfileBookingCard";
import { ProfileGallery } from "@/components/profile/ProfileGallery";
import { typeLabel } from "@/data/professionals";
import { professionalsRepository } from "@/lib/data";

export async function generateStaticParams() {
  const professionals = await professionalsRepository.list();
  return professionals.map((professional) => ({id: professional.id}));
}

export default async function ProfilePage({params}:{params:Promise<{id:string}>}) {
  const {id} = await params;
  const professional = await professionalsRepository.findById(id);
  if (!professional) notFound();

  return <>
    <section className="bg-[#f8f7f3] pb-10 pt-6 md:pb-14 md:pt-8">
      <div className="container-page">
        <Link href="/search" className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-black/50 transition hover:text-black"><ArrowLeft className="size-3.5"/>Takaisin hakuun</Link>
        <ProfileGallery name={professional.name} images={professional.images}/>
      </div>
    </section>

    <section className="container-page py-9 md:py-12">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2"><TypeBadge type={professional.type}/><span className="rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-bold">{professional.category}</span>{professional.featured && <span className="flex items-center gap-1 rounded-full bg-[#f0edff] px-2.5 py-1 text-[11px] font-bold text-[#5a38e6]"><Sparkles className="size-3"/>Suositeltu</span>}</div>
        <h1 className="font-display mt-4 text-4xl leading-tight md:text-6xl">{professional.name}</h1>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-black/55"><span className="flex items-center gap-1.5"><Star className="size-4 fill-[#6d4aff] text-[#6d4aff]"/><b className="text-black">{professional.rating}</b> ({professional.reviewCount} arvostelua)</span><span className="flex items-center gap-1.5"><MapPin className="size-4"/>{professional.city}, {professional.area}</span><span className="flex items-center gap-1.5 text-emerald-700"><Clock3 className="size-4"/>{professional.availability}</span></div>
      </div>

      <div className="mt-9 grid gap-9 lg:grid-cols-[1fr_350px]">
        <ProfileBookingCard professional={professional}/>
        <div className="lg:order-1">
          <div className="rounded-[24px] bg-[#f8f7f3] p-6 md:p-7"><p className="text-xs font-bold uppercase tracking-[.14em] text-black/35">Tietoa tekijästä</p><p className="mt-4 max-w-2xl text-base leading-8 text-black/65">{professional.description}</p></div>

          {professional.type !== "business" && <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"><Info className="mt-0.5 size-5 shrink-0"/><p><b>{typeLabel[professional.type]}</b> ei välttämättä ole virallinen yritys. Tarkista osaaminen, hinta ja palvelun käytännöt suoraan tekijältä ennen varausta.</p></div>}

          <ContentSection eyebrow="Hinnasto" title="Palvelut ja hinnat">
            <div className="grid gap-3 sm:grid-cols-2">{professional.services.map((service, index) => <article key={service} className="rounded-[20px] border border-black/8 bg-white p-5 transition hover:border-[#6d4aff]/25 hover:shadow-md"><div className="flex items-start justify-between gap-4"><div><h3 className="font-extrabold">{service}</h3><p className="mt-2 flex items-center gap-1.5 text-xs text-black/40"><Clock3 className="size-3.5"/>{45 + index * 15} minuuttia</p></div><b className="shrink-0 text-sm">{professional.priceFrom + index * 8} €</b></div></article>)}</div>
          </ContentSection>

          <ContentSection eyebrow="Saatavuus" title="Seuraavat vapaat ajat">
            <div className="grid gap-2 sm:grid-cols-3">{["Ti 14.30", "Ke 10.00", "Pe 16.45"].map((time) => <Link key={time} href={`/professional/${professional.id}?book=1`} className="rounded-xl border border-[#6d4aff]/20 bg-[#f5f2ff] px-4 py-3 text-center text-sm font-bold text-[#5636cf] transition hover:bg-[#6d4aff] hover:text-white">{time}</Link>)}</div><p className="mt-3 text-xs text-black/40">Ajat ovat demotietoja eivätkä muodosta oikeaa varausta.</p>
          </ContentSection>

          <ContentSection eyebrow="Asiakaskokemukset" title={`Arvostelut · ${professional.rating}`}>
            <div className="grid gap-3 sm:grid-cols-2">{professional.reviews.map((review) => <article key={review.name} className="relative overflow-hidden rounded-[22px] bg-[#17151d] p-6 text-white"><Quote className="absolute right-4 top-4 size-10 text-white/7"/><div className="flex gap-0.5">{Array.from({length: review.rating}).map((_, index) => <Star key={index} className="size-3.5 fill-[#ae99ff] text-[#ae99ff]"/>)}</div><p className="mt-5 text-sm leading-6 text-white/80">“{review.text}”</p><p className="mt-5 text-xs font-bold text-white/45">{review.name}</p></article>)}</div>
          </ContentSection>
        </div>
      </div>
    </section>
  </>;
}

function ContentSection({eyebrow, title, children}:{eyebrow:string; title:string; children:React.ReactNode}) {
  return <section className="mt-11 border-t border-black/8 pt-9"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#6d4aff]">{eyebrow}</p><h2 className="mb-6 mt-2 text-2xl font-extrabold tracking-tight">{title}</h2>{children}</section>;
}
