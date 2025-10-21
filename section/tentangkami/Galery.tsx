import Image from 'next/image';

import air from '@/public/img/air.webp';

export default function GallerySection() {
  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto mb-20 md:mb-24 px-6 xl:px-0'>
          <div className='flex items-center gap-2 mb-3'>
            <span className='relative flex size-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
              <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
            </span>
            <p className='text-sm font-medium text-primary uppercase font-manrope'>
              galeri
            </p>
          </div>

          <div className='flex justify-between flex-col md:flex-row gap-6 md:gap-0 mb-12'>
            <h1 className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary'>
              <span className='text-secondary'>Perjalanan</span> Logistik Kami
            </h1>
            <p className='text-primary font-manrope md:w-2/5'>
              Mengantarkan Anda menyusuri perjalanan armada kami, di mana setiap
              langkah dikelola dengan presisi, kecepatan, dan keandalan,
              memastikan pengiriman tepat waktu dan logistik tanpa hambatan dari
              awal hingga akhir.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
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
