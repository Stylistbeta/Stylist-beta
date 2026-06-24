# Stylist Beta – seuraavat kehitysvaiheet

## 1. Oikea tietokanta

- [ ] Luo Supabase-projekti ja tietokantataulut tekijöille, palveluille, kuville, saatavuudelle ja arvosteluille.
- [ ] Lisää Row Level Security -säännöt ennen tuotantodatan tallentamista.
- [ ] Toteuta `SupabaseProfessionalsRepository` nykyisen repository-rajapinnan taakse.
- [ ] Lisää migraatiot ja kehitysympäristön seed-data.

## 2. Kirjautuminen tekijöille

- [ ] Lisää Supabase Auth sähköpostilinkillä tai vahvistuskoodilla.
- [ ] Erota asiakas-, tekijä- ja ylläpitäjäroolit.
- [ ] Suojaa hallintareitit palvelinpuolella.

## 3. Profiilin muokkaus

- [ ] Tee tekijälle hallintanäkymä perustietojen, hintojen ja palveluiden muokkaamiseen.
- [ ] Lisää kuvien lataus, optimointi ja turvallinen tiedostotyyppien tarkistus.
- [ ] Lisää luonnos-, tarkistuksessa- ja julkaistu-tilat.

## 4. Oikeat varaukset

- [ ] Mallinna palveluiden kestot, työajat, tauot ja vapaat ajat.
- [ ] Estä päällekkäiset varaukset tietokantatasolla.
- [ ] Lisää varausvahvistukset, peruutukset ja sähköposti-ilmoitukset.
- [ ] Selvitä ulkoisten kalenterien sekä Timma- ja Fresha-linkkien integraatiot.

## 5. Arvostelujen tarkistus

- [ ] Salli arvostelu vain toteutuneen varauksen jälkeen.
- [ ] Lisää moderointi, ilmoitustoiminto ja ylläpitäjän tarkistusjono.
- [ ] Dokumentoi arvostelujen poistamisen ja oikaisun periaatteet.

## 6. Maksulliset paketit

- [ ] Vahvista lopulliset pakettien ominaisuudet ja hinnat.
- [ ] Lisää Stripe-tilaukset, laskutusportaali ja webhookien allekirjoitusten tarkistus.
- [ ] Tallenna käyttöoikeudet tietokantaan palvelinpuolisesti.
- [ ] Huomioi ALV, laskutustiedot, peruutukset ja maksujen epäonnistumistilanteet.

## Ennen julkista tuotantojulkaisua

- [ ] Juristin tarkistamat tietosuoja- ja käyttöehtotekstit.
- [ ] Evästeiden ja analytiikan suostumushallinta tarvittaessa.
- [ ] Saavutettavuustarkistus, suorituskykymittaus ja laajemmat automaattitestit.
- [ ] Varmuuskopiointi, lokitus, virheseuranta ja palautussuunnitelma.
