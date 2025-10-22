'use client';

import CTAButton from '@/components/CTAButton';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function FindUsSection() {
  const t = useTranslations('contactPage.findUsSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref}>
      <div className="bg-primary py-10 md:py-20 mb-16 md:mb-30 inset-0 bg-[url('/img/map.webp')] bg-blend-multiply bg-cover bg-no-repeat">
        <div className='max-w-7xl mx-auto px-4 md:px-6 xl:px-0'>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center'>
            <motion.div
              className='w-full'
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className='w-full xl:w-[600px] h-[400px] md:aspect-h-3 rounded-xl overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.9413272794386!2d98.65997647530624!3d3.5867875503058926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131002de23245%3A0x7934cd2d6c49eb3c!2sPT.%20SHAGA%20(PT.%20SHAKTINAGARA%20GANDA%20ARTHATENTERAM%20MAKMURJAYA)!5e0!3m2!1sid!2sid!4v1760959768587!5m2!1sid!2sid'
                  className='w-full h-full border-0'
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </motion.div>

            <div className='w-full'>
              <div className='flex flex-col'>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                  }
                  transition={{ duration: 0.8 }}
                  className='flex items-center gap-2 mb-3'
                >
                  <span className='relative flex'>
                    <span className='absolute inline-flex size-3 animate-ping rounded-full bg-secondary opacity-75'></span>
                    <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                  </span>
                  <p className='text-sm font-medium text-white uppercase font-manrope'>
                    {t('heading')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                  className='mb-6 md:mb-8'
                >
                  <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white'>
                    {t('title')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                >
                  <CTAButton text={t('ctaText')} url={t('ctaLink')} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
