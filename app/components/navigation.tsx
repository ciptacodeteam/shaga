"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useTranslations } from 'next-intl';
import logo from "@/public/svg/logo.svg";

export default function NavigationBar() {
    const pathname = usePathname();
    const locale = pathname.split("/")[1] || "id";
    const t = useTranslations('navigasi');

    // menu pakai key dari file translations
    const menus = [
        { key: "beranda", href: `/${locale}` },
        { key: "tentangKami", href: `/${locale}/tentangkami` },
        { key: "layanan", href: `/${locale}/layanan` },
        { key: "kontak", href: `/${locale}/kontak` },
    ];

    const languages = ["id", "en", "zh"];

    // Fungsi ganti bahasa
    const switchLocale = (newLocale: string) => {
        const segments = pathname.split("/");

        // jika belum ada locale, sisipkan
        if (!segments[1]) {
            segments.splice(1, 0, newLocale);
        } else {
            segments[1] = newLocale;
        }

        const newPath = segments.join("/") || `/${newLocale}`;
        window.location.pathname = newPath;
    };

    return (
        <nav>
            <div className="max-w-7xl mx-auto py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div>
                        <Link href={`/${locale}`}>
                            <Image
                                src={logo}
                                alt="Logo"
                                className="w-42"
                            />
                        </Link>
                    </div>

                    <div className="flex gap-8 items-center">
                        {/* Menu Navigasi */}
                        <ul className="flex items-center gap-8">
                            {menus.map((menu, idx) => {
                                const isActive = pathname === menu.href;
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={menu.href}
                                            className={`font-manrope font-medium transition-colors duration-200 ${isActive
                                                    ? "text-primary"
                                                    : "text-[#7686ab] hover:text-primary"
                                                }`}
                                        >
                                            {t(menu.key)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Tombol Kontak */}
                        <div>
                            <Link
                                href={`/${locale}/kontak`}
                                className="group flex items-center bg-primary rounded-full px-2 py-2 transition-all duration-300"
                            >
                                <span className="text-white font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                    {t('hubungikami')}
                                </span>

                                <div className="rounded-full bg-white p-1 transition-transform duration-300 group-hover:rotate-45">
                                    <IoIosArrowRoundForward className="text-primary w-6 h-6 transition-colors duration-300" />
                                </div>
                            </Link>
                        </div>

                        {/* Tombol Ganti Bahasa */}
                        <div className="flex gap-2 ms-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => switchLocale(lang)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${locale === lang
                                            ? "bg-primary text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                                        }`}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
