'use client';
import CTAButton from '@/components/CTAButton';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function GetInTouch() {
  const t = useTranslations();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <motion.section
        className='px-4 md:px-6 xl:px-0'
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='relative'>
          <div className='relative max-w-7xl mx-auto mb-12 md:mb-16 rounded-xl overflow-hidden z-0'>
            <div className="absolute inset-0 bg-[url('/img/img1.webp')] bg-cover bg-center"></div>

            <div className='absolute inset-0 bg-gradient-to-r from-[#0B55A7] via-[#0B55A7]/80 to-transparent [background-size:100%]'></div>

            <motion.div
              className='relative p-6 md:p-16'
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <motion.h1
                className='text-white font-manrope text-2xl md:text-5xl font-medium max-w-full md:max-w-xl leading-tight mb-6 md:mb-10 z-10'
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.18 }}
              >
                {t('getInTouchSection.title')}
              </motion.h1>

              <div className='flex flex-col md:flex-row md:justify-between md:items-end gap-6'>
                <motion.p
                  className='text-[#EEEEEE] font-manrope w-full md:w-2/5 z-10 text-sm md:text-base'
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.26 }}
                >
                  {t('getInTouchSection.content')}
                </motion.p>

                <motion.div
                  className='w-full md:w-auto'
                  initial={{ opacity: 0, x: -12 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                  }
                  transition={{ duration: 0.6, delay: 0.34 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CTAButton
                    text={t('getInTouchSection.ctaText')}
                    url={getWhatsappMessageUrl(
                      PHONE_NUMBER,
                      'Hello, I am interested in your logistics services. Please provide me with more information.'
                    )}
                    size='md'
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
