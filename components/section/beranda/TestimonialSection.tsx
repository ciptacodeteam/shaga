"use client"

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";

export default function TestimonialSection() {
    const testimonial = [
        {
            id: "1",
            image: "/img/sea.webp",
            country: "Philadelphia, Pennsylvania",
            title: "“Membuat kami bisa fokus pada pertumbuhan. Sangat di rekomendasikan!”",
            description:
                "“Koordinasi mereka yang mulus dan komunikasi yang proaktif benar-benar memberikan perbedaan nyata dalam operasi kami. Mulai dari proses bea cukai hingga pengiriman tahap akhir, mereka menangani setiap detail dengan keahlian dan kepedulian. Kami tidak bisa meminta mitra logistik yang lebih baik lagi.”",
            name: "Carmen Lander",
            division: "Retailer",
        },
        {
            id: "2",
            image: "/img/sea.webp",
            country: "Philadelphia, Pennsylvania",
            title: "“Membuat kami bisa fokus pada pertumbuhan. Sangat di rekomendasikan!”",
            description:
                "“Koordinasi mereka yang mulus dan komunikasi yang proaktif benar-benar memberikan perbedaan nyata dalam operasi kami. Mulai dari proses bea cukai hingga pengiriman tahap akhir, mereka menangani setiap detail dengan keahlian dan kepedulian. Kami tidak bisa meminta mitra logistik yang lebih baik lagi.”",
            name: "Carmen Lander",
            division: "Retailer",
        },
    ];

    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                        </span>
                        <p className="text-sm font-medium text-primary uppercase font-manrope">
                            Testimoni
                        </p>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-0 mb-16">
                        <h1 className="font-manrope text-4xl md:text-5xl text-primary">
                            <span className="text-secondary">Dipercaya</span> di Seluruh Dunia
                        </h1>
                        <p className="text-primary font-manrope md:w-2/5">
                            Banyak perusahaan telah mempercayakan kami sebagai mitra mereka. Pujian menjadi motivasi, dan kritik menjadi peluang bagi kami untuk terus berkembang setiap hari.
                        </p>
                    </div>

                    <div>
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
                            className="!pb-16 swiper-section-2"
                            spaceBetween={30}
                            autoHeight={false}
                        >
                            {testimonial.map((testimoni) => (
                                <SwiperSlide key={testimoni.id}>
                                    <div className="border border-[#E0E6F3] p-6 rounded-xl">
                                        <div className="flex gap-10">
                                            <div className="w-2/5 relative rounded-xl overflow-hidden">
                                                    <Image
                                                        src={testimoni.image}
                                                        alt=""
                                                        fill
                                                        className="object-cover"
                                                    />
                                            </div>

                                            <div className="w-3/5 flex flex-col justify-between items-stretch">
                                                <div>
                                                    <h1 className="text-[#556996] font-manrope text-xl font-medium mb-8">{testimoni.country}</h1>
                                                    <h1 className="font-manrope text-primary font-semibold text-4xl mb-8">{testimoni.title}</h1>
                                                    <p className="font-manrope text-[#556996]">{testimoni.description}</p>
                                                </div>

                                                <div className="mt-8">
                                                    <p className="font-manrope text-primary font-semibold text-xl">{testimoni.name}</p>
                                                    <p className="font-manrope text-[#556996] font-medium text-xl mt-4">{testimoni.division}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}