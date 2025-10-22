import Image from 'next/image';

import CTAButton from '@/components/CTAButton';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { BiMapPin } from 'react-icons/bi';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { PHONE_NUMBER } from '@/lib/constant';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className='relative mb-12 lg:mb-20'>
      <div className='mx-4 md:mx-8 relative min-h-[420px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden z-0'>
        {/* Gambar Background */}
        <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"></div>

        {/* Overlay Gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/60 to-transparent [background-size:100%] z-10'></div>

        {/* Text Content */}
        <div className='relative z-20 flex flex-col justify-between h-full px-6 md:px-16 text-white py-8 md:py-16'>
          <div className='max-w-xl md:max-w-2xl'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight font-medium mb-4 font-manrope max-w-xs sm:max-w-none'>
              {t('heroSection.title')}
            </h1>
            <p className='text-sm sm:text-base text-white mb-6 font-manrope'>
              {t('heroSection.subtitle')}
            </p>
          </div>

          {/* Tombol CTA */}
          <div className='flex flex-col lg:flex-row lg:justify-between gap-4 lg:items-end'>
            <div className='flex gap-3 sm:gap-6 mt-4 md:mt-0'>
              <div>
                <CTAButton
                  text={t('heroSection.ctaText')}
                  url={getWhatsappMessageUrl(
                    PHONE_NUMBER,
                    'Hello, I am interested in your logistics services. Please provide me with more information.'
                  )}
                  size='md'
                />
              </div>

              <div>
                <CTAButton
                  text={t('heroSection.cta2Text')}
                  url={'/about-us'}
                  size='md'
                  variant='outline-white'
                />
              </div>
            </div>

            <div className='bg-white rounded-lg py-4 px-5 flex items-center gap-4 w-full sm:w-[400px] h-auto mt-8 lg:mt-0'>
              <div className='md:w-1/2 w-2/3'>
                <div className='mb-4'>
                  <p
                    className='text-primary font-semibold font-manrope text-sm md:text-base [&>span]:text-secondary'
                    dangerouslySetInnerHTML={{
                      __html: t.raw('heroSection.locationText'),
                    }}
                  ></p>
                </div>
                <div>
                  <Link
                    href={getWhatsappMessageUrl(
                      PHONE_NUMBER,
                      'Hello, I am interested in your logistics services. Please provide me with more information.'
                    )}
                  >
                    <button className='text-white bg-primary  py-2 px-4 rounded-full cursor-pointer transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 font-manrope text-start md:text-center'>
                      <p
                        className='text-xs md:text-sm block [&>span]:hidden sm:[&>span]:inline'
                        dangerouslySetInnerHTML={{
                          __html: t.raw('heroSection.locationButtonText'),
                        }}
                      ></p>
                    </button>
                  </Link>
                </div>
              </div>
              <div className='w-1/2 flex justify-end'>
                <div className="bg-[url('/img/transportation.webp')] w-42 h-32 bg-no-repeat bg-cover bg-center rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute right-4 md:right-8 lg:right-20 top-8 md:top-8 lg:top-16 z-10'>
          <div className='flex gap-2'>
            <div className='flex items-center justify-center w-10 h-10 rounded-full bg-white transition-transform duration-300 group-hover:rotate-45'>
              <BiMapPin className='text-primary w-5 h-5 transition-colors duration-300' />
            </div>
            <div className='bg-white font-manrope text-primary h-10 rounded-full font-semibold items-center px-4 hidden lg:flex'>
              {t('heroSection.locationMapText')}
            </div>
          </div>
        </div>

        {/* Decorative tracking images: hide on small screens to avoid layout issues */}
        <div className='hidden xl:block'>
          <div>
            <Image
              src={t('heroSection.locationMarker1Image.src')}
              alt={t('heroSection.locationMarker1Image.alt')}
              width={400}
              height={200}
              className='absolute top-32 right-24 lg:right-64 w-44 h-44 lg:w-52 lg:h-52 mb-4 mr-4 z-10'
            />
          </div>

          <div>
            <Image
              src={t('heroSection.locationMarker2Image.src')}
              alt={t('heroSection.locationMarker2Image.alt')}
              width={400}
              height={200}
              className='absolute top-72 right-40 lg:right-96 w-44 h-44 lg:w-52 lg:h-52 mb-4 mr-4 z-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
