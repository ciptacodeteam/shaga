import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const DiscussionCtaSection = () => {
  return (
    <section className='relative my-16 max-w-7xl mx-auto'>
      <div className='mx-8 relative rounded-xl overflow-hidden z-0'>
        <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"></div>

        <div className='absolute inset-0 bg-[#0B55A7]/80 z-10'></div>

        <div className='relative z-20 flex flex-col px-16 py-14 text-white justify-center items-start text-center gap-5'>
          <h3 className='text-white mb-10 font-manrope text-5xl leading-snug text-left max-w-5xl'>
            Contact us to discuss how our services can support your business and
            streamline your logistics needs.
          </h3>

          <Link
            href='/kontak'
            className='group flex items-center bg-white rounded-full px-2 py-2 transition-all duration-300 w-fit'
          >
            <span className='text-primary font-manrope ms-3 me-3 transition-all duration-300 group-hover:translate-x-1'>
              Hubungi Kami
            </span>

            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45'>
              <IoIosArrowRoundForward className='text-white w-5 h-5 transition-colors duration-300' />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default DiscussionCtaSection;
