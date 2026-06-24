import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="border-t border-black/8 bg-[#17151d] text-white">
    <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
      <div><div className="inline-flex rounded-xl bg-white px-3 py-2 text-[#17151d]"><Logo/></div><p className="mt-5 max-w-sm text-sm leading-6 text-white/60">Löydä parturit, kampaajat ja kauneusalan tekijät Suomesta — myös ne uudet lahjakkuudet.</p></div>
      <div><p className="text-sm font-bold">Tutustu</p><div className="mt-4 grid gap-3 text-sm text-white/60"><Link href="/search">Etsi tekijöitä</Link><Link href="/join">Lisää oma profiili</Link><Link href="/pricing">Hinnoittelu</Link></div></div>
      <div><p className="text-sm font-bold">Luottamus</p><div className="mt-4 grid gap-3 text-sm text-white/60"><Link href="/privacy">Tietosuoja</Link><Link href="/terms">Käyttöehdot</Link><a href="mailto:hello@stylistbeta.demo">hello@stylistbeta.demo</a></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:justify-between"><span>© Stylist Beta 2026</span><span>Suunniteltu tekijöille ympäri Suomen.</span></div></div>
  </footer>;
}
