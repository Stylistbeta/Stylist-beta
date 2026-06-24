import { LegalPage } from "@/components/LegalPage";
import { contactEmail } from "@/lib/options";

export default function Privacy() {
  return (
    <LegalPage
      title="Tietosuoja"
      intro="Tässä tietosuojaselosteessa kerromme selkeästi, mitä tietoja Stylist Beta käsittelee, mihin niitä käytetään ja miten voit käyttää omia oikeuksiasi."
    >
      <div className="rounded-2xl bg-[#f8f7f3] p-5">
        <p className="font-extrabold text-black">Rekisterinpitäjä</p>
        <p className="mt-2">Stylist Beta</p>
        <p>Yhteys: <a href={`mailto:${contactEmail}`} className="font-bold text-[#6d4aff]">{contactEmail}</a></p>
      </div>

      <h2 className="mt-8 text-xl font-extrabold text-black">Mitä tietoja keräämme?</h2>
      <p className="mt-3">Voimme käsitellä tekijän nimeä, yrityksen tai profiilin nimeä, sähköpostiosoitetta, vapaaehtoista puhelinnumeroa, kaupunkia, palvelukategoriaa, tekijätyyppiä, palveluja ja hintoja, sosiaalisen median linkkejä, ajanvarauslinkkiä sekä tekijän kirjoittamaa esittelyä.</p>
      <p className="mt-3">Verkkopalvelun teknisestä käytöstä voidaan käsitellä välttämättömiä loki- ja laitetietoja palvelun turvallisuuden ja toimivuuden varmistamiseksi. Emme pyydä lomakkeella arkaluonteisia henkilötietoja.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Miksi tietoja kerätään?</h2>
      <p className="mt-3">Tietoja käytetään profiilihakemuksen tarkistamiseen, tekijäprofiilin luomiseen ja ylläpitoon, yhteydenpitoon sekä palvelun laadun, turvallisuuden ja käyttökokemuksen kehittämiseen. Julkisessa profiilissa näytetään vain palvelun kannalta tarpeelliset ja tekijän julkaistavaksi hyväksymät tiedot.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Tietojen luovuttaminen</h2>
      <p className="mt-3"><b className="text-black">Tietoja ei myydä ulkopuolisille.</b> Tietoja voidaan käsitellä palvelun tuottamiseen tarvittavissa luotettavissa teknisissä palveluissa vain soveltuvan lainsäädännön ja asianmukaisten sopimusten mukaisesti.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Tietojen tarkistaminen, korjaaminen ja poistaminen</h2>
      <p className="mt-3">Voit pyytää omien tietojesi tarkistamista, korjaamista tai poistamista lähettämällä sähköpostin osoitteeseen <a href={`mailto:${contactEmail}`} className="font-bold text-[#6d4aff]">{contactEmail}</a>. Kerro viestissä, mitä profiilia pyyntö koskee. Vahvistamme tarvittaessa henkilöllisyyden ennen muutoksen tekemistä.</p>

      <h2 className="mt-8 text-xl font-extrabold text-black">Säilytys ja suojaus</h2>
      <p className="mt-3">Tietoja säilytetään vain niin kauan kuin niitä tarvitaan profiilin ylläpitoon, yhteydenpitoon tai lakisääteisten velvoitteiden täyttämiseen. Tietojen käsittely rajataan henkilöihin ja palveluihin, joille se on tehtävän suorittamiseksi tarpeen.</p>
    </LegalPage>
  );
}
