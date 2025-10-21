import CTAButton from '@/components/CTAButton';

export default function TransformSection() {
  return (
    <>
      <section>
        <div className="relative bg-[url('/img/mountain.webp')] bg-no-repeat bg-cover w-full py-20 md:py-36">
          {/* Gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#001E62] to-transparent'></div>

          {/* Content */}
          <div className='relative max-w-7xl mx-auto px-4'>
            <div>
              <p className='text-white font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-tight w-full md:w-5/6'>
                Kami menghadirkan inovasi strategis dalam logistik untuk
                mendukung pertumbuhan pasar yang berkelanjutan.
              </p>
            </div>

            <div className='mt-8 md:mt-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0'>
              <p className='font-manrope text-white text-sm md:text-base w-full md:w-3/5 leading-relaxed'>
                Mentransformasi logistik dengan solusi inovatif melalui
                pemanfaatan teknologi canggih dan strategi berbasis data untuk
                meningkatkan efisiensi, menekan biaya, serta memenuhi permintaan
                pasar yang terus berkembang.
              </p>

              <div className='w-full md:w-auto flex md:block mt-4 md:mt-0'>
                <CTAButton
                  text={'Pelajari Lebih Lanjut'}
                  size='md'
                  className='text-sm'
                  variant='outline-white'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
