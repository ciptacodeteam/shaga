import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function FindUsSection() {
    return (
        <>
            <section>
                <div className="bg-primary py-20 mb-30 inset-0 bg-[url('/img/map.webp')] bg-blend-multiply bg-cover bg-no-repeat">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-10">
                            <div className="w-1/2">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9413272794386!2d98.65997647530624!3d3.5867875503058926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131002de23245%3A0x7934cd2d6c49eb3c!2sPT.%20SHAGA%20(PT.%20SHAKTINAGARA%20GANDA%20ARTHATENTERAM%20MAKMURJAYA)!5e0!3m2!1sid!2sid!4v1760959768587!5m2!1sid!2sid" width="600" height="400" className="rounded-xl"></iframe>
                            </div>

                            <div className="w-1/2">
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="relative flex size-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                            <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                        </span>
                                        <p className="text-sm font-medium text-white uppercase font-manrope">
                                            temukan kami
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <p className="font-manrope text-5xl leading-tight text-white">
                                            Terletak strategis untuk akses mudah ke semua jalur logistik utama
                                        </p>
                                    </div>

                                    <div>
                                        <Link
                                            href="/kontak"
                                            className="group flex items-center bg-white rounded-full px-2 py-2 transition-all duration-300 w-fit"
                                        >
                                            <span className="text-primary font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1">
                                                Jalan Menuju Shaga
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
                </div>
            </section>
        </>
    )
}