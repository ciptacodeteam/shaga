import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function PartnerClient() {
  const t = useTranslations();

  const partners = [
    {
      id: 1,
      name: 'liqui',
      logo: '/img/logo/liquimoly.webp',
    },
    {
      id: 2,
      name: 'kirana',
      logo: '/img/logo/kirana.webp',
    },
    {
      id: 3,
      name: 'adhi',
      logo: '/img/logo/adhi.webp',
    },
    {
      id: 4,
      name: 'hudaya',
      logo: '/img/logo/hudaya.webp',
    },
    {
      id: 5,
      name: 'giant',
      logo: '/img/logo/gianttrasporter.png',
    },
    {
      id: 6,
      name: 'wika',
      logo: '/img/logo/wika.webp',
    },
    {
      id: 7,
      name: 'kawanlama',
      logo: '/img/logo/kawanlama.webp',
    },
    {
      id: 8,
      name: 'pixco',
      logo: '/img/logo/pixco.png',
    },
    {
      id: 9,
      name: 'yongsun',
      logo: '/img/logo/youngsun.webp',
    },
    {
      id: 10,
      name: 'alltech',
      logo: '/img/logo/alltech1.webp',
    },
    {
      id: 11,
      name: 'sti',
      logo: '/img/logo/sti1.png',
    },
    {
      id: 12,
      name: 'realstrong',
      logo: '/img/logo/realstrong.png',
    },
  ];

  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-24 md:mb-42 px-4 md:px-6 xl:px-0'>
          <div className='flex flex-col justify-center items-center text-center'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='relative flex size-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-primary uppercase font-manrope'>
                {t('partnerClient.heading')}
              </p>
            </div>

            <div className='mb-8 md:mb-16'>
              <p
                className='font-manrope text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed lg:leading-tight text-primary mx-auto md:max-w-3/4 [&>span]:text-secondary'
                dangerouslySetInnerHTML={{
                  __html: t.raw('partnerClient.title'),
                }}
              ></p>
            </div>
          </div>

          <div>
            <div className='mx-auto grid grid-cols-2 md:flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-12 items-center mt-6 md:mt-10 px-4 md:px-0'>
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className='flex items-center justify-center p-2 md:p-4'
                >
                  <Image
                    alt={partner.name}
                    src={partner.logo}
                    width={200}
                    height={200}
                    className='max-h-14 md:max-h-20 max-w-full object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
