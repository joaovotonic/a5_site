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
  icons: {
    icon: [
      { url: "/icon.svg?v=a5", type: "image/svg+xml" },
      { url: "/favicon.ico?v=a5", sizes: "any" },
      { url: "/icon-192.png?v=a5", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=a5", sizes: "180x180" }],
    shortcut: "/favicon.ico?v=a5",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a5fb4",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.svg?v=a5" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico?v=a5" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=a5" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
