'use client';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroService() {
  const t = useTranslations('servicePage.heroSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className='relative mb-16 lg:mb-20'
      >
        <motion.div
          initial={{ scale: 0.99 }}
          animate={isInView ? { scale: 1 } : { scale: 0.99 }}
          transition={{ duration: 0.6 }}
          className='mx-4 md:mx-8 relative rounded-xl overflow-hidden z-0'
        >
          <div className="absolute inset-0 bg-[url('/img/imghero.webp')] bg-cover bg-center" />

          <div className='absolute inset-0 bg-[#0B55A7]/80 z-10' />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className='relative z-20 flex flex-col px-6 md:px-16 py-12 md:py-28 text-white justify-center items-center text-center'
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-6 md:mb-8 font-manrope capitalize'
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className='text-white mb-6 md:mb-10 font-manrope max-w-full md:max-w-2xl px-2'
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className='flex justify-center items-center gap-2 mb-3'
            >
              <span className='relative flex'>
                <span className='absolute inline-flex h-2.5 w-2.5 md:h-3 md:w-3 animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-secondary'></span>
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.58 }}
                className='text-sm font-medium text-white uppercase font-manrope'
              >
                {t('tagline')}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
