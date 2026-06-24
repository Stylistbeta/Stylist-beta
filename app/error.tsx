"use client";

import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { useEffect } from "react";

export default function ErrorPage({error, reset}:{error:Error & {digest?:string}; reset:()=>void}) {
  useEffect(() => { console.error(error); }, [error]);
  return <section className="container-page grid min-h-[65vh] place-items-center py-16 text-center"><div className="max-w-lg"><div className="mx-auto grid size-16 place-items-center rounded-[22px] bg-amber-100 text-amber-800"><AlertTriangle className="size-7"/></div><p className="eyebrow mt-7">Jokin meni mutkalle</p><h1 className="font-display mt-3 text-4xl">Sivua ei voitu näyttää juuri nyt.</h1><p className="mt-4 text-sm leading-6 text-black/50">Voit yrittää uudelleen. Jos ongelma jatkuu, palaa etusivulle ja aloita uusi haku.</p><div className="mt-7 flex flex-col justify-center gap-2 sm:flex-row"><button onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#17151d] px-6 py-3 text-sm font-bold text-white"><RotateCcw className="size-4"/>Yritä uudelleen</button><Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-bold"><Home className="size-4"/>Etusivulle</Link></div></div></section>;
}
