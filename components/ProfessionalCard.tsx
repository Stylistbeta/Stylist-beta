import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Sparkles, Star } from "lucide-react";
import type { Professional } from "@/data/professionals";
import { getPreviewWorkSample } from "@/lib/work-samples";
import { TypeBadge } from "./Badge";

const gradients: Record<string, string> = {
  violet: "from-[#c8baff] to-[#7452ff]",
  ink: "from-[#444052] to-[#19171e]",
  sand: "from-[#f1d7af] to-[#bc8b5d]",
  rose: "from-[#ffd1d7] to-[#d66f86]",
  cream: "from-[#f6eddb] to-[#dfc8a0]",
  pink: "from-[#ffcaec] to-[#c766a7]",
  lilac: "from-[#e5d7ff] to-[#9d78dd]",
  blue: "from-[#cae9ff] to-[#5688c7]",
  gold: "from-[#ffe5a5] to-[#c79735]",
};

export function WorkVisual({
  tone = "violet",
  name,
  className = "",
  showBadge = true,
}: {
  tone?: string;
  name: string;
  className?: string;
  showBadge?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${gradients[tone] || gradients.violet} ${className}`}>
      <div className="absolute -right-8 -top-8 size-36 rounded-full border-[22px] border-white/20" />
      <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[38%] bg-white/10 backdrop-blur-sm" />
      <div className="absolute bottom-5 left-5 font-display text-5xl text-white/90">{name.charAt(0)}</div>
      {showBadge ? (
        <span className="absolute bottom-5 right-5 rounded-full bg-black/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-white backdrop-blur">
          Esimerkkiprofiili
        </span>
      ) : null}
    </div>
  );
}

export function ProfessionalCard({ pro }: { pro: Professional }) {
  const hasBookingLink = /^https?:\/\//.test(pro.bookingUrl);
  const previewSample = getPreviewWorkSample(pro.workSamples);

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[26px] border border-black/8 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#6d4aff]/20 hover:shadow-[0_22px_55px_rgba(25,20,45,.12)]">
      <Link href={`/professional/${pro.id}`} className="relative block overflow-hidden">
        <WorkVisual tone={pro.images[0]} name={pro.name} showBadge={!previewSample} className="h-48 transition duration-500 group-hover:scale-[1.03]" />
        {previewSample ? (
          <span className="absolute bottom-4 right-4 flex max-w-[180px] items-center gap-2 rounded-2xl border border-white/70 bg-white/95 p-1.5 pr-3 text-left shadow-xl shadow-black/10 backdrop-blur">
            <img src={previewSample.src} alt={previewSample.alt} loading="lazy" className="size-14 shrink-0 rounded-xl object-cover" />
            <span className="min-w-0">
              <span className="block text-[10px] font-extrabold uppercase tracking-[.12em] text-[#6d4aff]">Työnäyte</span>
              <span className="mt-0.5 hidden max-w-[96px] truncate text-[11px] font-bold text-black/70 sm:block">{previewSample.alt}</span>
            </span>
          </span>
        ) : null}
        {pro.featured && (
          <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-extrabold text-[#5a38e6] shadow-sm backdrop-blur">
            <Sparkles className="size-3" />
            SUOSITELTU
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <TypeBadge type={pro.type} />
          <span className="flex items-center gap-1 text-xs font-bold">
            <Star className="size-3.5 fill-[#6d4aff] text-[#6d4aff]" />
            {pro.rating} <span className="font-normal text-black/40">({pro.reviewCount})</span>
          </span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-extrabold tracking-tight">{pro.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-black/50">
              <MapPin className="size-3.5 shrink-0" />
              <span className="truncate">{pro.category} · {pro.city}</span>
            </p>
          </div>
          <p className="shrink-0 text-right text-[11px] text-black/45">
            alkaen<br />
            <b className="text-lg text-black">{pro.priceFrom} €</b>
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-black/58">{pro.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {pro.services.slice(0, 3).map((service) => (
            <span key={service} className="rounded-full bg-[#f5f3ef] px-2.5 py-1 text-[11px] font-semibold">
              {service}
            </span>
          ))}
        </div>
        <p className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
          <Clock3 className="size-3.5" />
          {pro.availability}
        </p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <Link href={`/professional/${pro.id}`} className="flex min-h-11 items-center justify-center rounded-xl border border-black/12 px-3 py-2.5 text-center text-xs font-bold transition hover:bg-black/3">
            Katso profiili
          </Link>
          {hasBookingLink ? (
            <a href={pro.bookingUrl} target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center gap-1 rounded-xl bg-[#17151d] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-[#6d4aff]">
              Ajanvaraus <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            <Link href={`/professional/${pro.id}?contact=1`} className="flex min-h-11 items-center justify-center gap-1 rounded-xl bg-[#17151d] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-[#6d4aff]">
              Ota yhteyttä <ArrowUpRight className="size-3.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
