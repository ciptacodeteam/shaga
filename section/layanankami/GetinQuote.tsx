import Link from 'next/link';

import { IoIosArrowRoundForward } from 'react-icons/io';

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
                <Link
                  href='/kontak'
                  className='group inline-flex items-center justify-center bg-white rounded-full px-4 py-3 sm:px-6 sm:py-3 transition-all duration-300 w-full sm:w-auto'
                >
                  <span className='text-primary font-manrope mr-3 transition-all duration-300 group-hover:translate-x-1 text-sm md:text-base font-medium'>
                    Konsultasi Gratis
                  </span>

                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45 '>
                    <IoIosArrowRoundForward className='text-white w-5 h-5 transition-colors duration-300' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
