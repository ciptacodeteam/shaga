export default function SolutionSection() {
    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-38">
                    <div className="flex flex-col justify-center items-center text-center">

                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                            </span>
                            <p className="text-sm font-medium text-primary uppercase font-manrope">
                                Solusi Logistik Kami
                            </p>
                        </div>

                        <div className="mb-16">
                            <p className="font-manrope text-5xl leading-tight text-primary mx-auto w-3/4">
                                Dikelola <span className="text-secondary">secara profesional</span>, mulai dari pengiriman hingga pergudangan.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 gap-8">
                            {/* <div className="w-full h-[450px] relative rounded-xl overflow-hidden p-12 group">
                                <div
                                    className="absolute inset-0 bg-[url('/img/air.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"
                                ></div>

                                <div className="absolute inset-0 bg-primary/75 z-0"></div>

                                <div className="relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-10">
                                    <h1 className="font-manrope font-semibold text-white z-10">Pengiriman Udara</h1>
                                </div>

                                <div>
                                    <p className="relative font-manrope text-white text-4xl z-20 leading-tight">Pengiriman cepat dan andal untuk barang prioritas tinggi ke seluruh dunia.</p>
                                </div>
                            </div> */}

                            <div className="w-full h-[450px] relative rounded-xl overflow-hidden p-12 group">
                                <div
                                    className="absolute inset-0 bg-[url('/img/sea.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"
                                ></div>

                                <div className="absolute inset-0 bg-primary/75 z-0"></div>

                                <div className="relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-10">
                                    <h1 className="font-manrope font-semibold text-white z-10">Pengiriman Laut</h1>
                                </div>

                                <div>
                                    <p className="relative font-manrope text-white text-4xl z-20 leading-tight">Solusi hemat biaya untuk barang dalam jumlah besar dari pelabuhan.</p>
                                </div>
                            </div>
                            
                            {/* <div className="w-full h-[450px] relative rounded-xl overflow-hidden p-12 group">
                                <div
                                    className="absolute inset-0 bg-[url('/img/rail.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"
                                ></div>

                                <div className="absolute inset-0 bg-primary/75 z-0"></div>

                                <div className="relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-10">
                                    <h1 className="font-manrope font-semibold text-white z-10">Pengiriman Rel</h1>
                                </div>

                                <div>
                                    <p className="relative font-manrope text-white text-4xl z-20 leading-tight">Ekonomis dan ideal untuk pengiriman dalam jumlah besar dan jarak jauh.</p>
                                </div>
                            </div> */}

                            <div className="w-full h-[450px] relative rounded-xl overflow-hidden p-12 group">
                                <div
                                    className="absolute inset-0 bg-[url('/img/road.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"
                                ></div>

                                <div className="absolute inset-0 bg-primary/75 z-0"></div>

                                <div className="relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-10">
                                    <h1 className="font-manrope font-semibold text-white z-10">Pengiriman Darat</h1>
                                </div>

                                <div>
                                    <p className="relative font-manrope text-white text-4xl z-20 leading-tight">Transportasi yang efisien untuk pengiriman regional dengan jadwal yang fleksibel.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}