import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { COMPANY } from "@/data/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const display = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const description =
  "Revenda e assistência técnica Toledo em Manaus, Boa Vista e Fortaleza. Balanças Prix, software MGV, etiquetas e manutenção.";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.siteUrl),
  title: {
    default: "A5 Tecnologia | Balanças Toledo em Manaus, Boa Vista e Fortaleza",
    template: "%s | A5 Tecnologia",
  },
  description,
  keywords: [
    "balanças Toledo",
    "balança Prix",
    "assistência técnica de balanças",
    "balanças em Manaus",
    "MGV Toledo",
    "etiquetas para balança",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "A5 Tecnologia",
    title: "A5 Tecnologia | Balanças Toledo",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#eef0ed",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
