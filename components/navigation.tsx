"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/svg/logo.svg";

import { usePathname } from "next/navigation";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function NavigationBar() {
    const pathname = usePathname();

    const menus = [
        { name: "Beranda", href: "/" },
        { name: "Tentang Kami", href: "/tentang" },
        { name: "Layanan", href: "/layanan" },
        { name: "Kontak", href: "/kontak" },
    ];

    return (
        <>
            <nav>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href={""}>
                                <Image
                                    src={logo}
                                    alt=""
                                    className="w-42"
                                />
                            </Link>
                        </div>
                        <div className="flex gap-8 items-center">
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
                                                {menu.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div>
                                <Link
                                    href="/kontak"
                                    className="group flex items-center bg-primary rounded-full px-2 py-2 transition-all duration-300"
                                >
                                    <span className="text-white font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                        Hubungi Kami
                                    </span>

                                    <div className="rounded-full bg-white p-1 transition-transform duration-300 group-hover:rotate-45">
                                        <IoIosArrowRoundForward className="text-primary w-6 h-6 transition-colors duration-300 "/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}