export default function WorkSection() {
    return (
        <>
            <section>
                <div className="bg-[#001E62] py-10">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                </span>
                                <p className="text-sm font-medium text-white uppercase font-manrope">
                                    proses kerja
                                </p>
                            </div>

                            <div className="flex justify-between">
                                <h1 className="font-manrope text-5xl text-white">Proses Kerja Kami</h1>
                                <p className="text-white font-manrope w-2/5">Proses kami sederhana namun efektif. Mulai dari konsultasi awal untuk memahami kebutuhan logistik Anda, hingga perencanaan dan pelaksanaan yang matang, kami memastikan setiap detail ditangani dengan presisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}