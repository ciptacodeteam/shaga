import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function GetInTouch() {
    return (
        <>
            <section>
                <div className="relative">
                    <div className="relative max-w-7xl mx-auto mb-16 rounded-xl overflow-hidden z-0">

                        <div
                            className="absolute inset-0 bg-[url('/img/img1.webp')] bg-cover bg-center"
                        >
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/80 to-transparent [background-size:100%]"></div>

                        <div className="relative p-16">
                            <h1 className="text-white font-manrope text-4xl font-medium w-1/3 leading-tight mb-10 z-10">Permudah Proses Logistik Anda Hari Ini!</h1>

                            <div className="flex justify-between items-end">
                                <p className="text-[#EEEEEE] font-manrope w-2/5 z-10">
                                    Temukan dunia logistik yang mudah dan tanpa hambatan, siap mengubah cara Anda melangkah maju.
                                </p>

                                <div>
                                    <Link
                                        href="/kontak"
                                        className="group flex items-center bg-white rounded-full px-2 py-2 transition-all duration-300 w-fit"
                                    >
                                        <span className="text-primary font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                            Konsultasi Gratis
                                        </span>

                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45">
                                            <IoIosArrowRoundForward className="text-white w-5 h-5 transition-colors duration-300" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}