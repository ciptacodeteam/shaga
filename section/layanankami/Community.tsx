import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CommunitySection() {
    return (
        <>
            <section className="relative mb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-16 items-center">

                        <div className="w-1/2 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                </span>
                                <p className="text-sm font-medium text-primary uppercase font-manrope">
                                    KOMUNITAS KAMI
                                </p>
                            </div>

                            <div className="mb-8">
                                <p className="font-manrope text-5xl leading-tight text-primary">
                                    Bergabunglah dengan <span className="text-secondary">Komunitas Mitra Bisnis</span> dan Logistik yang Terus Berkembang
                                </p>
                            </div>

                            <div>
                                <p className="font-manrope text-primary mb-10">
                                    Bergabunglah dengan komunitas dinamis berisi pelaku bisnis dan mitra logistik, untuk mengoptimalkan rantai pasokan dan mendorong pertumbuhan.
                                </p>
                            </div>

                            <div>
                                <Link
                                    href="/kontak"
                                    className="group flex items-center border border-primary rounded-full px-2 py-2 transition-all duration-300 w-fit hover:bg-white/10"
                                >
                                    <span className="text-primary font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                        Pelajari Lebih Lanjut
                                    </span>

                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 transition-transform duration-300  group-hover:rotate-45">
                                        <IoIosArrowRoundForward className="text-primary group-hover:text-primary w-5 h-5 transition-colors duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="w-1/2 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="border border-[#E0E6F3] p-8 rounded-xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-manrope text-primary text-7xl font-semibold tracking-tight">25</h1>
                                        <p className="font-manrope text-[#556996] text-2xl font-medium mt-8 text-center">Tahun Pengalaman di Industri</p>
                                    </div>
                                </div>

                                <div className="border border-[#E0E6F3] p-8 rounded-xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-manrope text-primary text-7xl font-semibold tracking-tight">300<span>+</span></h1>
                                        <p className="font-manrope text-[#556996] text-2xl font-medium mt-8 text-center">Karyawan untuk Kesuksesan Anda</p>
                                    </div>
                                </div>

                                <div className="border border-[#E0E6F3] p-8 rounded-xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-manrope text-primary text-7xl font-semibold tracking-tight">500<span>+</span></h1>
                                        <p className="font-manrope text-[#556996] text-2xl font-medium mt-8 text-center">Klien Puas di Seluruh Dunia</p>
                                    </div>
                                </div>

                                <div className="border border-[#E0E6F3] p-8 rounded-xl">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-manrope text-primary text-7xl font-semibold tracking-tight">99<span>%</span></h1>
                                        <p className="font-manrope text-[#556996] text-2xl font-medium mt-8 text-center">Tingkat Pengiriman Tepat Waktu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}