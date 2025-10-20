import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function FindUsSection() {
  return (
    <section>
      <div className="bg-primary py-10 md:py-20 mb-8 md:mb-30 inset-0 bg-[url('/img/map.webp')] bg-blend-multiply bg-cover bg-no-repeat">
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='w-full'>
              <div className='aspect-video md:aspect-h-3 rounded-xl overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9413272794386!2d98.65997647530624!3d3.5867875503058926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131002de23245%3A0x7934cd2d6c49eb3c!2sPT.%20SHAGA%20(PT.%20SHAKTINAGARA%20GANDA%20ARTHATENTERAM%20MAKMURJAYA)!5e0!3m2!1sid!2sid!4v1760959768587!5m2!1sid!2sid'
                  className='w-full h-full border-0'
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>

            <div className='w-full'>
              <div className='flex flex-col'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='relative flex'>
                    <span className='absolute inline-flex h-3 w-3 md:h-4 md:w-4 animate-ping rounded-full bg-secondary opacity-75'></span>
                    <span className='relative inline-flex h-3 w-3 md:h-4 md:w-4 rounded-full bg-secondary'></span>
                  </span>
                  <p className='text-sm font-medium text-white uppercase font-manrope'>
                    temukan kami
                  </p>
                </div>

                <div className='mb-6 md:mb-8'>
                  <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white'>
                    Terletak strategis untuk akses mudah ke semua jalur logistik
                    utama
                  </p>
                </div>

                <div>
                  <Link
                    href='/kontak'
                    className='group inline-flex items-center bg-white rounded-full px-4 py-2 md:px-6 md:py-3 transition-all duration-300 shadow-sm'
                    aria-label='Jalan Menuju Shaga'
                  >
                    <span className='text-primary font-manrope mr-3 transition-all duration-300 group-hover:translate-x-1 text-sm md:text-base font-medium'>
                      Jalan Menuju Shaga
                    </span>

                    <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45'>
                      <IoIosArrowRoundForward className='text-white w-5 h-5 transition-colors duration-300' />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
