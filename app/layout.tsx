import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stylist Beta – löydä parturit, kampaajat ja kauneusalan tekijät",
  description: "Etsi partureita, kampaamoita, kynsiteknikoita, ripsitekijöitä ja muita kauneusalan tekijöitä ympäri Suomen.",
  openGraph: {
    title: "Stylist Beta – löydä kauneusalan tekijä läheltäsi",
    description: "Parturit, kampaamot ja kauneusalan tekijät ympäri Suomen yhdessä palvelussa.",
    url: siteUrl,
    siteName: "Stylist Beta",
    locale: "fi_FI",
    type: "website",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fi"><body><Header/><main>{children}</main><Footer/></body></html>;
}
