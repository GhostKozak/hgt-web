import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  weight: ["400", "500", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HGT Taşımacılık",
  description: "Hızlı Güvenli Teslimat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${urbanist.className} flex h-full flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
