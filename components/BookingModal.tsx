"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck, Mail, X } from "lucide-react";
import { contactEmail } from "@/lib/options";

export function BookingModal({
  name,
  instagram,
  phone,
  bookingUrl,
}: {
  name: string;
  instagram: string;
  phone: string;
  bookingUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const params = useSearchParams();
  const hasBookingLink = /^https?:\/\//.test(bookingUrl);

  useEffect(() => {
    if (params.get("contact") || params.get("book")) setOpen(true);
  }, [params]);

  if (hasBookingLink) {
    return (
      <a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 w-full items-center justify-center rounded-2xl bg-[#6d4aff] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-[#6d4aff]/20 hover:bg-[#5835df]"
      >
        Avaa ajanvaraus
      </a>
    );
  }

  const subject = encodeURIComponent(`Kysymys esimerkkiprofiilista: ${name}`);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="min-h-14 w-full rounded-2xl bg-[#6d4aff] px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-[#6d4aff]/20 hover:bg-[#5835df]"
      >
        Ota yhteyttä
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-end bg-black/45 p-0 backdrop-blur-sm sm:place-items-center sm:p-6"
          onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
        >
          <div className="w-full max-w-md rounded-t-[28px] bg-white p-6 pb-8 sm:rounded-[28px]">
            <div className="flex items-start justify-between">
              <div className="grid size-12 place-items-center rounded-2xl bg-[#f0edff] text-[#6d4aff]">
                <CalendarCheck />
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-full bg-black/5"
                aria-label="Sulje yhteydenotto"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[.14em] text-[#6d4aff]">Esimerkkiprofiili</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Ota yhteyttä Stylist Betaan</h2>
            <p className="mt-3 text-sm leading-6 text-black/55">
              {name} on kuvitteellinen esimerkkiprofiili, eikä sivu käsittele oikeita varauksia. Voit kysyä palvelusta tai oman profiilin lisäämisestä sähköpostilla.
            </p>

            <a
              href={`mailto:${contactEmail}?subject=${subject}`}
              className="mt-6 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#17151d] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#6d4aff]"
            >
              <Mail className="size-4" />
              {contactEmail}
            </a>

            <div className="mt-5 rounded-2xl bg-[#f8f7f3] p-4 text-xs leading-5 text-black/50">
              <b className="text-black/65">Esimerkkitiedot:</b> @{instagram} · {phone}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
