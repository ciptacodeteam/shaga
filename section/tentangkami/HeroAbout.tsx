export default function HeroAbout() {
  return (
    <>
      <section className='relative mb-12'>
        <div className='mx-4 md:mx-8 relative rounded-xl overflow-hidden z-0'>
          <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"></div>

          <div className='absolute inset-0 bg-[#0B55A7]/80 z-10'></div>

          <div className='relative z-20 flex flex-col px-6 sm:px-10 md:px-16 py-16 sm:py-20 md:py-28 text-white justify-center items-center text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium mb-6 md:mb-8 font-manrope'>
              Tentang Shaga
            </h1>

            <p className='text-white mb-6 sm:mb-8 md:mb-10 font-manrope max-w-xl md:max-w-2xl text-sm sm:text-base'>
              Memberikan keunggulan melalui solusi logistik yang disesuaikan
              untuk mendorong efisiensi, inovasi, dan kepuasan pelanggan.
            </p>

            <div className='flex justify-center items-center gap-2 mb-3'>
              <span className='relative flex size-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-white uppercase font-manrope'>
                Didorong oleh tim yang berbakat
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
