"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Eye, Mail, Sparkles, Users } from "lucide-react";
import { cities, contactEmail, serviceCategories } from "@/lib/options";
import { isValidWorkSampleUrl } from "@/lib/work-samples";

const workSampleFieldNames = ["image1", "image2", "image3", "image4"] as const;

const fieldLabels: Record<string, string> = {
  makerName: "Tekijän nimi",
  profileName: "Yrityksen tai profiilin nimi",
  email: "Sähköposti",
  phone: "Puhelinnumero",
  city: "Kaupunki",
  category: "Kategoria",
  type: "Tekijän tyyppi",
  services: "Palvelut ja hinnat",
  instagram: "Instagram-linkki",
  tiktok: "TikTok-linkki",
  booking: "Ajanvarauslinkki",
  image1: "Kuvan linkki 1",
  image2: "Kuvan linkki 2",
  image3: "Kuvan linkki 3, vapaaehtoinen",
  image4: "Kuvan linkki 4, vapaaehtoinen",
  introduction: "Lyhyt esittely",
};

export default function JoinPage() {
  const [sent, setSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const submitProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const workSampleUrls = workSampleFieldNames
      .map((name) => String(formData.get(name) || "").trim())
      .filter(Boolean);

    setFormError(null);

    if (workSampleUrls.length === 1) {
      setFormError("Lisää vähintään kaksi työnäytekuvaa tai jätä kaikki kuvalinkit tyhjiksi.");
      return;
    }

    if (workSampleUrls.some((url) => !isValidWorkSampleUrl(url, { allowRelative: false }))) {
      setFormError("Tarkista työnäytekuvien linkit. Käytä kokonaisia http- tai https-alkuisia URL-osoitteita.");
      return;
    }

    const lines = Object.entries(fieldLabels).map(([name, label]) => {
      const value = String(formData.get(name) || "Ei ilmoitettu").trim() || "Ei ilmoitettu";
      return `${label}: ${value}`;
    });
    const subject = encodeURIComponent(`Uusi profiilihakemus: ${formData.get("profileName") || formData.get("makerName")}`);
    const body = encodeURIComponent([
      "Hei Stylist Beta,",
      "",
      "Haluan lisätä profiilini palveluun. Tässä antamani tiedot:",
      "",
      ...lines,
      "",
      "Hyväksyn, että antamani tiedot voidaan tarkistuksen jälkeen näyttää Stylist Beta -palvelussa.",
    ].join("\n"));

    setSent(true);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sent) {
    return (
      <section className="container-page grid min-h-[65vh] place-items-center py-16">
        <div className="max-w-xl rounded-[28px] border border-black/8 bg-white p-8 text-center shadow-xl shadow-black/5 md:p-12">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
            <Mail className="size-7" />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.16em] text-[#6d4aff]">Viimeistele sähköpostissa</p>
          <h1 className="font-display mt-3 text-4xl">Profiilitietosi ovat valmiina.</h1>
          <p className="mt-4 leading-7 text-black/55">
            Avasimme sähköpostiluonnoksen osoitteeseen <b>{contactEmail}</b>. Lähetä viesti omassa sähköpostisovelluksessasi, niin tarkistamme profiilin ennen julkaisua.
          </p>
          <button type="button" onClick={() => setSent(false)} className="mt-7 min-h-11 rounded-xl px-4 text-sm font-bold text-[#6d4aff]">
            Palaa lomakkeelle
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="overflow-hidden bg-[#17151d] py-14 text-white md:py-16">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-[#c9bbff]">
              <Sparkles className="size-3.5" />
              Ensimmäiset tekijät maksutta
            </span>
            <h1 className="font-display mt-6 text-5xl md:text-6xl">Lisää oma profiili.</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/60">
              Oma näkyvä profiili kauneusalan tekijälle — olitpa yritys, opiskelija tai harrastaja.
            </p>
            <p className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75">
              Beta-vaiheessa tarkistamme profiilit käsin ennen julkaisua.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [Eye, "Tule löydetyksi"],
                [Users, "Tavoita uusia asiakkaita"],
                [Check, "Alkuvaiheessa ilmainen"],
              ].map(([Icon, text]) => (
                <div key={text as string} className="rounded-2xl border border-white/10 p-4">
                  <Icon className="size-5 text-[#ae99ff]" />
                  <p className="mt-3 text-xs font-bold">{text as string}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden h-96 rounded-[100px_100px_28px_28px] bg-gradient-to-br from-[#f0e9ff] via-[#a48dff] to-[#4b2dcc] lg:block">
            <div className="mx-auto mt-16 grid size-36 place-items-center rounded-full border-[28px] border-white/15 font-display text-4xl">SB</div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f3] py-12 md:py-16">
        <form onSubmit={submitProfile} className="container-page max-w-3xl rounded-[28px] bg-white p-6 shadow-xl shadow-black/5 md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6d4aff]">Profiilin tiedot</p>
            <h2 className="font-display mt-3 text-3xl">Kerro itsestäsi.</h2>
            <p className="mt-2 text-sm leading-6 text-black/50">Tähdellä merkityt kentät ovat pakollisia. Lähetys avaa valmiiksi täytetyn sähköpostin.</p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Tekijän nimi *">
              <input name="makerName" autoComplete="name" required placeholder="Etunimi ja sukunimi" />
            </Field>
            <Field label="Yrityksen tai profiilin nimi *">
              <input name="profileName" required placeholder="Nimi, joka näkyy profiilissa" />
            </Field>
            <Field label="Sähköposti *">
              <input name="email" type="email" autoComplete="email" required placeholder="sinä@email.fi" />
            </Field>
            <Field label="Puhelinnumero (vapaaehtoinen)">
              <input name="phone" type="tel" autoComplete="tel" placeholder="+358 40 123 4567" />
            </Field>
            <Field label="Kaupunki *">
              <select name="city" required defaultValue="">
                <option value="" disabled>Valitse kaupunki</option>
                {cities.map((city) => <option key={city}>{city}</option>)}
              </select>
            </Field>
            <Field label="Kategoria *">
              <select name="category" required defaultValue="">
                <option value="" disabled>Valitse kategoria</option>
                {serviceCategories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </Field>
            <Field label="Tekijän tyyppi *" full>
              <select name="type" required defaultValue="">
                <option value="" disabled>Valitse tyyppi</option>
                <option value="Yritys">Yritys</option>
                <option value="Opiskelija">Opiskelija</option>
                <option value="Harrastaja">Harrastaja</option>
              </select>
            </Field>
            <Field label="Palvelut ja hinnat *" full>
              <textarea name="services" required rows={4} placeholder="Esim. hiustenleikkaus 35 €, fade 40 €, parranmuotoilu 25 €" />
            </Field>
            <Field label="Instagram-linkki">
              <input name="instagram" type="url" inputMode="url" placeholder="https://instagram.com/..." />
            </Field>
            <Field label="TikTok-linkki">
              <input name="tiktok" type="url" inputMode="url" placeholder="https://tiktok.com/@..." />
            </Field>
            <Field label="Ajanvarauslinkki" full>
              <input name="booking" type="url" inputMode="url" placeholder="https://timma.fi/... tai muu ajanvarausosoite" />
            </Field>
            <div className="mt-2 rounded-2xl border border-[#6d4aff]/15 bg-[#f5f2ff] p-5 sm:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#6d4aff]">Työnäytteet</p>
              <h3 className="mt-2 text-xl font-extrabold">Lisää työnäytekuvia profiiliisi.</h3>
              <p className="mt-3 text-sm leading-6 text-black/55">
                Voit jättää kuvat tässä vaiheessa tyhjiksi. Jos lisäät työnäytteitä, lisää vähintään kaksi toimivaa kuvalinkkiä.
              </p>
              <p className="mt-3 text-sm leading-6 text-black/55">
                Lisää vain kuvia, joihin sinulla on lupa. Jos kuvassa näkyy asiakas tunnistettavasti, varmista asiakkaan suostumus ennen kuvan lähettämistä.
              </p>
            </div>
            <Field label="Kuvan linkki 1">
              <input name="image1" type="url" inputMode="url" placeholder="https://..." />
            </Field>
            <Field label="Kuvan linkki 2">
              <input name="image2" type="url" inputMode="url" placeholder="https://..." />
            </Field>
            <Field label="Kuvan linkki 3, vapaaehtoinen">
              <input name="image3" type="url" inputMode="url" placeholder="https://..." />
            </Field>
            <Field label="Kuvan linkki 4, vapaaehtoinen">
              <input name="image4" type="url" inputMode="url" placeholder="https://..." />
            </Field>
            {formError ? (
              <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-800 sm:col-span-2">
                {formError}
              </div>
            ) : null}
            <Field label="Lyhyt esittely *" full>
              <textarea name="introduction" required rows={6} placeholder="Kerro osaamisestasi, tyylistäsi ja siitä, kenelle palvelusi sopivat." />
            </Field>
          </div>

          <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-2xl bg-[#f8f7f3] p-4 text-sm leading-6 text-black/60">
            <input name="consent" required type="checkbox" className="mt-1 size-5 shrink-0 accent-[#6d4aff]" />
            <span>Hyväksyn, että antamani tiedot voidaan tarkistuksen jälkeen näyttää Stylist Beta -palvelussa. Voin pyytää tietojen korjaamista tai poistamista sähköpostilla.</span>
          </label>

          <button className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[#6d4aff] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#5835df]">
            Lähetä profiili tarkistukseen
            <ArrowRight className="size-4" />
          </button>

          <p className="mt-5 text-center text-sm text-black/45">
            Kysyttävää? <a href={`mailto:${contactEmail}`} className="font-bold text-[#6d4aff]">{contactEmail}</a>
          </p>
        </form>
      </section>
    </>
  );
}

function Field({ label, children, full = false }: { label: string; children: React.ReactNode; full?: boolean }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-xs font-bold">{label}</span>
      <div className="[&>*]:min-h-12 [&>*]:w-full [&>*]:rounded-xl [&>*]:border [&>*]:border-black/10 [&>*]:bg-white [&>*]:px-4 [&>*]:py-3 [&>*]:text-base [&>*]:outline-none focus-within:[&>*]:border-[#6d4aff] focus-within:[&>*]:ring-4 focus-within:[&>*]:ring-[#6d4aff]/10 sm:[&>*]:text-sm">
        {children}
      </div>
    </label>
  );
}
