'use client';
import Image from 'next/image';

import CTAButton from '@/components/CTAButton';
import sea from '@/public/img/sea.webp';
import { useTranslations } from 'next-intl';
import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  const t = useTranslations('aboutPage.ctaSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <div className='max-w-7xl mx-auto mb-16 px-4 md:px-6 xl:px-0' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-primary p-6 sm:p-12 rounded-xl'
        >
          <div className='flex flex-col md:flex-row gap-6 md:gap-12 items-center'>
            {/* Image: on small screens it sits on top, use a fixed aspect container for Image fill */}
            <div className='w-full md:w-2/5'>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='relative w-full aspect-video md:w-full md:h-[300px] rounded-lg overflow-hidden'
              >
                <Image
                  src={sea}
                  alt='Sea background'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 40vw'
                />
              </motion.div>
            </div>

            <div className='w-full md:w-3/5 flex flex-col justify-center md:text-left'>
              <div className='mb-6'>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className='font-manrope text-2xl sm:text-3xl lg:text-5xl leading-tight font-medium text-white capitalize'
                >
                  {t('title')}
                </motion.p>
              </div>

              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='font-manrope text-white mb-6 sm:mb-10 text-sm sm:text-base'
                >
                  {t('description')}
                </motion.p>
              </div>

              <div className='mt-4 md:mt-0'>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className='w-full md:w-auto'
                >
                  {/* Make CTA full width on mobile */}
                  <CTAButton
                    text={t('ctaText')}
                    url={getWhatsappMessageUrl(
                      PHONE_NUMBER,
                      'Hello, I am interested in your logistics services. Please provide me with more information.'
                    )}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
