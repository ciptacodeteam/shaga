import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "PT. Shaktinagara Ganda Arthatentram Makmurjaya - Jasa Logistik & Kepabeanan",
    template: "%s | PT. Shaktinagara Ganda Arthatentram Makmurjaya",
  },
  description:
    "PT. Shaktinagara Ganda Arthatentram Makmurjaya adalah penyedia jasa logistik terpercaya, meliputi custom clearance, transportasi darat, laut & udara, serta bongkar muat (stevedoring) untuk kelancaran distribusi barang Anda.",
  keywords: [
    "PT Shaktinagara Ganda Arthatentram Makmurjaya",
    "jasa logistik laut",
    "jasa logistik darat",
    "logistik",
    "pengiriman logistik",
    "jasa logistik",
    "jasa darat",
    "jasa kepabeanan",
    "custom clearance",
    "transportasi laut",
    "transportasi udara",
    "transportasi darat",
    "stevedoring",
  ],
  authors: [{ name: "PT. Shaktinagara Ganda Arthatentram Makmurjaya" }],
  creator: "PT. Shaktinagara Ganda Arthatentram Makmurjaya",
  publisher: "PT. Shaktinagara Ganda Arthatentram Makmurjaya",
  metadataBase: new URL("https://shagalogistics.com"),
  alternates: {
    canonical: "https://shagalogistics.com",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://shagalogistics.com",
    siteName: "PT. Shaktinagara Ganda Arthatentram Makmurjaya",
    title: "Jasa Logistik & Kepabeanan Terpercaya di Indonesia",
    description:
      "Kami melayani jasa logistik, kepabeanan, transportasi laut, udara & darat dengan layanan profesional dan terpercaya.",
    images: [
      {
        url: "/img/avatar.png",
        width: 1200,
        height: 1200,
        alt: "PT. Shaktinagara Ganda Arthatentram Makmurjaya",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${manrope.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
