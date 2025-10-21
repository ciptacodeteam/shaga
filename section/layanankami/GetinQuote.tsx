import CTAButton from '@/components/CTAButton';

export default function GetinQuote() {
  return (
    <>
      <div className='max-w-7xl mx-auto mb-12 px-4'>
        <div className="bg-primary relative bg-[url('/img/map.webp')] bg-blend-overlay bg-cover bg-no-repeat p-6 sm:p-8 md:p-12 rounded-xl">
          <div className='p-6 sm:p-8 md:p-0 rounded-lg md:rounded-none'>
            <div className='flex flex-col justify-center items-center text-center'>
              <div className='mb-4 sm:mb-6'>
                <p className='font-manrope text-2xl sm:text-3xl md:text-5xl leading-tight font-medium text-white capitalize'>
                  Permudah proses logistik Anda hari ini!
                </p>
              </div>

              <div>
                <p className='font-manrope text-white mb-6 sm:mb-10 text-sm sm:text-base'>
                  Temukan dunia logistik yang mudah dan lancar, siap mengubah
                  cara Anda melangkah maju.
                </p>
              </div>

              <div>
                <CTAButton text='Konsultasi Gratis' size='md' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
