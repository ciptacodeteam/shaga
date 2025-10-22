import CTAButton from '@/components/CTAButton';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function GetinQuote() {
  const t = useTranslations('servicePage.quoteCtaSection');

  return (
    <>
      <div className='max-w-7xl mx-auto mb-12 px-4 md:px-6 xl:px-0'>
        <div className="bg-primary relative bg-[url('/img/map.webp')] bg-blend-overlay bg-cover bg-no-repeat p-6 sm:p-8 md:p-12 rounded-xl">
          <div className='p-6 sm:p-8 md:p-0 rounded-lg md:rounded-none'>
            <div className='flex flex-col justify-center items-center text-center'>
              <div className='mb-4 sm:mb-6'>
                <p className='font-manrope text-2xl sm:text-3xl md:text-5xl leading-tight font-medium text-white capitalize'>
                  {t('title')}
                </p>
              </div>

              <div>
                <p className='font-manrope text-white mb-6 sm:mb-10 text-sm sm:text-base'>
                  {t('description')}
                </p>
              </div>

              <div>
                <CTAButton
                  text={t('ctaText')}
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
    </>
  );
}
