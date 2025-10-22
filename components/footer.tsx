import logowhite from '@/public/svg/logowhite.svg';
import { useMessages, useTranslations } from 'next-intl';

import { transformMessages } from '@/i18n/messages';
import { Link } from '@/i18n/navigation';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import Image from 'next/image';
import CTAButton from './CTAButton';

export default function FooterSection() {
  const t = useTranslations();

  const messages = useMessages();
  const companyLinks = transformMessages(
    messages.footerSection.companyNavList.links
  );
  const supportLinks = transformMessages(
    messages.footerSection.supportNavList.links
  );
  const serviceLinks = transformMessages(
    messages.footerSection.servicesNavList.links
  );

  return (
    <>
      <section>
        <div className='bg-primary'>
          <div className='max-w-7xl mx-auto pt-12 md:pt-20 pb-8 px-4 xl:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start md:items-center'>
              <div className='mx-auto md:mx-0'>
                <Image src={logowhite} alt='' className='w-48 md:w-60' />
              </div>
              <div className='md:ml-auto'>
                <h1 className='font-manrope text-2xl md:text-4xl text-white font-medium text-center md:text-right max-w-lg leading-tight my-4 md:my-0 px-4 md:px-0'>
                  {t('footerSection.tagline')}
                </h1>
              </div>
            </div>

            <div className='mt-12 md:mt-24'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h1 className='font-manrope text-white text-2xl font-medium'>
                    {t('footerSection.stayConnected')}
                  </h1>

                  <p className='font-manrope text-[#EEEEEE] mt-6 md:mt-10 max-w-lg'>
                    {t('footerSection.stayConnectedDesc')}
                  </p>

                  <div className='mt-8 md:mt-12'>
                    <CTAButton
                      text={t('footerSection.ctaText')}
                      url={getWhatsappMessageUrl(
                        PHONE_NUMBER,
                        'Hello, I am interested in your logistics services. Please provide me with more information.'
                      )}
                      size='md'
                    />
                  </div>
                </div>

                <div className='mt-6 md:mt-0 flex justify-start md:justify-end'>
                  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-x-20 md:gap-x-12 md:gap-12'>
                    <div>
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        {t('footerSection.companyNavList.heading')}
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        {companyLinks.map((link: any, index: number) => (
                          <Link
                            key={index}
                            prefetch
                            href={link.url}
                            className='font-manrope text-[#EEEEEE]'
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className='md:ml-4'>
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        {t('footerSection.supportNavList.heading')}
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        {supportLinks.map((link: any, index: number) => (
                          <Link
                            key={index}
                            prefetch
                            href={link.url}
                            className='font-manrope text-[#EEEEEE]'
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className='md:ml-auto'>
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        {t('footerSection.servicesNavList.heading')}
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        {serviceLinks.map((link: any, index: number) => (
                          <Link
                            key={index}
                            prefetch
                            href={link.url}
                            className='font-manrope text-[#EEEEEE]'
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[0.5px] bg-[#bdbdbd] mt-12 md:mt-16' />

            <div className='text-center'>
              <p className='font-manrope text-white text-sm mt-8'>
                © {new Date().getFullYear()} Shaga. All Rights Reserved.
                <span className='hidden lg:block'>
                  Designed & Developed by{' '}
                  <Link
                    href={'https://ciptacode.id'}
                    prefetch
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ciptacode
                  </Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
