"use client";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";

export default function WorkSection() {
    const steps = [
        {
            number: "01",
            title: "Konsultasi Mendalam",
            description:
                "Penilaian strategis terhadap kebutuhan logistik Anda guna menghadirkan solusi yang optimal dan sesuai dengan tujuan bisnis Anda.",
            icon: "/img/1nonactive.webp",
            iconActive: "/img/1active.webp",
        },
        {
            number: "02",
            title: "Perencanaan Strategis",
            description:
                "Menyusun strategi terpadu guna menjamin proses pengiriman barang yang efektif, efisien, dan tepat waktu.",
            icon: "/img/2nonactive.webp",
            iconActive: "/img/2active.webp",
        },
        {
            number: "03",
            title: "Eksekusi Efisien",
            description:
                "Mengoordinasikan setiap detail proses pengiriman dengan cermat untuk memastikan pelaksanaan yang lancar dan tepat waktu.",
            icon: "/img/3nonactive.webp",
            iconActive: "/img/3active.webp",
        },
        {
            number: "04",
            title: "Pengiriman Tepat Waktu",
            description:
                "Pendekatan mendalam terhadap kebutuhan logistik Anda guna menghadirkan solusi yang paling efektif dan andal.",
            icon: "/img/4nonactive.webp",
            iconActive: "/img/4active.webp",
        },
    ];

    const swiperRef = useRef<any>(null);

    // auto mulai dari slide ke-2 (index 1)
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(1);
        }
    }, []);

    return (
        <section className="bg-[#001E62] py-10 mb-30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-green-400"></span>
                        </span>
                        <p className="text-sm font-medium text-white uppercase font-manrope">
                            proses kerja
                        </p>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
                        <h1 className="font-manrope text-4xl md:text-5xl text-white">
                            Proses Kerja Kami
                        </h1>
                        <p className="text-white font-manrope md:w-2/5">
                            Proses kami sederhana namun efektif. Mulai dari konsultasi awal
                            untuk memahami kebutuhan logistik Anda, hingga perencanaan dan
                            pelaksanaan yang matang, kami memastikan setiap detail ditangani
                            dengan presisi.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    spaceBetween={24}
                    breakpoints={{
                        768: { slidesPerView: 2.3 },
                        1024: { slidesPerView: 2.6 },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="px-6 md:px-16 !pb-20 swiper-section-3"
                >
                    {steps.map((step) => (
                        <SwiperSlide key={step.number}>
                            {({ isActive }) => (
                                <div
                                    className={`transition-all duration-300 rounded-xl p-8 flex flex-col justify-between text-left cursor-pointer ${isActive
                                        ? "bg-[#E0E6F3]"
                                        : "bg-primary"
                                        }`}
                                >
                                    <div className="flex flex-col justify-center items-center">
                                        <div>
                                            <span
                                                className={`text-2xl font-manrope font-semibold ${isActive ? "text-primary" : "text-[#B4BED5]"
                                                    }`}
                                            >
                                                {step.number}
                                            </span>
                                            <h3
                                                className={`text-3xl font-manrope font-semibold mt-2 mb-3 ${isActive ? "text-primary" : "text-[#E0E6F3]"
                                                    }`}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className={`text-sm font-manrope ${isActive ? "text-primary" : "text-[#B4BED5]"
                                                    }`}
                                            >
                                                {step.description}
                                            </p>
                                        </div>

                                        <div>
                                            <Image
                                                src={isActive ? step.iconActive : step.icon}
                                                alt={step.title}
                                                width={500}
                                                height={60}
                                                className="mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
