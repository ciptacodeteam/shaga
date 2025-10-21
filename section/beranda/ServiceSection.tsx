import { transformMessages } from '@/i18n/messages';
import { useMessages, useTranslations } from 'next-intl';
import {
  FaTruckLoading,
  FaWarehouse,
  FaCogs,
  FaGlobe,
  FaTruck,
  FaDolly,
} from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function ServicesSection() {
  const t = useTranslations();

  const messages = useMessages();
  const services = transformMessages(messages.servicesSection.list);

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
        <div className='max-w-7xl mx-auto mb-24 md:mb-36'>
          <div className='flex flex-col justify-center items-center text-center'>
            <div className='flex items-center gap-2 mb-3'>
              <span className='relative flex size-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-primary uppercase font-manrope'>
                {t('servicesSection.heading')}
              </p>
            </div>

            <div className='mb-16'>
              <p
                className='font-manrope text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed lg:leading-tight text-primary mx-auto md:max-w-3/4 [&>span]:text-secondary'
                dangerouslySetInnerHTML={{
                  __html: t.raw('servicesSection.title'),
                }}
              ></p>
            </div>
          </div>

          <div className='flex flex-col gap-6 px-4 md:px-0'>
            {services.map((service, index) => (
              <div
                key={index}
                className='group flex items-center justify-between rounded-xl p-5 transition-all duration-300 cursor-pointer bg-white border border-[#E0E6F3] hover:bg-primary hover:text-white'
              >
                <div className='w-full md:w-1/2'>
                  <div className='md:flex items-center gap-8'>
                    <div className='bg-[#CBFFE3] text-secondary p-3 rounded-lg transition-all duration-300 group-hover:bg-[#E0E6F3] group-hover:!text-primary w-fit'>
                      {serviceIcons[service.key]}
                    </div>

                    <div className='mt-4 md:mt-0 space-y-2'>
                      <h3 className='text-xl lg:text-2xl font-manrope text-primary font-medium transition-all duration-300 group-hover:!text-white'>
                        {service.title}
                      </h3>

                      <p className='text-sm font-manrope text-primary w-5/6 transition-all duration-300 group-hover:!text-[#E0E6F3] block md:hidden'>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='w-1/2 items-center gap-10 hidden md:flex'>
                  <div>
                    <p className='text-sm font-manrope text-primary w-5/6 transition-all duration-300 group-hover:!text-[#E0E6F3]'>
                      {service.desc}
                    </p>
                  </div>

                  <div className='md:ml-auto'>
                    <IoIosArrowRoundForward className='bg-primary rounded-full size-7 text-white transition-all duration-300 group-hover:!bg-[#E0E6F3] group-hover:!text-primary' />
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
