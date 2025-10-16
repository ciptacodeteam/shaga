export default function PartnerClient() {
    const partners = [
        {
            id: 1,
            name: "liqui",
            logo: "/img/logo/liquimoly.webp",
        },
        {
            id: 2,
            name: "kirana",
            logo: "/img/logo/kirana.webp",
        },
        {
            id: 3,
            name: "adhi",
            logo: "/img/logo/adhi.webp",
        },
        {
            id: 4,
            name: "hudaya",
            logo: "/img/logo/hudaya.webp",
        },
        {
            id: 5,
            name: "giant",
            logo: "/img/logo/gianttrasporter.png",
        },
        {
            id: 6,
            name: "wika",
            logo: "/img/logo/wika.webp",
        },
        {
            id: 7,
            name: "kawanlama",
            logo: "/img/logo/kawanlama.webp",
        },
        {
            id: 8,
            name: "pixco",
            logo: "/img/logo/pixco.png",
        },
        {
            id: 9,
            name: "yongsun",
            logo: "/img/logo/youngsun.webp",
        },
        {
            id: 10,
            name: "alltech",
            logo: "/img/logo/alltech.webp",
        },
        {
            id: 11,
            name: "sti",
            logo: "/img/logo/sti.png",
        },
        {
            id: 12,
            name: "realstrong",
            logo: "/img/logo/realstrong.png",
        },
    ];

    return (
        <>
            <section>
                <div className="max-w-7xl mx-auto mb-42">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="relative flex size-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                            </span>
                            <p className="text-sm font-medium text-primary uppercase font-manrope">
                                Partner & Client
                            </p>
                        </div>

                        <div className="mb-16">
                            <p className="font-manrope text-5xl leading-tight text-primary mx-auto w-3/4">
                                Bermitra dengan klien <span className="text-secondary">terpercaya</span> untuk menghadirkan <span className="text-secondary">layanan terbaik</span>.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-20 gap-y-24 items-center justify-items-center mt-10 px-20">
                            {partners.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="flex h-20 w-32 items-center justify-center"
                                >
                                    <img
                                        alt={partner.name}
                                        src={partner.logo}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}