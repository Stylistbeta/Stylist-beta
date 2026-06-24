import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Stylist – löydä parturit, kampaajat ja kauneusalan tekijät",
  description: "Stylist auttaa löytämään parturit, kampaajat, kynsiteknikot, ripsiteknikot ja muut kauneusalan tekijät kaupungin ja palvelun perusteella.",
  openGraph: {
    title: "Stylist – löydä parturit, kampaajat ja kauneusalan tekijät",
    description: "Stylist auttaa löytämään parturit, kampaajat, kynsiteknikot, ripsiteknikot ja muut kauneusalan tekijät kaupungin ja palvelun perusteella.",
    url: siteUrl,
    siteName: "Stylist Beta",
    locale: "fi_FI",
    type: "website",
  },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="fi"><body><Header/><main>{children}</main><Footer/></body></html>;
}
