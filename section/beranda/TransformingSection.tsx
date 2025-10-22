import CTAButton from '@/components/CTAButton';
import { useTranslations } from 'next-intl';

export default function TransformSection() {
  const t = useTranslations();

  return (
    <>
      <section>
        <div className="relative bg-[url('/img/mountain.webp')] bg-no-repeat bg-cover w-full py-20 md:py-36">
          {/* Gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#001E62] to-transparent'></div>

          {/* Content */}
          <div className='relative max-w-7xl mx-auto px-4 md:px-6 xl:px-0'>
            <div>
              <p className='text-white font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-tight w-full md:w-5/6'>
                {t('transformingSection.title')}
              </p>
            </div>

            <div className='mt-8 md:mt-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0'>
              <p className='font-manrope text-white text-sm md:text-base w-full md:w-3/5 leading-relaxed'>
                {t('transformingSection.content')}
              </p>

              <div className='w-full md:w-auto flex md:block mt-4 md:mt-0'>
                <CTAButton
                  text={t('transformingSection.ctaText')}
                  url={t('transformingSection.ctaLink')}
                  size='md'
                  className='text-sm'
                  variant='outline-white'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
