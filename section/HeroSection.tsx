import Link from "next/link";
import Image from "next/image";

import tracking1 from "@/public/svg/tracking1.svg";
import tracking2 from "@/public/svg/tracking2.svg";

import { IoIosArrowRoundForward } from "react-icons/io";
import { BiMapPin } from "react-icons/bi";

export default function HeroSection() {
    return (
        <section className="relative mb-20">
            <div className="mx-8 relative h-[700px] rounded-xl overflow-hidden z-0">
                {/* Gambar Background */}
                <div
                    className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"
                >
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/60 to-transparent [background-size:100%] z-10"></div>

                {/* Text Content */}
                <div className="relative z-20 flex flex-col justify-between h-full px-16 text-white py-16">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl leading-18 font-medium mb-4 font-manrope">
                            Menjangkau Dunia Lewat Darat, Laut, dan Udara
                        </h1>
                        <p className="text-base text-white mb-6 font-manrope">
                            Kami menghadirkan solusi logistik melalui jalur darat, laut, dan udara, memastikan setiap pengiriman tiba tepat waktu, dengan keamanan dan pelayanan terbaik di setiap langkahnya.
                        </p>
                    </div>

                    {/* Tombol CTA */}
                    <div className="flex justify-between items-end">
                        <div className="flex gap-6">
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

                        <div className="bg-white rounded-lg py-4 px-5 flex items-center gap-4 w-[400] h-auto">
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <p className="text-primary font-semibold font-manrope">Kami <span className="text-secondary">menjangkau</span> pengiriman ke seluruh <span className="text-secondary">dunia</span>.</p>
                                </div>
                                <div>
                                    <Link href="">
                                        <button className="text-white bg-primary text-sm py-2 px-5 rounded-full cursor-pointer transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 font-manrope">
                                            Mulai Kirim Sekarang
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="bg-[url('/img/transportation.webp')] w-42 h-32 bg-no-repeat bg-cover bg-center rounded-lg">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute right-20 top-16 z-10">
                    <div className="flex gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white transition-transform duration-300 group-hover:rotate-45">
                            <BiMapPin className="text-primary w-5 h-5 transition-colors duration-300" />
                        </div>
                        <div className="bg-white font-manrope text-primary h-10 rounded-full font-semibold flex items-center px-4">
                            Pelabuhan di Belawan
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <Image
                            src={tracking1}
                            alt="Tracking"
                            className="absolute top-32 right-64 w-52 h-52 mb-4 mr-4 z-10"
                        />
                    </div>

                    <div>
                        <Image
                            src={tracking2}
                            alt="Tracking"
                            className="absolute top-72 right-96 w-52 h-52 mb-4 mr-4 z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
