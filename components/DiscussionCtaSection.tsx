import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const DiscussionCtaSection = () => {
  return (
    <section className='relative my-8 md:my-16 max-w-7xl mx-auto px-4 md:px-0'>
      <div className='relative rounded-xl overflow-hidden z-0'>
        <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center" />

        <div className='absolute inset-0 bg-[#0B55A7]/80 z-10' />

        <div className='relative z-20 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 px-6 py-10 md:py-14'>
          <div className='w-full md:w-2/3 text-white'>
            <h3 className='text-white mb-6 font-manrope text-xl md:text-3xl lg:text-5xl leading-snug text-left md:max-w-3xl'>
              Contact us to discuss how our services can support your business
              and streamline your logistics needs.
            </h3>
          </div>

          <div className='w-full md:w-1/3 flex md:justify-end'>
            <Link
              href='/kontak'
              className='group inline-flex items-center bg-white rounded-full px-4 py-2 md:px-6 md:py-3 transition-all duration-300 shadow-sm'
              aria-label='Hubungi Kami'
            >
              <span className='text-primary font-manrope mr-3 transition-all duration-300 group-hover:translate-x-1 text-sm md:text-base font-medium'>
                Hubungi Kami
              </span>

              <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45'>
                <IoIosArrowRoundForward className='text-white w-5 h-5 transition-colors duration-300' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DiscussionCtaSection;
