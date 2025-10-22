import Image from 'next/image';

import sea from '@/public/img/sea.webp';

import { BsPatchCheck } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

export default function WhoAreWeSection() {
  const t = useTranslations('aboutPage.whoAreWeSection');

  return (
    <>
      <section className='relative mb-16 md:mb-30'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-start'>
            <div className='w-full md:w-3/5 flex flex-col justify-center'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  {t('heading')}
                </p>
              </div>

              <div className='mb-4 md:mb-8'>
                <p
                  className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('title'),
                  }}
                ></p>
              </div>

              <div>
                <p className='font-manrope text-primary mb-6 md:mb-10 text-sm sm:text-base'>
                  {t('description')}
                </p>
              </div>

              <div className='rounded-t-xl bg-[#EEF4FF] mt-6'>
                <p className='font-manrope text-primary font-semibold p-4 md:p-6 text-sm md:text-base'>
                  {t('quote')}
                </p>
                <div className='bg-secondary w-full h-1.5'></div>
              </div>
            </div>

            <div className='w-full md:w-2/5 relative'>
              {/* Ensure the immediate parent of the Image has an explicit height */}
              <div className='h-[450px] md:h-96 lg:h-[570px] w-full relative rounded-xl overflow-hidden'>
                <Image
                  src={sea}
                  alt='Sea freight logistics image'
                  fill
                  className='object-cover rounded-xl'
                />
                <div className='absolute bottom-4 left-4 right-4 md:left-4 md:right-auto p-2 md:p-6'>
                  <div className='bg-white p-4 md:p-6 rounded-lg'>
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
