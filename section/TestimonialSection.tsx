export default function TestimonialSection() {
    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                        </span>
                        <p className="text-sm font-medium text-primary uppercase font-manrope">
                            Testimoni
                        </p>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row gap-6 md:gap-0">
                        <h1 className="font-manrope text-4xl md:text-5xl text-primary">
                            <span className="text-secondary">Dipercaya</span> di Seluruh Dunia
                        </h1>
                        <p className="text-primary font-manrope md:w-2/5">
                            Banyak perusahaan telah mempercayakan kami sebagai mitra mereka. Pujian menjadi motivasi, dan kritik menjadi peluang bagi kami untuk terus berkembang setiap hari.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}