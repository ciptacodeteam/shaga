import Image from 'next/image';

import CTAButton from '@/components/CTAButton';
import sea from '@/public/img/sea.webp';

export default function CtaSection() {
  return (
    <>
      <div className='max-w-7xl mx-auto mb-16'>
        <div className='bg-primary p-12 rounded-xl'>
          <div className='flex gap-12'>
            <div className='w-2/5 relative'>
              <div className='h-full w-full relative'>
                <Image
                  src={sea}
                  alt=''
                  fill
                  className='object-cover rounded-xl'
                  style={{ position: 'absolute' }}
                />
              </div>
            </div>

            <div className='w-3/5 flex flex-col justify-center'>
              <div className='mb-8'>
                <p className='font-manrope text-5xl leading-tight font-medium text-white capitalize'>
                  Percayakan kargo Anda kepada tim kami
                </p>
              </div>

              <div>
                <p className='font-manrope text-white mb-10'>
                  Tim berpengalaman kami memastikan kago Anda ditangani dengan
                  sangat hati-hati, menghadirkan pengiriman yang aman dan tepat
                  waktu di setiap tahap prosesnya.
                </p>
              </div>

              <div>
                <CTAButton text='Konsultasi Gratis' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
