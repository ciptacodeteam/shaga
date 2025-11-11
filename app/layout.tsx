import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SHAGA LOGISTICS - PPJK | EMKL | Trucking | Warehousing",
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
    "物流",
    "清关 ",
    "报关 ",
    "仓储",
    "卡车运输 ",
    "陆运 ",
    "码头装卸 ",
    "货运代理 ",
    "印度尼西亚 ",
    "印尼 ",
    "中国到印尼 ",
    "印尼物流",
    "印尼清关",
    "印尼仓储服务 ",
    "雅加达",
    "印尼进口",
    "印尼物流公司",
    "印尼专业清关 ",
    "中国到印尼货运",
    "印尼进口关税 ",
    "印尼报关行 ",
    "一站式物流服务",
    "Logistics services Indonesia",
    "Customs clearance",
    "Indonesia customs broker",
    "Freight forwarding Indonesia",
    "Trucking services Indonesia",
    "Inland transport Indonesia",
    "Warehousing and distribution Indonesia",
    "Stevedoring services Belawan",
    "Port handling services Indonesia",
    "Third-party logistics (3PL) Indonesia",
    "Target Audience & Trade Lane Keywords",
    "China to Indonesia shipping",
    "Shipping from China to Indonesia",
    "Import from China to Indonesia",
    "China-Indonesia logistics solutions",
    "Indonesia logistics partner for Chinese companies",
    "Handling imports from China",
    "Customs clearance for China imports",
    "Long-Tail & Problem-Solving Keywords",
    "Best customs broker in Indonesia for China goods",
    "Reliable trucking company Indonesia",
    "How to import goods to Indonesia from China",
    "ndonesia import tax and duty calculation",
    "Bonded warehouse services in Indonesia",
    "Full-service logistics for imports Indonesia"
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
      <meta name="google-site-verification" content="AQojUHUZankhYZIwjvSQ36gXhavzXhKfYJ4D8-V4TDQ" />
      <body
        className={`${manrope.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
