export default function HeroContact() {
    return (
        <>
            <section className="relative mb-20">
                <div className="mx-8 relative rounded-xl overflow-hidden z-0">
                    <div
                        className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"
                    >
                    </div>

                    <div className="absolute inset-0 bg-[#0B55A7]/80 z-10"></div>

                    <div className="relative z-20 flex flex-col px-16 py-28 text-white justify-center items-center text-center">
                        <h1 className="text-8xl font-medium mb-8 font-manrope">
                            Hubungi Shaga
                        </h1>

                        <p className="text-white mb-10 font-manrope max-w-2xl">
                            Kami siap mendukung kebutuhan logistik Anda. Hubungi kami untuk pertanyaan, penawaran, atau bantuan.
                        </p>

                        <div className="flex justify-center items-center gap-2 mb-3">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                            </span>
                            <p className="text-sm font-medium text-white uppercase font-manrope">
                                Mendukung Bisnis di Seluruh Dunia
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}