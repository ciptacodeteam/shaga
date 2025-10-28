'use client';
import { transformMessages } from '@/i18n/messages';
import { Link } from '@/i18n/navigation';
import { useInView } from 'motion/react';
import { useMessages, useTranslations } from 'next-intl';
import { useRef } from 'react';
import {
  FaTruckLoading,
  FaWarehouse,
  FaCogs,
  FaGlobe,
  FaTruck,
  FaDolly,
} from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion } from 'framer-motion';

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

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <>
      <section ref={ref}>
        <div className='max-w-7xl mx-auto mb-24 md:mb-36 px-4 md:px-8 lg:px-6 xl:px-0'>
          <div className='flex flex-col justify-center items-center text-center'>
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
              transition={{ duration: 0.8 }}
              className='flex items-center gap-2 mb-3'
            >
              <span className='relative flex size-3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
              </span>
              <p className='text-sm font-medium text-primary uppercase font-manrope'>
                {t('servicesSection.heading')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-16  px-4 md:px-0'
            >
              <p
                className='font-manrope text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-relaxed lg:leading-tight text-primary mx-auto md:max-w-3/4 [&>span]:text-secondary capitalize'
                dangerouslySetInnerHTML={{
                  __html: t.raw('servicesSection.title'),
                }}
              ></p>
            </motion.div>
          </div>

          <div className='flex flex-col gap-6 px-4 md:px-0'>
            {services.map((service, index) => (
              <Link key={index} href={'/services'}>
                <motion.div
                  className='group flex items-center justify-between rounded-xl p-5 transition-all duration-300 cursor-pointer bg-white border border-[#E0E6F3] hover:bg-primary hover:text-white'
                  initial={{ opacity: 0, y: 12 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: 'easeOut',
                  }}
                  whileHover={{ scale: 1.01 }}
                  layout
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
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
