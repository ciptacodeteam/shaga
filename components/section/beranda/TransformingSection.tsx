'use client';
import CTAButton from '@/components/CTAButton';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function TransformSection() {
  const t = useTranslations();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <section ref={ref}>
        <div className="relative bg-[url('/img/mountain.webp')] bg-no-repeat bg-cover w-full py-20 md:py-36">
          {/* Gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#001E62] to-transparent'></div>

          {/* Content */}
          <div className='relative max-w-7xl mx-auto px-4 md:px-8 lg:px-6 xl:px-0'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8 }}
            >
              <p className='text-white font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-tight w-full md:w-5/6'>
                {t('transformingSection.title')}
              </p>
            </motion.div>

            <div className='mt-8 md:mt-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0'>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='font-manrope text-white text-sm md:text-base w-full md:w-3/5 leading-relaxed'
              >
                {t('transformingSection.content')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className='w-full md:w-auto flex md:block mt-4 md:mt-0'
              >
                <CTAButton
                  text={t('transformingSection.ctaText')}
                  url={t('transformingSection.ctaLink')}
                  size='md'
                  className='text-sm'
                  variant='outline-white'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
