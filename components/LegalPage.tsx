export function LegalPage({title, intro, children}:{title:string; intro:string; children:React.ReactNode}) {
  return <><section className="bg-[#f8f7f3] py-14"><div className="container-page max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-[#6d4aff]">Stylist Beta</p><h1 className="font-display mt-3 text-5xl">{title}</h1><p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{intro}</p></div></section><article className="container-page max-w-3xl py-12 text-sm leading-7 text-black/65">{children}</article></>;
}
