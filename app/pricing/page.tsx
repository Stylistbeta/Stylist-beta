import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

const plans = [
  { name: "Ilmainen", price: "0 €", description: "Hyvä alku näkyvyydelle", features: ["Perustiedot", "Näkyy hakutuloksissa", "Yhteydenottolinkki"] },
  { name: "Plus", price: "9,90 €", description: "Viimeistelty profiili", features: ["Parempi profiili", "Kuvat", "Palvelulista", "Instagram-linkki"] },
  { name: "Pro", price: "29,90 €", description: "Kasvavalle tekijälle", features: ["Ylemmäs kaupunkihauissa", "Tarjoukset", "Parempi esittely", "Enemmän kuvia"], popular: true },
  { name: "Premium", price: "49,90 €", description: "Paras mahdollinen näkyvyys", features: ["Suositeltu-merkki", "Etusivunosto", "Kampanjanosto", "Paras näkyvyys"] },
];

export default function Pricing() {
  return (
    <>
      <section className="bg-[#f8f7f3] py-14 text-center md:py-20">
        <div className="container-page">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#eeeaff] px-3 py-1.5 text-xs font-bold text-[#5a38e6]">
            <Sparkles className="size-3.5" />
            Beta-etu tekijöille
          </span>
          <h1 className="font-display mx-auto mt-5 max-w-4xl text-4xl leading-tight md:text-6xl">
            Beta-vaiheessa ensimmäiset tekijät pääsevät mukaan maksutta.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/55">
            Maksulliset ominaisuudet tulevat käyttöön myöhemmin. Kerromme hinnoista ja ehdoista selkeästi ennen kuin mikään maksullinen paketti aktivoituu.
          </p>
          <Link href="/join" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#17151d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6d4aff]">
            Lisää profiili maksutta
          </Link>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Tulevat paketit</p>
          <h2 className="font-display mt-3 text-4xl">Näkyvyyttä omaan tahtiin.</h2>
          <p className="mt-3 text-sm leading-6 text-black/50">Alla olevat paketit ovat ennakkotietoa suunnitelluista vaihtoehdoista, eivät vielä ostettavissa olevia tilauksia.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative flex flex-col rounded-[26px] border p-6 ${plan.popular ? "border-[#6d4aff] bg-[#17151d] text-white shadow-xl" : "border-black/8 bg-white"}`}>
              {plan.popular && <span className="absolute -top-3 left-6 rounded-full bg-[#6d4aff] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Suunniteltu suosikki</span>}
              <p className={`text-sm font-bold ${plan.popular ? "text-[#b8a7ff]" : "text-[#6d4aff]"}`}>{plan.name}</p>
              <p className="mt-4 text-4xl font-extrabold tracking-tight">{plan.price}<span className="text-sm font-normal opacity-45">/kk</span></p>
              <p className="mt-3 text-sm opacity-50">{plan.description}</p>
              <div className={`my-6 h-px ${plan.popular ? "bg-white/10" : "bg-black/8"}`} />
              <ul className="flex-1 space-y-3">
                {plan.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm"><Check className="size-4 text-[#8064ff]" />{feature}</li>)}
              </ul>
              <span className={`mt-8 rounded-xl py-3 text-center text-sm font-bold ${plan.popular ? "bg-white/10 text-white" : "bg-[#f5f3ef] text-black/45"}`}>Tulossa myöhemmin</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
