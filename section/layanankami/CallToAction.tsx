import Image from "next/image";

import sea from "@/public/img/sea.webp"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CtaSection() {
    return (
        <>
            <div className="max-w-7xl mx-auto mb-16">
                <div className="bg-primary p-12 rounded-xl">
                    <div className="flex gap-12">
                        <div className="w-2/5 relative">
                            <div className="h-full w-full relative">
                                <Image
                                    src={sea}
                                    alt=""
                                    fill
                                    className="object-cover rounded-xl"
                                    style={{ position: "absolute" }}
                                />
                            </div>
                        </div>

                        <div className="w-3/5 flex flex-col justify-center">
                            <div className="mb-8">
                                <p className="font-manrope text-5xl leading-tight font-medium text-white capitalize">
                                    Percayakan kargo Anda kepada tim kami
                                </p>
                            </div>

                            <div>
                                <p className="font-manrope text-white mb-10">
                                    Tim berpengalaman kami memastikan kago Anda ditangani dengan sangat hati-hati, menghadirkan pengiriman yang aman dan tepat waktu di setiap tahap prosesnya.
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