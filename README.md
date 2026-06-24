# Stylist Beta

Stylist Beta on suomalaisen kauneusalan tekijöiden löytö- ja varauspalvelun käyttöliittymädemo. Projekti on rakennettu Next.js 16:lla, Reactilla, TypeScriptillä ja Tailwind CSS:llä.

Nykyinen versio käyttää paikallista demo-dataa. Maksuja, oikeaa kirjautumista tai oikeita varauksia ei vielä käsitellä.

## Vaatimukset

- Node.js 20.9 tai uudempi
- npm 10 tai uudempi

## Asennus

```bash
git clone <repository-url>
cd stylist-beta
npm install
```

Kopioi ympäristömuuttujien malli:

```bash
cp .env.example .env.local
```

Windows PowerShellissa:

```powershell
Copy-Item .env.example .env.local
```

Nykyinen demo toimii myös ilman ympäristömuuttujia. Julkaistussa versiossa `NEXT_PUBLIC_SITE_URL` kannattaa asettaa oikeaan verkkotunnukseen.

## Kehityspalvelin

```bash
npm run dev
```

Avaa [http://localhost:3000](http://localhost:3000).

## Tarkistukset ja tuotantoversio

```bash
npm test
npm run build
npm run start
```

- `npm test` tarkistaa TypeScript-tyypityksen.
- `npm run build` luo optimoidun tuotantoversion.
- `npm run start` käynnistää valmiin tuotantoversion paikallisesti.

## Demo-datan muokkaaminen

Demo-tekijät sijaitsevat tiedostossa `data/professionals.ts`.

1. Lisää tai muokkaa `Professional`-objektia.
2. Käytä uniikkia, URL-kelpoista `id`-arvoa, esimerkiksi `studio-aura`.
3. Täytä kaikki tyypin vaatimat kentät, kuten palvelut, hinta, saatavuus ja arvostelut.
4. Käytä `type`-kentässä vain arvoja `business`, `student` tai `hobbyist`.
5. Tarkista lopuksi `npm test` ja `npm run build`.

Profiilin osoite muodostuu automaattisesti muodossa `/professional/[id]`. Älä käytä oikeiden yritysten nimiä, logoja tai kuvia demodatassa ilman lupaa.

## Datarakenne ja Supabase-valmius

Sivut eivät lue demo-dataa suoraan. Ne käyttävät rajapintaa `lib/data/professionals-repository.ts`, jonka nykyinen toteutus on `DemoProfessionalsRepository`.

Supabaseen siirryttäessä:

1. Luo `SupabaseProfessionalsRepository`, joka toteuttaa `ProfessionalsRepository`-rajapinnan.
2. Muunna tietokantarivit sovelluksen `Professional`-muotoon repository-kerroksessa.
3. Vaihda aktiivinen toteutus tiedostossa `lib/data/index.ts`.
4. Lisää Supabase-avaimet Vercelin ympäristömuuttujiin.

Näin sivut, hakufiltterit ja käyttöliittymäkomponentit eivät vaadi uudelleenkirjoitusta tietolähteen vaihtuessa.

## Julkaisu Verceliin

### Git-integraatiolla

1. Vie projekti GitHubiin, GitLabiin tai Bitbucketiin.
2. Kirjaudu Verceliin ja valitse **Add New → Project**.
3. Tuo projektin repository.
4. Vercel tunnistaa Next.js-projektin automaattisesti. Build-komento on `npm run build`; Output Directory -kenttä jätetään oletukseksi.
5. Lisää Project Settings → Environment Variables -kohtaan vähintään:
   - `NEXT_PUBLIC_SITE_URL=https://oma-domain.fi`
6. Valitse **Deploy**.

Jokainen tuotantohaaraan tehty push luo uuden tuotantojulkaisun. Muut haarat saavat automaattisen esikatseluosoitteen.

### Vercel CLI:llä

```bash
npx vercel
npx vercel --prod
```

Ensimmäinen komento yhdistää paikallisen projektin Verceliin. Jälkimmäinen julkaisee tuotantoon.

## Projektin rakenne

- `app/` – sivut, reitit sekä loading-, error- ja SEO-tiedostot
- `components/` – uudelleenkäytettävät käyttöliittymäkomponentit
- `data/` – domain-tyypit ja demo-data
- `lib/data/` – tietolähteen repository-rajapinta ja toteutukset
- `lib/search.ts` – testattava hakusuodatus
- `TODO.md` – seuraavat kehitysvaiheet

## Tietoturvahuomio

Älä koskaan lisää `.env.local`-tiedostoa versionhallintaan. `SUPABASE_SERVICE_ROLE_KEY` on vain palvelinpuolen käyttöön eikä sitä saa nimetä `NEXT_PUBLIC_`-alkuiseksi.
