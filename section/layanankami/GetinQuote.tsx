import Link from "next/link";
import Image from "next/image";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function GetinQuote() {
    return (
        <>
            <div className="max-w-7xl mx-auto mb-16">
                <div className="bg-primary inset-0 bg-[url('/img/map.webp')] bg-blend-overlay  bg-cover bg-no-repeat p-12 rounded-xl">
                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="mb-6">
                                <p className="font-manrope text-5xl leading-tight font-medium text-white capitalize">
                                    Permudah proses logistik Anda hari ini!
                                </p>
                            </div>

                            <div>
                                <p className="font-manrope text-white mb-10">
                                    Temukan dunia logistik yang mudah dan lancar, siap mengubah cara Anda melangkah maju.
                                </p>
                            </div>

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
        </>
    )
}