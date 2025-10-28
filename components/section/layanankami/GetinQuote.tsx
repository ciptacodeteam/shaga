'use client';
import CTAButton from '@/components/CTAButton';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function GetinQuote() {
  const t = useTranslations('servicePage.quoteCtaSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <div
        className='max-w-7xl mx-auto mb-12 px-4 md:px-8 lg:px-6 xl:px-0'
        ref={ref}
      >
        <div className="bg-primary relative bg-[url('/img/map.webp')] bg-blend-overlay bg-cover bg-no-repeat p-6 sm:p-8 md:p-12 rounded-xl">
          <div className='p-6 sm:p-8 md:p-0 rounded-lg md:rounded-none'>
            <motion.div
              className='flex flex-col justify-center items-center text-center'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                className='mb-4 sm:mb-6'
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
              >
                <motion.p
                  className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-white capitalize'
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
                >
                  {t('title')}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              >
                <motion.p
                  className='font-manrope text-white mb-6 sm:mb-10 text-sm sm:text-base'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                >
                  {t('description')}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              >
                <CTAButton
                  text={t('ctaText')}
                  url={getWhatsappMessageUrl(
                    PHONE_NUMBER,
                    'Hello, I am interested in your logistics services. Please provide me with more information.'
                  )}
                  size='md'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
