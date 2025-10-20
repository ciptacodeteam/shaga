'use client';

import { Disclosure } from '@headlessui/react';

const faqData = [
  {
    question: 'How long does it take for someone to respond to my inquiry?',
    answer:
      'We aim to respond to all inquiries within 24–48 hours on business days. For urgent matters, please call our customer service line.',
  },
  {
    question: 'Can I visit your office without an appointment?',
    answer:
      'Visits are welcome, but we recommend scheduling an appointment so we can ensure the right person is available to help you quickly.',
  },
  {
    question: 'What information should I include in my message for a quote?',
    answer:
      'Please include your shipping needs, the type of freight, dimensions/weight, origin and destination, and any specific services you require. The more detail you provide, the more accurate your quote will be.',
  },
  {
    question: 'How do I track my shipment?',
    answer:
      'You can track your shipment using our online tracking system — enter your tracking number on the website for real-time status updates. If you need assistance, contact customer support.',
  },
];

const FaqSection = () => {
  return (
    <section className='max-w-4xl mx-auto px-6 py-16 pt-5'>
      <header className='flex flex-col justify-center items-center text-center px-2 md:px-0'>
        <div className='flex items-center gap-2 mb-3'>
          <span className='relative flex'>
            <span className='absolute inline-flex h-3 w-3 md:h-4 md:w-4 animate-ping rounded-full bg-secondary opacity-75' />
            <span className='relative inline-flex h-3 w-3 md:h-4 md:w-4 rounded-full bg-secondary' />
          </span>

          <p className='text-sm font-medium text-primary uppercase font-manrope'>
            Frequently Asked Questions
          </p>
        </div>

        <div className='mb-4 w-full'>
          <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary mx-auto max-w-full sm:max-w-3xl md:max-w-4xl'>
            Common <span className='text-secondary'>Questions</span> About Our
            Services.
          </p>
        </div>
      </header>

      <div className='bg-white mt-10'>
        {faqData.map((item, i) => (
          <Disclosure key={i} defaultOpen={i === 2}>
            {({ open }) => (
              <div className='border-b last:border-b-0 border-slate-200'>
                <h4 className='m-0'>
                  <Disclosure.Button className='w-full text-left px-6 py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400'>
                    <span className='text-lg md:text-xl text-sky-700 font-medium'>
                      {item.question}
                    </span>

                    <svg
                      className={`w-6 h-6 text-slate-600 transform transition-transform duration-200 ${
                        open ? 'rotate-180' : 'rotate-0'
                      }`}
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
                  <p className='text-slate-500 text-base leading-relaxed'>
                    {item.answer}
                  </p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
