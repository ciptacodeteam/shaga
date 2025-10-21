import Image from 'next/image';

import truck from '@/public/img/truck.webp';
import { useTranslations } from 'next-intl';

export default function VisionMissionSection() {
  const t = useTranslations();

  return (
    <>
      <section className='relative mb-[450px] md:mb-[600px] lg:mb-38'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex items-center flex-col lg:flex-row'>
            <div className='w-full lg:w-1/2 px-8 xl:px-0'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  {t('visionMissionSection.heading')}
                </p>
              </div>
              <div className='mb-12'>
                <p
                  className='font-manrope md:text-3xl  text-xl leading-relaxed xl:text-5xl lg:leading-tight text-primary [&>span]:text-secondary'
                  dangerouslySetInnerHTML={{
                    __html: t.raw('visionMissionSection.title'),
                  }}
                ></p>
              </div>

              <div className='space-y-12'>
                <div className='grid grid-cols-5 gap-20'>
                  <div className='col-span-1'>
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.visionNumber')}
                    </p>
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.visionTitle')}
                    </p>
                  </div>
                  <div className='col-span-4'>
                    <p className='text-primary font-manrope'>
                      {t('visionMissionSection.visionDescription')}
                    </p>
                  </div>
                </div>

                <div className='grid grid-cols-5 gap-20'>
                  <div className='col-span-1'>
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.missionNumber')}
                    </p>
                    <p className='text-secondary font-semibold text-lg font-manrope'>
                      {t('visionMissionSection.missionTitle')}
                    </p>
                  </div>
                  <div className='col-span-4'>
                    <p className='text-primary font-manrope'>
                      {t('visionMissionSection.missionDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-16 lg:mt-0 relative lg:static w-full lg:w-auto'>
              <div className='absolute right-0 top-0'>
                <Image
                  alt='Truck logistics image'
                  src={truck}
                  className='w-[400px] md:w-[600px] lg:w-[500px] xl:w-[650px] h-auto object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
