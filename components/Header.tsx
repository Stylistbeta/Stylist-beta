"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const links=[['/','Etusivu'],['/search','Etsi tekijöitä'],['/join','Lisää oma profiili'],['/pricing','Hinnoittelu'],['/privacy','Tietosuoja']];
export function Header(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="sticky top-0 z-40 border-b border-black/6 bg-white/90 backdrop-blur-xl"><div className="container-page flex h-18 items-center justify-between"><Logo/><nav className="hidden items-center gap-1 lg:flex">{links.map(([href,label])=><Link key={href} href={href} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${path===href?'bg-[#f0edff] text-[#5a38e6]':'text-black/65 hover:bg-black/4 hover:text-black'}`}>{label}</Link>)}<Link href="/join" className="ml-2 rounded-full bg-[#17151d] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#6d4aff]">Liity maksutta</Link></nav><button onClick={()=>setOpen(!open)} className="grid size-11 place-items-center rounded-full bg-[#f5f3ef] lg:hidden" aria-label="Avaa valikko">{open?<X/>:<Menu/>}</button></div>{open&&<nav className="border-t border-black/6 bg-white px-5 py-4 lg:hidden">{links.map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} href={href} className="block rounded-xl px-4 py-3 font-semibold hover:bg-[#f5f3ef]">{label}</Link>)}</nav>}</header>}
