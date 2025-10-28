'use client';
import Image from 'next/image';

import truck from '@/public/img/truck.webp';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { motion } from 'framer-motion';

export default function VisionMissionSection() {
  const t = useTranslations();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section
        className='relative mb-[450px] md:mb-[700px] lg:mb-38 lg:min-h-[400px] xl:min-h-[450px]'
        ref={ref}
      >
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 px-8 xl:px-0'>
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }
                }
                transition={{ duration: 0.8 }}
                className='flex items-center gap-2 mb-3'
              >
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  {t('visionMissionSection.heading')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mb-12'
              >
                <p
                  className='font-manrope md:text-3xl  text-xl leading-relaxed xl:text-5xl lg:leading-tight text-primary [&>span]:text-secondary'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('visionMissionSection.title'),
                  }}
                ></p>
              </motion.div>

              <div className='space-y-12'>
                <div className='grid grid-cols-5 gap-20'>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.9, y: 10 }
                    }
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='col-span-1'
                  >
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.visionNumber')}
                    </p>
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.visionTitle')}
                    </p>
                  </motion.div>
                  <div className='col-span-4'>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, y: 0 }
                          : { opacity: 0, scale: 0.95, y: 10 }
                      }
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className='text-primary font-manrope'
                    >
                      {t('visionMissionSection.visionDescription')}
                    </motion.p>
                  </div>
                </div>

                <div className='grid grid-cols-5 gap-20'>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.9, y: 10 }
                    }
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='col-span-1'
                  >
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.missionNumber')}
                    </p>
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.missionTitle')}
                    </p>
                  </motion.div>
                  <div className='col-span-4'>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, y: 0 }
                          : { opacity: 0, scale: 0.95, y: 10 }
                      }
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className='text-primary font-manrope'
                    >
                      {t('visionMissionSection.missionDescription')}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-16 lg:mt-0 relative lg:static w-full lg:w-auto'>
              <motion.div
                initial={{ opacity: 0, x: 4 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 4 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='absolute right-0 top-0'
              >
                <Image
                  alt='Truck logistics image'
                  src={truck}
                  className='w-[400px] md:w-[700px] lg:w-[500px] xl:w-[650px] h-auto object-contain'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
