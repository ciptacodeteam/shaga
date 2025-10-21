export default function NumberSection() {
  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-20 md:mb-32'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 px-4 md:px-0'>
            <div className='border border-[#E0E6F3] p-8 rounded-xl'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='font-manrope text-primary  text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight'>
                  25
                </h1>
                <p className='font-manrope text-[#556996] text-base md:text-lg lg:text-2xl font-medium mt-8 text-center'>
                  Tahun Pengalaman di Industri
                </p>
              </div>
            </div>

            <div className='border border-[#E0E6F3] p-8 rounded-xl'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='font-manrope text-primary text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight'>
                  99<span>%</span>
                </h1>
                <p className='font-manrope text-[#556996] text-base md:text-lg lg:text-2xl font-medium mt-8 text-center'>
                  Tingkat Pengiriman Tepat Waktu
                </p>
              </div>
            </div>

            <div className='border border-[#E0E6F3] p-8 rounded-xl'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='font-manrope text-primary  text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight'>
                  500<span>+</span>
                </h1>
                <p className='font-manrope text-[#556996] text-base md:text-lg lg:text-2xl font-medium mt-8 text-center'>
                  Klien Puas di Seluruh Dunia
                </p>
              </div>
            </div>

            <div className='border border-[#E0E6F3] p-8 rounded-xl'>
              <div className='flex flex-col items-center justify-center'>
                <h1 className='font-manrope text-primary  text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight'>
                  300<span>+</span>
                </h1>
                <p className='font-manrope text-[#556996] text-base md:text-lg lg:text-2xl font-medium mt-8 text-center'>
                  Karyawan untuk Kesuksesan Anda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
