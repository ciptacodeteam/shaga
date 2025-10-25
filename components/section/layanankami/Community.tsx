'use client';
import CTAButton from '@/components/CTAButton';
import { transformMessages } from '@/i18n/messages';
import { useInView } from 'motion/react';
import { useMessages, useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function CommunitySection() {
  const t = useTranslations('servicePage.communitySection');

  const messages = useMessages();
  const stats = transformMessages(messages.servicePage.communitySection.stats);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section className='relative mb-24 md:mb-32' ref={ref}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 xl:px-0'>
          <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center'>
            <div className='w-full md:w-1/2 flex flex-col justify-center'>
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }
                }
                transition={{ duration: 0.8 }}
                className='flex items-center gap-2 mb-3'
              >
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  {t('heading')}
                </p>
              </motion.div>
              <div className='mb-6 md:mb-8'>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('title'),
                  }}
                ></motion.p>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='font-manrope text-primary mb-6 md:mb-10'
                >
                  {t('description')}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <CTAButton
                  text={t('ctaText')}
                  url={t('ctaLink')}
                  size='md'
                  variant='outline-primary'
                />
              </motion.div>
            </div>
            <div className='w-full md:w-1/2 relative'>
              <motion.div
                className='grid grid-cols-2 gap-4'
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ when: 'beforeChildren', staggerChildren: 0.08 }}
              >
                {stats.map((stat: any, index: number) => (
                  <motion.div
                    className='border border-[#E0E6F3] p-6 sm:p-8 rounded-xl'
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.6, delay: 0.12 * index + 0.08 }}
                  >
                    <div className='flex flex-col items-center justify-center'>
                      <h1 className='font-manrope text-primary text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight'>
                        {stat.value}
                      </h1>
                      <p className='font-manrope text-[#556996] text-base md:text-lg font-medium mt-6 text-center'>
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
