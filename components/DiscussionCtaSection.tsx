import CTAButton from './CTAButton';

const DiscussionCtaSection = () => {
  return (
    <section className='relative my-8 md:my-16 max-w-7xl mx-auto px-4 md:px-0'>
      <div className='relative rounded-xl overflow-hidden z-0'>
        <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center" />

        <div className='absolute inset-0 bg-[#0B55A7]/80 z-10' />

        <div className='relative z-20 flex flex-col items-center md:items-start gap-6 md:gap-8 px-6 py-10 md:py-14 md:px-16'>
          <div className='w-full md:w-2/3 text-white'>
            <h3 className='text-white mb-6 font-manrope text-xl md:text-3xl lg:text-4xl leading-snug text-left md:max-w-3xl'>
              Contact us to discuss how our services can support your business
              and streamline your logistics needs.
            </h3>
          </div>

          <div className='w-full md:w-1/3 flex md:justify-start'>
            <CTAButton text='Hubungi Kami' size='md' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DiscussionCtaSection;
