'use client';

import { transformMessages } from '@/i18n/messages';
import { cn } from '@/lib/utils';
import { useMessages, useTranslations } from 'next-intl';
import Image from 'next/image';

import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';

export default function WorkProcess() {
  const t = useTranslations('servicePage.workProcessSection');

  const messages = useMessages();
  const stepsList = transformMessages(
    messages.servicePage.workProcessSection.steps
  );

  const [activeStep, setActiveStep] = useState(stepsList[0]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section ref={ref}>
        <div className='max-w-7xl mx-auto mb-12 lg:mb-30 px-4 md:px-6 xl:px-0'>
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
              {t('heading')}
            </p>
          </motion.div>

          <div className='mb-6 lg:mb-10'>
            <p
              className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
              dangerouslySetInnerHTML={{
                __html: t.raw('title'),
              }}
            ></p>
          </div>

          <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
            <div className='w-full md:w-1/2'>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-[#2A437C] font-manrope mb-6 md:mb-0'
              >
                {t('description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className='mt-8 md:mt-16 py-0 md:py-2'
              >
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  width={1000}
                  height={300}
                  className='bg-[#E0E6F3] w-full h-auto rounded-xl py-4 md:py-6'
                />
              </motion.div>
            </div>

            <div className='w-full md:w-1/2 space-y-6 md:space-y-8'>
              {stepsList.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.6, delay: 0.12 * i }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.995 }}
                  onMouseEnter={() => setActiveStep(step)}
                  onClick={() => setActiveStep(step)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveStep(step);
                  }}
                  role='button'
                  tabIndex={0}
                  className={cn(
                    `cursor-pointer group py-4 md:py-6 relative focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg px-2`,
                    activeStep.number === step.number ? 'bg-white/5' : ''
                  )}
                >
                  {/* Garis atas */}
                  <span
                    className={cn(
                      `absolute left-0 top-0 w-full h-[1px] bg-[#E0E6F3] transition-all origin-left `,
                      activeStep.number === step.number
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  ></span>

                  {/* Garis bawah */}
                  <span
                    className={cn(
                      `absolute left-0 bottom-0 w-full h-[1px] bg-[#E0E6F3] transition-all origin-left`,
                      activeStep.number === step.number
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  ></span>

                  <div className='flex items-start gap-6 md:gap-10'>
                    {/* Kolom angka dengan lebar tetap */}
                    <div className='flex-shrink-0 w-12 md:w-20 flex justify-start'>
                      <span className='text-3xl md:text-7xl font-medium font-manrope leading-none text-[#B4BED5]'>
                        {step.number}
                      </span>
                    </div>

                    {/* Kolom teks */}
                    <div>
                      <h3 className='text-primary font-medium text-lg md:text-2xl font-manrope mb-1 md:mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-[#2A437C] font-manrope text-sm'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
