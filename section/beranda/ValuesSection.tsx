import { BsPatchCheck } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";

export default function ValueSection() {

    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-36">
                    <div className="flex gap-12">
                        <div className="w-1/3">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="relative flex size-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                        <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                    </span>
                                    <p className="text-sm font-medium text-primary uppercase font-manrope">
                                        NILAI-NILAI UTAMA
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <p className="font-manrope text-5xl leading-tight text-primary">
                                        Dibangun atas dasar <span className="text-secondary">Kepercayaan</span> dan <span className="text-secondary">Keunggulan</span>.
                                    </p>
                                </div>

                                <p className="font-manrope text-primary">Kami membangun hubungan yang kuat pada nilai-nilai integritas, kualitas, dan akuntabilitas.</p>
                            </div>
                        </div>

                        <div className="w-2/3">
                            <div className="grid grid-flow-row grid-cols-2 gap-6  h-[700px]">
                                <div className="col-span-1 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-start justify-between text-sm">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <BsPatchCheck className="text-primary w-6 h-6" />
                                        </div>
                                        <p className="font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4">
                                            Dipercaya
                                        </p>
                                    </div>
                                    <h1 className="font-manrope text-primary mt-8 text-lg">
                                        Kami memastikan setiap pengiriman memenuhi standar tinggi kami, dari awal hingga akhir.
                                    </h1>
                                </div>

                                <div className="row-span-2 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-start justify-between text-sm">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <IoPeopleOutline className="text-primary w-6 h-6" />
                                        </div>
                                        <p className="font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4">
                                            Prioritas
                                        </p>
                                    </div>
                                    <h1 className="font-manrope text-primary mt-8 text-lg">
                                        Kebutuhan Anda adalah prioritas kami di setiap langkah perjalanan.
                                    </h1>
                                </div>


                                <div className="row-span-2 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-start justify-between text-sm">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <BsPatchCheck className="text-primary w-6 h-6" />
                                        </div>
                                        <p className="font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4">
                                            Inovasi
                                        </p>
                                    </div>
                                    <h1 className="font-manrope text-primary mt-8 text-lg">
                                        Mengadopsi teknologi terbaru untuk menghadirkan pengalaman logistik yang mulus.
                                    </h1>
                                </div>

                                <div className="col-span-1 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full">
                                    <div className="flex items-start justify-between text-sm">
                                        <div className="bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center">
                                            <BsPatchCheck className="text-primary w-6 h-6" />
                                        </div>
                                        <p className="font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4">
                                            Keberlanjutan
                                        </p>
                                    </div>
                                    <h1 className="font-manrope text-primary mt-8 text-lg">
                                        Berkomitmen pada praktik ramah lingkungan di setiap aspek layanan kami.
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
