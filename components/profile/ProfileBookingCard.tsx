import { Suspense } from "react";
import { AtSign, CheckCircle2, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BookingModal } from "@/components/BookingModal";
import type { Professional } from "@/data/professionals";
import { contactEmail } from "@/lib/options";

export function ProfileBookingCard({ professional }: { professional: Professional }) {
  return (
    <aside className="lg:order-2">
      <div className="sticky top-24 rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_24px_70px_rgba(26,20,48,.11)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-black/40">Esimerkkihinta alkaen</p>
            <p className="mt-1 text-4xl font-extrabold tracking-tight">{professional.priceFrom} €</p>
          </div>
          <span className="grid size-11 place-items-center rounded-2xl bg-[#f0edff] text-[#6d4aff]">
            <ShieldCheck className="size-5" />
          </span>
        </div>

        <p className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-xs font-bold text-emerald-700">
          <Clock className="size-4" />
          {professional.availability} · esimerkkitieto
        </p>

        <div className="mt-5">
          <Suspense>
            <BookingModal
              name={professional.name}
              instagram={professional.instagram}
              phone={professional.phone}
              bookingUrl={professional.bookingUrl}
            />
          </Suspense>
        </div>

        <div className="my-5 h-px bg-black/7" />
        <div className="space-y-1 text-sm text-black/55">
          <p className="flex min-h-11 items-center gap-3 rounded-xl px-2 py-2">
            <AtSign className="size-4 text-black/40" />
            {professional.instagram}
            <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-black/30">Esimerkki</span>
          </p>
          <p className="flex min-h-11 items-center gap-3 rounded-xl px-2 py-2">
            <Phone className="size-4 text-black/40" />
            {professional.phone}
            <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-black/30">Esimerkki</span>
          </p>
          <p className="flex min-h-11 items-center gap-3 rounded-xl px-2 py-2">
            <MapPin className="size-4 text-black/40" />
            {professional.city}, {professional.area}
          </p>
        </div>

        <a
          href={`mailto:${contactEmail}`}
          className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/10 px-4 py-3 text-sm font-bold transition hover:border-[#6d4aff]/30 hover:bg-[#f5f2ff]"
        >
          <Mail className="size-4 text-[#6d4aff]" />
          {contactEmail}
        </a>

        <div className="mt-6 rounded-2xl bg-[#f8f7f3] p-4">
          <p className="flex items-center gap-2 text-xs font-extrabold">
            <CheckCircle2 className="size-4 text-[#6d4aff]" />
            Esimerkkiprofiili
          </p>
          <p className="mt-2 text-xs leading-5 text-black/45">
            Profiilin nimi, kuvat, hinnat, saatavuus, yhteystiedot ja arvostelut ovat kuvitteellisia.
          </p>
        </div>
      </div>
    </aside>
  );
}
