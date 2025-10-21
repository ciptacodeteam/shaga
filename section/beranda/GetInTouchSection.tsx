import CTAButton from '@/components/CTAButton';

export default function GetInTouch() {
  return (
    <>
      <section className='px-4 lg:px-0'>
        <div className='relative'>
          <div className='relative max-w-7xl mx-auto mb-12 md:mb-16 rounded-xl overflow-hidden z-0'>
            <div className="absolute inset-0 bg-[url('/img/img1.webp')] bg-cover bg-center"></div>

            <div className='absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/80 to-transparent [background-size:100%]'></div>

            <div className='relative p-6 md:p-16'>
              <h1 className='text-white font-manrope text-2xl md:text-5xl font-medium max-w-full md:max-w-xl leading-tight mb-6 md:mb-10 z-10'>
                Permudah Proses Logistik Anda Hari Ini!
              </h1>

              <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-6'>
                <p className='text-[#EEEEEE] font-manrope w-full md:w-2/5 z-10 text-sm md:text-base'>
                  Temukan dunia logistik yang mudah dan tanpa hambatan, siap
                  mengubah cara Anda melangkah maju.
                </p>

                <div className='w-full md:w-auto'>
                  <CTAButton text='Konsultasi Gratis' size='lg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
