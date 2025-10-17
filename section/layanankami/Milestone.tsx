"use client";

export default function MilestoneSection() {
    const years = [1999, 2005, 2012, 2018, 2023];

    return (
        <>
            <section>
                <div className="bg-primary mb-30 py-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center gap-2">
                                <span className="relative flex size-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                                    <span className="relative inline-flex size-3 rounded-full bg-secondary"></span>
                                </span>
                                <p className="text-sm font-medium text-white uppercase font-manrope">
                                    perkembangan perusahaan
                                </p>
                            </div>

                            <div className="mt-8">
                                <h1 className="font-manrope text-white text-5xl font-medium">Sejarah Kami Sejak Awal Berdiri</h1>
                            </div>

                            <div className="relative flex flex-col items-center w-full">
                                <div className="relative flex justify-between items-start w-11/12 max-w-6xl">

                                    {/* Solid Line (kiri) */}
                                    <div className="absolute bottom-[148] left-0 h-[4px] rounded-full bg-[#E0E6F3]" style={{ width: "10%" }} />

                                    {/* Dotted Line (penuh) */}
                                    <div className="absolute bottom-[148] left-0 right-0 h-[4px] bg-transparent flex justify-between">
                                        {Array.from({ length: 100 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-1 h-[4px] bg-[#E0E6F3] mx-[3px]"
                                            />
                                        ))}
                                    </div>

                                    {years.map((year) => (
                                        <div
                                            key={year}
                                            className="relative flex flex-col items-center z-10 mt-20"
                                            style={{ width: `${100 / years.length}%` }} // Biar jarak antar circle sama rata
                                        >
                                            {/* Tahun */}
                                            <span className="text-white text-lg mb-6 font-manrope font-semibold">
                                                {year}
                                            </span>

                                            {/* Circle */}
                                            <div className="p-1.5 rounded-full bg-[#E0E6F3] flex items-center justify-center">
                                                <div className="w-3 h-3 rounded-full bg-[#20458E]" />
                                            </div>

                                            {/* Teks di bawah circle */}
                                            <p className="text-white text-sm mt-6 text-center font-manrope leading-relaxed max-w-[170px]">
                                                {year === 1999 && "Shaga didirikan dengan visi untuk menyediakan solusi logistik regional yang efisien"}
                                                {year === 2005 && "Memperluas layanan untuk mencakup pengiriman internasional dan solusi lintas batas"}
                                                {year === 2012 && "Membuka kantor baru di berbagai pusat perdagangan global utama, memperkuat jangkauan internasional"}
                                                {year === 2018 && "Meluncurkan teknologi pelacakan milik kami sendiri untuk visibilitas pengiriman secara real-time"}
                                                {year === 2023 && "Mencapai tingkat pengiriman tepat waktu 99%, menetapkan posisi sebagai pemimpin industri yang tepercaya"}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}