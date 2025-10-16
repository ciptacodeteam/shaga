import Image from "next/image";

import truck from "@/public/img/truck.webp"

export default function VisionMissionSection() {
    return (
        <>
            <section className="relative mb-38">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                </span>
                                <p className="text-sm font-medium text-primary uppercase font-manrope">
                                    SHAGA SIAP MELAYANI ANDA
                                </p>
                            </div>
                            <div className="mb-12">
                                <p className="font-manrope text-5xl leading-tight text-primary">Kami menyediakan <span className="text-secondary">layanan logistik</span> untuk pengiriman yang <span className="text-secondary">tepat waktu dan aman.</span></p>
                            </div>

                            <div className="space-y-12">
                                <div className="grid grid-cols-5 gap-20">
                                    <div className="col-span-1">
                                        <p className="text-secondary font-semibold text-lg font-manrope">01</p>
                                        <p className="text-secondary font-semibold text-lg font-manrope">Visi</p>
                                    </div>
                                    <div className="col-span-4">
                                        <p className="text-primary font-manrope">
                                            Menjadi pemimpin global dalam industri logistik dengan menghadirkan solusi yang lancar, andal, dan inovatif untuk mendorong kesuksesan serta pertumbuhan berkelanjutan bagi bisnis di seluruh dunia.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-5 gap-20">
                                    <div className="col-span-1">
                                        <p className="text-secondary font-semibold text-lg font-manrope">02</p>
                                        <p className="text-secondary font-semibold text-lg font-manrope">Misi</p>
                                    </div>
                                    <div className="col-span-4">
                                        <p className="text-primary font-manrope">
                                            Kami menghubungkan bisnis dengan rantai pasok yang efisien dan terpadu melalui solusi logistik yang inovatif dan bertanggung jawab, yang meningkatkan kinerja operasional, mengurangi biaya, serta mendorong pertumbuhan di pasar global yang dinamis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute right-0">
                            <Image
                                alt=""
                                src={truck}
                                className="w-[500px] lg:w-[650px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
