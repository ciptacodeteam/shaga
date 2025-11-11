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
      "SHAGA LOGISTICS - PPJK | EMKL | Trucking | Warehousing",
    template: "%s | PT. Shaktinagara Ganda Arthatentram Makmurjaya",
  },
  description:
    "SHAGA Logistics berdiri sejak 2007. Jl. Mengkara No.2, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111. Phone: 0811 6383 887. Email: shaga3729@gmail.com",
  keywords: [
    "PT shaga",
    "shaga",
    "PT Shaktinagara Ganda Arthatentram Makmurjaya",
    "jasa logistik laut",
    "jasa logistik darat",
    "logistik",
    "pengiriman logistik",
    "jasa logistik",
    "jasa darat",
    "jasa kepabeanan",
    "transportasi laut",
    "transportasi udara",
    "transportasi darat",
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
    title: "SHAGA LOGISTICS - PPJK | EMKL | Trucking | Warehousing",
    description:
      "SHAGA Logistics berdiri sejak 2007. Jl. Mengkara No.2, Petisah Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20111. Phone: 0811 6383 887. Email: shaga3729@gmail.com",
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
