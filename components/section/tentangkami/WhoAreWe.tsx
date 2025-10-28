'use client';
import Image from 'next/image';
import sea from '@/public/img/sea.webp';

import { BsPatchCheck } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function WhoAreWeSection() {
  const t = useTranslations('aboutPage.whoAreWeSection');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section className='relative mb-16 lg:mb-30' ref={ref}>
        <div className='max-w-7xl mx-auto px-4 md:px-8 xl:px-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16'>
            <div className='w-full flex flex-col justify-center'>
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
                  {t('heading')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className='mb-4 md:mb-8'
              >
                <p
                  className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary capitalize'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('title'),
                  }}
                ></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className='font-manrope text-primary mb-6 md:mb-10 text-sm sm:text-base'>
                  {t('description')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className='rounded-t-xl bg-[#EEF4FF] mt-6'
              >
                <p className='font-manrope text-primary font-semibold p-4 md:p-6 text-sm md:text-base'>
                  {t('quote')}
                </p>
                <div className='bg-secondary w-full h-1.5'></div>
              </motion.div>
            </div>

            <div className='w-full lg:max-w-5/6 lg:ml-auto h-[450px] lg:h-full relative'>
              {/* Ensure the immediate parent of the Image has an explicit height */}
              <motion.div
                className='h-[450px] md:h-full w-full relative rounded-xl overflow-hidden'
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src={sea}
                  alt='Sea freight logistics image'
                  fill
                  className='object-cover rounded-xl'
                />
                <motion.div
                  className='absolute bottom-4 left-4 right-4 md:left-4 md:right-auto p-2 md:p-6'
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.div
                    className='bg-white p-4 md:p-6 rounded-lg'
                    initial={{ scale: 0.98 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.98 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <div className='space-y-3 md:space-y-4'>
                      <div className='flex items-center gap-3'>
                        <BsPatchCheck className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          {t('values.trust')}
                        </p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <IoPeopleOutline className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          {t('values.customerCentric')}
                        </p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <HiOutlineLightBulb className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          {t('values.innovation')}
                        </p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <AiOutlineDeploymentUnit className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          {t('values.sustainability')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
