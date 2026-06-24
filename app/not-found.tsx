import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return <section className="container-page grid min-h-[65vh] place-items-center py-16 text-center"><div className="max-w-lg"><div className="mx-auto grid size-16 place-items-center rounded-[22px] bg-[#f0edff] text-[#6d4aff]"><SearchX className="size-7"/></div><p className="eyebrow mt-7">404 · Sivua ei löytynyt</p><h1 className="font-display mt-3 text-4xl">Tämä tyyli taisi vaihtaa osoitetta.</h1><p className="mt-4 text-sm leading-6 text-black/50">Sivua tai tekijäprofiilia ei ole olemassa. Palaa hakuun löytämään muita osaajia.</p><Link href="/search" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#17151d] px-6 py-3 text-sm font-bold text-white"><ArrowLeft className="size-4"/>Takaisin hakuun</Link></div></section>;
}
