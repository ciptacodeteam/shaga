import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Shaktinagara Ganda Arthatentram Makmurjaya – Jasa Logistik & Kepabeanan",
  description:
    "PT. Shaktinagara Ganda Arthatentram Makmurjaya adalah penyedia jasa logistik terpercaya, meliputi custom clearance, transportasi darat, laut & udara, serta bongkar muat (stevedoring) untuk kelancaran distribusi barang Anda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
