import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";
import { contactEmail } from "@/lib/options";

export function Footer() {
  return <footer className="border-t border-black/8 bg-[#17151d] text-white">
    <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
      <div className="sm:col-span-2 lg:col-span-1"><div className="inline-flex rounded-xl bg-white px-3 py-2 text-[#17151d]"><Logo/></div><p className="mt-5 max-w-sm text-sm leading-6 text-white/60">Löydä parturit, kampaajat ja kauneusalan tekijät Suomesta — myös ne uudet lahjakkuudet.</p><a href={`mailto:${contactEmail}`} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/12 px-4 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"><Mail className="size-4"/>{contactEmail}</a></div>
      <div><p className="text-sm font-bold">Tutustu</p><div className="mt-4 grid gap-3 text-sm text-white/60"><Link href="/search">Etsi tekijöitä</Link><Link href="/join">Lisää oma profiili</Link><Link href="/pricing">Hinnoittelu</Link></div></div>
      <div><p className="text-sm font-bold">Luottamus ja yhteys</p><div className="mt-4 grid gap-3 text-sm text-white/60"><Link href="/privacy">Tietosuoja</Link><Link href="/terms">Käyttöehdot</Link><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:justify-between"><span>© Stylist Beta 2026</span><span>Suunniteltu tekijöille ympäri Suomen.</span></div></div>
  </footer>;
}
