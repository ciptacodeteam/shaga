import CTAButton from '@/components/CTAButton';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function GetInTouch() {
  const t = useTranslations();

  return (
    <>
      <section className='px-4 md:px-6 xl:px-0'>
        <div className='relative'>
          <div className='relative max-w-7xl mx-auto mb-12 md:mb-16 rounded-xl overflow-hidden z-0'>
            <div className="absolute inset-0 bg-[url('/img/img1.webp')] bg-cover bg-center"></div>

            <div className='absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/80 to-transparent [background-size:100%]'></div>

            <div className='relative p-6 md:p-16'>
              <h1 className='text-white font-manrope text-2xl md:text-5xl font-medium max-w-full md:max-w-xl leading-tight mb-6 md:mb-10 z-10'>
                {t('getInTouchSection.title')}
              </h1>

              <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-6'>
                <p className='text-[#EEEEEE] font-manrope w-full md:w-2/5 z-10 text-sm md:text-base'>
                  {t('getInTouchSection.content')}
                </p>

                <div className='w-full md:w-auto'>
                  <CTAButton
                    text={t('getInTouchSection.ctaText')}
                    url={getWhatsappMessageUrl(
                      PHONE_NUMBER,
                      'Hello, I am interested in your logistics services. Please provide me with more information.'
                    )}
                    size='md'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
