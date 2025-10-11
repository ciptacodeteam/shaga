import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function TransformSection() {
    return (
        <>
            <section>
                <div className="relative bg-[url('/img/mountain.webp')] bg-no-repeat bg-cover w-full py-36">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001E62] to-transparent"></div>

                    {/* Content */}
                    <div className="relative max-w-7xl mx-auto">
                        <div>
                            <p className="text-white font-manrope text-5xl leading-tight w-5/6">
                                Kami menghadirkan inovasi strategis dalam logistik untuk mendukung pertumbuhan pasar yang berkelanjutan.
                            </p>
                        </div>

                        <div className="flex mt-24 justify-between items-end">
                            <p className="font-manrope text-white w-3/5">
                                Mentransformasi logistik dengan solusi inovatif melalui pemanfaatan teknologi canggih dan strategi berbasis data untuk meningkatkan efisiensi, menekan biaya, serta memenuhi permintaan pasar yang terus berkembang.
                            </p>

                            <div>
                                <Link
                                    href="/kontak"
                                    className="group flex items-center border border-white rounded-full px-2 py-2 transition-all duration-300 w-fit hover:bg-white/10"
                                >
                                    <span className="text-white font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                        Pelajari Lebih Lanjut
                                    </span>

                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 transition-transform duration-300 group-hover:bg-white group-hover:rotate-45">
                                        <IoIosArrowRoundForward className="text-white group-hover:text-primary w-5 h-5 transition-colors duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}