import Image from 'next/image';

import sea from '@/public/img/sea.webp';

import { BsPatchCheck } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';

export default function WhoAreWeSection() {
  return (
    <>
      <section className='relative mb-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-start'>
            <div className='w-full md:w-3/5 flex flex-col justify-center'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='relative flex size-3'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
                  <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
                </span>
                <p className='text-sm font-medium text-primary uppercase font-manrope'>
                  Mengenal Kami Lebih Dekat
                </p>
              </div>

              <div className='mb-4 md:mb-8'>
                <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary'>
                  Kami fokus dalam{' '}
                  <span className='text-secondary'>
                    layanan logistik menyeluruh
                  </span>{' '}
                  untuk memastikan pengiriman tepat waktu dan aman.
                </p>
              </div>

              <div>
                <p className='font-manrope text-primary mb-6 md:mb-10 text-sm sm:text-base'>
                  Tim kami yang berdedikasi bekerja tanpa henti untuk memberikan
                  solusi yang disesuaikan bagi berbagai bisnis dari semua skala,
                  membantu Anda mencapai tujuan dengan mudah dan andal. Mulai
                  dari layanan kepabeanan hingga pengiriman last-mile, kami
                  berkomitmen terhadap kualitas dan ketelitian di setiap layanan
                  yang kami berikan.
                </p>
              </div>

              <div className='rounded-t-xl bg-[#EEF4FF] mt-6'>
                <p className='font-manrope text-primary font-semibold p-4 md:p-6 text-sm md:text-base'>
                  Kami menyederhanakan proses logistik dengan teknologi canggih,
                  sehingga Anda dapat fokus pada pertumbuhan bisnis
                </p>
                <div className='bg-secondary w-full h-1.5'></div>
              </div>
            </div>

            <div className='w-full md:w-2/5 relative'>
              {/* Ensure the immediate parent of the Image has an explicit height */}
              <div className='h-64 md:h-96 lg:h-[570px] w-full relative rounded-xl overflow-hidden'>
                <Image
                  src={sea}
                  alt='Sea freight logistics image'
                  fill
                  className='object-cover rounded-xl'
                />
                <div className='absolute bottom-4 left-4 right-4 md:left-4 md:right-auto p-4 md:p-6'>
                  <div className='bg-white p-4 md:p-6 rounded-lg'>
                    <div className='space-y-3 md:space-y-4'>
                      <div className='flex items-center gap-3'>
                        <BsPatchCheck className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          Dipercaya
                        </p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <IoPeopleOutline className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          Prioritas
                        </p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <HiOutlineLightBulb className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          Inovasi
                        </p>
                      </div>

                      <div className='flex items-center gap-3'>
                        <AiOutlineDeploymentUnit className='text-primary w-6 h-6' />
                        <p className='font-manrope text-primary font-medium text-sm md:text-base'>
                          Keberlanjutan
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
