import { LegalPage } from "@/components/LegalPage";

export default function Terms() {
  return <LegalPage title="Käyttöehdot" intro="Tämä on demoversio. Lopulliset käyttöehdot tarkistetaan ennen julkaisua.">
    <h2 className="text-xl font-extrabold text-black">Palvelun tarkoitus</h2>
    <p className="mt-3">Stylist Beta auttaa käyttäjiä löytämään kauneusalan tekijöitä. Tässä demoversiossa profiilit, hinnat, saatavuudet ja arvostelut ovat kuvitteellisia.</p>
    <h2 className="mt-8 text-xl font-extrabold text-black">Tekijän vastuu</h2>
    <p className="mt-3">Tekijä vastaa itse antamiensa tietojen oikeellisuudesta, ajantasaisuudesta sekä siitä, että toiminta täyttää sitä koskevat velvoitteet. Harrastaja- ja opiskelijastatus näytetään asiakkaalle selkeästi.</p>
    <h2 className="mt-8 text-xl font-extrabold text-black">Varaukset</h2>
    <p className="mt-3">Demoversio ei välitä oikeita varauksia tai maksuja. Mahdolliset yhteydenotot ja sopimukset syntyvät käyttäjän ja tekijän välillä.</p>
  </LegalPage>;
}
