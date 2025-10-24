'use client';

import { transformMessages } from '@/i18n/messages';
import { Disclosure } from '@headlessui/react';
import { useInView } from 'motion/react';
import { useMessages, useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const FaqSection = () => {
  const t = useTranslations('contactPage.faqSection');

  const messages = useMessages();

  const faqs = transformMessages(messages.contactPage.faqSection.faqs);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      className='max-w-4xl mx-auto px-4 md:px-6 xl:px-0 py-16 pt-5'
      ref={ref}
    >
      <header className='flex flex-col justify-center items-center text-center px-2 md:px-0'>
        <motion.div
          initial={{ opacity: 0, x: -4 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
          transition={{ duration: 0.8 }}
          className='flex items-center gap-2 mb-3'
        >
          <span className='relative flex'>
            <span className='absolute inline-flex size-3 animate-ping rounded-full bg-secondary opacity-75' />
            <span className='relative inline-flex size-3 rounded-full bg-secondary' />
          </span>

          <p className='text-sm font-medium text-primary uppercase font-manrope'>
            {t('heading')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-4 w-full'
        >
          <p
            className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary mx-auto max-w-full sm:max-w-3xl md:max-w-4xl [&>span]:text-secondary'
            dangerouslySetInnerHTML={{
              __html: t.raw('title'),
            }}
          ></p>
        </motion.div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='bg-white mt-4 md:mt-10'
      >
        {faqs.map((item, i) => (
          <Disclosure key={i} defaultOpen={i === 2}>
            {({ open }) => (
              <div className='border-b last:border-b-0 border-slate-200'>
                <h4 className='m-0'>
                  <Disclosure.Button className='w-full text-left px-2 lg:px-6 py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400'>
                    <span className='text-lg md:text-xl text-sky-700 font-medium font-manrope'>
                      {item.question}
                    </span>

                    <svg
                      className={cn(
                        `w-6 h-6 text-slate-600 transform transition-transform duration-200`,
                        open ? 'rotate-180' : 'rotate-0'
                      )}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden
                    >
                      <path
                        d='M6 9l6 6 6-6'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Disclosure.Button>
                </h4>

                <Disclosure.Panel className='px-6 py-4'>
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={
                      open ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }
                    }
                    transition={{ duration: 0.25 }}
                  >
                    <p className='text-slate-500 text-base leading-relaxed font-manrope'>
                      {item.answer}
                    </p>
                  </motion.div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </motion.div>
    </section>
  );
};

export default FaqSection;
