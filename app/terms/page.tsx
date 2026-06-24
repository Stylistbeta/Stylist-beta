import { LegalPage } from "@/components/LegalPage";
import { contactEmail } from "@/lib/options";

export default function Terms() {
  return (
    <LegalPage
      title="Käyttöehdot"
      intro="Käyttämällä Stylist Beta -palvelua hyväksyt nämä käyttöehdot. Tutustu ehtoihin ennen palvelun käyttämistä tai oman profiilin lähettämistä."
    >
      <h2 className="text-xl font-extrabold text-black">Palvelun tarkoitus</h2>
      <p className="mt-3">Stylist Beta auttaa käyttäjiä löytämään kauneusalan tekijöitä ja tutustumaan heidän palveluihinsa. Beta-vaiheen esimerkkiprofiilit on merkitty erikseen, ja niiden nimet, kuvat, hinnat, saatavuudet, yhteystiedot sekä arvostelut ovat kuvitteellisia.</p>

      <div className="mt-8 rounded-2xl border border-[#6d4aff]/15 bg-[#f5f2ff] p-5 text-black/70">
        <p><b className="text-black">Stylist Beta on hakemisto- ja näkyvyyspalvelu.</b> Stylist ei vastaa tekijän ja asiakkaan välisestä palvelusta, hinnoista, peruutuksista tai työn laadusta. Tekijä vastaa omien tietojensa oikeellisuudesta.</p>
      </div>

      <h2 className="mt-8 text-xl font-extrabold text-black">Tekijän vastuu</h2>
      <p className="mt-3">Tekijä vastaa antamiensa tietojen oikeellisuudesta, ajantasaisuudesta, tarvittavista luvista ja siitä, että oma toiminta täyttää sitä koskevat velvoitteet. Tekijällä tulee olla oikeus julkaista toimittamansa tekstit, kuvat, nimet ja linkit.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Yhteydenotot ja varaukset</h2>
      <p className="mt-3">Stylist Beta ei käsittele sivustolla maksuja eikä muodosta asiakkaan ja tekijän välistä palvelusopimusta. Mahdollinen ajanvaraus, maksu, peruutus ja muu sopiminen tapahtuu tekijän omassa kanavassa tai suoraan osapuolten välillä.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Profiilin muuttaminen tai poistaminen</h2>
      <p className="mt-3">Tekijä voi pyytää oman profiilinsa tietojen korjaamista tai poistamista sähköpostilla. Stylist Beta voi tarvittaessa olla julkaisematta tai poistaa profiilin, jos tiedot ovat virheellisiä, harhaanjohtavia tai ehtojen vastaisia.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Yhteystiedot</h2>
      <p className="mt-3">Kysymykset käyttöehdoista: <a href={`mailto:${contactEmail}`} className="font-bold text-[#6d4aff]">{contactEmail}</a></p>
    </LegalPage>
  );
}
