import { FaTruckLoading, FaWarehouse, FaCogs, FaGlobe, FaTruck, FaDolly } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function LogisticService() {
    const services = [
        {
            icon: <FaTruckLoading size={28} />,
            title: "Jasa Kepabeanan",
            desc: "Memastikan proses kepabeanan berjalan lancar, sehingga barang Anda dapat melewati perbatasan dengan cepat dan sesuai peraturan.",
        },
        {
            icon: <FaWarehouse size={28} />,
            title: "Pergudangan & Distribusi",
            desc: "Solusi penyimpanan yang aman dan distribusi yang efisien untuk menjaga kelancaran alur persediaan Anda.",
        },
        {
            icon: <FaCogs size={28} />,
            title: "Manajemen Rantai Pasok",
            desc: "Mengoptimalkan setiap langkah dalam rantai pasok Anda untuk operasi yang lebih efisien dan hemat biaya.",
        },
        {
            icon: <FaGlobe size={28} />,
            title: "Solusi Lintas Batas",
            desc: "Layanan logistik lintas batas yang lancar untuk menghubungkan bisnis Anda dengan pasar internasional.",
        },
        {
            icon: <FaTruck size={28} />,
            title: "Pengiriman Last-Mile",
            desc: "Layanan pengiriman tahap akhir yang andal untuk memastikan produk Anda tiba di depan pintu pelanggan dengan tepat dan akurat.",
        },
        {
            icon: <FaDolly size={28} />,
            title: "Penanganan Kargo Proyek",
            desc: "Penanganan khusus untuk pengiriman berukuran besar atau kompleks, dengan solusi logistik yang disesuaikan.",
        },
    ];

    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-30">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                            </span>
                            <p className="text-sm font-medium text-primary uppercase font-manrope">
                                layanan logistik
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="font-manrope text-5xl leading-tight text-primary mx-auto w-3/4">
                                <span className="text-secondary">Layanan Logistik</span> Komprehensif yang Disesuaikan untuk <span className="text-secondary">Memenuhi Kebutuhan</span>.
                            </p>
                        </div>

                        <div className="max-w-5xl">
                            <p className="text-primary font-manrope">Visi kami adalah menjadi mitra logistik terdepan yang dikenal atas keunggulan dalam manajemen rantai pasokan, inovasi, dan kepuasan pelanggan, sekaligus melampaui ekspektasi serta mendorong kesuksesan klien kami di seluruh dunia.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 mt-16 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group flex flex-col rounded-xl p-6 transition-all duration-300 cursor-pointer bg-white border border-[#E0E6F3] hover:bg-primary hover:text-white"
                            >
                                <div className="flex flex-col">
                                    <div
                                        className="bg-[#CBFFE3] w-fit text-secondary p-3 rounded-lg transition-all duration-300 group-hover:bg-[#E0E6F3] group-hover:!text-primary mb-7"
                                    >
                                        {service.icon}
                                    </div>

                                    <div className="mb-5">
                                        <h3
                                            className="text-xl font-manrope text-primary font-medium transition-all duration-300 group-hover:!text-white"
                                        >
                                            {service.title}
                                        </h3>
                                    </div>

                                    <div>
                                        <p
                                            className="text-sm font-manrope text-primary transition-all duration-300 group-hover:!text-[#E0E6F3]"
                                        >
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            // <div
                            //     key={index}
                            //     className="group flex flex-col items-center justify-between rounded-xl p-5 transition-all duration-300 cursor-pointer bg-white border border-[#E0E6F3] hover:bg-primary hover:text-white"
                            // >
                            //     <div className="flex flex-col items-center gap-8">
                            //         <div
                            //             className="bg-[#CBFFE3] text-secondary p-3 rounded-lg transition-all duration-300 group-hover:bg-[#E0E6F3] group-hover:!text-primary"
                            //         >
                            //             {service.icon}
                            //         </div>

                            //         <div>
                            //             <h3
                            //                 className="text-2xl font-manrope text-primary font-medium transition-all duration-300 group-hover:!text-white"
                            //             >
                            //                 {service.title}
                            //             </h3>
                            //         </div>
                            //     </div>

                            //     <div className="w-1/2 flex items-center gap-10">
                            //         <div>
                            //             <p
                            //                 className="text-sm font-manrope text-primary w-5/6 transition-all duration-300 group-hover:!text-[#E0E6F3]"
                            //             >
                            //                 {service.desc}
                            //             </p>
                            //         </div>

                            //         <div>
                            //             <IoIosArrowRoundForward
                            //                 className="bg-primary rounded-full size-7 text-white transition-all duration-300 group-hover:!bg-[#E0E6F3] group-hover:!text-primary"
                            //             />
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}