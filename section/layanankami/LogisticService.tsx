import { transformMessages } from '@/i18n/messages';
import { useMessages, useTranslations } from 'next-intl';
import {
  FaCogs,
  FaDolly,
  FaGlobe,
  FaTruck,
  FaTruckLoading,
  FaWarehouse,
} from 'react-icons/fa';

export default function LogisticService() {
  const t = useTranslations('servicePage.logisticServiceSection');

  const messages = useMessages();
  const services = transformMessages(
    messages.servicePage.logisticServiceSection.list
  );

  const serviceIcons = {
    'service-1': <FaTruckLoading size={28} />,
    'service-2': <FaWarehouse size={28} />,
    'service-3': <FaCogs size={28} />,
    'service-4': <FaGlobe size={28} />,
    'service-5': <FaTruck size={28} />,
    'service-6': <FaDolly size={28} />,
  };

  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-24 md:mb-30'>
          <div className='flex flex-col justify-center items-center text-center px-4'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='relative flex'>
                <span className='absolute inline-flex h-2.5 w-2.5 md:h-3 md:w-3 animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-primary uppercase font-manrope'>
                {t('heading')}
              </p>
            </div>

            <div className='mb-4'>
              <p
                className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary mx-auto max-w-full sm:max-w-3xl md:max-w-3/4 [&>span]:text-secondary'
                dangerouslySetInnerHTML={{
                  __html: t.raw('title'),
                }}
              ></p>
            </div>

            <div className='max-w-5xl px-2'>
              <p className='text-primary font-manrope'>{t('description')}</p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16 gap-6 lg:gap-8 px-4'>
            {services.map((service, index) => (
              <div
                key={index}
                className='group flex flex-col rounded-xl p-4 sm:p-6 transition-all duration-300 bg-white border border-[#E0E6F3] hover:bg-primary hover:text-white min-h-[220px]'
              >
                <div className='flex flex-col'>
                  <div className='bg-[#CBFFE3] w-fit text-secondary p-2 sm:p-3 rounded-lg transition-all duration-300 group-hover:bg-[#E0E6F3] group-hover:!text-primary mb-5 md:mb-7'>
                    {serviceIcons[service.key]}
                  </div>

                  <div className='mb-3 md:mb-5'>
                    <h3 className='text-lg sm:text-xl font-manrope text-primary font-medium transition-all duration-300 group-hover:!text-white'>
                      {service.title}
                    </h3>
                  </div>

                  <div className='mt-auto'>
                    <p className='text-sm font-manrope text-primary transition-all duration-300 group-hover:!text-[#E0E6F3]'>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
