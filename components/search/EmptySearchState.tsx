import { MapPinOff, Search, Sparkles } from "lucide-react";

export function EmptySearchState({clear}:{clear:()=>void}) {
  return <div className="relative grid min-h-[430px] place-items-center overflow-hidden rounded-[30px] border border-black/7 bg-[#f8f7f3] p-7 text-center">
    <div className="dot-grid absolute inset-0 opacity-35"/>
    <div className="absolute -right-16 -top-20 size-64 rounded-full bg-[#ded6ff] blur-3xl"/>
    <div className="relative max-w-md">
      <div className="relative mx-auto grid size-24 place-items-center rounded-[30px] bg-white shadow-xl shadow-black/5"><Search className="size-8 text-[#6d4aff]"/><span className="absolute -right-3 -top-3 grid size-9 place-items-center rounded-full bg-[#17151d] text-white"><MapPinOff className="size-4"/></span></div>
      <p className="mt-7 flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-[.16em] text-[#6d4aff]"><Sparkles className="size-3.5"/>Haku on vähän liian tarkka</p>
      <h2 className="font-display mt-3 text-3xl">Tälle yhdistelmälle ei löytynyt tekijää.</h2>
      <p className="mt-4 text-sm leading-6 text-black/50">Kokeile poistaa hintaraja, vaihtaa tekijätyyppiä tai laajentaa hakua lähikaupunkeihin.</p>
      <button onClick={clear} className="mt-6 rounded-full bg-[#17151d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6d4aff]">Näytä kaikki tekijät</button>
    </div>
  </div>;
}
