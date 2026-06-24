import { Suspense } from "react";
import { Camera, CheckCircle2, Clock, ExternalLink, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BookingModal } from "@/components/BookingModal";
import type { Professional } from "@/data/professionals";

export function ProfileBookingCard({professional}:{professional:Professional}) {
  return <aside className="lg:order-2">
    <div className="sticky top-24 rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_24px_70px_rgba(26,20,48,.11)]">
      <div className="flex items-start justify-between"><div><p className="text-xs font-semibold text-black/40">Palvelut alkaen</p><p className="mt-1 text-4xl font-extrabold tracking-tight">{professional.priceFrom} €</p></div><span className="grid size-11 place-items-center rounded-2xl bg-[#f0edff] text-[#6d4aff]"><ShieldCheck className="size-5"/></span></div>
      <p className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs font-bold text-emerald-700"><Clock className="size-4"/>{professional.availability}</p>
      <div className="mt-5"><Suspense><BookingModal name={professional.name} instagram={professional.instagram} phone={professional.phone}/></Suspense></div>
      <div className="my-5 h-px bg-black/7"/>
      <div className="space-y-3 text-sm">
        <a href={`https://instagram.com/${professional.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-black/3"><Camera className="size-4 text-black/40"/>@{professional.instagram}<ExternalLink className="ml-auto size-3.5 text-black/25"/></a>
        <a href={`tel:${professional.phone}`} className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-black/3"><Phone className="size-4 text-black/40"/>{professional.phone}</a>
        <a href={`https://www.google.com/maps/search/${encodeURIComponent(`${professional.city} ${professional.area}`)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-black/3"><MapPin className="size-4 text-black/40"/>Avaa sijainti kartalla<ExternalLink className="ml-auto size-3.5 text-black/25"/></a>
      </div>
      <div className="mt-6 rounded-2xl bg-[#f8f7f3] p-4"><p className="flex items-center gap-2 text-xs font-extrabold"><CheckCircle2 className="size-4 text-[#6d4aff]"/>Selkeä demoprofiili</p><p className="mt-2 text-xs leading-5 text-black/45">Tarkista aina lopullinen hinta ja peruutusehdot suoraan tekijältä.</p></div>
    </div>
  </aside>;
}
