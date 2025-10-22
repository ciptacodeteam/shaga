import CTAButton from '@/components/CTAButton';
import { transformMessages } from '@/i18n/messages';
import { useMessages, useTranslations } from 'next-intl';

export default function CommunitySection() {
  const t = useTranslations('servicePage.communitySection');

  const messages = useMessages();
  const stats = transformMessages(messages.servicePage.communitySection.stats);

  return (
    <>
      <section className='relative mb-24 md:mb-32'>
        <div className='max-w-7xl mx-auto px-4 md:px-6 xl:px-0'>
          <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center'>
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  {t('heading')}
                </p>
              </div>
              <div className='mb-6 md:mb-8'>
                <p
                  className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('title'),
                  }}
                ></p>
              </div>

              <div>
                <p className='font-manrope text-primary mb-6 md:mb-10'>
                  {t('description')}
                </p>
              </div>

              <div>
                <CTAButton
                  text={t('ctaText')}
                  url={t('ctaLink')}
                  size='md'
                  variant='outline-primary'
                />
              </div>
            </div>
            <div className='w-full md:w-1/2 relative'>
              <div className='grid grid-cols-2 gap-4'>
                {stats.map((stat: any, index: number) => (
                  <div
                    className='border border-[#E0E6F3] p-6 sm:p-8 rounded-xl'
                    key={index}
                  >
                    <div className='flex flex-col items-center justify-center'>
                      <h1 className='font-manrope text-primary text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight'>
                        {stat.value}
                      </h1>
                      <p className='font-manrope text-[#556996] text-lg sm:text-2xl font-medium mt-6 text-center'>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
