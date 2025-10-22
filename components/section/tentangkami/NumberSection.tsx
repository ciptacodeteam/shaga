'use client';
import { transformMessages } from '@/i18n/messages';
import { useInView } from 'motion/react';
import { useMessages } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function NumberSection() {
  const messages = useMessages();
  const statList = transformMessages(messages.aboutPage.numberSection.stats);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ staggerChildren: 0.12 }}
      >
        <div className='max-w-7xl mx-auto mb-20 md:mb-32'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 px-4 md:px-6 xl:px-0'>
            {statList.map(
              (
                stat: { id: string; value: string; label: string },
                i: number
              ) => (
                <motion.div
                  className='border border-[#E0E6F3] p-8 rounded-xl'
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 20, scale: 0.98 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: 'easeOut',
                  }}
                >
                  <div className='flex flex-col items-center justify-center'>
                    <h1 className='font-manrope text-primary  text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight'>
                      {stat.value}
                    </h1>
                    <p className='font-manrope text-[#556996] text-base md:text-lg lg:text-2xl font-medium mt-8 text-center'>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>
    </>
  );
}
