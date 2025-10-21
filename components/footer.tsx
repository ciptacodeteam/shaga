import logowhite from '@/public/svg/logowhite.svg';

import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function FooterSection() {
  return (
    <>
      <section>
        <div className='bg-primary'>
          <div className='max-w-7xl mx-auto pt-12 md:pt-20 pb-8 px-4 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-start md:items-center'>
              <div>
                <Image src={logowhite} alt='' className='w-48 md:w-60' />
              </div>
              <div className='text-right'>
                <h1 className='font-manrope text-2xl md:text-4xl text-white font-medium text-right max-w-lg leading-tight'>
                  Masa Depan Pengiriman di Perkotaan Dimulai Dari Sini
                </h1>
              </div>
            </div>

            <div className='mt-12 md:mt-24'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h1 className='font-manrope text-white text-2xl font-medium'>
                    Tetap Terhubung Dengan Kami
                  </h1>

                  <p className='font-manrope text-[#EEEEEE] mt-6 md:mt-10 max-w-lg'>
                    Bergabunglah dengan komunitas kami untuk mendapatkan wawasan
                    eksklusif dan solusi inovatif untuk semua kebutuhan logistik
                    Anda.
                  </p>

                  <div className='mt-8 md:mt-12'>
                    <Link
                      href='/kontak'
                      className='group inline-flex items-center bg-white rounded-full px-3 py-2 transition-all duration-300 w-fit'
                    >
                      <span className='text-primary font-manrope mr-3 transition-all duration-300 group-hover:translate-x-1'>
                        Mulai Kirim Sekarang
                      </span>

                      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45'>
                        <IoIosArrowRoundForward className='text-white w-5 h-5 transition-colors duration-300' />
                      </div>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12'>
                    <div>
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        Perusahaan
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Beranda
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Tentang kami
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Layanan
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Kontak
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        Dukungan
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          FAQ
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Layanan Pelanggan
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Pelacakan
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h1 className='font-manrope text-white text-xl md:text-2xl font-semibold mb-6 md:mb-10'>
                        Layanan
                      </h1>

                      <div className='flex flex-col space-y-4 text-sm md:text-base'>
                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Darat
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Udara
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Laut
                        </Link>

                        <Link href={''} className='font-manrope text-[#EEEEEE]'>
                          Kereta
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-[0.5px] bg-[#bdbdbd] mt-12 md:mt-16' />

            <div className='text-center'>
              <p className='font-manrope text-white text-sm mt-8'>
                {' '}
                ©{new Date().getFullYear()} Shaga. All Rights Reserved. Designed
                & Developed by{' '}
                <span>
                  <Link href={''}>Ciptacode</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
