'use client';

import { PHONE_NUMBER } from '@/lib/constant';
import { getWhatsappMessageUrl } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import CTAButton from './CTAButton';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';

const DiscussionCtaSection = () => {
  const t = useTranslations('contactPage.discussionCtaSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      className='relative my-8 md:my-16 max-w-7xl mx-auto px-4 md:px-6 xl:px-0'
      ref={ref}
    >
      <div className='relative rounded-xl overflow-hidden z-0'>
        <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center" />

        <div className='absolute inset-0 bg-[#0B55A7]/80 z-10' />

        <div className='relative z-20 flex flex-col items-center md:items-start gap-6 md:gap-8 px-6 py-10 md:py-14 md:px-16'>
          <div className='w-full md:w-2/3 text-white'>
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-6 text-left font-manrope text-2xl sm:text-3xl md:text-5xl leading-tight font-medium text-white capitalize'
            >
              {t('title')}
            </motion.h3>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='w-full md:w-1/3 flex md:justify-start'
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
        </div>
      </div>
    </section>
  );
};
export default DiscussionCtaSection;
