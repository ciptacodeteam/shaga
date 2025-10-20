import logowhite from "@/public/svg/logowhite.svg"

import Image from "next/image"
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"

export default function FooterSection() {
    return (
        <>
            <section>
                <div className="bg-primary">
                    <div className="max-w-7xl mx-auto pt-20 pb-8">
                        <div className="flex justify-between">
                            <div>
                                <Image
                                    src={logowhite}
                                    alt=""
                                    className="w-60"
                                />
                            </div>
                            <div>
                                <h1 className="font-manrope text-4xl text-white font-medium text-right max-w-lg leading-tight">
                                    Masa Depan Pengiriman di Perkotaan Dimulai Dari Sini
                                </h1>
                            </div>
                        </div>

                        <div className="mt-24">
                            <div className="grid grid-cols-2 gap-12">
                                <div>
                                    <h1 className="font-manrope text-white text-2xl font-medium">Tetap Terhubung Dengan Kami</h1>

                                    <p className="font-manrope text-[#EEEEEE] mt-10 max-w-lg">Bergabunglah dengan komunitas kami untuk mendapatkan wawasan eksklusif dan solusi inovatif untuk semua kebutuhan logistik Anda.</p>

                                    <div className="mt-12">
                                        <Link
                                            href="/kontak"
                                            className="group flex items-center bg-white rounded-full px-2 py-2 transition-all duration-300 w-fit"
                                        >
                                            <span className="text-primary font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                                Mulai Kirim Sekarang
                                            </span>

                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45">
                                                <IoIosArrowRoundForward className="text-white w-5 h-5 transition-colors duration-300" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <div className="grid grid-cols-3 gap-36">
                                        <div>
                                            <h1 className="font-manrope text-white text-2xl font-semibold mb-10">Perusahaan</h1>

                                            <div className="flex flex-col space-y-4">
                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Beranda
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Tentang kami
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Layanan
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Kontak
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className="font-manrope text-white text-2xl font-semibold mb-10">Dukungan</h1>

                                            <div className="flex flex-col space-y-4">
                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    FAQ
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Layanan Pelanggan
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Pelacakan
                                                </Link>
                                            </div>
                                        </div>

                                        <div>
                                            <h1 className="font-manrope text-white text-2xl font-semibold mb-10">Layanan</h1>

                                            <div className="flex flex-col space-y-4">
                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Darat
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Udara
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Laut
                                                </Link>

                                                <Link
                                                    href={""}
                                                    className="font-manrope text-[#EEEEEE] text-lg"
                                                >
                                                    Kereta
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[0.5px] bg-[#bdbdbd] mt-16">
                        </div>

                        <div className="text-center">
                            <p className="font-manrope text-white text-sm mt-8"> ©{new Date().getFullYear()} Shaga. All Rights Reserved. Designed & Developed by <span><Link href={""}>Ciptacode</Link></span>.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}