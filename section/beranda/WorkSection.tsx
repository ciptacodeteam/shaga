'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useMessages, useTranslations } from 'next-intl';
import { transformMessages } from '@/i18n/messages';

export default function WorkSection() {
  const t = useTranslations();

  const messages = useMessages();
  const steps = transformMessages(messages.workSection.steps);

  const swiperRef = useRef<any>(null);

  // auto mulai dari slide ke-2 (index 1)
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(1);
    }
  }, []);

  return (
    <section className='bg-[#001E62] py-12 md:py-10 md:mb-30 mb-24'>
      <div className='max-w-7xl mx-auto px-4 lg:px-0'>
        <div className='mb-10 md:mb-16'>
          <div className='flex items-center gap-2 md:mb-6'>
            <span className='relative flex size-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex size-3 rounded-full bg-green-400'></span>
            </span>
            <p className='text-sm font-medium text-white uppercase font-manrope'>
              {t('workSection.heading')}
            </p>
          </div>

          <div className='flex flex-col md:flex-row md:justify-between gap-6 md:gap-0'>
            <h1 className='font-manrope text-2xl md:text-4xl lg:text-5xl text-white'>
              {t('workSection.title')}
            </h1>
            <p className='text-white font-manrope md:w-2/5 text-sm md:text-base'>
              {t('workSection.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className='relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]'>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1.1}
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2.1 },
            1024: { slidesPerView: 2.6 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className='px-6 md:px-16 !pb-20 swiper-section-3'
        >
          {steps.map((step) => (
            <SwiperSlide key={step.number}>
              {({ isActive }) => (
                <div
                  role='button'
                  tabIndex={0}
                  className={cn(
                    `transition-all duration-300 rounded-xl p-6 md:p-8 flex flex-col justify-between text-left cursor-pointer focus:outline-none focus:ring-2 min-h-[400px] lg:min-h-[550px] focus:ring-offset-2 focus:ring-green-300`,
                    isActive ? 'bg-[#E0E6F3]' : 'bg-primary'
                  )}
                >
                  <div className='flex flex-col justify-center items-center'>
                    <div>
                      <span
                        className={cn(
                          `text-xl md:text-2xl font-manrope font-semibold`,
                          isActive ? 'text-primary' : 'text-[#B4BED5]'
                        )}
                      >
                        {step.number}
                      </span>
                      <h3
                        className={cn(
                          'text-xl md:text-3xl font-manrope font-semibold mt-2 mb-3 text-center md:text-left',
                          isActive ? 'text-primary' : 'text-[#E0E6F3]'
                        )}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={cn(
                          `text-sm md:text-base font-manrope text-center md:text-left`,
                          isActive ? 'text-primary' : 'text-[#B4BED5]'
                        )}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div className='mt-6 md:mt-10'>
                      <Image
                        src={isActive ? step.iconActive : step.icon}
                        alt={step.title}
                        width={400}
                        height={400}
                        className='mt-10 w-[300px] h-auto md:w-[500px] md:h-auto'
                      />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
