import Image from 'next/image';

import { useTranslations } from 'next-intl';

export default function GallerySection() {
  const t = useTranslations('aboutPage.gallerySection');

  const images = [
    '/img/trucks/truck-1.webp',
    '/img/trucks/truck-2.webp',
    '/img/trucks/truck-3.webp',
    '/img/trucks/truck-4.webp',
    '/img/trucks/truck-5.webp',
    '/img/trucks/truck-6.webp',
    '/img/trucks/truck-7.webp',
  ];

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

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center items-center flex-wrap gap-4 md:gap-5'>
            {images.map((src, index) => (
              <div key={index} className='overflow-hidden rounded-xl'>
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  priority
                  width={500}
                  height={400}
                  className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300 lg:max-h-[310px]'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
