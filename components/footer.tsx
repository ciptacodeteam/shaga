'use client';
import logowhite from '@/public/svg/logowhite.svg';
import { useMessages, useTranslations } from 'next-intl';

import { transformMessages } from '@/i18n/messages';
import { Link } from '@/i18n/navigation';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import Image from 'next/image';
import CTAButton from './CTAButton';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <motion.section
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
      >
        <div className='bg-primary'>
          <div className='max-w-7xl mx-auto pt-12 md:pt-20 pb-8 px-4 xl:px-0'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start md:items-center'
              variants={{ hidden: {}, visible: {} }}
            >
              <motion.div
                className='mx-auto md:mx-0'
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
              >
                <Image src={logowhite} alt='' className='w-48 md:w-60' />
              </motion.div>
              <motion.div
                className='md:ml-auto'
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
              >
                <h1 className='font-manrope text-2xl md:text-4xl text-white font-medium text-center md:text-right max-w-lg leading-tight my-4 md:my-0 px-4 md:px-0'>
                  {t('footerSection.tagline')}
                </h1>
              </motion.div>
            </motion.div>

            <div className='mt-12 md:mt-24'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <motion.div
                  className=''
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
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
                </motion.div>

                <motion.div
                  className='mt-6 md:mt-0 flex justify-start md:justify-end'
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 gap-x-20 md:gap-x-12 md:gap-12'>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        {t('footerSection.companyNavList.heading')}
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        {companyLinks.map((link: any, index: number) => (
                          <Link
                            key={index}
                            prefetch
                            href={link.link}
                            className='font-manrope text-[#EEEEEE]'
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      className='md:ml-4'
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        {t('footerSection.supportNavList.heading')}
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        {supportLinks.map((link: any, index: number) => (
                          <Link
                            key={index}
                            prefetch
                            href={link.link}
                            className='font-manrope text-[#EEEEEE]'
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      className='md:ml-auto'
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5 },
                        },
                      }}
                    >
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        {t('footerSection.servicesNavList.heading')}
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        {serviceLinks.map((link: any, index: number) => (
                          <Link
                            key={index}
                            prefetch
                            href={link.link}
                            className='font-manrope text-[#EEEEEE]'
                          >
                            {link.text}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className='h-[0.5px] bg-[#bdbdbd] mt-12 md:mt-16'
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.4 } },
              }}
            />

            <motion.div
              className='text-center'
              variants={{
                hidden: { opacity: 0, y: 6 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <p className='font-manrope text-white text-sm mt-8 '>
                © {new Date().getFullYear()} SHAGA. All Rights Reserved.{' '}
                <span className='hidden lg:inline-block'>
                  Designed & Developed by{' '}
                  <Link
                    href={'https://ciptacode.id'}
                    prefetch
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Ciptacode
                  </Link>
                  .
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
