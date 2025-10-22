import Image from 'next/image';

import air from '@/public/img/air.webp';
import { useTranslations } from 'next-intl';

export default function GallerySection() {
  const t = useTranslations('aboutPage.gallerySection');

  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-20 md:mb-24 px-4 md:px-6 xl:px-0'>
          <div className='flex items-center gap-2 mb-3'>
            <span className='relative flex size-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
              <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
            </span>
            <p className='text-sm font-medium text-primary uppercase font-manrope'>
              {t('heading')}
            </p>
          </div>

          <div className='flex justify-between flex-col md:flex-row gap-6 md:gap-0 mb-12'>
            <h1
              className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary [&>span]:text-secondary'
              dangerouslySetInnerHTML={{
                __html: t.raw('title'),
              }}
            ></h1>
            <p className='text-primary font-manrope md:w-2/5'>
              {t('description')}
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'>
            <div>
              <Image
                alt=''
                src={air}
                className='w-full object-fit rounded-xl'
              />
            </div>

            <div>
              <Image
                alt=''
                src={air}
                className='w-full object-fit rounded-xl'
              />
            </div>

            <div>
              <Image
                alt=''
                src={air}
                className='w-full object-fit rounded-xl'
              />
            </div>

            <div>
              <Image
                alt=''
                src={air}
                className='w-full object-fit rounded-xl'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
