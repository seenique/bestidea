import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import SeoJsonLd from "@/components/SeoJsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Новая скорость разработки: ИИ‑лендинг, CRM, ERP в 10× дешевле",
  description:
    "Создаем лендинги, CRM/ERP и маркетплейсы с помощью нейросетей: 10× дешевле, запуск за 1–3 недели, эффективность до 750%.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "bestidea — ИИ‑разработка",
    description: "В 10× дешевле и в 7,5× быстрее",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "bestidea OG",
      },
    ],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
        <SeoJsonLd />
      </body>
    </html>
  );
}
