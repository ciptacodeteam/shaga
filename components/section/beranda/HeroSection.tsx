'use client';

import Image from 'next/image';

import CTAButton from '@/components/CTAButton';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { BiMapPin } from 'react-icons/bi';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { PHONE_NUMBER } from '@/lib/constant';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className='relative mb-12 lg:mb-20'>
      {/*Desktop Hero Section */}
      <div className='mx-4 md:mx-8 relative min-h-[420px] md:h-[600px] lg:h-[650px] rounded-xl overflow-hidden z-0 hidden lg:block'>
        {/* Gambar Background */}
        <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"></div>

        {/* Overlay Gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/60 to-transparent [background-size:100%] z-10'></div>

        {/* Text Content */}
        <div className='relative z-20 flex flex-col justify-between h-full px-6 md:px-16 text-white py-8 md:py-16'>
          <div className='max-w-xl md:max-w-2xl'>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: 'easeOut' },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight font-medium mb-4 font-manrope max-w-xs sm:max-w-none'
            >
              {t('heroSection.title')}
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='text-sm sm:text-base text-white mb-6 font-manrope'
            >
              {t('heroSection.subtitle')}
            </motion.p>
          </div>

          {/* Tombol CTA */}
          <div className='flex flex-col xl:flex-row xl:justify-between gap-4 lg:gap-y-10 xl:items-end'>
            <div className='flex gap-3 sm:gap-6 mt-4 md:mt-0'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -4 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
                  },
                }}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
              >
                <CTAButton
                  text={t('heroSection.ctaText')}
                  url={getWhatsappMessageUrl(
                    PHONE_NUMBER,
                    'Hello, I am interested in your logistics services. Please provide me with more information.'
                  )}
                  size='md'
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -4 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: 'easeOut', delay: 0.7 },
                  },
                }}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
              >
                <CTAButton
                  text={t('heroSection.cta2Text')}
                  url={'/about-us'}
                  size='md'
                  variant='outline-white'
                />
              </motion.div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: 'easeOut', delay: 1 },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='bg-white rounded-lg py-4 px-5 flex items-center gap-4 w-full sm:w-[400px] h-auto mt-8 lg:mt-0'
            >
              <div className='md:w-1/2 w-2/3'>
                <div className='mb-4'>
                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 4 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          ease: 'easeOut',
                          delay: 0.2,
                        },
                      },
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    className='text-primary font-semibold font-manrope text-sm md:text-base [&>span]:text-secondary'
                    dangerouslySetInnerHTML={{
                      __html: t.raw('heroSection.locationText'),
                    }}
                  ></motion.p>
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
            </motion.div>
          </div>
        </div>

        <div className='absolute right-4 lg:right-8 xl:right-20 top-8 md:top-8 lg:top-16 z-10'>
          <div className='flex gap-2'>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: 'easeOut', delay: 0.2 },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className=' items-center justify-center w-10 h-10 rounded-full bg-white transition-transform duration-300 group-hover:rotate-45 hidden xl:flex'
            >
              <BiMapPin className='text-primary w-5 h-5 transition-colors duration-300' />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              className='bg-white font-manrope text-primary h-10 rounded-full font-semibold items-center px-4 hidden xl:flex'
            >
              {t('heroSection.locationMapText')}
            </motion.div>
          </div>
        </div>

        {/* Decorative tracking images: hide on small screens to avoid layout issues */}
        <div className='hidden xl:block'>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div>
              <Image
                src={t('heroSection.locationMarker1Image.src')}
                alt={t('heroSection.locationMarker1Image.alt')}
                width={400}
                height={200}
                className='absolute xl:top-[40%] xl:right-[25%] w-44 h-44 lg:w-52 lg:h-52 mb-4 mr-4 z-10'
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          >
            <div>
              <Image
                src={t('heroSection.locationMarker2Image.src')}
                alt={t('heroSection.locationMarker2Image.alt')}
                width={400}
                height={200}
                className='absolute  w-44 h-44 lg:w-52 lg:h-52 mb-4 mr-4 z-10 xl:top-[18%] xl:right-[20%]'
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/*Mobile Hero Section */}
      <div className='block lg:hidden mt-6 lg:mt-0'>
        <div className='px-4 md:px-8 lg:px-6 xl:px-0'>
          <div className='max-w-xl md:max-w-2xl'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl leading-tight font-medium mb-6 font-manrope max-w-xs sm:max-w-none text-primary'>
              {t('heroSection.title')}
            </h1>
            <p className='text-primary font-manrope'>
              {t('heroSection.subtitle')}
            </p>
          </div>

          <div className='space-y-6 mt-10'>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CTAButton
                text={t('heroSection.ctaText')}
                url={getWhatsappMessageUrl(
                  PHONE_NUMBER,
                  'Hello, I am interested in your logistics services. Please provide me with more information.'
                )}
                variant='secondary'
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
            >
              <CTAButton
                text={t('heroSection.cta2Text')}
                url={'/about-us'}
                size='md'
                variant='outline-primary'
              />
            </motion.div>
          </div>

          <div className='relative min-h-[660px] mt-12 rounded-xl overflow-hidden z-0'>
            <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center"></div>

            {/* Overlay Gradient */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/60 to-transparent [background-size:100%] z-10'></div>

            <div className='absolute left-6 top-16 z-10'>
              <div className='flex gap-2'>
                <div className='flex items-center justify-center w-10 h-10 rounded-full bg-white transition-transform duration-300 group-hover:rotate-45'>
                  <BiMapPin className='text-primary w-5 h-5 transition-colors duration-300' />
                </div>
                <div className='bg-white font-manrope text-primary h-10 rounded-full font-semibold items-center px-4 flex'>
                  {t('heroSection.locationMapText')}
                </div>
              </div>
            </div>

            {/* Decorative tracking images: hide on small screens to avoid layout issues */}
            <div>
              <div>
                <Image
                  src={t('heroSection.locationMarker1Image.src')}
                  alt={t('heroSection.locationMarker1Image.alt')}
                  width={400}
                  height={200}
                  className='absolute top-[16%] right-[8%] w-44 h-44 mb-4 mr-4 z-10'
                />
              </div>

              <div>
                <Image
                  src={t('heroSection.locationMarker2Image.src')}
                  alt={t('heroSection.locationMarker2Image.alt')}
                  width={400}
                  height={200}
                  className='absolute top-[38%] right-[20%] w-44 h-44 mb-4 mr-4 z-10'
                />
              </div>
            </div>

            <div className='bg-white rounded-lg py-4 px-5 flex items-center gap-4 w-[90%] sm:w-[400px] h-auto mt-8 lg:mt-0 absolute bottom-14 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 z-10'>
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
      </div>
    </section>
  );
}
