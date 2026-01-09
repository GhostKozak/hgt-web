import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HGT Taşımacılık | Hızlı ve Güvenli Lojistik",
    template: "%s | HGT Taşımacılık",
  },
  description:
    "HGT Taşımacılık ile yük taşımacılığı, depolama ve tedarik zinciri çözümleri. Güvenilir, hızlı ve ölçeklenebilir lojistik hizmetleri.",
  keywords: [
    "lojistik",
    "yük taşıma",
    "nakliye",
    "depolama",
    "istanbul lojistik",
  ],
  appleWebApp: {
    title: "HGT",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "HGT Taşımacılık",
    description: "Hızlı ve Güvenli Teslimat Çözümleri",
    url: "https://hgttasimacilik.com/",
    siteName: "HGT Taşımacılık",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="HGT" />
      <link rel="manifest" href="/site.webmanifest" />
      <body
        className={`${urbanist.className} flex h-full w-full flex-col antialiased`}
      >
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
