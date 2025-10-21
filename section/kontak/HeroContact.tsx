export default function HeroContact() {
  return (
    <>
      <section className='relative mb-16 md:mb-20'>
        <div className='mx-4 md:mx-8 relative rounded-xl overflow-hidden z-0'>
          <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center" />

          <div className='absolute inset-0 bg-[#0B55A7]/80 z-10' />

          <div className='relative z-20 flex flex-col px-6 md:px-16 py-12 md:py-28 text-white justify-center items-center text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 md:mb-8 font-manrope'>
              Hubungi Shaga
            </h1>

            <p className='text-white mb-6 md:mb-10 font-manrope max-w-full md:max-w-2xl px-2'>
              Kami siap mendukung kebutuhan logistik Anda. Hubungi kami untuk
              pertanyaan, penawaran, atau bantuan.
            </p>

            <div className='flex justify-center items-center gap-2 mb-3'>
              <span className='relative flex'>
                <span className='absolute inline-flex h-2.5 w-2.5 md:h-3 md:w-3 animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-white uppercase font-manrope'>
                Mendukung Bisnis di Seluruh Dunia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
