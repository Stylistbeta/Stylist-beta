"use client";

import { useState } from "react";
import { ArrowRight, Check, Eye, Sparkles, Users } from "lucide-react";

export default function JoinPage() {
  const [sent, setSent] = useState(false);

  if (sent) return <section className="container-page grid min-h-[65vh] place-items-center py-16"><div className="max-w-lg text-center"><div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-7"/></div><h1 className="font-display mt-6 text-4xl">Kiitos — olet listalla!</h1><p className="mt-4 leading-7 text-black/55">Tämä oli demolähetys, joten tietoja ei tallennettu. Oikeassa palvelussa tarkistaisimme profiilisi ja olisimme sinuun yhteydessä.</p><button onClick={() => setSent(false)} className="mt-6 text-sm font-bold text-[#6d4aff]">Palaa lomakkeelle</button></div></section>;

  return <>
    <section className="overflow-hidden bg-[#17151d] py-16 text-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <div><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-[#c9bbff]"><Sparkles className="size-3.5"/>Ensimmäiset tekijät maksutta</span><h1 className="font-display mt-6 text-5xl md:text-6xl">Ota näkyvyyttä Stylist Betassa.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-white/60">Oma profiili kauneusalan tekijälle — olitpa yritys, opiskelija tai vasta aloitteleva harrastaja.</p><div className="mt-8 grid gap-3 sm:grid-cols-3">{[[Eye, "Tule löydetyksi"], [Users, "Tavoita uusia asiakkaita"], [Check, "Alkuvaiheessa ilmainen"]].map(([Icon, text]) => <div key={text as string} className="rounded-2xl border border-white/10 p-4"><Icon className="size-5 text-[#ae99ff]"/><p className="mt-3 text-xs font-bold">{text as string}</p></div>)}</div></div>
        <div className="h-72 rounded-[100px_100px_28px_28px] bg-gradient-to-br from-[#ffd5e6] via-[#9c7dff] to-[#4b2dcc] lg:h-96"><div className="mx-auto mt-16 grid size-36 place-items-center rounded-full border-[28px] border-white/15 font-display text-4xl">SB</div></div>
      </div>
    </section>
    <section className="bg-[#f8f7f3] py-16">
      <form onSubmit={(event) => {event.preventDefault(); setSent(true); window.scrollTo(0, 0);}} className="container-page max-w-3xl rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 md:p-10">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#6d4aff]">Profiilin tiedot</p><h2 className="font-display mt-3 text-3xl">Kerro itsestäsi.</h2><p className="mt-2 text-sm text-black/50">Tähdellä merkityt kentät ovat pakollisia.</p></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Field label="Nimi *"><input required placeholder="Nimi tai yrityksen nimi"/></Field>
          <Field label="Sähköposti *"><input type="email" required placeholder="sinä@email.fi"/></Field>
          <Field label="Puhelin"><input type="tel" placeholder="+358 40 123 4567"/></Field>
          <Field label="Kaupunki *"><input required placeholder="esim. Jyväskylä"/></Field>
          <Field label="Kategoria *"><select required defaultValue=""><option value="" disabled>Valitse kategoria</option><option>Parturi</option><option>Kampaamo</option><option>Kynnet</option><option>Ripset</option><option>Meikkaus</option><option>Muu</option></select></Field>
          <Field label="Tekijän tyyppi *"><select required defaultValue=""><option value="" disabled>Valitse tyyppi</option><option>Yritys</option><option>Opiskelija</option><option>Harrastaja</option></select></Field>
          <Field label="Palvelut *" full><input required placeholder="esim. hiustenleikkaus, raidat, kampaus"/></Field>
          <Field label="Hinta alkaen"><input type="number" min="0" placeholder="esim. 35 €"/></Field>
          <Field label="Instagram"><input placeholder="@käyttäjänimi"/></Field>
          <Field label="Varauslinkki" full><input type="url" placeholder="https://..."/></Field>
          <Field label="Lyhyt esittely *" full><textarea required rows={5} placeholder="Kerro osaamisestasi, tyylistäsi ja kenelle palvelusi sopivat."/></Field>
        </div>
        <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-black/60"><input required type="checkbox" className="mt-1 size-4 accent-[#6d4aff]"/>Hyväksyn, että tietoni voidaan näyttää Stylist Betassa. Ymmärrän, että tämä demo ei vielä tallenna tietoja.</label>
        <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#6d4aff] py-4 text-sm font-extrabold text-white hover:bg-[#5835df]">Lähetä profiili tarkistukseen<ArrowRight className="size-4"/></button>
      </form>
    </section>
  </>;
}

function Field({label, children, full = false}:{label:string; children:React.ReactNode; full?:boolean}) {
  return <label className={`block ${full ? "sm:col-span-2" : ""}`}><span className="mb-2 block text-xs font-bold">{label}</span><div className="[&>*]:w-full [&>*]:rounded-xl [&>*]:border [&>*]:border-black/10 [&>*]:bg-white [&>*]:px-4 [&>*]:py-3 [&>*]:text-sm [&>*]:outline-none focus-within:[&>*]:border-[#6d4aff]">{children}</div></label>;
}
