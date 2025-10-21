import Image from 'next/image';

import CTAButton from '@/components/CTAButton';
import sea from '@/public/img/sea.webp';

export default function CtaSection() {
  return (
    <>
      <div className='max-w-7xl mx-auto mb-16 px-4 sm:px-6'>
        <div className='bg-primary p-6 sm:p-12 rounded-xl'>
          <div className='flex flex-col md:flex-row gap-6 md:gap-12 items-center'>
            {/* Image: on small screens it sits on top, use a fixed aspect container for Image fill */}
            <div className='w-full md:w-2/5'>
              <div className='relative w-full aspect-video md:w-full md:h-[300px] rounded-lg overflow-hidden'>
                <Image
                  src={sea}
                  alt='Sea background'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 40vw'
                />
              </div>
            </div>

            <div className='w-full md:w-3/5 flex flex-col justify-center md:text-left'>
              <div className='mb-6'>
                <p className='font-manrope text-2xl sm:text-3xl lg:text-5xl leading-tight font-medium text-white capitalize'>
                  Percayakan kargo Anda kepada tim kami
                </p>
              </div>

              <div>
                <p className='font-manrope text-white mb-6 sm:mb-10 text-sm sm:text-base'>
                  Tim berpengalaman kami memastikan kago Anda ditangani dengan
                  sangat hati-hati, menghadirkan pengiriman yang aman dan tepat
                  waktu di setiap tahap prosesnya.
                </p>
              </div>

              <div className='mt-4 md:mt-0'>
                <div className='w-full md:w-auto'>
                  {/* Make CTA full width on mobile */}
                  <CTAButton text='Konsultasi Gratis' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
