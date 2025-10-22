'use client';

import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
  const t = useTranslations();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section ref={ref}>
        <div className='max-w-7xl mx-auto mb-20 lg:mb-38'>
          <div className='flex flex-col justify-center items-center text-center px-4'>
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
              transition={{ duration: 0.8 }}
              className='flex items-center gap-2 mb-3'
            >
              <span className='relative flex size-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-primary uppercase font-manrope'>
                {t('solutionSection.heading')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-10 md:mb-16'
            >
              <p
                className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary mx-auto max-w-3xl lg:max-w-3/4 [&>span]:text-secondary'
                dangerouslySetInnerHTML={{
                  __html: t.raw('solutionSection.title'),
                }}
              ></p>
            </motion.div>
          </div>

          <motion.div
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {},
            }}
            className='p-4 md:px-8 xl:p-0'
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                className='w-full h-[380px] md:h-[450px] relative rounded-xl overflow-hidden p-8 md:p-12 group'
              >
                <div className="absolute inset-0 bg-[url('/img/sea.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"></div>

                <div className='absolute inset-0 bg-primary/75 z-0'></div>

                <div className='relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-6 md:mb-10'>
                  <h3 className='font-manrope font-semibold text-white z-10'>
                    {t('solutionSection.seaShipping.badge')}
                  </h3>
                </div>

                <div>
                  <p className='relative font-manrope text-white text-2xl lg:text-4xl z-20 leading-snug lg:leading-tight'>
                    {t('solutionSection.seaShipping.content')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                className='w-full h-[380px] md:h-[450px] relative rounded-xl overflow-hidden p-8 md:p-12 group'
              >
                <div className="absolute inset-0 bg-[url('/img/road.webp')] bg-cover bg-center z-0 transition-transform duration-700 ease-out group-hover:scale-110"></div>

                <div className='absolute inset-0 bg-primary/75 z-0'></div>

                <div className='relative bg-[#E0E6F3]/40 w-fit px-4 py-2 rounded-full mb-6 md:mb-10'>
                  <h3 className='font-manrope font-semibold text-white z-10'>
                    {t('solutionSection.landShipping.badge')}
                  </h3>
                </div>

                <div>
                  <p className='relative font-manrope text-white text-2xl lg:text-4xl z-20 leading-snug lg:leading-tight'>
                    {t('solutionSection.landShipping.content')}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
