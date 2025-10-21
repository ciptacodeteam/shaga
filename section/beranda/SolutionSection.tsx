export default function SolutionSection() {
  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-20 lg:mb-38'>
          <div className='flex flex-col justify-center items-center text-center px-4'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='relative flex size-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-primary uppercase font-manrope'>
                Solusi Logistik Kami
              </p>
            </div>

            <div className='mb-10 md:mb-16'>
              <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary mx-auto max-w-3xl lg:max-w-3/4'>
                Dikelola{' '}
                <span className='text-secondary'>secara profesional</span>,
                mulai dari pengiriman hingga pergudangan.
              </p>
            </div>
          </div>

          <div className='p-4 md:px-8 xl:p-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              <div className='w-full h-[380px] md:h-[450px] relative rounded-xl overflow-hidden p-8 md:p-12 group'>
                <div className="absolute inset-0 bg-[url('/img/sea.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"></div>

                <div className='absolute inset-0 bg-primary/75 z-0'></div>

                <div className='relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-6 md:mb-10'>
                  <h3 className='font-manrope font-semibold text-white z-10'>
                    Pengiriman Laut
                  </h3>
                </div>

                <div>
                  <p className='relative font-manrope text-white text-2xl lg:text-4xl z-20 leading-snug lg:leading-tight'>
                    Solusi hemat biaya untuk barang dalam jumlah besar dari
                    pelabuhan.
                  </p>
                </div>
              </div>

              <div className='w-full h-[380px] md:h-[450px] relative rounded-xl overflow-hidden p-8 md:p-12 group'>
                <div className="absolute inset-0 bg-[url('/img/road.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"></div>

                <div className='absolute inset-0 bg-primary/75 z-0'></div>

                <div className='relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-6 md:mb-10'>
                  <h3 className='font-manrope font-semibold text-white z-10'>
                    Pengiriman Darat
                  </h3>
                </div>

                <div>
                  <p className='relative font-manrope text-white text-2xl lg:text-4xl z-20 leading-snug lg:leading-tight'>
                    Transportasi yang efisien untuk pengiriman regional dengan
                    jadwal yang fleksibel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
