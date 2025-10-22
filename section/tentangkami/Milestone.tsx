'use client';

import { transformMessages } from '@/i18n/messages';
import { useMessages, useTranslations } from 'next-intl';

export default function MilestoneSection() {
  const t = useTranslations('aboutPage.milestoneSection');

  const messages = useMessages();
  const yearList = transformMessages(messages.aboutPage.milestoneSection.years);

  const years = [1999, 2005, 2012, 2018, 2023];

  const sidePad = `${50 / years.length}%`;

  return (
    <>
      <section>
        <div className='bg-primary mb-20 md:mb-30 py-24'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center gap-2'>
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-white uppercase font-manrope'>
                  {t('heading')}
                </p>
              </div>

              <div className='mt-8'>
                <h1 className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white'>
                  {t('title')}
                </h1>
              </div>

              <div className='w-full px-6 xl:px-0 mt-8 md:mt-16'>
                {/* Mobile: vertical timeline */}
                <div className='relative flex flex-col gap-8 md:hidden mt-8'>
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
                    <div
                      key={item.year}
                      className='flex gap-4 items-start relative'
                    >
                      {/* Titik */}
                      <div className='flex-shrink-0 relative z-10 mt-1'>
                        <div className='p-2 rounded-full bg-[#E0E6F3] flex items-center justify-center'>
                          <div className='w-3 h-3 rounded-full bg-[#20458E]' />
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
                    </div>
                  ))}
                </div>

                {/* Desktop: horizontal timeline */}
                <div className='hidden md:block mt-12'>
                  <div className='relative w-11/12 max-w-6xl mx-auto'>
                    {/* Solid Line (kiri) */}
                    <div
                      className='absolute top-[62px] left-0 h-1 rounded-full bg-[#E0E6F3]'
                      style={{ width: '10%' }}
                    />

                    {/* Garis dotted horizontal (nyambung dari titik pertama ↔ terakhir) */}
                    <div
                      aria-hidden
                      className='absolute top-16 h-1'
                      style={{
                        left: sidePad,
                        right: sidePad,
                        background:
                          'repeating-linear-gradient(to right, #E0E6F3 0 6px, transparent 6px 12px)',
                        transform: 'translateY(-50%)',
                      }}
                    />

                    <div className='relative flex justify-between items-start'>
                      {yearList.map((item) => (
                        <div
                          key={item.year}
                          className='relative flex flex-col items-center text-center'
                          style={{ width: `${100 / yearList.length}%` }}
                        >
                          <span className='text-white text-lg mb-6 font-manrope font-semibold'>
                            {item.year}
                          </span>

                          <div className='p-1.5 rounded-full bg-[#E0E6F3] flex items-center justify-center'>
                            <div className='w-3 h-3 rounded-full bg-[#20458E]' />
                          </div>

                          <p className='text-white text-sm mt-6 text-center font-manrope leading-relaxed max-w-[170px]'>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
