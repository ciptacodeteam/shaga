'use client';

import Image from 'next/image';

import { useState } from 'react';

export default function WorkProcess() {
  const steps = [
    {
      number: '01',
      title: 'Konsultasi Mendalam',
      description:
        'Penilaian strategis terhadap kebutuhan logistik Anda guna menghadirkan solusi yang optimal dan sesuai dengan tujuan bisnis Anda.',
      icon: '/img/1active.webp',
    },
    {
      number: '02',
      title: 'Perencanaan Strategis',
      description:
        'Menyusun strategi terpadu guna menjamin proses pengiriman barang yang efektif, efisien, dan tepat waktu.',
      icon: '/img/2active.webp',
    },
    {
      number: '03',
      title: 'Eksekusi Efisien',
      description:
        'Mengoordinasikan setiap detail proses pengiriman dengan cermat untuk memastikan pelaksanaan yang lancar dan tepat waktu.',
      icon: '/img/3active.webp',
    },
    {
      number: '04',
      title: 'Pengiriman Tepat Waktu',
      description:
        'Pendekatan mendalam terhadap kebutuhan logistik Anda guna menghadirkan solusi yang paling efektif dan andal.',
      icon: '/img/4active.webp',
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto px-4 mb-12'>
          <div className='flex items-center gap-2 mb-3'>
            <span className='relative flex size-3'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75'></span>
              <span className='relative inline-flex size-3 rounded-full bg-secondary'></span>
            </span>
            <p className='text-sm font-medium text-primary uppercase font-manrope'>
              proses kerja
            </p>
          </div>

          <div className='mb-6'>
            <p className='font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-primary'>
              <span className='text-secondary'>Proses Teruji</span> Kami untuk
              Meraih Keunggulan
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-8 md:gap-16'>
            <div className='w-full md:w-1/2'>
              <p className='text-[#2A437C] font-manrope mb-6'>
                Proses kami sederhana namun efektif. Setiap proyek memang
                berbeda, tetapi kami telah menangani ribuan proyek sejak pertama
                kali berdiri. Pengalaman kami adalah aset berharga bagi Anda.
              </p>

              <div className='mt-8 md:mt-16'>
                <Image
                  src={activeStep.icon}
                  alt={activeStep.title}
                  width={1000}
                  height={300}
                  className='bg-[#E0E6F3] w-full h-auto rounded-xl'
                />
              </div>
            </div>

            <div className='w-full md:w-1/2 space-y-6'>
              {steps.map((step) => (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStep(step)}
                  onClick={() => setActiveStep(step)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveStep(step);
                  }}
                  role='button'
                  tabIndex={0}
                  className={`cursor-pointer group py-4 relative focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg px-2 ${
                    activeStep.number === step.number ? 'bg-white/5' : ''
                  }`}
                >
                  {/* Garis atas */}
                  <span
                    className={`absolute left-0 top-0 w-full h-[1px] bg-[#E0E6F3] transition-all origin-left ${
                      activeStep.number === step.number
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>

                  {/* Garis bawah */}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[1px] bg-[#E0E6F3] transition-all origin-left ${
                      activeStep.number === step.number
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  ></span>

                  <div className='flex items-start gap-6 md:gap-10'>
                    {/* Kolom angka dengan lebar tetap */}
                    <div className='flex-shrink-0 w-12 md:w-20 flex justify-start'>
                      <span className='text-3xl md:text-7xl font-medium font-manrope leading-none text-[#B4BED5]'>
                        {step.number}
                      </span>
                    </div>

                    {/* Kolom teks */}
                    <div>
                      <h3 className='text-primary font-medium text-lg md:text-2xl font-manrope mb-1 md:mb-2'>
                        {step.title}
                      </h3>
                      <p className='text-[#2A437C] font-manrope text-sm md:text-base'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
