import type { Metadata } from "next";
import { Geist } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PureAura Haus — Construction · Rénovation · Nettoyage professionnel · Dépannage BTP à Marseille",
  description:
    "PureAura Haus : construction neuve, rénovation de A à Z, nettoyage professionnel et dépannage BTP à Marseille. Gros œuvre, second œuvre, finitions. Intervention rapide et qualité premium.",
  keywords: [
    "construction Marseille",
    "rénovation Marseille",
    "rénovation appartement Marseille",
    "construction maison Marseille",
    "nettoyage professionnel Marseille",
    "remise en état",
    "dépannage BTP Marseille",
    "gros œuvre Marseille",
    "second œuvre",
    "plomberie électricité Marseille",
    "rénovation complète",
    "fin de chantier",
    "maintenance immobilière",
    "PureAura Haus",
  ],
  openGraph: {
    title: "PureAura Haus — Construction · Rénovation · Nettoyage · Dépannage BTP",
    description:
      "Trois pôles d'expertise à Marseille : construction & rénovation de A à Z, nettoyage professionnel et dépannage BTP. Intervention rapide, qualité premium.",
    locale: "fr_FR",
    type: "website",
    siteName: "PureAura Haus",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pureaurahaus.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
