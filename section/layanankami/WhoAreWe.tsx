import Image from "next/image";

import sea from "@/public/img/sea.webp"
import { BsPatchCheck } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

export default function WhoAreWeSection() {
    return (
        <>
            <section className="relative mb-30">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-16">
                        {/* Text Section */}
                        <div className="w-3/5 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                </span>
                                <p className="text-sm font-medium text-primary uppercase font-manrope">
                                    Mengenal Kami Lebih Dekat
                                </p>
                            </div>

                            <div className="mb-8">
                                <p className="font-manrope text-5xl leading-tight text-primary">
                                    Kami fokus dalam <span className="text-secondary">layanan logistik menyeluruh</span> untuk memastikan pengiriman tepat waktu dan aman.
                                </p>
                            </div>

                            <div>
                                <p className="font-manrope text-primary mb-10">
                                    Tim kami yang berdedikasi bekerja tanpa henti untuk memberikan solusi yang disesuaikan bagi berbagai bisnis dari semua skala, membantu Anda mencapai tujuan dengan mudah dan andal. Mulai dari layanan kepabeanan hingga pengiriman last-mile, kami berkomitmen terhadap kualitas dan ketelitian di setiap layanan yang kami berikan.
                                </p>
                            </div>

                            <div className="rounded-t-xl bg-[#EEF4FF]">
                                <p className="font-manrope text-primary font-semibold p-6">
                                    Kami menyederhanakan proses logistik dengan teknologi canggih, sehingga Anda dapat fokus pada pertumbuhan bisnis
                                </p>
                                <div className="bg-secondary w-full h-1.5"></div>
                            </div>
                        </div>

                        <div className="w-2/5 relative">
                            <div className="h-full w-full relative">
                                <Image
                                    src={sea}
                                    alt=""
                                    fill
                                    className="object-cover rounded-xl"
                                    style={{ position: "absolute" }}
                                />

                                <div className="absolute bottom-0 left-0 p-6">
                                    <div className="bg-white p-6 rounded-lg">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <BsPatchCheck className="text-primary w-6 h-6" />
                                                <p className="font-manrope text-primary font-medium">Dipercaya</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <IoPeopleOutline className="text-primary w-6 h-6" />
                                                <p className="font-manrope text-primary font-medium">Prioritas</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <HiOutlineLightBulb className="text-primary w-6 h-6" />
                                                <p className="font-manrope text-primary font-medium">Inovasi</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <AiOutlineDeploymentUnit className="text-primary w-6 h-6" />
                                                <p className="font-manrope text-primary font-medium">Keberlanjutan</p>
                                            </div>
                                        </div>
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