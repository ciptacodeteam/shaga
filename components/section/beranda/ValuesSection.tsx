'use client';
import { useInView } from 'motion/react';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { BsPatchCheck } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoPeopleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

export default function ValueSection() {
  const t = useTranslations();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section ref={ref}>
        <div className='max-w-7xl mx-auto mb-64 md:mb-36 px-4 md:px-6 xl:px-0'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
            <div className='w-full md:w-1/3'>
              <div className='flex flex-col'>
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
                    {t('valuesSection.heading')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className='mb-6 md:mb-8'
                >
                  <p
                    className='font-manrope text-2xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
                    dangerouslySetInnerHTML={{
                      __html: t.raw('valuesSection.title'),
                    }}
                  ></p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className='font-manrope text-primary text-sm md:text-base'
                >
                  {t('valuesSection.subtitle')}
                </motion.p>
              </div>
            </div>

            <motion.div className='w-full md:w-2/3'>
              <motion.div
                className='grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6 h-[700px]'
                initial='hidden'
                animate={isInView ? 'show' : 'hidden'}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className='col-span-1 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full'
                >
                  <div className='flex items-start justify-between text-sm'>
                    <div className='bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center'>
                      <BsPatchCheck className='text-primary w-6 h-6' />
                    </div>
                    <p className='font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4'>
                      {t('valuesSection.trustItem.badge')}
                    </p>
                  </div>
                  <h1 className='font-manrope text-primary mt-8 text-lg'>
                    {t('valuesSection.trustItem.content')}
                  </h1>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className='row-span-2 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full'
                >
                  <div className='flex items-start justify-between text-sm'>
                    <div className='bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center'>
                      <IoPeopleOutline className='text-primary w-6 h-6' />
                    </div>
                    <p className='font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4'>
                      {t('valuesSection.customerCentricItem.badge')}
                    </p>
                  </div>
                  <h1 className='font-manrope text-primary mt-8 text-lg'>
                    {t('valuesSection.customerCentricItem.content')}
                  </h1>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className='row-span-2 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full'
                >
                  <div className='flex items-start justify-between text-sm'>
                    <div className='bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center'>
                      <HiOutlineLightBulb className='text-primary w-6 h-6' />
                    </div>
                    <p className='font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4'>
                      {t('valuesSection.innovationItem.badge')}
                    </p>
                  </div>
                  <h1 className='font-manrope text-primary mt-8 text-lg'>
                    {t('valuesSection.innovationItem.content')}
                  </h1>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className='col-span-1 border border-[#E0E6F3] p-6 rounded-xl flex flex-col justify-between h-full'
                >
                  <div className='flex items-start justify-between text-sm'>
                    <div className='bg-[#E0E6F3] rounded-full p-3 flex-shrink-0 flex items-center justify-center'>
                      <AiOutlineDeploymentUnit className='text-primary w-6 h-6' />
                    </div>
                    <p className='font-manrope rounded-full text-primary bg-[#E0E6F3] py-1 font-semibold px-4'>
                      {t('valuesSection.sustainabilityItem.badge')}
                    </p>
                  </div>
                  <h1 className='font-manrope text-primary mt-8 text-lg'>
                    {t('valuesSection.sustainabilityItem.content')}
                  </h1>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
