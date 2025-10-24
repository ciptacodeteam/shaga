'use client';

import { transformMessages } from '@/i18n/messages';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { useMessages, useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function MilestoneSection() {
  const t = useTranslations('aboutPage.milestoneSection');

  const messages = useMessages();
  const yearList = transformMessages(messages.aboutPage.milestoneSection.years);

  const years = [1999, 2005, 2012, 2018, 2023];

  const sidePad = `${50 / years.length}%`;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section ref={ref}>
        <div className='bg-primary mb-20 md:mb-30 py-24'>
          <div className='max-w-7xl mx-auto '>
            <div className='flex flex-col justify-center items-center'>
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }
                }
                transition={{ duration: 0.8 }}
                className='flex justify-center items-center gap-2'
              >
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-white uppercase font-manrope'>
                  {t('heading')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mt-4 md:mt-8'
              >
                <h1 className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white'>
                  {t('title')}
                </h1>
              </motion.div>

              <motion.div
                className='w-full px-6 xl:px-0 mt-8 md:mt-16'
                initial='hidden'
                animate={isInView ? 'show' : 'hidden'}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.12 } },
                }}
              >
                {/* Mobile: vertical timeline */}
                <motion.div
                  className='relative flex flex-col gap-8 md:hidden mt-8'
                  variants={{ hidden: {}, show: {} }}
                >
                  {/* Garis dotted vertikal (nyambung penuh) */}
                  <div
                    aria-hidden
                    className='absolute left-3 top-0 bottom-0 w-1 mt-4'
                    style={{
                      background:
                        'repeating-linear-gradient(to bottom, #E0E6F3 0 6px, transparent 6px 12px)',
                    }}
                  />
                  {yearList.map((item) => (
                    <motion.div
                      key={item.year}
                      className='flex gap-4 items-start relative'
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        show: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      {/* Titik */}
                      <div className='flex-shrink-0 relative z-10 mt-1'>
                        <div className='p-2 rounded-full bg-[#E0E6F3] flex items-center justify-center'>
                          <div className='w-3 h-3 rounded-full bg-[#02863f]' />
                        </div>
                      </div>

                      {/* Konten */}
                      <div className='pl-1'>
                        <div className='text-white text-lg font-manrope font-semibold'>
                          {item.year}
                        </div>
                        <p className='text-white text-sm mt-2 font-manrope leading-relaxed max-w-prose'>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Desktop: horizontal timeline */}
                <motion.div
                  className='hidden md:block mt-12'
                  variants={{ hidden: {}, show: {} }}
                >
                  <div className='relative w-11/12 max-w-6xl mx-auto'>
                    {/* Solid Line (kiri) */}
                    <motion.div
                      className='absolute top-[62px] left-0 h-1 rounded-full bg-[#E0E6F3]'
                      style={{ width: '10%', transformOrigin: 'left' }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scaleX: 1 }
                          : { opacity: 0, scaleX: 0 }
                      }
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />

                    {/* Garis dotted horizontal (nyambung dari titik pertama ↔ terakhir) */}
                    <motion.div
                      aria-hidden
                      className='absolute top-16 h-1'
                      style={{
                        left: sidePad,
                        right: sidePad,
                        background:
                          'repeating-linear-gradient(to right, #E0E6F3 0 6px, transparent 6px 12px)',
                        transform: 'translateY(-50%)',
                        transformOrigin: 'left',
                      }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scaleX: 1 }
                          : { opacity: 0, scaleX: 0 }
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.1,
                        ease: 'easeOut',
                      }}
                    />

                    <div className='relative flex justify-between items-start'>
                      {yearList.map((item) => (
                        <motion.div
                          key={item.year}
                          className='relative flex flex-col items-center text-center'
                          style={{ width: `${100 / yearList.length}%` }}
                          variants={{
                            hidden: { opacity: 0, y: 12 },
                            show: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                          <span className='text-white text-lg mb-6 font-manrope font-semibold'>
                            {item.year}
                          </span>

                          <div className='p-1.5 rounded-full bg-[#E0E6F3] flex items-center justify-center'>
                            <div className='w-3 h-3 rounded-full bg-[#02863f]' />
                          </div>

                          <p className='text-white text-sm mt-6 text-center font-manrope leading-relaxed max-w-[170px]'>
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
