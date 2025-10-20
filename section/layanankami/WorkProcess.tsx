"use client"

import Image from "next/image"

import { useState } from "react";

export default function WorkProcess() {
    const steps = [
        {
            number: "01",
            title: "Konsultasi Mendalam",
            description:
                "Penilaian strategis terhadap kebutuhan logistik Anda guna menghadirkan solusi yang optimal dan sesuai dengan tujuan bisnis Anda.",
            icon: "/img/1active.webp",
        },
        {
            number: "02",
            title: "Perencanaan Strategis",
            description:
                "Menyusun strategi terpadu guna menjamin proses pengiriman barang yang efektif, efisien, dan tepat waktu.",
            icon: "/img/2active.webp",
        },
        {
            number: "03",
            title: "Eksekusi Efisien",
            description:
                "Mengoordinasikan setiap detail proses pengiriman dengan cermat untuk memastikan pelaksanaan yang lancar dan tepat waktu.",
            icon: "/img/3active.webp",
        },
        {
            number: "04",
            title: "Pengiriman Tepat Waktu",
            description:
                "Pendekatan mendalam terhadap kebutuhan logistik Anda guna menghadirkan solusi yang paling efektif dan andal.",
            icon: "/img/4active.webp",
        },
    ];

    const [activeStep, setActiveStep] = useState(steps[0]);

    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-30">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                        </span>
                        <p className="text-sm font-medium text-primary uppercase font-manrope">
                            proses kerja
                        </p>
                    </div>

                    <div className="mb-10">
                        <p className="font-manrope text-5xl leading-tight text-primary">
                            <span className="text-secondary">Proses Teruji</span> Kami untuk Meraih Keunggulan
                        </p>
                    </div>

                    <div className="flex gap-16">
                        <div className="w-1/2">
                            <p className="text-[#2A437C] font-manrope">Proses kami sederhana namun efektif. Setiap proyek memang berbeda, tetapi kami telah menangani ribuan proyek sejak pertama kali berdiri. Pengalaman kami adalah aset berharga bagi Anda.</p>

                            <Image
                                src={activeStep.icon}
                                alt={activeStep.title}
                                width={1000}
                                height={300}
                                className="bg-[#E0E6F3] px-8 rounded-xl mt-16 py-2"
                            />
                        </div>

                        <div className="w-1/2 space-y-8">
                            {steps.map((step) => (
                                <div
                                    key={step.number}
                                    onMouseEnter={() => setActiveStep(step)}
                                    className="cursor-pointer group py-6 relative"
                                >
                                    {/* Garis atas */}
                                    <span
                                        className={`absolute left-0 top-0 w-full h-[1px] bg-[#E0E6F3] transition-300 origin-left ${activeStep.number === step.number
                                                ? "scale-x-100"
                                                : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></span>

                                    {/* Garis bawah */}
                                    <span
                                        className={`absolute left-0 bottom-0 w-full h-[1px] bg-[#E0E6F3] transition-300 origin-left ${activeStep.number === step.number
                                                ? "scale-x-100"
                                                : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></span>

                                    <div className="flex items-center gap-10">
                                        {/* Kolom angka dengan lebar tetap */}
                                        <div className="w-18 flex justify-start">
                                            <span
                                                className="text-7xl font-medium font-manrope leading-none text-[#B4BED5]"
                                            >
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Kolom teks */}
                                        <div>
                                            <h3 className="text-primary font-medium text-2xl font-manrope mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#2A437C] font-manrope text-sm">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}