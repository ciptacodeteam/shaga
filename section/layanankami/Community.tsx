import CTAButton from '@/components/CTAButton';

export default function CommunitySection() {
  return (
    <>
      <section className='relative mb-24 md:mb-32'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center'>
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  KOMUNITAS KAMI
                </p>
              </div>
              <div className='mb-6 md:mb-8'>
                <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary'>
                  Bergabunglah dengan{' '}
                  <span className='text-secondary'>Komunitas Mitra Bisnis</span>{' '}
                  dan Logistik yang Terus Berkembang
                </p>
              </div>

              <div>
                <p className='font-manrope text-primary mb-6 md:mb-10'>
                  Bergabunglah dengan komunitas dinamis berisi pelaku bisnis dan
                  mitra logistik, untuk mengoptimalkan rantai pasokan dan
                  mendorong pertumbuhan.
                </p>
              </div>

              <div>
                <CTAButton
                  text='Pelajari Lebih Lanjut'
                  size='md'
                  variant='outline-primary'
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 relative'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='border border-[#E0E6F3] p-6 sm:p-8 rounded-xl'>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-manrope text-primary text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight'>
                      25
                    </h1>
                    <p className='font-manrope text-[#556996] text-lg sm:text-2xl font-medium mt-6 text-center'>
                      Tahun Pengalaman di Industri
                    </p>
                  </div>
                </div>

                <div className='border border-[#E0E6F3] p-6 sm:p-8 rounded-xl'>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-manrope text-primary text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight'>
                      300<span className='text-base sm:text-xl'>+</span>
                    </h1>
                    <p className='font-manrope text-[#556996] text-lg sm:text-2xl font-medium mt-6 text-center'>
                      Karyawan untuk Kesuksesan Anda
                    </p>
                  </div>
                </div>

                <div className='border border-[#E0E6F3] p-6 sm:p-8 rounded-xl'>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-manrope text-primary text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight'>
                      500<span className='text-base sm:text-xl'>+</span>
                    </h1>
                    <p className='font-manrope text-[#556996] text-lg sm:text-2xl font-medium mt-6 text-center'>
                      Klien Puas di Seluruh Dunia
                    </p>
                  </div>
                </div>

                <div className='border border-[#E0E6F3] p-6 sm:p-8 rounded-xl'>
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-manrope text-primary text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight'>
                      99<span className='text-base sm:text-xl'>%</span>
                    </h1>
                    <p className='font-manrope text-[#556996] text-lg sm:text-2xl font-medium mt-6 text-center'>
                      Tingkat Pengiriman Tepat Waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
